(this["webpackJsonpchmod-calculator"]=this["webpackJsonpchmod-calculator"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),l=a.n(c),o=(a(10),a(1)),s={0:"---",1:"--x",2:"-w-",3:"-wx",4:"r--",5:"r-x",6:"rw-",7:"rwx"},m=function(e){if(/\d/.test(e)){var t=[];return(e+="").split("").forEach((function(e){e<=7&&t.push(s[e])})),t.join("")}if(""!==e){var a=e.match(/.{1,3}/g),r=[],n=Object.keys(s);return a.forEach((function(e){r.push(n.find((function(t){return s[t]===e})))})),r.join("")}return e},u=n.a.createContext({octal:"octal"}),i=function(e){var t=n.a.useContext(u),a=t.octal,c=t.setOctal,l=t.symbolic,o=t.setSymbolic,s=t.symbolicDir,i=t.setSymbolicDir,d=t.ownerPerms,E=t.groupPerms,v=t.otherPerms,h=e.name,w="octal"===h,b=w?a:"symbolic"===h?l:s,f="symbolicDir"===h,p=w?777:m(777);Object(r.useEffect)((function(){var e=b.toString().split("");e.length<4&&(e[0]=d.total,c(e.join("")))}),[d,b,c]),Object(r.useEffect)((function(){var e=b.toString().split("");e.length<4&&(e[1]=E.total,c(e.join("")))}),[E,b,c]),Object(r.useEffect)((function(){var e=b.toString().split("");e.length<4&&(e[2]=v.total,c(e.join("")))}),[v,b,c]),Object(r.useEffect)((function(){o("-".concat(m(a))),i("d".concat(m(a)))}),[l,a,o,i]);return console.log(n.a.useContext(u)),n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{htmlFor:h},h," ",n.a.createElement("input",{type:"text",pattern:w?"[0-9]":"[wrx]",className:"rounded",name:h,onChange:function(e){w?(c(e.target.value),o("-".concat(m(e.target.value))),i("d".concat(m(e.target.value)))):(o(e.target.value),c(m(e.target.value)),i("d".concat(e.target.value)))},placeholder:p,value:b,readOnly:f})))},d=a(2),E=function(e){var t=e.name,a=e.enabled,r=e.value,c=e.type,l=n.a.useState(!!a),s=Object(o.a)(l,2),m=s[0],i=s[1],E=n.a.useContext(u),v=(E.setOctal,E.octal,E.setOwnerPerms),h=E.setGroupPerms,w=E.setOtherPerms,b=E.ownerPerms,f=E.groupPerms,p=E.otherPerms,g=function(e){switch(e){case"owner":return b;case"group":return f;case"other":return p;default:throw new Error}},y=function(e,t){switch(e){case"owner":v(Object(d.a)({},b,{},t));break;case"group":h(Object(d.a)({},f,{},t));break;case"other":w(Object(d.a)({},p,{},t));break;default:throw new Error}};return n.a.createElement("li",null,n.a.createElement("label",null,t),n.a.createElement("input",{type:"checkbox",name:t,checked:m,onChange:function(e){var t=m;i(e.target.checked);var a=function(e,t){return{total:e?t.total+-1*r:t.total+r}}(t,g(c));console.log(a),y(c,a)},value:r}))},v=(a(11),function(){var e=n.a.useContext(u),t=e.ownerPerms,a=e.groupPerms,r=e.otherPerms,c=[4,2,1],l=Object.keys(t.rwx).map((function(e,a){return n.a.createElement(E,{name:e,enabled:t.rwx[e],key:a,value:c[a],type:"owner"})})),o=Object.keys(a.rwx).map((function(e,t){return n.a.createElement(E,{name:e,enabled:a.rwx[e],key:t,value:c[t],type:"group"})})),s=Object.keys(r.rwx).map((function(e,t){return n.a.createElement(E,{name:e,enabled:r.rwx[e],key:t,value:c[t],type:"other"})}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h3",null,"Owner")),n.a.createElement("div",{className:"col"},n.a.createElement("h3",null,"Group")),n.a.createElement("div",{className:"col"},n.a.createElement("h3",null,"Other"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("ul",null,l)),n.a.createElement("div",{className:"col-sm"},n.a.createElement("ul",null,o)),n.a.createElement("div",{className:"col-sm"},n.a.createElement("ul",null,s))))});var h=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement(v,null),n.a.createElement("div",{className:"jumbotron"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement(i,{name:"octal"})),n.a.createElement("div",{className:"col-sm"},n.a.createElement(i,{name:"symbolic"})),n.a.createElement("div",{className:"col-sm"},n.a.createElement(i,{name:"symbolicDir"}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement((function(e){var t=e.children,a=n.a.useState(777),r=Object(o.a)(a,2),c=r[0],l=r[1],s=n.a.useState("-".concat(m(777))),i=Object(o.a)(s,2),d=i[0],E=i[1],v=n.a.useState("d".concat(m(777))),h=Object(o.a)(v,2),w=h[0],b=h[1],f=n.a.useState({rwx:{read:4,write:2,execute:1},total:7}),p=Object(o.a)(f,2),g=p[0],y=p[1],O=n.a.useState({rwx:{read:4,write:2,execute:1},total:7}),x=Object(o.a)(O,2),j=x[0],P=x[1],k=n.a.useState({rwx:{read:4,write:2,execute:1},total:7}),N=Object(o.a)(k,2),S={octal:c,setOctal:l,symbolic:d,setSymbolic:E,symbolicDir:w,setSymbolicDir:b,ownerPerms:g,setOwnerPerms:y,groupPerms:j,setGroupPerms:P,otherPerms:N[0],setOtherPerms:N[1]};return n.a.createElement(u.Provider,{value:S},t)}),null,n.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.e7aa0547.chunk.js.map