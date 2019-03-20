(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},28:function(e,t,a){e.exports=a(88)},56:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),o=a(91),i=a(2),s=a(3),u=a(5),m=a(4),d=a(6),p=a(90),h=a(92),E=a(8),f=a.n(E),b=a(14),g=a(36),v={url:"https://glacial-chamber-34618.herokuapp.com",registerUser:function(e,t,a,n,r){return fetch("".concat(this.url,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:e,surname:t,email:a,password:n,passwordConfirmation:r})}).then(function(e){return e.json()}).then(function(e){var t=e.id,a=e.error;if(a)throw Error(a);return t})},authenticateUser:function(e,t){if("string"!==typeof e)throw TypeError("".concat(e," is not a string"));if(!e.trim().length)throw Error("email is empty");if("string"!==typeof t)throw TypeError("".concat(t," is not a string"));if(!t.trim().length)throw Error("password is empty");return fetch("".concat(this.url,"/user/auth"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(function(e){return e.json()}).then(function(e){if(e.error)throw Error(e.error);return e.data})},retrieveUser:function(e,t){if("string"!==typeof t)throw TypeError("".concat(t," is not a string"));if(!t.trim().length)throw Error("token is empty");return fetch("".concat(this.url,"/users/").concat(e),{headers:{authorization:"Bearer ".concat(t)}}).then(function(e){return e.json()}).then(function(e){if(e.error)throw Error(e.error);return e})},retrieveOrder:function(e){return fetch("".concat(this.url,"/order/").concat(e)).then(function(e){return e.json()}).then(function(e){if(e.error)throw Error(e.error);return e.data})},removeUser:function(e,t,a){if("string"!==typeof e)throw TypeError("".concat(e," is not a string"));if(!e.trim().length)throw Error("token is empty");if("string"!==typeof t)throw TypeError("".concat(t," is not a string"));if(!t.trim().length)throw Error("email is empty");if("string"!==typeof a)throw TypeError("".concat(a," is not a string"));if(!a.trim().length)throw Error("password is empty");return fetch("".concat(this.url,"/user"),{method:"DELETE",headers:{authorization:"Bearer ".concat(e),"content-type":"application/json"},body:JSON.stringify({email:t,password:a})}).then(function(e){return e.json()}).then(function(e){if(e.error)throw Error(e.error);return e})},listProducts:function(e){var t=this;return Object(b.a)(f.a.mark(function a(){return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",g.get("".concat(t.url,"/categories/").concat(e)).then(function(e){var t=e.status,a=e.data;if(200!==t||"OK"!==a.status)throw Error("unexpected response status ".concat(t," (").concat(a.status,")"));return a.data}).catch(function(e){if(e.response){var t=e.response.data.error;throw Error(t)}throw e}));case 1:case"end":return a.stop()}},a)}))()},listProductsByIds:function(e){var t=this;return Object(b.a)(f.a.mark(function a(){return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",g.get(t.url+"/products/?ids="+e).then(function(e){}).catch(function(e){if(e.response){var t=e.response.data.error;throw Error(t)}throw e}));case 1:case"end":return a.stop()}},a)}))()},getProduct:function(e){var t=this;return Object(b.a)(f.a.mark(function a(){return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if((e=e.trim()).length){a.next=2;break}throw Error("user productId is empty or blank");case 2:if("string"===typeof e){a.next=4;break}throw Error("user productId is not a string");case 4:return a.abrupt("return",g.get("".concat(t.url,"/categories/products/").concat(e)).then(function(e){var t=e.status,a=e.data;if(200!==t||"OK"!==a.status)throw Error("unexpected response status ".concat(t," (").concat(a.status,")"));return a.data}).catch(function(e){if(e.response){var t=e.response.data.error;throw Error(t)}throw e}));case 5:case"end":return a.stop()}},a)}))()},makeOrder:function(e,t,a,n){var r=this;return Object(b.a)(f.a.mark(function c(){return f.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",g.post(r.url+"/order",{paymentMethod:e,status:t,products:a,userId:n}).then(function(e){}).catch(function(e){if(e.response){var t=e.response.data.error;throw Error(t)}throw e}));case 1:case"end":return c.stop()}},c)}))()},listTheProducts:function(){var e=this;return Object(b.a)(f.a.mark(function t(){return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",g.get("".concat(e.url,"/products")).then(function(e){var t=e.status,a=e.data;if(200!==t||"OK"!==a.status)throw Error("unexpected response status ".concat(t," (").concat(a.status,")"));return a.data}).catch(function(e){if(e.response){var t=e.response.data.error;throw Error(t)}throw e}));case 1:case"end":return t.stop()}},t)}))()}},_={__userId__:null,__userApiProducts__:null,_userId:null,_orderStatus:"paid",registerUser:function(e,t,a,n,r){if("string"!==typeof e)throw TypeError(e+" is not a string");return Object(b.a)(f.a.mark(function c(){var l;return f.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,v.registerUser(e,t,a,n,r);case 3:l=c.sent,console.log(l),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),console.log(c.t0);case 10:case"end":return c.stop()}},c,null,[[0,7]])}))()},logInUser:function(e,t){var a=this;if("string"!==typeof e)throw TypeError(e+" is not a string");if(!e.trim().length)throw Error("email cannot be empty");if("string"!==typeof t)throw TypeError(t+" is not a string");if(!t.trim().length)throw Error("password cannot be empty");return v.authenticateUser(e,t).then(function(e){var t=e.token,n=e.id;a.__userApiToken__=t,a.__userId__=n})},get isUserLoggedIn(){return!!this.__userApiToken__},logout:function(){sessionStorage.clear(),window.location.reload()},retrieveUser:function(){return v.retrieveUser(this.__userId__,this.__userApiToken__).then(function(e){return e})},retrieveOrder:function(){return v.retrieveOrder(this.__userId__).then(function(e){return e})},listProductsByIds:function(){if(null!==this.__userApiProducts__)return v.listProductsByIds(this.__userApiProducts__.map(function(e){return e._id}));console.log("QQ")},getProduct:function(e){return v.getProduct(e).then(function(e){return e})},listTheProducts:function(){return v.listTheProducts().then(function(e){return e})},addProductToCart:function(e){var t=this.__userApiProducts__||[];t.push(e),this.__userApiProducts__=t},getCart:function(){return this.__userApiProducts__||[]},removeProductFromCart:function(){sessionStorage.removeItem("__userApiProducts__"),window.location.reload()},makeOrder:function(e,t){return v.makeOrder(e,this._orderStatus,t,this.__userId__)},clearCart:function(){sessionStorage.removeItem("__userApiProducts__")}},y=(a(56),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).getItems=function(){var t=_.getCart();e.setState({cart:t})},e.handleSubmitOrder=function(t){t.preventDefault();var a=e.state,n=a.paymentMethod,r=a.cart,c=a.email;""!==n||""!==c?_.makeOrder(n,r).then(e.props.onOrder()).catch(function(e){return console.log(e.message)}):console.log("Please, fill all fields"),alert("Thank you for your purchase!")},e.handlerCapturingPaymentMethod=function(t){e.setState({paymentMethod:t.target.value})},e.handlerCapturingEmail=function(t){e.setState({email:t.target.value})},e.state={isLogged:!1,isRegistered:!1,paymentMethod:"",cart:null,email:""},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.retrieveUser().then(function(t){e.setState({email:t.email})}),this.getItems()}},{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("h1",{className:"title"},"Payment info:"),r.a.createElement("p",{id:"demo"}),r.a.createElement("section",{className:"globalsectionorder"},r.a.createElement("ul",null,r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmitOrder},r.a.createElement("div",{className:"paymentemail"},r.a.createElement("label",null,"Email:"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"email",placeholder:"email",onChange:this.handlerCapturingEmail,value:this.state.email}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Payment Method:"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"payment method",placeholder:"Payment Method",onChange:this.handlerCapturingPaymentMethod,value:this.state.paymentMethod}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Card number:"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"number",placeholder:"Card number"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",null,"Secret number:"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"number",placeholder:"Secret number"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"submitbutton"},"Submit payment")))))))}}]),t}(n.Component)),w=a(13),O=a(89);a(58),a(60);var N=function(e){var t=e.message,a=e.level;return r.a.createElement("section",{className:"feedback ".concat(a?"feedback--".concat(a):"")},t)},j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:null,surname:null,email:null,password:null,passwordConfirmation:null},a.handleNameInput=function(e){return a.setState({name:e.target.value})},a.handleSurnameInput=function(e){return a.setState({surname:e.target.value})},a.handleEmailInput=function(e){return a.setState({email:e.target.value})},a.handlePasswordInput=function(e){return a.setState({password:e.target.value})},a.handlePasswordConfirmationInput=function(e){return a.setState({passwordConfirmation:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault();var t=Object(w.a)(Object(w.a)(a)),n=t.state,r=n.name,c=n.surname,l=n.email,o=n.password,i=n.passwordConfirmation;(0,t.props.onRegister)(r,c,l,o,i)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.handleNameInput,t=this.handleSurnameInput,a=this.handleEmailInput,n=this.handlePasswordInput,c=this.handleFormSubmit,l=this.handlePasswordConfirmationInput,o=this.props.feedback;return r.a.createElement("section",{className:"register"},r.a.createElement("form",{className:"form",onSubmit:c},r.a.createElement("input",{type:"text",name:"name",onChange:e,placeholder:"name"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"surname",onChange:t,placeholder:"surname"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"email",onChange:a,placeholder:"email"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",onChange:n,placeholder:"password"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"passwordConfirmation",onChange:l,placeholder:"confirm password"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",null,"Register"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",null,r.a.createElement(O.a,{className:"decoration",to:"/login"},"Login"))),o&&r.a.createElement(N,{message:o,level:"warn"}))}}]),t}(n.Component),x=(a(64),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleEmailInput=function(e){return a.setState({email:e.target.value})},a.handlePasswordInput=function(e){return a.setState({password:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault();var t=Object(w.a)(Object(w.a)(a)),n=t.state,r=n.email,c=n.password;(0,t.props.onLogin)(r,c)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.handleEmailInput,t=this.handlePasswordInput,a=this.handleFormSubmit,n=this.props,c=n.title,l=n.feedback;return r.a.createElement("section",{className:"login"},r.a.createElement("h2",null,c),r.a.createElement("form",{onSubmit:a},r.a.createElement("input",{type:"text",name:"email",onChange:e,placeholder:"email"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",onChange:t,placeholder:"password"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",null,"Login"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",null,r.a.createElement(O.a,{className:"decoration",to:"/register"},"Register"))),l&&r.a.createElement(N,{message:l,level:"warn"}))}}]),t}(n.Component)),k=(a(66),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("h1",{className:"title"},"About us:"),r.a.createElement("p",{className:"text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement("nav",{className:"accordion arrows"},r.a.createElement("header",{className:"box"},r.a.createElement("label",{htmlFor:"acc-close",className:"box-title"},"FAQ:")),r.a.createElement("input",{type:"radio",name:"accordion",id:"cb1"}),r.a.createElement("section",{className:"box"},r.a.createElement("label",{className:"box-title",htmlFor:"cb1"},"FAQ 1:"),r.a.createElement("label",{className:"box-close",htmlFor:"acc-close"}),r.a.createElement("div",{className:"box-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),r.a.createElement("input",{type:"radio",name:"accordion",id:"cb2"}),r.a.createElement("section",{className:"box"},r.a.createElement("label",{className:"box-title",htmlFor:"cb2"},"FAQ 2:"),r.a.createElement("label",{className:"box-close",htmlFor:"acc-close"}),r.a.createElement("div",{className:"box-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),r.a.createElement("input",{type:"radio",name:"accordion",id:"cb3"}),r.a.createElement("section",{className:"box"},r.a.createElement("label",{className:"box-title",htmlFor:"cb3"},"FAQ 3:"),r.a.createElement("label",{className:"box-close",htmlFor:"acc-close"}),r.a.createElement("div",{className:"box-content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),r.a.createElement("input",{type:"radio",name:"accordion",id:"acc-close"})))}}]),t}(n.Component)),P=(a(68),a(70),function(e){var t=e.property,a=t.index,n=t.picture,c=t.name;return r.a.createElement("div",{id:"card-".concat(a),className:"card"},r.a.createElement("img",{src:n,alt:c}),r.a.createElement("div",{className:"details"},r.a.createElement("p",{className:"location"},c)))}),C={properties:[{_id:"593e9297e17df20c4a237d42",index:0,picture:"https://i.gyazo.com/3d70b6147d8b6147b7f43e421ca5727a.png",name:""},{_id:"593e9297ec4cca9c56bf61af",index:1,picture:"https://i.gyazo.com/ec19fb0fd06da24f5f0e396c51a09a9f.png",name:""},{_id:"593e929773c71925e5d7c11c",index:2,picture:"https://i.gyazo.com/84c685722b591e36397889d90c823159.png",name:""}]},S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).nextProperty=function(){var e=a.state.property.index+1;a.setState({property:C.properties[e]})},a.prevProperty=function(){var e=a.state.property.index-1;a.setState({property:C.properties[e]})},a.state={properties:C.properties,property:C.properties[0]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.properties,n=t.property;return r.a.createElement("div",{className:"App"},r.a.createElement("img",{src:"https://i.gyazo.com/a03279cbcd72c4890e8d03250d0efe96.png",className:"bigImage",alt:"404"}),r.a.createElement("p",{className:"text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){return e.prevProperty()},disabled:0===n.index},"Prev"),r.a.createElement("button",{onClick:function(){return e.nextProperty()},disabled:n.index===C.properties.length-1},"Next")),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"cards-slider active-slide-".concat(n.index)},r.a.createElement("div",{className:"cards-slider-wrapper",style:{transform:"translateX(-".concat(n.index*(100/a.length),"%)")}},a.map(function(e){return r.a.createElement(P,{key:e._id,property:e})})))))}}]),t}(n.Component);var I=Object(h.a)(function(e){var t=["/"].includes(e.location.pathname);return r.a.createElement("section",null,t&&r.a.createElement(S,null))}),A=(a(18),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},categories:[]},a.logout=function(){_.logout(),a.props.history.push("/login")},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(O.a,{to:"/profile"},"Profile")),r.a.createElement("li",null,r.a.createElement(O.a,{to:"/cart"},"Cart")),r.a.createElement("li",null,r.a.createElement("button",{onClick:this.logout},"Log Out")))}}]),t}(n.Component)),T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},categories:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(O.a,{to:"/register"},"Register")),r.a.createElement("li",null,r.a.createElement(O.a,{to:"/login"},"Log In")))}}]),t}(n.Component),q=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("div",{className:"navegacion"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(O.a,{to:"/"},r.a.createElement("img",{src:"https://i.gyazo.com/7dd6933988eb4cbbe3915c6ce92de52f.png",className:"bigLogo",alt:"404"}))),r.a.createElement("li",null,"  ",r.a.createElement(O.a,{to:"/about"},"About")),r.a.createElement("li",null,"  ",r.a.createElement(O.a,{to:"/contact"},"Contact")),r.a.createElement("li",null,"  ",r.a.createElement(O.a,{to:"/products"},"Products")),r.a.createElement("li",null,r.a.createElement("p",{className:"userLetters"},"User"),r.a.createElement("div",{className:"submenu"},r.a.createElement("div",{className:"submenu-items"},_.__userApiToken__&&r.a.createElement(A,null)),r.a.createElement("div",{className:"submenu-items"},!_.__userApiToken__&&r.a.createElement(T,null)))),r.a.createElement("li",null,r.a.createElement(O.a,{to:"/cart"},r.a.createElement("img",{src:"https://i.gyazo.com/7a5ababebdcc9837031e78b33e91b156.png",className:"cartLogo",alt:"404"}))),r.a.createElement("span",{className:"py-2 d-none d-md-inline-block"})))))}}]),t}(n.Component),L=(a(74),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("h1",{className:"title"},"Contact:"),r.a.createElement("table",{className:"table"},r.a.createElement("tr",null,r.a.createElement("th",null,"Name:"),r.a.createElement("th",null,"Position:"),r.a.createElement("th",null,"Telephone:")),r.a.createElement("tr",null,r.a.createElement("td",null,"Gonzalo Garcia"),r.a.createElement("td",null,"Manager"),r.a.createElement("td",null,"99 999 99 99")),r.a.createElement("tr",null,r.a.createElement("td",null,"Alvaro Alba"),r.a.createElement("td",null,"Sales"),r.a.createElement("td",null,"99 999 99 99")),r.a.createElement("tr",null,r.a.createElement("td",null,"Yngrid Yrivarren"),r.a.createElement("td",null,"PR"),r.a.createElement("td",null,"99 999 99 99"))),r.a.createElement("p",{className:"text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))}}]),t}(n.Component));a(76);var F=function(){return r.a.createElement("footer",{className:" py-5 footer"},r.a.createElement("section",{className:"row"},r.a.createElement("div",{className:"col-12 col-md"}),r.a.createElement("div",null,r.a.createElement("h5",null,"Clintu:"),r.a.createElement("ul",null,r.a.createElement(O.a,{to:"/"},"Garant\xeda"),r.a.createElement("br",null),r.a.createElement(O.a,{to:"/about"},"Preguntas"),r.a.createElement("br",null),r.a.createElement(O.a,{to:"/contact"},"Llamanos"),r.a.createElement("p",null,"Tlf: 99 999 99 99"))),r.a.createElement("div",null,r.a.createElement("h5",null,"Servicios:"),r.a.createElement("ul",null,r.a.createElement("p",null,"Limpieza dom\xe9stica"),r.a.createElement("p",null,"Limpieza empresas"),r.a.createElement("p",null,"Manitas"),r.a.createElement(O.a,{to:"/products"},"Ver todos los servicios")))))},U=(a(78),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={name:"",surname:"",email:"",orders:[]},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(!_.__userApiToken__)return this.props.history.push("/login");_.retrieveUser().then(function(t){e.setState({name:t.data.name,surname:t.data.surname,email:t.data.email})}),_.retrieveOrder().then(function(t){e.setState({orders:t})})}},{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("h1",{className:"title"},"Profile:"),r.a.createElement("div",{className:"userinfo"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{value:"".concat(this.state.name)}),r.a.createElement("label",null,"Surname"),r.a.createElement("input",{value:"".concat(this.state.surname)}),r.a.createElement("label",null,"Email:"),r.a.createElement("input",{value:"".concat(this.state.email)})),r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"Purchase history:"),r.a.createElement("table",{className:"sectionpaymenthistory"},r.a.createElement("div",{className:"innerpayment"},r.a.createElement("label",null,"Payment Method:"),r.a.createElement("br",null),this.state.orders.map(function(e){return r.a.createElement("div",null,e.paymentMethod)})),r.a.createElement("div",{className:"innerpayment"},r.a.createElement("label",null,"Status:"),r.a.createElement("br",null),this.state.orders.map(function(e){return r.a.createElement("div",null,e.status)})),r.a.createElement("div",{className:"innerpayment"},r.a.createElement("label",null,"Product reference:"),r.a.createElement("br",null),this.state.orders.map(function(e){return r.a.createElement("div",null,e.products)})))))}}]),t}(n.Component)),M=(a(80),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,_.__userApiProducts__&&r.a.createElement("h1",{className:"title"},"Cart:"),!_.__userApiProducts__&&r.a.createElement("h1",{className:"title"},"Cart is empty!"),r.a.createElement("section",{className:"globalsection"},r.a.createElement("section",{className:"sectioncart"},r.a.createElement("table",null,r.a.createElement("head",null),r.a.createElement("div",null,_.getCart().map(function(e){return r.a.createElement("tr",{className:"box",key:e._id},r.a.createElement("td",null," ",r.a.createElement("h4",null,e.name)),r.a.createElement("td",null," ",r.a.createElement("h4",null,e.price," \u20ac")))}))),r.a.createElement("div",{className:"pricebuttons"},r.a.createElement("div",{className:"totalPrice"},r.a.createElement("h2",null,"Total price"),_.__userApiProducts__&&r.a.createElement("h2",null,_.__userApiProducts__.reduce(function(e,t){return e+t.price},0).toFixed(2),"\u20ac")),r.a.createElement("div",{className:"buttons2"},_.__userApiProducts__&&_.__userApiToken__&&r.a.createElement("button",null,r.a.createElement(O.a,{className:"decoration",to:"/order"},"Comprar")," "),r.a.createElement("br",null),!_.__userApiToken__&&r.a.createElement("button",null,r.a.createElement(O.a,{className:"decoration",to:"/register"},"Registrate para comprar!"),"   "),r.a.createElement("br",null),r.a.createElement("button",{className:"decoratonx\xba",onClick:function(){return _.removeProductFromCart()}},"Clear Cart"))))))}}]),t}(n.Component)),Q=(a(82),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={product:[]},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.scrollTo(0,0),_.getProduct(this.props.productId).then(function(t){return e.setState({product:t})}),_.listTheProducts().then(function(t){e.setState({products:t})})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement("section",{className:"section3"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{className:"productImage",src:this.state.product.image,id:"img-".concat(this.state.product._id),alt:"404"})),r.a.createElement("h2",{className:"productName"},this.state.product.name),r.a.createElement("div",null,r.a.createElement("p",{className:"productDescription"},this.state.product.description),r.a.createElement("div",{className:"productCard"},r.a.createElement("h3",{className:"productPrice"},this.state.product.price," \u20ac"),r.a.createElement("button",{className:"addcartbutton",onClick:function(){return _.addProductToCart(e.state.product)}},"Add to cart"))))))}}]),t}(n.Component)),R=(a(84),a(86),function(e){var t=e.items;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement("ul",{className:"product"},r.a.createElement(O.a,{to:"product/".concat(e._id)},r.a.createElement("div",null,r.a.createElement("img",{className:"image",id:"img-".concat(e._id),src:e.image,alt:"404"}))),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h3",null,e.name),r.a.createElement("br",null),r.a.createElement("p",{className:"description"},e.description),r.a.createElement("br",null),r.a.createElement(O.a,{className:"button",to:"product/".concat(e._id)},"Product Details")))}))}),z=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={products:[]},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.listTheProducts().then(function(t){return e.setState({products:t})})}},{key:"render",value:function(){return r.a.createElement("main",{className:"main"},r.a.createElement("h1",{className:"title"},"Products:"),r.a.createElement(R,{className:"products",productDetail:!0,items:this.state.products}))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={cart:[],total:[],loggedIn:_.loggedIn},a.onLogin=function(){a.setState({loggedIn:!0}),a.props.history.push("/")},a.onLogout=function(){a.setState({loggedIn:!1})},a.onOrder=function(){_.clearCart(),a.props.history.push("/")},a.onRemoveFromCart=function(e){_.removeProductFromCart(e),a.getItems()},a.handleRegister=function(e,t,n,r,c){try{_.registerUser(e,t,n,r,c).then(function(){return a.props.history.push("/login")}).catch(function(e){var t=e.message;return a.setState({registerFeedback:t})})}catch(o){var l=o.message;a.setState({registerFeedback:l})}},a.handleLogin=function(e,t){try{_.logInUser(e,t).then(function(){return a.props.history.push("/")}).catch(function(e){var t=e.message;return a.setState({loginFeedback:t})})}catch(r){var n=r.message;a.setState({loginFeedback:n})}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.loginFeedback,n=t.registerFeedback,c=this.handleLogin,l=this.handleRegister;return r.a.createElement("main",{className:"app"},r.a.createElement(q,{loggedIn:this.state.loggedIn,onLogout:this.onLogout}),r.a.createElement(I,null),r.a.createElement(p.a,{exact:!0,path:"/about",component:k}),r.a.createElement(p.a,{exact:!0,path:"/contact",component:L}),r.a.createElement(p.a,{exact:!0,path:"/profile",component:U}),r.a.createElement(p.a,{exact:!0,path:"/products",render:function(e){return r.a.createElement(z,{categoryId:e.match.params.id})}}),r.a.createElement(p.a,{exact:!0,path:"/product/:id",render:function(e){return r.a.createElement(Q,{productId:e.match.params.id})}}),r.a.createElement(p.a,{exact:!0,path:"/cart",render:function(){return r.a.createElement(M,null)}}),r.a.createElement(p.a,{exact:!0,path:"/register",render:function(){return r.a.createElement(j,{title:"Register",onRegister:l,feedback:n})}}),r.a.createElement(p.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(x,{onLogin:c,feedback:a})}}),r.a.createElement(p.a,{exact:!0,path:"/order",render:function(){return r.a.createElement(y,{onOrder:e.onOrder})}}),r.a.createElement(F,null))}}]),t}(n.Component),B=Object(h.a)(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object.defineProperties(_,{__userId__:{set:function(e){sessionStorage.setItem("__userId__",e)},get:function(){return sessionStorage.getItem("__userId__")}},__userApiToken__:{set:function(e){sessionStorage.setItem("__userApiToken__",e)},get:function(){return sessionStorage.getItem("__userApiToken__")}},__userApiProducts__:{set:function(e){sessionStorage.setItem("__userApiProducts__",JSON.stringify(e))},get:function(){return JSON.parse(sessionStorage.getItem("__userApiProducts__"))}}}),l.a.render(r.a.createElement(o.a,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.f8f7ecc7.chunk.js.map