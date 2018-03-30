!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["prop-types","react"],r):"object"==typeof exports?exports.ReactTablix=r(require("prop-types"),require("react")):e.ReactTablix=r(e["prop-types"],e.react)}(window,function(e,r){return function(e){var r={};function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=4)}([function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){var n,t,a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),o=[];if(r=r||a.length,e)for(n=0;n<e;n++)o[n]=a[0|Math.random()*r];else for(o[8]=o[13]=o[18]=o[23]="-",o[14]="4",n=0;n<36;n++)o[n]||(t=0|16*Math.random(),o[n]=a[19==n?3&t|8:t]);return o.join("")}},function(r,n){r.exports=e},function(e,n){e.exports=r},function(e,r,n){"use strict";var t=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},a=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}(),o=c(n(2)),u=c(n(1)),l=c(n(0));function c(e){return e&&e.__esModule?e:{default:e}}function f(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n={};for(var t in e)r.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n}function s(e){if(Array.isArray(e)){for(var r=0,n=Array(e.length);r<e.length;r++)n[r]=e[r];return n}return Array.from(e)}function p(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}var m={AVG:"avg",SUM:"sum",MAX:"max",MIN:"min",FIRST:"first",LAST:"last",COUNT:"count"},d=function(e){function r(){var e,n,a;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r);for(var o=arguments.length,u=Array(o),l=0;l<o;l++)u[l]=arguments[l];return n=a=p(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(u))),a.getColumnsFromRow=function(){for(var e=function e(r,a){for(var o=0;o<r.length;o++){var u=r[o];if(u.members){var l=[].concat(s(a));(u.field||u.by)&&(l=a.concat({field:u.by?u.by:u.field,name:u.name})),e(u.members,l)}else n.push(t({},u,{where:u.by?a.concat([{field:u.by,name:u.name}]):a}))}},r=a.getRowHierarchy(),n=[],o=0;o<r.length;o++){var u=r[o];if(u.members){var l=[];(u.field||u.by)&&(l=[{field:u.by?u.by:u.field,name:u.name}]),e(u.members,l)}else n.push(t({},u,{where:u.by?[{field:u.by,name:u.name}]:[]}))}return n},a.getRowFromColumn=function(){for(var e=[],r=function r(n,a,o,u,l){for(var c=0;c<n.length;c++){var p=n[c],m=p.rowSpan,d=p.colSpan,y=i(p,["rowSpan","colSpan"]),h=[t({rowSpan:d,colSpan:m},y)];if(0==c&&(h=[].concat(s(u)).concat(h)),p.columns){var v=f({},o+1,p.colSpan||1);0==c&&(v=t({},a,v));var b=[].concat(s(l));(p.field||p.by)&&(b=l.concat({field:p.by?p.by:p.field,name:p.name})),r(p.columns,v,o+1,h,b)}else{p.colSpan;var g=p.rowSpan,w=i(p,["colSpan","rowSpan"]),S=t({},w,{cells:h,colSpan:g||1,where:p.by?l.concat([{field:p.by,name:p.name}]):l});0==c&&(S.rowSpan2=a),e.push(S)}}},n=a.getHeaderHierarchy(),o=0;o<n.length;o++){var u=n[o],l=u.rowSpan,c=u.colSpan,p=i(u,["rowSpan","colSpan"]),m=[t({rowSpan:c,colSpan:l},p)];if(u.columns){var d={};0==o&&(d={0:cols.colSpan||1});var y=[];(u.field||u.by)&&(y=[{field:u.by?u.by:u.field,name:u.name}]),r(u.columns,d,0,m,y)}else e.push(t({},p,{rowSpan:c,colSpan:l,cells:m,where:u.by?[{field:u.by,name:u.name}]:[]}))}return e},p(a,n)}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}(r,o.default.Component),a(r,[{key:"getHeaderHierarchy",value:function(){var e=this.props,r=e.columns,n=e.data,a=function(e){var r=[],a=e.by,u=e.columns,l=e.sort,c=i(e,["by","columns","sort"]),f=n;return"function"==typeof l&&(f=f.sort(l)),f.forEach(function(e){var n=""+e[a];r.includes(n)||r.push(n)}),u?r.map(function(e){return t({name:e,by:a,columns:o(u)},c)}):r.map(function(e){return t({name:e,by:a},c)})},o=function e(r){for(var n=[],o=0;o<r.length;o++){var u=r[o];u.group?n=n.concat(a(u.group)):u.columns?n.push(t({},u,{columns:e(u.columns)})):n.push(u)}return n},u=[];r.forEach(function(e,r){e.group||0!=(e.columns||[]).length?e.group?u=u.concat(a(e.group)):e.columns&&u.push(t({},e,{columns:o(e.columns)})):u.push(e)});return function e(r){for(var n=r.filter(function(e){return!e.columns}).length,t=0;t<r.length;t++){var a=r[t];a.columns&&(a.colSpan=e(a.columns),n+=a.columns.length)}return n}(u),u}},{key:"getColumns",value:function(){for(var e=function e(r,a){for(var o=0;o<r.length;o++){var u=r[o];if(u.columns){var l=[].concat(s(a));(u.field||u.by)&&(l=a.concat({field:u.by?u.by:u.field,name:u.name})),e(u.columns,l)}else n.push(t({},u,{where:u.by?a.concat([{field:u.by,name:u.name}]):a}))}},r=this.getHeaderHierarchy(),n=[],a=0;a<r.length;a++){var o=r[a];if(o.columns){var u=[];(o.field||o.by)&&(u=[{field:o.by?o.by:o.field,name:o.name}]),e(o.columns,u)}else n.push(t({},o,{where:o.by?[{field:o.by,name:o.name}]:[]}))}return n}},{key:"getRowHierarchy",value:function(){var e=this.props,r=e.rowGroup,n=e.data;if(!r)return null;var t=function e(r,t){var a=r.by,o=r.group,u=r.sort,l=r.style,c=r.className,f=n;t.forEach(function(e){f=f.filter(function(r){return r[e.field]==e.name})}),"function"==typeof u&&(f=f.sort(u));var i=[];return f.forEach(function(e){i.includes(e[a])||i.push(e[a])}),i.map(function(r){var n={by:a,name:r,style:l,className:c,where:t.concat([{field:a,name:r}])};return o&&(n.members=e(o,t.concat([{field:a,name:r}]))),n})}(r,[]);return function e(r){for(var n=0,t=0;t<r.length;t++){var a=r[t];a.members&&(a.rowSpan=e(a.members),n+=a.members.length)}return 0==n?r.length:n}(t),t}},{key:"getRows",value:function(){for(var e=[],r=function r(n,a,o){for(var u=0;u<n.length;u++){var l=n[u];if(l.members){var c=f({},o+1,l.rowSpan||1);0==u&&(c=t({},a,c)),r(l.members,c,o+1)}else{var i=t({},l);0==u&&(i.rowSpan=a),e.push(i)}}},n=this.getRowHierarchy(),a=0;a<n.length;a++){var o=n[a];if(o.members){var u={};0==a&&(u={0:o.rowSpan}),r(o.members,u,0)}else e.push(o)}return e}},{key:"renderHeader",value:function(){var e={};!function r(n,t){for(var a=[],u=0;u<n.length;u++){var c=n[u];if(0!==c.rowSpan){var f={key:""+(0,l.default)(8,16),style:c.style,className:c.className};c.rowSpan>0&&(f.rowSpan=c.rowSpan),c.colSpan>0&&(f.colSpan=c.colSpan),a.push(o.default.createElement("th",f,n[u].name))}c.columns&&r(c.columns,t+1)}e.hasOwnProperty(t)||(e[t]=[]),e[t]=e[t].concat(a)}(this.getHeaderHierarchy(),0);var r=[];for(var n in e)r.push(o.default.createElement("tr",{key:n},e[n]));return o.default.createElement("thead",null,r)}},{key:"renderHeaderTansported",value:function(){var e=this.props,r=e.rowGroup;e.data;if(!r.by)return null;var n=this.getRowFromColumn()||[],t={};!function e(r,n){for(var a=[],u=0;u<r.length;u++){var c=r[u];if(0!==c.rowSpan){var f={key:""+(0,l.default)(8,16),className:c.className,style:c.style};c.rowSpan>0&&(f.colSpan=c.rowSpan),c.colSpan>0&&(f.rowSpan=c.colSpan),a.push(o.default.createElement("td",f,r[u].name))}c.members&&e(c.members,n+1)}t.hasOwnProperty(n)||(t[n]=[]),t[n]=t[n].concat(a)}(this.getRowHierarchy(),0);var a=[];for(var u in t){var c=(n[u].cells||[]).map(function(e,r){return o.default.createElement("th",{key:r,colSpan:e.colSpan,className:e.className,style:e.style},e.name)});a.push(o.default.createElement("tr",{key:u},c,t[u]))}return o.default.createElement("thead",null,a)}},{key:"renderBody",value:function(){var e=this.props,r=e.rowGroup,n=e.data;if(!r.by)return null;var t=[],a=1;!function e(r){r.group&&(a++,e(r.group))}(r);var u=this.getRows(),c=this.getColumns();return u.forEach(function(e,r){var u=[],f=n;(e.where||[]).forEach(function(e){f=f.filter(function(r){return r[e.field]==e.name})}),c.forEach(function(r,n){var t=r.aggregate,c=r.field,i=r.render,s=f;(r.where||[]).forEach(function(e){s=s.filter(function(r){return r[e.field]==e.name})});var p="";if(s.length>0&&r.field){var d=null;t&&t!=m.FIRST||(d=s[0][c]),t&&(d=t==m.AVG?s.map(function(e){return e[c]}).reduce(function(e,r){return e+r})/s.length:t==m.SUM?s.map(function(e){return e[c]}).reduce(function(e,r){return e+r}):t==m.COUNT?s.length:t==m.MAX?Math.max.apply(null,s.map(function(e){return e[c]})):t==m.MIN?Math.min.apply(null,s.map(function(e){return e[c]})):t==m.LAST?s[s.length-1][c]:s[0][c]),p=i?i(d,s[0]):d}var y={key:""+(0,l.default)(8,16)};n<a-1&&(e.rowSpan&&e.rowSpan[n]?y.rowSpan=e.rowSpan[n]:y=null),y&&u.push(o.default.createElement("td",y,p))}),t.push(o.default.createElement("tr",{key:r},u))}),o.default.createElement("tbody",null,t)}},{key:"renderBodyTransported",value:function(){var e=this.props,r=e.rowGroup,n=e.data;if(!r.by)return null;var t=[],a=1;!function e(r){r.group&&(a++,e(r.group))}(r);var u=this.getRowFromColumn(),c=this.getColumnsFromRow();return u.forEach(function(e,r){if(!(r<a)){var u=[],f=n;(e.where||[]).forEach(function(e){f=f.filter(function(r){return r[e.field]==e.name})});var i=e.aggregate,s=e.field,p=e.render;c.forEach(function(e,r){var n=f;(e.where||[]).forEach(function(e){n=n.filter(function(r){return r[e.field]==e.name})});var t="";if(n.length>0&&s){var a=null;i&&i!=m.FIRST||(a=n[0][s]),i&&(a=i==m.AVG?n.map(function(e){return e[s]}).reduce(function(e,r){return e+r})/n.length:i==m.SUM?n.map(function(e){return e[s]}).reduce(function(e,r){return e+r}):i==m.COUNT?n.length:i==m.MAX?Math.max.apply(null,n.map(function(e){return e[s]})):i==m.MIN?Math.min.apply(null,n.map(function(e){return e[s]})):i==m.LAST?n[n.length-1][s]:n[0][s]),t=p?p(a,n[0]):a}var c={key:""+(0,l.default)(8,16)};u.push(o.default.createElement("td",c,t))});var d=e.cells.map(function(e,r){return o.default.createElement("th",{key:r,rowSpan:e.rowSpan||1,colSpan:e.colSpan||1,className:e.className,style:e.style},e.name)});t.push(o.default.createElement("tr",{key:r},d,u))}}),o.default.createElement("tbody",null,t)}},{key:"render",value:function(){var e=this.props,r=e.style,n=e.className,t=e.transported;return o.default.createElement("table",{style:r,className:"react-tablix "+(n||"")},t?this.renderHeaderTansported():this.renderHeader(),t?this.renderBodyTransported():this.renderBody())}}]),r}();d.AGGREGATE_TYPE=m,d.propTypes={rowGroup:u.default.object.isRequired,columns:u.default.array.isRequired,data:u.default.array.isRequired,style:u.default.object,className:u.default.string,transported:u.default.bool},e.exports=d},function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n(9);var t,a=n(3),o=(t=a)&&t.__esModule?t:{default:t};r.default=o.default},,,,,function(e,r){}])});