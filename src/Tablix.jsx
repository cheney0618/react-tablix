import React from 'react';
import PropTypes from 'prop-types';

import uuid from './utils/uuid';

// 聚合函数类型
const AGGREGATE_TYPE = {
    AVG: 'avg',
    SUM: 'sum',
    MAX: 'max',
    MIN: 'min',
    FIRST: 'first',
    LAST: 'last',
    COUNT: 'count',
};

class Tablix extends React.Component {
    static AGGREGATE_TYPE = AGGREGATE_TYPE;

    static propTypes = {
        rowGroup: PropTypes.object.isRequired,
        columns: PropTypes.array.isRequired,
        data: PropTypes.array.isRequired,
        style: PropTypes.object,
        className: PropTypes.string,
        transported: PropTypes.bool,
    };

    /**
     * 获取表头层级数据
     */
    getHeaderHierarchy() {
        const { columns, data } = this.props;

        // 生成分组头数据
        const gc = group => {
            let gs = [];
            const { by, columns, sort, ...resetGroup } = group;
            let dd = data;
            if (typeof sort == 'function') {
                dd = dd.sort(sort);
            }
            dd.forEach(d => {
                let k = `${d[by]}`;
                if (!gs.includes(k)) {
                    gs.push(k);
                }
            });

            if (columns) {
                return gs.map(name => ({
                    name,
                    by,
                    columns: cc(columns),
                    ...resetGroup
                }));
            }
            else {
                return gs.map(name => ({ name, by, ...resetGroup }));
            }
        }

        // 生成数据列头
        const cc = columns => {
            let cols = [];
            for (let i = 0; i < columns.length; i++) {
                let col = columns[i];
                if (col.group) {
                    cols = cols.concat(gc(col.group));
                }
                else if (col.columns) {
                    cols.push({ ...col, columns: cc(col.columns) });
                }
                else {
                    cols.push(col);
                }
            }
            return cols;
        }

        let ec = [];
        columns.forEach((col, ci) => {
            if (!col.group && (col.columns || []).length == 0) {
                ec.push(col);
                return;
            }
            if (col.group) {
                ec = ec.concat(gc(col.group));
                return;
            }
            if (col.columns) {
                ec.push({ ...col, columns: cc(col.columns) });
            }
        });

        // 生成单元格合并数
        const buildColSpan = (columns) => {
            // let cc = 0;
            let cc = columns.filter(t => !t.columns).length;
            for (let i = 0; i < columns.length; i++) {
                let col = columns[i];
                if (col.columns) {
                    col.colSpan = buildColSpan(col.columns);
                    cc += col.columns.length;
                }
            }
            return cc;
            // return cc == 0 ? columns.length : cc;
        }

        buildColSpan(ec);
        return ec;
    }

    /**
     * 获取数据列定义
     */
    getColumns() {
        const wh = (columns, w) => {
            for (let i = 0; i < columns.length; i++) {
                const col = columns[i];
                if (col.columns) {
                    let ww = [...w];
                    if (col.field || col.by) {
                        ww = w.concat({ field: col.by ? col.by : col.field, name: col.name });
                    }
                    wh(col.columns, ww);
                }
                else {
                    cols.push({ ...col, where: col.by ? w.concat([{ field: col.by, name: col.name }]) : w });
                }
            }
        }

        let ec = this.getHeaderHierarchy();
        let cols = [];
        for (let i = 0; i < ec.length; i++) {
            const col = ec[i];
            if (col.columns) {
                let w = [];
                if (col.field || col.by) {
                    w = [{ field: col.by ? col.by : col.field, name: col.name }];
                }
                wh(col.columns, w);
            }
            else {
                cols.push({ ...col, where: col.by ? [{ field: col.by, name: col.name }] : [] });
            }
        }
        return cols;
    }

    /**
     * 获取行组层次
     */
    getRowHierarchy() {
        const { rowGroup, data } = this.props;
        if (!rowGroup) {
            return null;
        }

        const buildHierarchy = (g, wh) => {
            const { by, group, sort, style, className } = g;
            let dd = data;
            wh.forEach(w => {
                dd = dd.filter(t => t[w.field] == w.name);
            });

            if (typeof sort == 'function') {
                dd = dd.sort(sort);
            }

            let gs = [];
            dd.forEach(t => {
                if (!gs.includes(t[by])) {
                    gs.push(t[by]);
                }
            });

            return gs.map(name => {
                let g = {
                    by,
                    name,
                    style,
                    className,
                    where: wh.concat([{ field: by, name }])
                };
                if (group) {
                    g.members = buildHierarchy(group, wh.concat([{ field: by, name }]));
                }

                return g;
            });
        }

        let rows = buildHierarchy(rowGroup, []);

        // 生成行合并量
        const buildRowSpan = (members) => {
            let mc = 0;
            for (let i = 0; i < members.length; i++) {
                let mem = members[i];
                if (mem.members) {
                    mem.rowSpan = buildRowSpan(mem.members);
                    mc += mem.members.length;
                }
            }

            return mc == 0 ? members.length : mc;
        }

        buildRowSpan(rows);
        return rows;
    }

    /**
     * 获取表（从行数据转置）
     */
    getColumnsFromRow = () => {
        const wh = (members, w) => {
            for (let i = 0; i < members.length; i++) {
                const col = members[i];
                if (col.members) {
                    let ww = [...w];
                    if (col.field || col.by) {
                        ww = w.concat({ field: col.by ? col.by : col.field, name: col.name });
                    }
                    wh(col.members, ww);
                }
                else {
                    cols.push({ ...col, where: col.by ? w.concat([{ field: col.by, name: col.name }]) : w });
                }
            }
        }

        let ec = this.getRowHierarchy();
        let cols = [];
        for (let i = 0; i < ec.length; i++) {
            const col = ec[i];
            if (col.members) {
                let w = [];
                if (col.field || col.by) {
                    w = [{ field: col.by ? col.by : col.field, name: col.name }];
                }
                wh(col.members, w);
            }
            else {
                cols.push({ ...col, where: col.by ? [{ field: col.by, name: col.name }] : [] });
            }
        }
        console.log('nc==>', cols);
        return cols;
    }

    /**
     * 获取行定义
     */
    getRows() {
        let rows = [];
        const rwh = (members, rowSpan, level) => {
            for (let i = 0; i < members.length; i++) {
                const mem = members[i];
                if (mem.members) {
                    let rs = { [level + 1]: mem.rowSpan || 1 };
                    if (i == 0) {
                        rs = {
                            ...rowSpan,
                            ...rs,
                        }
                    }
                    rwh(mem.members, rs, level + 1);
                }
                else {
                    let r = { ...mem };
                    if (i == 0) {
                        r.rowSpan = rowSpan;
                    }
                    rows.push(r);
                }
            }
        }

        let rh = this.getRowHierarchy();
        for (let i = 0; i < rh.length; i++) {
            const mem = rh[i];
            if (mem.members) {
                let rs = {};
                if (i == 0) {  // 实现行合并
                    rs = { 0: mem.rowSpan };
                }
                rwh(mem.members, rs, 0);
            }
            else {
                rows.push(mem);
            }
        }
        return rows;
    }

    /**
     * 显示表头
     */
    renderHeader() {

        let cells = {};

        const buildHeader = (columns, level) => {
            let ths = [];
            for (let i = 0; i < columns.length; i++) {
                const col = columns[i];
                if (col.rowSpan !== 0) {
                    let thProps = {
                        key: `${uuid(8, 16)}`,
                        style: col.style,
                        className: col.className,
                    };
                    if (col.rowSpan > 0) {
                        thProps.rowSpan = col.rowSpan;
                    }
                    if (col.colSpan > 0) {
                        thProps.colSpan = col.colSpan;
                    }
                    ths.push(<th {...thProps}>{columns[i].name}</th>);
                }

                if (col.columns) {
                    buildHeader(col.columns, level + 1);
                }
            }
            if (!cells.hasOwnProperty(level)) {
                cells[level] = [];
            }
            cells[level] = cells[level].concat(ths);
        }

        buildHeader(this.getHeaderHierarchy(), 0, 0);

        let rows = [];
        for (let k in cells) {
            rows.push(<tr key={k}>{cells[k]}</tr>);
        }

        return <thead>{rows}</thead>;
    }

    /**
     * 显示行列转置表头
     */
    renderHeaderTansported() {
        const { rowGroup, data } = this.props;
        if (!rowGroup.by) {
            return null;
        }

        let rowRule = this.getRowFromColumn() || [];

        let cells = {};

        const buildHeader = (columns, level) => {
            let ths = [];
            for (let i = 0; i < columns.length; i++) {
                const col = columns[i];
                if (col.rowSpan !== 0) {
                    let thProps = {
                        key: `${uuid(8, 16)}`,
                        className: col.className,
                        style: col.style,
                    };
                    if (col.rowSpan > 0) {
                        thProps.colSpan = col.rowSpan;
                    }
                    if (col.colSpan > 0) {
                        thProps.rowSpan = col.colSpan;
                    }
                    ths.push(<td {...thProps}>{columns[i].name}</td>);
                }

                if (col.members) {
                    buildHeader(col.members, level + 1);
                }
            }
            if (!cells.hasOwnProperty(level)) {
                cells[level] = [];
            }
            cells[level] = cells[level].concat(ths);
        }

        buildHeader(this.getRowHierarchy(), 0, 0);

        let rows = [];
        for (let k in cells) {
            let t = rowRule[k];
            let ths = (t.cells || []).map((t, i) => <th key={i} colSpan={t.colSpan} className={t.className} style={t.style}>{t.name}</th>);
            rows.push(<tr key={k}>{ths}{cells[k]}</tr>);
        }

        return <thead>{rows}</thead>;
    }


    /**
     * 显示表体
     */
    renderBody() {
        const { rowGroup, data } = this.props;
        if (!rowGroup.by) {
            return null;
        }

        let rows = [];
        let RGC = 1;
        const bRGC = g => {
            if (g.group) {
                RGC++;
                bRGC(g.group);
            }
        }
        bRGC(rowGroup);

        let rowRule = this.getRows();
        let columnRule = this.getColumns();

        rowRule.forEach((r, i) => {
            let tds = [];
            let dd = data;
            (r.where || []).forEach(w => {
                dd = dd.filter(t => t[w.field] == w.name);
            });

            columnRule.forEach((c, ci) => {
                const { aggregate, field, render } = c;

                let ddd = dd;
                (c.where || []).forEach(w => {
                    ddd = ddd.filter(t => t[w.field] == w.name);
                });
                let content = '';

                if (ddd.length > 0 && c.field) {
                    let value = null;

                    // 取第一个
                    if (!aggregate || aggregate == AGGREGATE_TYPE.FIRST) {
                        value = ddd[0][field];
                    }
                    if (aggregate) {
                        // 平均值
                        if (aggregate == AGGREGATE_TYPE.AVG) {
                            value = ddd.map(t => t[field]).reduce((p, c) => p + c) / ddd.length;
                        }
                        // 求和
                        else if (aggregate == AGGREGATE_TYPE.SUM) {
                            value = ddd.map(t => t[field]).reduce((p, c) => p + c);
                        }
                        // 计数
                        else if (aggregate == AGGREGATE_TYPE.COUNT) {
                            value = ddd.length;
                        }
                        // 最大值
                        else if (aggregate == AGGREGATE_TYPE.MAX) {
                            value = Math.max.apply(null, ddd.map(t => t[field]));
                        }
                        // 最小值
                        else if (aggregate == AGGREGATE_TYPE.MIN) {
                            value = Math.min.apply(null, ddd.map(t => t[field]));
                        }
                        // 取最后一个
                        else if (aggregate == AGGREGATE_TYPE.LAST) {
                            value = ddd[ddd.length - 1][field];
                        }
                        // 取第一个
                        else {
                            value = ddd[0][field];
                        }
                    }

                    if (render) {
                        content = render(value, ddd[0]);
                    }
                    else {
                        content = value;
                    }

                }

                let tdProps = {
                    key: `${uuid(8, 16)}`,
                };

                if (ci < RGC - 1) {
                    if (r.rowSpan && r.rowSpan[ci]) {
                        tdProps.rowSpan = r.rowSpan[ci];
                    }
                    else {
                        tdProps = null;
                    }
                }

                if (!tdProps) {
                    return;
                }

                tds.push(<td {...tdProps} >{content}</td>);
            });

            rows.push(<tr key={i}>{tds}</tr>);
        });

        return <tbody>{rows}</tbody>;
    }

    /**
     * 获取行（从列定义转置）
     */
    getRowFromColumn = () => {
        let rows = [];

        const rwh = (columns, rowSpan2, level, cells, w) => {
            for (let i = 0; i < columns.length; i++) {
                const col = columns[i];
                const { rowSpan, colSpan, ...resetCol } = col;
                let nas = [
                    {
                        rowSpan: colSpan,
                        colSpan: rowSpan,
                        ...resetCol,
                    }
                ];
                if (i == 0) {
                    nas = [...cells].concat(nas);
                }

                if (col.columns) {
                    let rs = { [level + 1]: col.colSpan || 1 };
                    if (i == 0) {
                        rs = {
                            ...rowSpan2,
                            ...rs,
                        }
                    }

                    let ww = [...w];
                    if (col.field || col.by) {
                        ww = w.concat({ field: col.by ? col.by : col.field, name: col.name });
                    }

                    rwh(col.columns, rs, level + 1, nas, ww);
                }
                else {
                    const { colSpan, rowSpan: rsc, ...resetCol } = col;
                    let r = { ...resetCol, cells: nas, colSpan: rsc || 1, where: col.by ? w.concat([{ field: col.by, name: col.name }]) : w };
                    if (i == 0) {
                        r.rowSpan2 = rowSpan2;
                    }
                    rows.push(r);
                }
            }
        }

        let rh = this.getHeaderHierarchy();
        for (let i = 0; i < rh.length; i++) {
            const col = rh[i];
            const { rowSpan, colSpan, ...resetCol } = col;
            let cells = [{
                rowSpan: colSpan,
                colSpan: rowSpan,
                ...resetCol,
            }];
            if (col.columns) {
                let rs = {};
                if (i == 0) {  // 实现行合并
                    rs = { 0: cols.colSpan || 1 };
                }

                let w = [];
                if (col.field || col.by) {
                    w = [{ field: col.by ? col.by : col.field, name: col.name }];
                }

                rwh(col.columns, rs, 0, cells, w);
            }
            else {
                rows.push({ ...resetCol, rowSpan: colSpan, colSpan: rowSpan, cells, where: col.by ? [{ field: col.by, name: col.name }] : [] });
            }
        }
        return rows;
    }

    /** 显示行列转置的表格 */
    renderBodyTransported() {
        const { rowGroup, data } = this.props;
        if (!rowGroup.by) {
            return null;
        }

        let rows = [];
        let RGC = 1;
        const bRGC = g => {
            if (g.group) {
                RGC++;
                bRGC(g.group);
            }
        }
        bRGC(rowGroup);

        let rowRule = this.getRowFromColumn();
        let columnRule = this.getColumnsFromRow();

        rowRule.forEach((r, i) => {
            if (i < RGC) {
                return;
            }

            let tds = [];
            let dd = data;
            (r.where || []).forEach(w => {
                dd = dd.filter(t => t[w.field] == w.name);
            });

            const { aggregate, field, render } = r;

            columnRule.forEach((c, ci) => {
                let ddd = dd;
                (c.where || []).forEach(w => {
                    ddd = ddd.filter(t => t[w.field] == w.name);
                });
                let content = '';

                if (ddd.length > 0 && field) {
                    let value = null;

                    // 取第一个
                    if (!aggregate || aggregate == AGGREGATE_TYPE.FIRST) {
                        value = ddd[0][field];
                    }
                    if (aggregate) {
                        // 平均值
                        if (aggregate == AGGREGATE_TYPE.AVG) {
                            value = ddd.map(t => t[field]).reduce((p, c) => p + c) / ddd.length;
                        }
                        // 求和
                        else if (aggregate == AGGREGATE_TYPE.SUM) {
                            value = ddd.map(t => t[field]).reduce((p, c) => p + c);
                        }
                        // 计数
                        else if (aggregate == AGGREGATE_TYPE.COUNT) {
                            value = ddd.length;
                        }
                        // 最大值
                        else if (aggregate == AGGREGATE_TYPE.MAX) {
                            value = Math.max.apply(null, ddd.map(t => t[field]));
                        }
                        // 最小值
                        else if (aggregate == AGGREGATE_TYPE.MIN) {
                            value = Math.min.apply(null, ddd.map(t => t[field]));
                        }
                        // 取最后一个
                        else if (aggregate == AGGREGATE_TYPE.LAST) {
                            value = ddd[ddd.length - 1][field];
                        }
                        // 取第一个
                        else {
                            value = ddd[0][field];
                        }
                    }

                    if (render) {
                        content = render(value, ddd[0]);
                    }
                    else {
                        content = value;
                    }

                }

                let tdProps = {
                    key: `${uuid(8, 16)}`,
                };

                tds.push(<td {...tdProps} >{content}</td>);
            });

            let rw = r.cells.map((tt, ii) =>
                <th key={ii}
                    rowSpan={tt.rowSpan || 1}
                    colSpan={tt.colSpan || 1}
                    className={tt.className}
                    style={tt.style}
                >
                    {tt.name}
                </th>
            );

            rows.push(<tr key={i}>{rw}{tds}</tr>);
        });

        return <tbody>{rows}</tbody>;
    }



    render() {
        const { style, className, transported } = this.props;
        return (
            <table style={style} className={`react-tablix ${className || ''}`}>
                {transported ? this.renderHeaderTansported() : this.renderHeader()}
                {transported ? this.renderBodyTransported() : this.renderBody()}
            </table>
        );
    }
}

module.exports = Tablix;

