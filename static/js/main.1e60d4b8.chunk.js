(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var s=n(1),c=n(6),a=n.n(c),i=n(7),r=n(3),l=n(16),j=n(0),d=Object(s.createContext)(),u=function(t){var e=JSON.parse(localStorage.getItem("tasks"))||[],n=Object(s.useState)(e),c=Object(r.a)(n,2),a=c[0],u=c[1];Object(s.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(a))}),[a]);var o=Object(s.useState)(null),b=Object(r.a)(o,2),O=b[0],f=b[1];return Object(j.jsx)(d.Provider,{value:{tasks:a,addTask:function(t){u([].concat(Object(i.a)(a),[{title:t,id:Object(l.a)()}]))},removeTask:function(t){u(a.filter((function(e){return e.id!==t})))},clearList:function(){u([])},findItem:function(t){var e=a.find((function(e){return e.id===t}));f(e)},editTask:function(t,e){var n=a.map((function(n){return n.id===e?{title:t,id:e}:n}));console.log(n),u(n),f(null)},editItem:O},children:t.children})},o=function(t){var e=t.task,n=Object(s.useContext)(d),c=n.removeTask,a=n.findItem;return Object(j.jsxs)("li",{className:"list-item",children:[Object(j.jsxs)("span",{children:[e.title," "]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"btn-delete task-btn",onClick:function(){return c(e.id)},children:Object(j.jsx)("i",{className:"fas fa-trash-alt"})})," ",Object(j.jsx)("button",{className:"btn-edit task-btn",onClick:function(){return a(e.id)},children:Object(j.jsx)("i",{className:"fas fa-pen"})})]})]})},b=function(){var t=Object(s.useContext)(d).tasks;return Object(j.jsx)("div",{children:t.length?Object(j.jsx)("ul",{className:"list",children:t.map((function(t){return Object(j.jsx)(o,{task:t},t.id)}))}):Object(j.jsx)("div",{className:"no-tasks",children:"No Tasks"})})},O=function(){var t=Object(s.useContext)(d),e=t.addTask,n=t.clearList,c=t.editTask,a=t.editItem,i=Object(s.useState)(""),l=Object(r.a)(i,2),u=l[0],o=l[1];return Object(s.useEffect)((function(){a?(o(a.title),console.log(a)):o("")}),[a]),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a?c(u,a.id):(e(u),o(""))},className:"form",children:[Object(j.jsx)("input",{type:"text",placeholder:"Add Task...",value:u,onChange:function(t){o(t.target.value)},required:!0,className:"task-input"}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"submit",className:"btn add-task-btn",children:a?"Edit Task":"Add Task"}),Object(j.jsx)("button",{className:"btn clear-btn",onClick:n,children:"Clear"})]})]})},f=(n(13),function(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h1",{children:"Task Manager"})})}),m=function(){return Object(j.jsx)(u,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"app-wrapper",children:[Object(j.jsx)(f,{}),Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(O,{}),Object(j.jsx)(b,{})]})]})})})};a.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1e60d4b8.chunk.js.map