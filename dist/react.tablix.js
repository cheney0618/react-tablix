(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["ReactTablix"] = factory(require("prop-types"), require("react"));
	else
		root["ReactTablix"] = factory(root["prop-types"], root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Tablix.jsx":
/*!************************!*\
  !*** ./src/Tablix.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _uuid = __webpack_require__(/*! ./utils/uuid */ \"./src/utils/uuid.js\");\n\nvar _uuid2 = _interopRequireDefault(_uuid);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// 聚合函数类型\nvar AGGREGATE_TYPE = {\n    AVG: 'avg',\n    SUM: 'sum',\n    MAX: 'max',\n    MIN: 'min',\n    FIRST: 'first',\n    LAST: 'last',\n    COUNT: 'count'\n};\n\nvar Tablix = function (_React$Component) {\n    _inherits(Tablix, _React$Component);\n\n    function Tablix() {\n        _classCallCheck(this, Tablix);\n\n        return _possibleConstructorReturn(this, (Tablix.__proto__ || Object.getPrototypeOf(Tablix)).apply(this, arguments));\n    }\n\n    _createClass(Tablix, [{\n        key: 'getHeaderHierarchy',\n\n\n        /**\n         * 获取表头层级数据\n         */\n        value: function getHeaderHierarchy() {\n            var _props = this.props,\n                columns = _props.columns,\n                data = _props.data;\n\n            // 生成分组头数据\n\n            var gc = function gc(group) {\n                var gs = [];\n                var field = group.field,\n                    columns = group.columns,\n                    sort = group.sort;\n\n                var dd = data;\n                if (typeof sort == 'function') {\n                    dd = dd.sort(sort);\n                }\n                dd.forEach(function (d) {\n                    var k = d[field];\n                    if (!gs.includes(k)) {\n                        gs.push(k);\n                    }\n                });\n\n                if (columns) {\n                    return gs.map(function (name) {\n                        return {\n                            name: name,\n                            field: field,\n                            columns: cc(columns)\n                        };\n                    });\n                } else {\n                    return gs.map(function (name) {\n                        return { name: name, field: field };\n                    });\n                }\n            };\n\n            // 生成数据列头\n            var cc = function cc(columns) {\n                var cols = [];\n                for (var i = 0; i < columns.length; i++) {\n                    var col = columns[i];\n                    if (col.group) {\n                        cols = cols.concat(gc(col.group));\n                    } else if (col.columns) {\n                        cols.push(_extends({}, col, { columns: cc(col.columns) }));\n                    } else {\n                        cols.push(col);\n                    }\n                }\n                return cols;\n            };\n\n            var ec = [];\n            columns.forEach(function (col, ci) {\n                if (!col.group && (col.columns || []).length == 0) {\n                    ec.push(col);\n                    return;\n                }\n                if (col.group) {\n                    ec = ec.concat(gc(col.group));\n                    return;\n                }\n                if (col.columns) {\n                    ec.push(_extends({}, col, { columns: cc(col.columns) }));\n                }\n            });\n\n            // 生成单元格合并数\n            var buildColSpan = function buildColSpan(columns) {\n                var cc = 0;\n                for (var i = 0; i < columns.length; i++) {\n                    var col = columns[i];\n                    if (col.columns) {\n                        col.colSpan = buildColSpan(col.columns);\n                        cc += col.columns.length;\n                    }\n                }\n\n                return cc == 0 ? columns.length : cc;\n            };\n\n            buildColSpan(ec);\n\n            return ec;\n        }\n\n        /**\n         * 获取数据列定义\n         */\n\n    }, {\n        key: 'getColumns',\n        value: function getColumns() {\n            var wh = function wh(columns, w) {\n                for (var i = 0; i < columns.length; i++) {\n                    var col = columns[i];\n                    if (col.columns) {\n                        wh(col.columns, w.concat([{ field: col.field, name: col.name }]));\n                    } else {\n                        cols.push(_extends({}, col, { where: w }));\n                    }\n                }\n            };\n\n            var ec = this.getHeaderHierarchy();\n            var cols = [];\n            for (var i = 0; i < ec.length; i++) {\n                var col = ec[i];\n                if (col.columns) {\n                    var w = [];\n                    if (col.field) {\n                        w = [{ field: col.field, name: col.name }];\n                    }\n                    wh(col.columns, w);\n                } else {\n                    cols.push(col);\n                }\n            }\n\n            return cols;\n        }\n\n        /**\n         * 获取行组层次\n         */\n\n    }, {\n        key: 'getRowHierarchy',\n        value: function getRowHierarchy() {\n            var _props2 = this.props,\n                rowGroup = _props2.rowGroup,\n                data = _props2.data;\n\n            if (!rowGroup) {\n                return null;\n            }\n\n            var buildHierarchy = function buildHierarchy(g, wh) {\n                var field = g.field,\n                    group = g.group,\n                    sort = g.sort;\n\n                var dd = data;\n                wh.forEach(function (w) {\n                    dd = dd.filter(function (t) {\n                        return t[w.field] == w.name;\n                    });\n                });\n\n                if (typeof sort == 'function') {\n                    dd = dd.sort(sort);\n                }\n\n                var gs = [];\n                dd.forEach(function (t) {\n                    if (!gs.includes(t[field])) {\n                        gs.push(t[field]);\n                    }\n                });\n\n                return gs.map(function (name) {\n                    var g = {\n                        field: field,\n                        name: name,\n                        where: wh.concat([{ field: field, name: name }])\n                    };\n                    if (group) {\n                        g.members = buildHierarchy(group, wh.concat([{ field: field, name: name }]));\n                    }\n\n                    return g;\n                });\n            };\n\n            var rows = buildHierarchy(rowGroup, []);\n\n            // 生成行合并量\n            var buildRowSpan = function buildRowSpan(members) {\n                var mc = 0;\n                for (var i = 0; i < members.length; i++) {\n                    var mem = members[i];\n                    if (mem.members) {\n                        mem.rowSpan = buildRowSpan(mem.members);\n                        mc += mem.members.length;\n                    }\n                }\n\n                return mc == 0 ? members.length : mc;\n            };\n\n            buildRowSpan(rows);\n\n            return rows;\n        }\n\n        /**\n         * 获取行定义\n         */\n\n    }, {\n        key: 'getRows',\n        value: function getRows() {\n            var rows = [];\n            var rwh = function rwh(members, rowSpan, level) {\n                for (var i = 0; i < members.length; i++) {\n                    var mem = members[i];\n                    if (mem.members) {\n                        var rs = _defineProperty({}, level + 1, mem.rowSpan || 1);\n                        if (i == 0) {\n                            rs = _extends({}, rowSpan, rs);\n                        }\n                        rwh(mem.members, rs, level + 1);\n                    } else {\n                        var r = _extends({}, mem);\n                        if (i == 0) {\n                            r.rowSpan = rowSpan;\n                        }\n                        rows.push(r);\n                    }\n                }\n            };\n\n            var rh = this.getRowHierarchy();\n            for (var i = 0; i < rh.length; i++) {\n                var mem = rh[i];\n                if (mem.members) {\n                    var rs = {};\n                    if (i == 0) {\n                        rs = { 0: mem.rowSpan };\n                    }\n                    rwh(mem.members, rs, 0);\n                } else {\n                    rows.push(mem);\n                }\n            }\n\n            return rows;\n        }\n\n        /**\n         * 显示表头\n         */\n\n    }, {\n        key: 'renderHeader',\n        value: function renderHeader() {\n\n            var cells = {};\n\n            var buildHeader = function buildHeader(columns, level) {\n                var ths = [];\n                for (var i = 0; i < columns.length; i++) {\n                    var col = columns[i];\n                    if (col.rowSpan !== 0) {\n                        var thProps = {\n                            key: '' + (0, _uuid2.default)(8, 16)\n                        };\n                        if (col.rowSpan > 0) {\n                            thProps.rowSpan = col.rowSpan;\n                        }\n                        if (col.colSpan > 0) {\n                            thProps.colSpan = col.colSpan;\n                        }\n                        ths.push(_react2.default.createElement(\n                            'th',\n                            thProps,\n                            columns[i].name\n                        ));\n                    }\n\n                    if (col.columns) {\n                        buildHeader(col.columns, level + 1);\n                    }\n                }\n                if (!cells.hasOwnProperty(level)) {\n                    cells[level] = [];\n                }\n                cells[level] = cells[level].concat(ths);\n            };\n\n            buildHeader(this.getHeaderHierarchy(), 0, 0);\n\n            var rows = [];\n            for (var k in cells) {\n                rows.push(_react2.default.createElement(\n                    'tr',\n                    { key: k },\n                    cells[k]\n                ));\n            }\n\n            return _react2.default.createElement(\n                'thead',\n                null,\n                rows\n            );\n        }\n\n        /**\n         * 显示表体\n         */\n\n    }, {\n        key: 'renderBody',\n        value: function renderBody() {\n            var _props3 = this.props,\n                rowGroup = _props3.rowGroup,\n                data = _props3.data;\n\n            if (!rowGroup.field) {\n                return null;\n            }\n\n            var rows = [];\n            var RGC = 1;\n            var bRGC = function bRGC(g) {\n                if (g.group) {\n                    RGC++;\n                    bRGC(g.group);\n                }\n            };\n            bRGC(rowGroup);\n\n            var rowRule = this.getRows();\n            var columnRule = this.getColumns();\n\n            rowRule.forEach(function (r, i) {\n                var tds = [];\n                var dd = data;\n                (r.where || []).forEach(function (w) {\n                    dd = dd.filter(function (t) {\n                        return t[w.field] == w.name;\n                    });\n                });\n\n                columnRule.forEach(function (c, ci) {\n                    var aggregate = c.aggregate,\n                        field = c.field,\n                        render = c.render;\n\n\n                    var ddd = dd;\n                    (c.where || []).forEach(function (w) {\n                        ddd = ddd.filter(function (t) {\n                            return t[w.field] == w.name;\n                        });\n                    });\n                    var content = '';\n\n                    if (ddd.length > 0 && c.field) {\n                        var value = null;\n\n                        // 取第一个\n                        if (!aggregate || aggregate == AGGREGATE_TYPE.FIRST) {\n                            value = ddd[0][field];\n                        }\n                        if (aggregate) {\n                            // 平均值\n                            if (aggregate == AGGREGATE_TYPE.AVG) {\n                                value = ddd.map(function (t) {\n                                    return t[field];\n                                }).reduce(function (p, c) {\n                                    return p + c;\n                                }) / ddd.length;\n                            }\n                            // 求和\n                            else if (aggregate == AGGREGATE_TYPE.SUM) {\n                                    value = ddd.map(function (t) {\n                                        return t[field];\n                                    }).reduce(function (p, c) {\n                                        return p + c;\n                                    });\n                                }\n                                // 计数\n                                else if (aggregate == AGGREGATE_TYPE.COUNT) {\n                                        value = ddd.length;\n                                    }\n                                    // 最大值\n                                    else if (aggregate == AGGREGATE_TYPE.MAX) {\n                                            value = Math.max.apply(null, ddd.map(function (t) {\n                                                return t[field];\n                                            }));\n                                        }\n                                        // 最小值\n                                        else if (aggregate == AGGREGATE_TYPE.MIN) {\n                                                value = Math.min.apply(null, ddd.map(function (t) {\n                                                    return t[field];\n                                                }));\n                                            }\n                                            // 取最后一个\n                                            else if (aggregate == AGGREGATE_TYPE.LAST) {\n                                                    value = ddd[ddd.length - 1][field];\n                                                }\n                                                // 取第一个\n                                                else {\n                                                        value = ddd[0][field];\n                                                    }\n                        }\n\n                        if (render) {\n                            content = render(value, ddd[0]);\n                        } else {\n                            content = value;\n                        }\n                    }\n\n                    var tdProps = {\n                        key: '' + (0, _uuid2.default)(8, 16),\n                        className: c.className,\n                        style: c.style\n                    };\n\n                    if (ci < RGC - 1) {\n                        if (r.rowSpan && r.rowSpan[ci]) {\n                            tdProps.rowSpan = r.rowSpan[ci];\n                        } else {\n                            tdProps = null;\n                        }\n                    }\n\n                    if (!tdProps) {\n                        return;\n                    }\n\n                    tds.push(_react2.default.createElement(\n                        'td',\n                        tdProps,\n                        content\n                    ));\n                });\n\n                rows.push(_react2.default.createElement(\n                    'tr',\n                    { key: i },\n                    tds\n                ));\n            });\n\n            return _react2.default.createElement(\n                'tbody',\n                null,\n                rows\n            );\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _props4 = this.props,\n                style = _props4.style,\n                className = _props4.className;\n\n\n            return _react2.default.createElement(\n                'table',\n                { style: style, className: 'react-tablix ' + (className || '') },\n                this.renderHeader(),\n                this.renderBody()\n            );\n        }\n    }]);\n\n    return Tablix;\n}(_react2.default.Component);\n\nTablix.AGGREGATE_TYPE = AGGREGATE_TYPE;\nTablix.propTypes = {\n    rowGroup: _propTypes2.default.object.isRequired,\n    columns: _propTypes2.default.array.isRequired,\n    data: _propTypes2.default.array.isRequired,\n    style: _propTypes2.default.object,\n    className: _propTypes2.default.string\n};\n\n\nmodule.exports = Tablix;\n\n//# sourceURL=webpack://ReactTablix/./src/Tablix.jsx?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n__webpack_require__(/*! ./tablix.less */ \"./src/tablix.less\");\n\nvar _Tablix = __webpack_require__(/*! ./Tablix */ \"./src/Tablix.jsx\");\n\nvar _Tablix2 = _interopRequireDefault(_Tablix);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _Tablix2.default;\n\n//# sourceURL=webpack://ReactTablix/./src/index.js?");

/***/ }),

/***/ "./src/tablix.less":
/*!*************************!*\
  !*** ./src/tablix.less ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack://ReactTablix/./src/tablix.less?");

/***/ }),

/***/ "./src/utils/uuid.js":
/*!***************************!*\
  !*** ./src/utils/uuid.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function (len, radix) {\n    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');\n    var uuid = [],\n        i;\n    radix = radix || chars.length;\n\n    if (len) {\n        // Compact form\n        for (i = 0; i < len; i++) {\n            uuid[i] = chars[0 | Math.random() * radix];\n        }\n    } else {\n        // rfc4122, version 4 form\n        var r;\n\n        // rfc4122 requires these characters\n        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';\n        uuid[14] = '4';\n\n        // Fill in random data. At i==19 set the high bits of clock sequence as\n        // per rfc4122, sec. 4.1.5\n        for (i = 0; i < 36; i++) {\n            if (!uuid[i]) {\n                r = 0 | Math.random() * 16;\n                uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];\n            }\n        }\n    }\n\n    return uuid.join('');\n};\n\n//# sourceURL=webpack://ReactTablix/./src/utils/uuid.js?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;\n\n//# sourceURL=webpack://ReactTablix/external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://ReactTablix/external_%22react%22?");

/***/ })

/******/ });
});