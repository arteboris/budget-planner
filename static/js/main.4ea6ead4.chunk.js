(this["webpackJsonpgoit-react-hw-05-budget-planner"]=this["webpackJsonpgoit-react-hw-05-budget-planner"]||[]).push([[0],{25:function(e,n,t){e.exports={App:"App_App__LM7_a","App-logo":"App_App-logo__3hhGi","App-header":"App_App-header__1Q5ei","App-link":"App_App-link__AGai-",container:"App_container__11cut"}},30:function(e,n,t){e.exports=t(50)},49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(9),u=t.n(o),l=t(3),c=t(10),i=t(11),p=t(13),s=t(12),m=t(14),d=t(1),b=t(2);function f(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  width: 100%;\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return f=function(){return e},e}var v=b.a.form(f()),h=function(e){var n=e.onSubmit,t=void 0===n?function(){return null}:n,a=e.children;return r.a.createElement(v,{onSubmit:t},a)};function x(){var e=Object(d.a)(["\n  display: inline-block;\n  font-size: 20px;\n  color: #171718;\n  cursor: pointer;\n  ","\n"]);return x=function(){return e},e}var g=b.a.label(x(),(function(e){return e.customStyles})),E=function(e){var n=e.children,t=e.customStyles;return r.a.createElement(g,{customStyles:t},n)};function y(){var e=Object(d.a)(["\n  color: #171718;\n  font: inherit;\n  font-size: 1.2rem;\n  padding: 16px;\n  border-radius: 4px;\n  border: 1px solid #bdbdbd;\n  width: 100%;\n  outline: 0;\n\n  &:focus {\n    border: 1px solid #2b32b2;\n  }\n"]);return y=function(){return e},e}var j=b.a.input(y()),O=function(e){var n=e.type,t=void 0===n?"text":n,a=e.value,o=void 0===a?"":a,u=e.onChange,l=void 0===u?function(){return null}:u,c=e.name,i=void 0===c?"":c;return r.a.createElement(j,{type:t,value:o,onChange:l,name:i})},S=O;function _(){var e=Object(d.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  background-color: #3f51b5;\n  border: 0;\n  outline: 0;\n  padding: 8px 24px;\n  border-radius: 4px;\n  cursor: pointer;\n  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);\n  font: inherit;\n  text-transform: uppercase;\n  user-select: none;\n\n  transition: background-color 200ms ease-in-out;\n\n  &:hover {\n    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);\n    background-color: #303f9f;\n  }\n"]);return _=function(){return e},e}O.defaultProps={name:""};var A=b.a.button(_()),C=function(e){var n=e.type,t=void 0===n?"button":n,a=e.label,o=void 0===a?"":a,u=e.onClick,l=void 0===u?function(){return null}:u;return r.a.createElement(A,{type:t,onClick:l},o)};C.defaultProps={onClick:null,type:""};var w=C,k=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(p.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={value:0},t.handleChange=function(e){t.setState({value:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.getBudget(t.state.value),t.setState({value:0})},t}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement(h,{onSubmit:this.handleSubmit},r.a.createElement(E,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter your total budget",r.a.createElement(S,{type:"number",value:e,onChange:this.handleChange})),r.a.createElement(w,{label:"Save",type:"submit"}))}}]),n}(a.Component),P="GET_BUDGET",B="GET_EXPENSES",D="DELETE_EXPENSE",G={getBudget:function(e){return{type:P,payload:e}}},T=Object(l.b)(null,G)(k),z=t(23),N=t(24),R=t.n(N),F=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(p.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={name:"",amount:0},t.handleChange=function(e){t.setState(Object(z.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.amount,o={id:R.a.generate(),name:a,amount:Number(r)};t.props.getExpenses(o),t.setState({name:"",amount:0})},t}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this.state,n=e.name,t=e.amount;return r.a.createElement(h,{onSubmit:this.handleSubmit},r.a.createElement(E,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter expense name",r.a.createElement(S,{type:"text",name:"name",value:n,onChange:this.handleChange})),r.a.createElement(E,{customStyles:"\n  margin-bottom: 16px;\n"},"Enter expense amount",r.a.createElement(S,{type:"number",name:"amount",value:t,onChange:this.handleChange})),r.a.createElement(w,{label:"Add",type:"submit"}))}}]),n}(a.Component),J={getExpenses:function(e){return{type:B,payload:e}}},L=Object(l.b)(null,J)(F);function X(){var e=Object(d.a)(["\n  border-collapse: collapse;\n  text-align: center;\n  width: 100%;\n\n  tr {\n    border-bottom: 1px solid #212121;\n  }\n\n  td,\n  th {\n    padding-top: 8px;\n    padding-bottom: 8px;\n  }\n"]);return X=function(){return e},e}var I=b.a.table(X()),M=function(e){var n=e.items,t=e.onRemove;return r.a.createElement(I,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Expense name"),r.a.createElement("th",null,"Expense amount"),r.a.createElement("th",null))),r.a.createElement("tbody",null,n.length>0&&n.map((function(e){var n=e.id,a=e.name,o=e.amount;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,a),r.a.createElement("td",null,o),r.a.createElement("td",null,r.a.createElement(w,{label:"Delete",onClick:function(){return t(n)}})))}))))},Q=function(e){return e.budget},U=function(e){return e.expenses.reduce((function(e,n){return e+n.amount}),0)},$=function(e){return Q(e)-U(e)},q=function(e){return e.expenses},H=Object(l.b)((function(e){return{items:q(e)}}),(function(e){return{onRemove:function(n){return e({type:D,payload:n})}}}))(M);function K(){var e=Object(d.a)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 48px;\n"]);return K=function(){return e},e}function V(){var e=Object(d.a)(["\n  margin-top: 0;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 24px;\n"]);return V=function(){return e},e}function W(){var e=Object(d.a)(["\n  text-align: center;\n  padding: 8px 24px;\n  color: ",";\n  user-select: none;\n"]);return W=function(){return e},e}var Y=b.a.div(W(),(function(e){return e.isPositive?"#388E3C":"#D32F2F"})),Z=b.a.p(V()),ee=b.a.p(K()),ne=function(e){var n=e.label,t=e.value,a=e.isPositive;return r.a.createElement(Y,{isPositive:a},r.a.createElement(Z,null,n),r.a.createElement(ee,null,t,"\xa0$"))},te=ne;function ae(){var e=Object(d.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return ae=function(){return e},e}ne.defaultProps={isPositive:!1};var re=b.a.section(ae()),oe=function(e){var n=e.budget,t=e.expenses,a=e.balance;return r.a.createElement(re,null,r.a.createElement(te,{label:"Budget",value:n,isPositive:!0}),r.a.createElement(te,{label:"Expenses",value:t}),r.a.createElement(te,{label:"Balance",value:a,isPositive:a>=0}))},ue=Object(l.b)((function(e){return{budget:Q(e),expenses:U(e),balance:$(e)}}),null)(oe),le=t(25),ce=t.n(le),ie=function(){return r.a.createElement("div",{className:ce.a.container},r.a.createElement(T,null),r.a.createElement(ue,null),r.a.createElement(L,null),r.a.createElement(H,null))},pe=t(6),se=t(26),me=t(27),de=Object(pe.combineReducers)({budget:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case P:return a;default:return e}},expenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case B:return[a].concat(Object(me.a)(e));case D:return e.filter((function(e){return e.id!==a}));default:return e}}}),be=Object(pe.createStore)(de,Object(se.devToolsEnhancer)());t(49);u.a.render(r.a.createElement(l.a,{store:be},r.a.createElement(ie,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.4ea6ead4.chunk.js.map