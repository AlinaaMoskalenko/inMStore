(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(8),c=a.n(i),s=(a(14),a(2)),r=a(3),o=a(5),m=a(4),u=a(6),d=a(1),p=(a(16),function(){function e(){Object(s.a)(this,e)}return Object(r.a)(e,[{key:"get",value:function(e,t,a){var n=new XMLHttpRequest;n.open("GET",e),n.send(),n.onreadystatechange=function(){if(4===n.readyState)if(200===n.status){var e=JSON.parse(n.response);t(e)}else a(n)}}},{key:"post",value:function(e,t,a,n){var l=new XMLHttpRequest;l.open("POST",e),l.setRequestHeader("content-type","application/json"),l.send("string"!==typeof t?JSON.stringify(t):t),l.onreadystatechange=function(){if(4===l.readyState)if(200===l.status){var e=JSON.parse(l.response);a(e)}else n(l)}}},{key:"delete",value:function(e,t,a){var n=new XMLHttpRequest;n.open("DELETE",e),n.send(),n.onreadystatechange=function(){if(4===n.readyState)if(200===n.status){var e=JSON.parse(n.response);t(e)}else a(n)}}}]),e}()),h=(a(18),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).getSearchQuery=e.getSearchQuery.bind(Object(d.a)(Object(d.a)(e))),e.inputValueChange=e.inputValueChange.bind(Object(d.a)(Object(d.a)(e))),e.onReset=e.onReset.bind(Object(d.a)(Object(d.a)(e))),e.state={inputValue:"",isInputSearchOpened:!1,navItem:[{title:"Catalog",href:""},{title:"About us",href:""}]},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"inputValueChange",value:function(e){var t=e.target.value;this.setState(function(e){var a=Object.assign({},e);return a.inputValue=t,a})}},{key:"getSearchQuery",value:function(e){"Enter"!==e.key&&e.key||this.state.inputValue&&this.onReset()}},{key:"onReset",value:function(){this.setState(function(e){var t=Object.assign({},e);return t.inputValue="",t})}},{key:"render",value:function(){var e=this.state.navItem.map(function(e,t){return n.createElement("a",{key:t,href:e.href,className:"nav__link"},e.title)});return n.createElement("div",{className:"header"},n.createElement("div",{className:"header__logo"},n.createElement("div",{className:"logo logo__icon"}),n.createElement("div",{className:"logo logo__title"})),n.createElement("div",{className:"header__wrapper"},n.createElement("div",{className:"header__nav"},e),n.createElement("div",{className:"header__action"},n.createElement("div",{className:"header__search"},n.createElement("input",{type:"text",className:"header__search-input",placeholder:"Search products",onChange:this.inputValueChange,onKeyPress:this.getSearchQuery,value:this.state.inputValue}),n.createElement("button",{className:"header__button",title:"Search a product"},n.createElement("i",{className:"icon icon__search mdc-icon-button material-icons",onClick:this.getSearchQuery},"search"))),n.createElement("button",{className:"header__button",title:"Sign in"},n.createElement("i",{className:"icon icon__sign mdc-icon-button material-icons"},"perm_identity")))))}}]),t}(n.Component)),E=(a(20),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).toggleMenu=e.toggleMenu.bind(Object(d.a)(Object(d.a)(e))),e.state={isOpened:!1},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"toggleMenu",value:function(){var e=this;this.setState(function(t){var a=Object.assign({},t);return a.isOpened=!t.isOpened,e.props.onChangeMode(a.isOpened),a})}},{key:"render",value:function(){var e=this.props.links.map(function(e,t){return n.createElement("a",{key:t,href:e.href,className:"sidebar__link"},e.title)}),t="sidebar ";return this.state.isOpened&&(t+="sidebar_opened"),n.createElement("aside",{className:t},n.createElement("div",{className:"sidebar__toggle mdc-icon-button",onClick:this.toggleMenu},n.createElement("div",{className:"toggle__row"}),n.createElement("div",{className:"toggle__row"}),n.createElement("div",{className:"toggle__row"})),n.createElement("div",{className:"sidebar__items"},e))}}]),t}(n.Component)),v=(a(22),a(24),function(e){var t,a=e.item,l=e.android,i=e.battery,c=e.camera,s=e.connectivity,r=e.display,o=e.hardware,m=e.sizeAndWeight,u=e.storage,d=e.availability;console.log(a.title);var p="data__item";return"Android"===a.title&&(t=n.createElement("div",null,l.ui?n.createElement("li",{className:p},"UI: ",n.createElement("div",null,l.ui)):console.log(),l.os?n.createElement("li",{className:p},"UI: ",n.createElement("div",null,l.os)):console.log())),"Battery"===a.title&&(t=n.createElement("div",null,i.type?n.createElement("li",{className:p},"type: ",n.createElement("div",null,i.type)):console.log(),i.talkTime?n.createElement("li",{className:p},"talkTime: ",n.createElement("div",null,i.talkTime)):console.log(),i.standbyTime?n.createElement("li",{className:p},"standbyTime: ",n.createElement("div",null,i.standbyTime)):console.log())),"Camera"===a.title&&(t=n.createElement("div",null,c.primary?n.createElement("li",{className:p},"primary: ",n.createElement("div",null,c.primary)):console.log(),c.features?n.createElement("li",{className:p},"features: ",n.createElement("div",null,c.features)):console.log())),"Connectivity"===a.title&&(t=n.createElement("div",null,s.wifi?n.createElement("li",{className:p},"wifi: ",n.createElement("div",null,s.wifi)):console.log(),s.infrared?n.createElement("li",{className:p},"infrared: ",n.createElement("div",null,s.infrared)):console.log(),s.gps?n.createElement("li",{className:p},"gps: ",n.createElement("div",null,s.gps)):console.log(),s.cell?n.createElement("li",{className:p},"cell: ",n.createElement("div",null,s.cell)):console.log(),s.bluetooth?n.createElement("li",{className:p},"bluetooth: ",n.createElement("div",null,s.bluetooth)):console.log())),"Display"===a.title&&(t=n.createElement("div",null,r.touchScreen?n.createElement("li",{className:p},"touchScreen: ",n.createElement("div",null,r.touchScreen)):console.log(),r.screenSize?n.createElement("li",{className:p},"screenSize: ",n.createElement("div",null,r.screenSize)):console.log(),r.screenResolution?n.createElement("li",{className:p},"screenResolution: ",n.createElement("div",null,r.screenResolution)):console.log())),"Hardware"===a.title&&(t=n.createElement("div",null,o.usb?n.createElement("li",{className:p},"usb: ",n.createElement("div",null,o.usb)):console.log(),o.physicalKeyboard?n.createElement("li",{className:p},"physicalKeyboard: ",n.createElement("div",null,o.physicalKeyboard)):console.log(),o.fmRadio?n.createElement("li",{className:p},"fmRadio: ",n.createElement("div",null,o.fmRadio)):console.log(),o.cpu?n.createElement("li",{className:p},"cpu: ",n.createElement("div",null,o.cpu)):console.log(),o.audioJack?n.createElement("li",{className:p},"audioJack: ",n.createElement("div",null,o.audioJack)):console.log(),o.accelerometer?n.createElement("li",{className:p},"accelerometer: ",n.createElement("div",null,o.accelerometer)):console.log())),"Size and weight"===a.title&&(t=n.createElement("div",null,m.weight?n.createElement("li",{className:p},"weight: ",n.createElement("div",null,m.weight)):console.log(),m.dimensions?n.createElement("li",{className:p},"dimensions: ",n.createElement("div",null,m.dimensions)):console.log())),"Storage"===a.title&&(t=n.createElement("div",null,u.ram?n.createElement("li",{className:p},"ram: ",n.createElement("div",null,u.ram)):console.log(),u.flash?n.createElement("li",{className:p},"flash: ",n.createElement("div",null,u.flash)):console.log())),"Availability"===a.title&&(t=n.createElement("div",null,d?n.createElement("li",{className:p},"availability: ",n.createElement("div",null,d)):console.log())),n.createElement("ul",{className:"specification__title"},a.title,t)}),g=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={specificationTitle:[{title:"Android"},{title:"Battery"},{title:"Camera"},{title:"Connectivity"},{title:"Display"},{title:"Hardware"},{title:"Size and weight"},{title:"Storage"},{title:"Availability"}]},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t._id,l=t.additionalFeatures,i=t.price,c=t.name,s=t.images,r=t.description,o=s.map(function(e,t){return e="http://localhost:4002/api/v1/"+e,n.createElement("img",{key:t,src:e,alt:c,className:"image"})});return n.createElement("div",{id:a,className:"product"},n.createElement("h3",{className:"product__small-title"},c),n.createElement("div",{className:"product__conteiner"},n.createElement("div",{className:"product__images"},o),n.createElement("div",{className:"product__information"},n.createElement("h2",{className:"product__title"},c),n.createElement("div",{className:"product__price"},i),n.createElement("button",{className:"product__button"},n.createElement("i",{className:"material-icons"},"add_shopping_cart")),n.createElement("button",{className:"product__button mdc-icon-button ",title:"Add to wishlist","aria-label":"Add to wishlist","aria-hidden":"true","aria-pressed":"false",onClick:this.addToWishlist},n.createElement("i",{className:"material-icons mdc-icon-button__icon mdc-icon-button__icon--on"},"favorite"),n.createElement("i",{className:"material-icons mdc-icon-button__icon"},"favorite_border")))),n.createElement("div",{className:"product__details"},n.createElement("div",{className:"conteiner__tabs"},n.createElement("button",{className:"tab"},"Description"),n.createElement("button",{className:"tab"},"Specifications"),n.createElement("button",{className:"tab"},"Additional Features")),n.createElement("div",{className:"conteiner__content"},n.createElement("div",{className:"product__description"},r),n.createElement("div",{className:"product__specifications"},this.state.specificationTitle.map(function(t,a){return n.createElement(v,Object.assign({key:a},e.props,{item:t}))})),n.createElement("div",{className:"product__additional-features"},l))))}}]),t}(n.Component),_=(a(26),function(){return n.createElement("div",{className:"footer"},n.createElement("div",{className:"footer__logo"},n.createElement("div",{className:"logo logo__icon"}),n.createElement("div",{className:"logo logo__title"})),n.createElement("div",{className:"footer__site-author"},"Create by Alina Moskalenko"))}),b=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).setSidebarMode=e.setSidebarMode.bind(Object(d.a)(Object(d.a)(e))),e.httpService=new p,e.state={product:[],isSidebarOpened:!1,sidebar_links:[{title:"Home",href:"https://www.apple.com/mac/"},{title:"Wish list",href:"https://www.apple.com/iphone/"},{title:"Basket",href:"https://www.apple.com/watch/"},{title:"About us",href:"https://www.apple.com/music/"}]},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.httpService.get("http://localhost:4002/api/v1/phones/5bf537dca53801fa3459dfa3/",function(t){e.setState(function(e){return Object.assign({},e,{product:t})})},function(e){console.log(e)})}},{key:"setSidebarMode",value:function(e){this.setState(function(t){var a=Object.assign({},t);return a.isSidebarOpened=e,a})}},{key:"render",value:function(){var e="app__section ";return this.state.isSidebarOpened&&(e+=" app__section_compressed"),l.a.createElement("div",{className:"app"},l.a.createElement("header",{className:"app__header"},l.a.createElement(h,null)),l.a.createElement("main",{className:"app__main"},l.a.createElement("div",{className:"app__aside"},l.a.createElement(E,{links:this.state.sidebar_links,onChangeMode:this.setSidebarMode})),l.a.createElement("section",{className:e},0!==this.state.product.length?l.a.createElement(g,this.state.product):console.log())),l.a.createElement("footer",{className:"app__footer"},l.a.createElement(_,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.f5cc3a5c.chunk.js.map