(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(8),c=a.n(s),o=(a(14),a(1)),r=a(2),l=a(6),d=a(4),u=a(5),m=(a(16),a(18),function(){function e(){Object(o.a)(this,e)}return Object(r.a)(e,[{key:"get",value:function(e,t,a){var n=new XMLHttpRequest;n.open("GET",e),n.send(),n.onreadystatechange=function(){if(4===n.readyState)if(200===n.status){var e=JSON.parse(n.response);t(e)}else a(n)}}},{key:"post",value:function(e,t,a,n){var i=new XMLHttpRequest;i.open("POST",e),i.setRequestHeader("content-type","application/json"),i.send("string"!==typeof t?JSON.stringify(t):t),i.onreadystatechange=function(){if(4===i.readyState)if(200===i.status){var e=JSON.parse(i.response);a(e)}else n(i)}}},{key:"delete",value:function(e,t,a){var n=new XMLHttpRequest;n.open("DELETE",e),n.send(),n.onreadystatechange=function(){if(4===n.readyState)if(200===n.status){var e=JSON.parse(n.response);t(e)}else a(n)}}}]),e}()),p=a(3),h=(a(20),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).getDetails=e.getDetails.bind(Object(p.a)(Object(p.a)(e))),e.addToWishlist=e.addToWishlist.bind(Object(p.a)(Object(p.a)(e))),e.state={isCardFocus:!1,isAddToWishlistChecked:!1,arrayActionButtons:[{title:"view more",href:""},{title:"buy",href:""}]},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"getDetails",value:function(){this.setState(function(e){var t=Object.assign({},e);return t.isCardFocus=!e.isCardFocus,t})}},{key:"addToWishlist",value:function(){this.setState(function(e){var t=Object.assign({},e);return t.isAddToWishlistChecked=!e.isAddToWishlistChecked,t})}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.description,i=e.imgUrl,s=e._id,c={backgroundImage:"url(".concat(i,")")},o="card__content mdc-card__primary-action mdc-ripple-upgraded ",r="action__add-to-wishlist mdc-icon-button ";this.state.isCardFocus&&(o+="mdc-ripple-upgraded--background-focused mdc-ripple-upgraded--foreground-activation",setTimeout(this.getDetails,250)),this.state.isAddToWishlistChecked&&(r+="mdc-icon-button--on");var l=this.state.arrayActionButtons.map(function(e,t){return n.createElement("button",{key:t,className:"action__btn mdc-button"},e.title)});return n.createElement("div",{id:s,className:"card"},n.createElement("div",{className:o,onClick:this.getDetails},n.createElement("div",{className:"card__image",style:c}),n.createElement("div",{className:"card__text"},n.createElement("div",{className:"card__title"},t),n.createElement("div",{className:"card__description"},a))),n.createElement("div",{className:"card__button"},n.createElement("div",{className:"main-action"},l),n.createElement("button",{className:r,title:"Add to wishlist","aria-label":"Add to wishlist","aria-hidden":"true","aria-pressed":"false",onClick:this.addToWishlist},n.createElement("i",{className:"material-icons mdc-icon-button__icon mdc-icon-button__icon--on"},"favorite"),n.createElement("i",{className:"material-icons mdc-icon-button__icon"},"favorite_border"))))}}]),t}(n.Component)),f=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).httpService=new m,e.state={products:[]},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.httpService.get("http://localhost:4002/api/v1/phones",function(t){t=t.map(function(e){return e.imgUrl="http://localhost:4002/api/v1/"+e.imgUrl,e}),e.setState(function(e){return Object.assign({},e,{products:t})})},function(e){console.log(e)})}},{key:"render",value:function(){return console.log(this.state.products),n.createElement("div",{className:"catalog-content"},this.state.products.map(function(e,t){return n.createElement(h,Object.assign({},e,{key:t}))}))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App__header"}),i.a.createElement("aside",{className:"App__aside"}),i.a.createElement("main",{className:"App__main"},i.a.createElement(f,null)),i.a.createElement("footer",{className:"App__footer"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(22)}},[[9,2,1]]]);
//# sourceMappingURL=main.8f9b8092.chunk.js.map