(this.webpackJsonparmaggedon=this.webpackJsonparmaggedon||[]).push([[0],{49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(16),s=a.n(r),i=a(3),o=a(12),d=a(4),l=(a(49),a(0));function u(){return Object(l.jsx)("footer",{className:"footer",children:"2021 \xa9 \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0438 \u043f\u043b\u0430\u043d\u0435\u0442\u044b \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b"})}a(51);function j(){return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsxs)("div",{className:"header__left",children:[Object(l.jsx)("a",{href:"/",className:"header__logo",children:"armaggedon V"}),Object(l.jsx)("span",{className:"header__logo-descr",children:"\u0421\u0435\u0440\u0432\u0438\u0441 \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430 \u0438 \u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0435\u043d\u0438\u044f \u0430\u0441\u0442\u0435\u0440\u043e\u0438\u0434\u043e\u0432, \u043e\u043f\u0430\u0441\u043d\u043e \u043f\u043e\u0434\u043b\u0435\u0442\u0430\u044e\u0449\u0438\u0445 \u043a \u0417\u0435\u043c\u043b\u0435"})]}),Object(l.jsxs)("nav",{className:"header__nav",children:[Object(l.jsx)(o.b,{to:"/asteroids",activeClassName:"header__link_active",className:"header__link",children:Object(l.jsx)("span",{children:"\u0410\u0441\u0442\u0435\u0440\u043e\u0438\u0434\u044b"})}),Object(l.jsx)(o.b,{to:"/destruction",activeClassName:"header__link_active",className:"header__link",children:Object(l.jsx)("span",{children:"\u0423\u043d\u0438\u0447\u0442\u043e\u0436\u0435\u043d\u0438\u0435"})})]})]})}var _=a(14),b=a(5),m="SET_DATA",h="SET_MEASURE",O="TOGGLE_IS_DANGER",p="ADD_TO_DESTRUCTION_CART",f="DELETE_FROM_DESTRUCTION_CART",v="SET_OFFSET",x="RESET_OFFSET",N="SET_CURRENT_ITEM",g={data:[],destructionCart:[],currentItem:{},measure:"\u043a\u043c",offset:5,isDanger:!1};var w=function(e){return{type:m,payload:e}},y=function(e){return{type:O,payload:e}},D=a(35),C=a(36),E=function(){function e(){Object(D.a)(this,e)}return Object(C.a)(e,null,[{key:"getCurrentDate",value:function(){var e=new Date,t=e.getDay(),a=e.getMonth(),c=e.getFullYear();return"".concat(c,"-").concat(a,"-").concat(t)}},{key:"filterDate",value:function(e){var t=this;return e.filter((function(e){return e.close_approach_date>=t.getCurrentDate()}))}},{key:"getTransformDate",value:function(e){return new Date(e).toLocaleString("ru",{day:"numeric",month:"long",year:"numeric"}).replace(/[\u0433.]/g,"")}},{key:"getTime",value:function(e){return new Date(e).toLocaleString("ru",{hour:"numeric",minute:"numeric"})}},{key:"transformDistance",value:function(e){return Math.floor(e).toLocaleString("ru")}},{key:"getDistance",value:function(e,t){return"".concat("\u043a\u043c"===e?this.transformDistance(t.kilometers):this.transformDistance(t.lunar))}},{key:"asteroidClass",value:function(e,t){return t&&e>3e3&&e<1e4?"card_asteroid_md card_danger":t&&e>=1e4?"card_asteroid_lg card_danger":!t&&e>3e3&&e<1e4?"card_asteroid_md":!t&&e>1e4?"card_asteroid_lg":""}}]),e}();a(53);function k(e){var t=Object(i.b)(),a=Object(i.c)((function(e){return e.dataReducer.measure})),c=Object(i.c)((function(e){return e.dataReducer.destructionCart})),n=e.id,r=e.isDestruction,s=e.data,d=s.name_limited,u=s.estimated_diameter,j=s.close_approach_data,_=s.is_potentially_hazardous_asteroid,b=c.find((function(e){return e.id===n})),m=E.filterDate(j),h=m[0].close_approach_date,O=E.getTransformDate(h),v=E.getDistance(a,m[0].miss_distance),x=Math.floor(u.meters.estimated_diameter_max),g=E.asteroidClass(x,_),w=function(e){t(function(e){return{type:p,id:e}}(e))},y=function(e){t(function(e){return{type:f,id:e}}(e))};return Object(l.jsx)("div",{className:"card ".concat(g),children:Object(l.jsxs)("div",{className:"card__content",children:[Object(l.jsxs)("div",{className:"card__info",children:[Object(l.jsx)(o.b,{to:"/asteroid/".concat(n),onClick:function(){var a;t((a=e.data,{type:N,payload:a}))},className:"card__title",children:d}),Object(l.jsxs)("div",{className:"card__row",children:[Object(l.jsx)("div",{className:"card__row-name",children:"\u0414\u0430\u0442\u0430"}),Object(l.jsx)("span",{className:"card__row-line"}),Object(l.jsx)("div",{className:"card__row-value",children:O})]}),Object(l.jsxs)("div",{className:"card__row",children:[Object(l.jsx)("div",{className:"card__row-name",children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"}),Object(l.jsx)("span",{className:"card__row-line"}),Object(l.jsxs)("div",{className:"card__row-value",children:[v,"\xa0",a]})]}),Object(l.jsxs)("div",{className:"card__row",children:[Object(l.jsx)("div",{className:"card__row-name",children:"\u0420\u0430\u0437\u043c\u0435\u0440"}),Object(l.jsx)("span",{className:"card__row-line"}),Object(l.jsxs)("div",{className:"card__row-value",children:[x,"\xa0\u043c"]})]})]}),Object(l.jsxs)("div",{className:"card__rating",children:[Object(l.jsx)("h3",{className:"card__rating-title",children:"\u041e\u0446\u0435\u043d\u043a\u0430:"}),Object(l.jsx)("div",{className:"card__rating-text",children:_?"\u043e\u043f\u0430\u0441\u0435\u043d":"\u043d\u0435 \u043e\u043f\u0430\u0441\u0435\u043d"}),r?Object(l.jsx)("button",{type:"button",onClick:function(){y(n)},className:"btn",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430"}):Object(l.jsx)("button",{type:"button",onClick:function(){w(n)},className:"btn ".concat(b?"btn_disable":""),children:b?"\u0412 \u0441\u043f\u0438\u0441\u043a\u0435 \u043d\u0430 \u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0435\u043d\u0438\u0435":"\u041d\u0430 \u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0435\u043d\u0438\u0435"})]})]})})}var T=a(85);a(54);function R(e){var t=e.measure,a=e.info,c=E.getTransformDate(a.close_approach_date),n=Math.floor(a.relative_velocity.kilometers_per_hour),r=E.getTime(a.close_approach_date_full),s=E.getDistance(t,a.miss_distance),i=a.orbiting_body;return Object(l.jsx)("div",{className:"approach-item",children:Object(l.jsxs)("div",{className:"approach-item__wrapper",children:[Object(l.jsxs)("div",{className:"approach-item__date",children:[Object(l.jsx)("div",{className:"approach-item__header-title",children:"\u0414\u0430\u0442\u0430"}),c]}),Object(l.jsxs)("div",{className:"approach-item__info",children:[Object(l.jsx)("div",{className:"approach-item__header-title approach-item__header-title_right",children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),Object(l.jsxs)("div",{className:"approach-item__row",children:[Object(l.jsx)("div",{className:"approach-item__row-name",children:"\u0412\u0440\u0435\u043c\u044f \u0441\u0431\u043b\u0438\u0436\u0435\u043d\u0438\u044f"}),Object(l.jsx)("span",{className:"approach-item__row-line"}),Object(l.jsx)("div",{className:"approach-item__row-value",children:r})]}),Object(l.jsxs)("div",{className:"approach-item__row",children:[Object(l.jsx)("div",{className:"approach-item__row-name",children:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c"}),Object(l.jsx)("span",{className:"approach-item__row-line"}),Object(l.jsxs)("div",{className:"approach-item__row-value",children:[n," \u043a\u043c/\u0447"]})]}),Object(l.jsxs)("div",{className:"approach-item__row",children:[Object(l.jsx)("div",{className:"approach-item__row-name",children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"}),Object(l.jsx)("span",{className:"approach-item__row-line"}),Object(l.jsxs)("div",{className:"approach-item__row-value",children:[s," ",t]})]}),Object(l.jsxs)("div",{className:"approach-item__row",children:[Object(l.jsx)("div",{className:"approach-item__row-name",children:"\u041e\u0440\u0431\u0438\u0442\u0430"}),Object(l.jsx)("span",{className:"approach-item__row-line"}),Object(l.jsx)("div",{className:"approach-item__row-value",children:i})]})]})]})})}a(55);function S(){var e=Object(i.c)((function(e){return e.dataReducer.currentItem})).close_approach_data,t=Object(i.c)((function(e){return e.dataReducer.measure}));return Object(l.jsx)("div",{className:"approach-list",children:e.map((function(e){return Object(l.jsx)(R,{measure:t,info:e},Object(T.a)())}))})}a(56);function M(){var e=Object(i.c)((function(e){return e.dataReducer.currentItem}));return Object(l.jsxs)("div",{className:"card-page",children:[Object(l.jsx)("h1",{className:"card-page__title",children:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0430\u0441\u0442\u0435\u0440\u043e\u0438\u0434\u0430"}),Object(l.jsx)(k,{id:e.id,data:e,isDestruction:!1},e.id),Object(l.jsx)("h2",{className:"card-page__subtitle",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0432\u0441\u0435\u0445 \u0441\u0431\u043b\u0438\u0436\u0435\u043d\u0438\u0439"}),Object(l.jsx)(S,{})]})}var I=a(23),A=a.n(I),L=a(37),F=a(38),U=a.n(F);a(76);function G(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.dataReducer.isDanger}));return Object(c.useEffect)((function(){return function(){e(y(!1))}}),[e]),Object(l.jsx)("div",{className:"filter",onClick:function(){e(y(!t))},children:Object(l.jsxs)("div",{className:"filter__label",children:["\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u043f\u0430\u0441\u043d\u044b\u0435",Object(l.jsx)("input",{type:"checkbox",className:"filter__input",defaultChecked:t}),Object(l.jsx)("span",{className:"filter__mark"})]})})}a(77);function H(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.dataReducer.measure})),a=function(t,a){e(function(e){return{type:h,payload:e}}(t))};return Object(l.jsxs)("div",{className:"options",children:[Object(l.jsxs)("button",{type:"button",onClick:function(){return a("\u043a\u043c")},className:"options__btn ".concat("\u043a\u043c"===t?"options__btn_active":""),children:["\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 ",Object(l.jsx)("span",{className:"options__btn-text",children:"\u0432 \u043a\u0438\u043b\u043e\u043c\u0435\u0442\u0440\u0430\u0445"}),","]}),Object(l.jsxs)("button",{type:"button",onClick:function(){return a("\u043b\u0443\u043d\u0430\u0440")},className:"options__btn ".concat("\u043b\u0443\u043d\u0430\u0440"===t?"options__btn_active":""),children:[Object(l.jsx)("span",{className:"options__btn-text",children:"\u0432 \u0434\u0438\u0441\u0442\u0430\u0446\u0438\u044f\u0445"})," \u0434\u043e \u043b\u0443\u043d\u044b"]})]})}a(78);function J(){return Object(l.jsx)("div",{className:"preloader"})}a(79);function Z(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.dataReducer.data})),a=Object(i.c)((function(e){return e.dataReducer.isDanger})),n=Object(i.c)((function(e){return e.dataReducer.offset})),r=(a?Object(_.a)(t).filter((function(e){return e.is_potentially_hazardous_asteroid===a})):t).slice(0,n),s=Object(c.useCallback)((function(t){t.target.documentElement.scrollHeight-(t.target.documentElement.scrollTop+window.innerHeight)<50&&e({type:v})}),[e]);return Object(c.useEffect)((function(){e(function(){var e=Object(L.a)(A.a.mark((function e(t){var a,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U()("".concat("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=JdZrMyQiNT5Zg1vwjiY2H2UCEWw8K7ZnTQdm8rww"));case 3:return a=e.sent,e.next=6,a.data.near_earth_objects;case 6:c=e.sent,t(w(c)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(c.useEffect)((function(){return document.addEventListener("scroll",s),function(){document.removeEventListener("scroll",s)}}),[s]),Object(c.useEffect)((function(){return function(){e({type:x})}}),[e]),Object(l.jsxs)("div",{className:"asteroids",children:[Object(l.jsxs)("div",{className:"asteroids__options",children:[Object(l.jsx)(G,{}),Object(l.jsx)(H,{})]}),Object(l.jsxs)("div",{className:"asteroids__list",children:[r.length<1&&Object(l.jsx)(J,{}),r.map((function(e){return Object(l.jsx)(k,{id:e.id,data:e,isDestruction:!1},e.id)}))]})]})}a(80);function z(){var e=Object(i.c)((function(e){return e.dataReducer.destructionCart}));return Object(l.jsx)("div",{className:"destruction",children:Object(l.jsxs)("div",{className:"destruction__list",children:[e.length>0?e.map((function(e){return Object(l.jsx)(k,{id:e.id,data:e,isDestruction:!0},e.id)})):Object(l.jsx)("p",{className:"destruction__empty",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0443\u0441\u0442"}),e.length>0&&Object(l.jsx)("button",{type:"button",className:"btn btn_center",children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0431\u0440\u0438\u0433\u0430\u0434\u0443"})]})})}var Q=function(){return Object(l.jsx)(o.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(j,{}),Object(l.jsxs)(d.d,{children:[Object(l.jsx)(d.b,{path:"/asteroids",component:Z}),Object(l.jsx)(d.b,{path:"/destruction",component:z}),Object(l.jsx)(d.b,{path:"/asteroid/:id",component:M}),Object(l.jsx)(d.a,{to:"/asteroids"})]}),Object(l.jsx)(u,{})]})})})},W=a(11),Y=a(39),B=a(40),K=a(24),V=Object(W.combineReducers)({dataReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(b.a)(Object(b.a)({},e),{},{data:t.payload});case h:return Object(b.a)(Object(b.a)({},e),{},{measure:t.payload});case O:return Object(b.a)(Object(b.a)({},e),{},{isDanger:t.payload});case p:var a=e.data.find((function(e){return e.id===t.id})),c=e.destructionCart.find((function(e){return e?e.id===t.id:null}));return Object(b.a)(Object(b.a)({},e),{},{destructionCart:c?Object(_.a)(e.destructionCart):[].concat(Object(_.a)(e.destructionCart),[a])});case f:return Object(b.a)(Object(b.a)({},e),{},{destructionCart:Object(_.a)(e.destructionCart.filter((function(e){return e.id!==t.id})))});case v:return Object(b.a)(Object(b.a)({},e),{},{offset:e.offset+5});case x:return Object(b.a)(Object(b.a)({},e),{},{offset:5});case N:return Object(b.a)(Object(b.a)({},e),{},{currentItem:t.payload});default:return e}}}),q=Object(Y.composeWithDevTools)(Object(W.applyMiddleware)(Object(K.save)(),B.a))(W.createStore)(V,Object(K.load)());a(82);s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(i.a,{store:q,children:Object(l.jsx)(Q,{})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.944f5885.chunk.js.map