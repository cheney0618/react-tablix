import React from 'react';
import ReactDOM from 'react-dom';
import Tablix from '../dist/react.tablix.js';

let tp = {
    rowGroup: {
        by: 'schoolID',
        value: 'school',
        render: v=><span style={{color: '#f00'}}>{v}</span>,
        // filter: dataSet => dataSet.filter(t => t.school != '我的学校'),
        // style: { color: '#fff', backgroundColor: '#f00' },
        group: {
            by: 'grade',
            sort: (a, b) => b.gradeID - a.gradeID,
            group: {
                by: 'schoolClass',
                rowStyle: w => {
                    let k = w.find(t => t.name == '二班');
                    if (k) {
                        return { backgroundColor: '#f00' };
                    }
                    return {};
                },
            }
        }
    },
    columns: [
        {
            field: 'school',
            name: '学校',
            rowSpan: 3,
            // style: { color: '#0f0' }
        },
        {
            field: 'grade',
            name: '年级',
            rowSpan: 3,
            render: (value, rowData) => <span style={{ color: rowData.scID > 2 ? '#f00' : '#00f' }}>{value}</span>,
        },
        {
            field: 'schoolClass',
            name: '班级',
            rowSpan: 3,
        },
        {
            group: {
                by: 'gradeYear',
                // name: 'GGGG',
                sort: (a, b) => a.gid - b.gid,
                // filter: (dataSet, w) => {
                //     let kk = [...dataSet];
                //     return kk.filter(t => t.gradeYear == 2017);
                // },
                columns: [
                    {
                        group: {
                            by: 'course',
                            sort: (a, b) => b.cid - a.cid,
                            filter: (ds, wh) => {
                                let kk = [...ds];
                                if (wh instanceof Array) {
                                    wh.forEach(w => {
                                        kk = kk.filter(t => t[w.field] == w.value);
                                    });
                                }

                                return kk;
                            },
                            columns: [
                                {
                                    field: 'score',
                                    name: '平均分',
                                    aggregate: Tablix.AGGREGATE_TYPE.AVG,
                                    render: (value, rowData) => {
                                        let sp = {};
                                        if (value < 80) {
                                            sp.style = { color: '#f00' };
                                        }

                                        return <div {...sp}>{value.toFixed(2)}</div>;
                                    },
                                    hide: where => {
                                        let k = {};
                                        where.forEach(t => {
                                            k[t.field] = t.value;
                                        });
                                        return k['course'] == '语文';
                                    }
                                },
                                {
                                    field: 'std',
                                    name: '标准分',
                                    aggregate: Tablix.AGGREGATE_TYPE.AVG,
                                    // style: { color: '#00f', width: '100px' },
                                    className: 'center',
                                    textStyle: {
                                        color: '#f00',
                                        textAlign: 'left'
                                    },
                                    render: (value, rowData) => value.toFixed(2)
                                }
                            ],
                        },
                    },

                ]
            },
        },
        {
            name: 'HAHA',
            columns: [
                {
                    group: {
                        by: 'course',
                        rowSpan: 2,
                        field: 'score',
                    }
                },
                {
                    name: 'TT',
                    columns: [
                        {
                            field: 'std',
                            name: '标准分',
                            aggregate: Tablix.AGGREGATE_TYPE.AVG,
                            style: { color: '#00f' },
                            className: 'center',
                            render: (value, rowData) => value.toFixed(2)
                        },
                        {
                            field: 'std',
                            name: '标准分',
                            aggregate: Tablix.AGGREGATE_TYPE.AVG,
                            style: { color: '#00f' },
                            className: 'center',
                            render: (value, rowData) => value.toFixed(2)
                        }
                    ]
                }
            ]
        },
        {
            group: {
                by: 'course',
                rowSpan: 3,
                field: 'score',
            }
        },
        {
            field: 'teacher',
            name: '任课教师',
            rowSpan: 3,
        },
    ],
    data: [
        {
            id: 1,
            school: '我的学校',
            schoolID: 1,
            grade: '2019级',
            gradeID: 1,
            schoolClass: '一班',
            scID: 1,
            course: '语文',
            cid: 1,
            score: 100,
            std: 1.1657564,
            teacher: '张洋',
            gradeYear: 2017,
            gid: 1,
        },
        {
            id: 77,
            school: '我的学校',
            schoolID: 1,
            grade: '2019级',
            gradeID: 1,
            schoolClass: '一班',
            scID: 1,
            course: '语文',
            cid: 1,
            score: 50,
            std: 1.1657564,
            teacher: '张洋',
            gradeYear: 2017,
            gid: 1,
        },
        {
            id: 2,
            school: '我的学校',
            schoolID: 1,
            grade: '2019级',
            gradeID: 1,
            schoolClass: '一班',
            scID: 1,
            course: '语文',
            cid: 1,
            score: 86,
            std: 1.3,
            teacher: '张张',
            gradeYear: 2018,
            gid: 2,
        },
        {
            id: 3,
            school: '我的学校',
            schoolID: 1,
            grade: '2019级',
            gradeID: 1,
            schoolClass: '一班',
            scID: 1,
            course: '数学',
            cid: 2,
            score: 78,
            std: 1.2,
            teacher: '冯大毛',
            gradeYear: 2017,
            gid: 1,
        },
        {
            id: 4,
            school: '我的学校',
            schoolID: 1,
            grade: '2019级',
            gradeID: 1,
            schoolClass: '二班',
            scID: 2,
            course: '语文',
            cid: 1,
            score: 92,
            std: 2.1,
            teacher: '张洋',
            gradeYear: 2017,
            gid: 1,
        },
        {
            id: 5,
            school: '我的学校',
            schoolID: 1,
            grade: '2019级',
            gradeID: 1,
            schoolClass: '二班',
            scID: 2,
            course: '数学',
            cid: 2,
            score: 98,
            std: 1.5,
            teacher: '李四',
            gradeYear: 2017,
            gid: 1,
        },
        {
            id: 6,
            school: '我的学校',
            schoolID: 1,
            grade: '2018级',
            gradeID: 2,
            schoolClass: '一班',
            scID: 3,
            course: '语文',
            cid: 1,
            score: 85,
            std: 2.1,
            teacher: '刘伟',
            gradeYear: 2017,
            gid: 1,
        },
        {
            id: 7,
            school: '他的学校',
            schoolID: 2,
            grade: '2018级',
            gradeID: 2,
            schoolClass: '一班',
            scID: 13,
            course: '语文',
            cid: 1,
            score: 85,
            std: 2.1,
            teacher: '刘伟',
            gradeYear: 2017,
            gid: 1,
        },
        {
            id: 8,
            school: '他的学校',
            schoolID: 2,
            grade: '2019级',
            gradeID: 2,
            schoolClass: '一班',
            scID: 13,
            course: '语文',
            cid: 1,
            score: 85,
            std: 2.1,
            teacher: '刘伟',
            gradeYear: 2017,
            gid: 1,
        },
    ]
};


let lp2 = {
    rowGroup: {
        by: 'rid',
    },
    columns: [
        {
            group: {
                by: 'cid',
                columns: [
                    {
                        field: 'value',
                        name: 'value'
                    }
                ]
            }
        }
    ],
    data: [
        {
            rid: 1,
            cid: 1,
            value: '1-1'
        },
        {
            rid: 1,
            cid: 2,
            value: '1-2'
        },
        {
            rid: 1,
            cid: 4,
            value: '1-4'
        },
        {
            rid: 2,
            cid: 3,
            value: '2-3'
        },
        {
            rid: 2,
            cid: 3,
            value: '2-3'
        }
    ]
};

ReactDOM.render(
    <div>
        <h3>normal</h3>
        <Tablix {...tp} />
        <h3>row column transported</h3>
        {
            <Tablix {...tp} transported />
        }
    </div>
    , document.getElementById('root'));
