(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{17:function(t,e,n){}}]),function(t){function e(e){for(var o,a,l=e[0],i=e[1],u=e[2],b=0,p=[];b<l.length;b++)a=l[b],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);for(s&&s(e);p.length;)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(o=!1)}o&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={1:0},c=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var s=i;c.push([13,2]),n()}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){!function(){t.exports=this.wp.blockEditor}()},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(7),r=n.n(o),c=n(0),a=n(3),l=function(t){var e=t.onClick,n=t.options,o=t.initialChecked,l=t.showIcons,i=t.label;return Object(c.createElement)(a.ButtonGroup,r()({mode:"radio"},!l&&{onClick:function(t){return e(t)}}),i&&Object(c.createElement)("p",null,Object(c.createElement)("strong",null,i)),n.map((function(t,n){return Object(c.createElement)(a.Button,r()({},l&&{onClick:function(t){return e(t)}},{className:o===t&&"is-primary",key:n,checked:o,value:t}),l?Object(c.createElement)(a.Dashicon,{icon:t}):t)})))}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}},function(t,e,n){var o=n(5);t.exports=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}},function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},n.apply(this,arguments)}t.exports=n},function(t,e){!function(){t.exports=this.wp.hooks}()},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e,n){var o=n(14),r=n(15),c=n(6),a=n(16);t.exports=function(t,e){return o(t)||r(t,e)||c(t,e)||a()}},function(t,e){!function(){t.exports=this.wp.compose}()},,function(t,e,n){n(22),n(24),n(17),t.exports=n(18)},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,c=void 0;try{for(var a,l=t[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,c=t}finally{try{o||null==l.return||l.return()}finally{if(r)throw c}}return n}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,function(t,e,n){},,,,function(t,e,n){"use strict";n.r(e);var o={};n.r(o),n.d(o,"name",(function(){return p})),n.d(o,"settings",(function(){return d}));var r=n(9),c=n(1),a=n(2),l=n(10),i=n.n(l),u=n(0),s=n(3),b=n(4);var p="accordion",d={title:Object(c.__)("Accordion","accordion"),description:Object(c.__)("Accordion block","blocks"),category:"noor-collection",icon:"list-view",supports:{html:!1},attributes:{anchorContent:{type:"string",default:""},titleContent:{type:"string",default:"Example title..."},titleTag:{type:"string",default:"h4"},initialState:{type:"boolean",default:!1},titleColor:{type:"string"},titleBackground:{type:"string"},contentBackground:{type:"string"},expandIcon:{type:"string",default:"arrow-down-alt2"},collapseIcon:{type:"string",default:"arrow-up-alt2"},iconAlignment:{type:"string",default:"right"}},edit:Object(a.withColors)({titleColor:"color",titleBackground:"background-color",contentBackground:"background-color"})((function(t){var e=t.titleColor,n=t.setTitleColor,o=t.titleBackground,r=t.setTitleBackground,l=t.contentBackground,p=t.setContentBackground,d=t.attributes,f=t.setAttributes,g=Object(u.useState)(!1),m=i()(g,2),h=m[0],O=m[1],j=null!=e?e.class:"",k=null!=o?o.class:"",v=null!=l?l.class:"",y={expand:["arrow-down","arrow-right","arrow-down-alt2","arrow-right-alt2","arrow-down-alt","arrow-right-alt","plus"],collapse:["arrow-up","arrow-up-alt2","minus","arrow-up-alt","no-alt"]};return Object(u.createElement)(u.Fragment,null,Object(u.createElement)(a.InspectorControls,null,Object(u.createElement)(s.PanelBody,{title:Object(c.__)("Base Settings"),initialOpen:!0},Object(u.createElement)("label",{className:"block-base-control__label"},Object(u.createElement)("strong",null,Object(c.__)("Anchor title"))),Object(u.createElement)(s.__experimentalInputControl,{value:d.anchorContent,onChange:function(t){return f({anchorContent:t})}}),Object(u.createElement)("label",{className:"block-base-control__label"},Object(u.createElement)("strong",null,Object(c.__)("Initial state"))),Object(u.createElement)(s.ToggleControl,{label:d.initialState?"Expanded by default":"Collapsed by default",checked:d.initialState,onChange:function(){return f({initialState:!d.initialState})}}),Object(u.createElement)(b.a,{label:Object(c.__)("Title size"),onClick:function(t){return f({titleTag:t.target.value})},options:["h1","h2","h3","h4","h5","h6"],initialChecked:d.titleTag})),Object(u.createElement)(s.PanelBody,{title:Object(c.__)("Icon settings"),initialOpen:!1},Object(u.createElement)(b.a,{label:Object(c.__)("Expand Icon"),onClick:function(t){return t.preventDefault(),f({expandIcon:t.currentTarget.value})},options:y.expand,initialChecked:d.expandIcon,showIcons:!0}),Object(u.createElement)(b.a,{label:Object(c.__)("Collapse Icon"),onClick:function(t){return t.preventDefault(),f({collapseIcon:t.currentTarget.value})},options:y.collapse,initialChecked:d.collapseIcon,showIcons:!0})),Object(u.createElement)(a.PanelColorSettings,{title:Object(c.__)("Color settings"),initialOpen:!1,colorSettings:[{value:e.color,onChange:n,label:Object(c.__)("Title text color")},{value:o.color,onChange:r,label:Object(c.__)("Title background color")},{value:l.color,onChange:p,label:Object(c.__)("Content background color")}]})),Object(u.createElement)("div",{id:"#".concat(d.anchorContent),className:"noor-block-accordion ".concat(k),onClick:function(){return O(!h)},"aria-expanded":"".concat(d.initialState||h)},Object(u.createElement)(a.RichText,{className:"noor-block-accordion__title ".concat(j),tagName:d.titleTag,value:d.titleContent,formattingControls:["bold","italic","align"],onChange:function(t){return f({titleContent:t})}}),Object(u.createElement)(s.Dashicon,{icon:h?d.collapseIcon:d.expandIcon,className:"noor-block-accordion__icon ".concat(j)})),Object(u.createElement)("div",{className:"noor-block-accordion__content ".concat(v)},Object(u.createElement)(a.InnerBlocks,{allowedBlocks:["core/paragraph","core/list","core/button"],template:[["core/paragraph",{}]]})))})),save:function(t){var e=t.attributes,n=e.titleColor,o=e.titleBackground,r=e.contentBackground,c=null!=n?Object(a.getColorClassName)("color",n):"",l=null!=o?Object(a.getColorClassName)("background-color",o):"",i=null!=r?Object(a.getColorClassName)("background-color",r):"";return Object(u.createElement)(u.Fragment,null,Object(u.createElement)("div",{id:"#".concat(e.anchorContent),className:"noor-block-accordion ".concat(l),"aria-expanded":e.initialState},Object(u.createElement)(a.RichText.Content,{className:"noor-block-accordion__title ".concat(c),tagName:e.titleTag,value:e.titleContent}),Object(u.createElement)("span",{className:"noor-block-accordion__icon dashicons dashicons-".concat(e.expandIcon," ").concat(c),"aria-hidden":"true","data-state":!e.initialState}),Object(u.createElement)("span",{className:"noor-block-accordion__icon dashicons dashicons-".concat(e.collapseIcon," ").concat(c),"aria-hidden":"true","data-state":e.initialState})),Object(u.createElement)("div",{className:"noor-block-accordion__content ".concat(i)},Object(u.createElement)(a.InnerBlocks.Content,null)))}};[o].forEach((function(t){return function(t){var e=t.name,n=t.settings;Object(r.registerBlockType)("noor/"+e,n)}(t)}))},,function(t,e,n){"use strict";n.r(e);var o=n(8),r=n(0),c=n(1),a=n(11),l=n(2),i=n(3),u=n(4),s=["arrow-right-alt","arrow-left-alt","arrow-right-alt2","arrow-left-alt2"],b=Object(a.createHigherOrderComponent)((function(t){return function(e){if("core/button"!==e.name)return Object(r.createElement)(t,e);var n=e.attributes.icon;return n&&(e.attributes.className="has-icon-".concat(n)),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(l.InspectorControls,null,Object(r.createElement)(i.PanelBody,{title:Object(c.__)("Inline Icon Control"),initialOpen:!0},Object(r.createElement)(u.a,{label:Object(c.__)("Inline Icon"),onClick:function(t){return t.preventDefault(),e.setAttributes({icon:t.currentTarget.value})},options:s,initialChecked:e.attributes.icon,showIcons:!0}))),Object(r.createElement)(t,e))}}),"withIcon");Object(o.addFilter)("blocks.registerBlockType","noor/gutenberg-blocks/custom-attributes",(function(t,e){return"core/button"!==e||Object.assign(t.attributes,{icon:{type:"string",default:s[0]}}),t})),Object(o.addFilter)("editor.BlockEdit","noor/gutenberg-blocks/custom-control",b)}]);