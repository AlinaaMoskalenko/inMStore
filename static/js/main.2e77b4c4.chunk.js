(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(50)},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(15),c=a.n(s),o=(a(23),a(3)),r=a(4),l=a(7),d=a(5),m=a(6),u=a(1),h=(a(25),a(54)),p=a(53),_=function(){function e(){Object(o.a)(this,e)}return Object(r.a)(e,[{key:"get",value:function(e,t,a){var n=new XMLHttpRequest;n.overrideMimeType("application/json"),n.open("GET",e),n.send(),n.onreadystatechange=function(){if(4===n.readyState)if(200===n.status){var e=JSON.parse(n.response);t(e)}else a(n)}}},{key:"post",value:function(e,t,a,n){var i=new XMLHttpRequest;i.open("POST",e),i.setRequestHeader("content-type","application/json"),i.send("string"!==typeof t?JSON.stringify(t):t),i.onreadystatechange=function(){if(4===i.readyState)if(200===i.status){var e=JSON.parse(i.response);a(e)}else n(i)}}},{key:"delete",value:function(e,t,a){var n=new XMLHttpRequest;n.open("DELETE",e),n.send(),n.onreadystatechange=function(){if(4===n.readyState)if(200===n.status){var e=JSON.parse(n.response);t(e)}else a(n)}}}]),e}(),v=(a(27),a(52)),b=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).toggleSearchRow=e.toggleSearchRow.bind(Object(u.a)(Object(u.a)(e))),e.getSearchQuery=e.getSearchQuery.bind(Object(u.a)(Object(u.a)(e))),e.inputValueChange=e.inputValueChange.bind(Object(u.a)(Object(u.a)(e))),e.onReset=e.onReset.bind(Object(u.a)(Object(u.a)(e))),e.state={isAccess:!1,searchRowOpened:!1,inputValue:"",isInputSearchOpened:!1,navItem:[{title:"Catalog",href:"/"},{title:"About us",href:"#/about_us"}]},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState(function(t){var a=Object.assign({},t);return a.isAccess=e.props.isAccess,a})}},{key:"toggleSearchRow",value:function(){this.setState(function(e){var t=Object.assign({},e);return t.searchRowOpened=!e.searchRowOpened,t})}},{key:"inputValueChange",value:function(e){var t=e.target.value;this.setState(function(e){var a=Object.assign({},e);return a.inputValue=t,a})}},{key:"getSearchQuery",value:function(e){"Enter"!==e.key&&e.key||this.state.inputValue&&this.onReset()}},{key:"onReset",value:function(){this.setState(function(e){var t=Object.assign({},e);return t.inputValue="",t})}},{key:"render",value:function(){var e,t=this.state.navItem.map(function(e,t){return n.createElement("a",{key:t,href:e.href,className:"nav__link"},e.title)}),a="header__search-input ",i="header__button btn-search ";return this.state.searchRowOpened&&(a+="header__search-input_opened",i+="btn-search_opened"),e=this.state.isAccess?n.createElement(v.a,{to:"/",className:"header__button",title:"Sign out"},n.createElement("i",{className:"icon icon__sign mdc-icon-button material-icons"},"exit_to_app")):n.createElement(v.a,{to:"/sign_in",className:"header__button",title:"Sign in"},n.createElement("i",{className:"icon icon__sign mdc-icon-button material-icons"},"perm_identity")),n.createElement("div",{className:"header"},n.createElement("div",{className:"header__logo"},n.createElement("div",{className:"logo logo__icon"}),n.createElement("div",{className:"logo logo__title"})),n.createElement("div",{className:"header__wrapper"},n.createElement("div",{className:"header__nav"},t),n.createElement("div",{className:"header__action"},n.createElement("div",{className:"header__search"},n.createElement("input",{type:"text",className:a,placeholder:"Search products",onChange:this.inputValueChange,onKeyPress:this.getSearchQuery,value:this.state.inputValue}),n.createElement("button",{className:i,title:"Search a product",onClick:this.toggleSearchRow},n.createElement("i",{className:"icon icon__search mdc-icon-button material-icons"},"search"))),e)))}}]),t}(n.Component),g=(a(31),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).toggleMenu=e.toggleMenu.bind(Object(u.a)(Object(u.a)(e))),e.toggleItemList=e.toggleItemList.bind(Object(u.a)(Object(u.a)(e))),e.getSelectedPage=e.getSelectedPage.bind(Object(u.a)(Object(u.a)(e))),e.state={isOpened:!1,isOpenedLink:!1},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"toggleMenu",value:function(){var e=this;this.setState(function(t){var a=Object.assign({},t);return a.isOpened=!t.isOpened,e.props.onChangeMode(a.isOpened),a})}},{key:"getSelectedPage",value:function(){window.screen.width<768&&this.toggleMenu()}},{key:"toggleItemList",value:function(e){"A"!==e.target.tagName&&window.screen.width>=768?this.setState(function(e){var t=Object.assign({},e);return t.isOpenedLink=!e.isOpenedLink,t}):window.screen.width<768&&this.setState(function(e){var t=Object.assign({},e);return t.isOpenedLink=!e.isOpenedLink,t})}},{key:"render",value:function(){var e=this,t="sidebar__link-item";this.state.isOpenedLink&&(t="sidebar__link-item_active");var a=this.props.links.map(function(a,i){if(a.item){var s=a.item.map(function(a,i){return n.createElement("li",{key:i,className:t},n.createElement("a",{href:a.href,className:"sidebar__link",onClick:e.getSelectedPage},a.title))});return n.createElement("ul",{key:i,className:"sidebar__link",onClick:e.toggleItemList},a.title,s)}return n.createElement("a",{key:i,href:a.href,className:"sidebar__link",onClick:e.getSelectedPage},a.title)}),i="sidebar ";return this.state.isOpened&&(i+="sidebar_opened"),n.createElement("aside",{className:i},n.createElement("div",{className:"sidebar__toggle mdc-icon-button",onClick:this.toggleMenu},n.createElement("div",{className:"toggle__row"}),n.createElement("div",{className:"toggle__row"}),n.createElement("div",{className:"toggle__row"})),n.createElement("div",{className:"sidebar__items"},a))}}]),t}(n.Component)),f=(a(33),a(35),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).addToWishlist=e.addToWishlist.bind(Object(u.a)(Object(u.a)(e))),e.state={isAccess:!1,isAddToWishlistChecked:!1,arrayActionButtons:[{title:"view more",href:""},{title:"buy",href:""}]},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e._id,a=e.isAccess;console.log(this.state.arrayActionButtons[1].href),this.setState(function(e){var n=Object.assign({},e);return n.arrayActionButtons[0].href="/"+t,n.isAccess=a,n}),a?this.setState(function(e){var t=Object.assign({},e);return t.arrayActionButtons[1].href="/cart",t}):this.setState(function(e){var t=Object.assign({},e);return t.arrayActionButtons[1].href="/sign_in",t})}},{key:"setProduct",value:function(e,t){t.target.textContent===this.state.arrayActionButtons[0].title||"DIV"===t.target.tagName||"H2"===t.target.tagName?this.props.productID(e):console.log("press BUY")}},{key:"addToWishlist",value:function(){this.setState(function(e){var t=Object.assign({},e);return t.isAddToWishlistChecked=!e.isAddToWishlistChecked,t})}},{key:"render",value:function(){var e=this,t=this.props,a=t.name,i=t.description,s=t.imgUrl,c=t.price,o=t._id,r={backgroundImage:"url(".concat(s,")")},l="card__content mdc-card__primary-action mdc-ripple-upgraded ";this.state.isCardFocus&&(l+="mdc-ripple-upgraded--background-focused mdc-ripple-upgraded--foreground-activation");var d="action__add-to-wishlist_hidden";this.state.isAccess&&(d="action__add-to-wishlist mdc-icon-button ",this.state.isAddToWishlistChecked&&(d+="mdc-icon-button--on"));var m=this.state.arrayActionButtons.map(function(t,a){return n.createElement(v.a,{to:t.href,key:a,className:"action__btn mdc-button",onClick:e.setProduct.bind(e,o)},t.title)});return n.createElement("div",{id:o,className:"card"},n.createElement(v.a,{to:"/"+o,style:{textDecoration:"none"},className:l},n.createElement("div",{className:l,onClick:this.setProduct.bind(this,o)},n.createElement("div",{className:"card__image",style:r}),n.createElement("div",{className:"card__text"},n.createElement("h2",{className:"card__title"},a),n.createElement("div",{className:"card__price"},c),n.createElement("div",{className:"card__description"},i)))),n.createElement("div",{className:"card__button"},n.createElement("div",{className:"main-action"},m),n.createElement("button",{className:d,title:"Add to wishlist","aria-label":"Add to wishlist","aria-hidden":"true","aria-pressed":"false",onClick:this.addToWishlist},n.createElement("i",{className:"material-icons mdc-icon-button__icon mdc-icon-button__icon--on"},"favorite"),n.createElement("i",{className:"material-icons mdc-icon-button__icon"},"favorite_border"))))}}]),t}(n.Component)),E=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).httpService=new _,e.state={products:[]},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.httpService.get("http://localhost:4002/api/v1/phones",function(t){t=t.map(function(e){return e.imgUrl="http://localhost:4002/api/v1/"+e.imgUrl,e}),e.setState(function(e){return Object.assign({},e,{products:t})})},function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return n.createElement("div",{className:"catalog-content"},this.state.products.map(function(t,a){return n.createElement(f,Object.assign({},t,{key:a,productID:e.props.productID,isAccess:e.props.isAccess}))}))}}]),t}(n.Component),N=(a(37),a(39),"specification__item"),y="specification__conteiner",O="specification__text",k="specification__item-title",w=n.createElement("div",{className:O},n.createElement("i",{className:"material-icons icons-style icons-style__green"},"check")),j=n.createElement("div",{className:O},n.createElement("i",{className:"material-icons icons-style icons-style__red"},"clear")),S=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).toggleSpecification=e.toggleSpecification.bind(Object(u.a)(Object(u.a)(e))),e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"toggleSpecification",value:function(e){e.target.classList.toggle("specification__title_active")}},{key:"render",value:function(){var e,t=this.props,a=t.item,i=t.android,s=t.battery,c=t.camera,o=t.connectivity,r=t.display,l=t.hardware,d=t.sizeAndWeight,m=t.storage,u=t.availability;if("Android"===a.title&&(e=n.createElement("div",{className:y},i.ui?n.createElement("li",{className:N},n.createElement("div",{className:k},"UI:")," ",n.createElement("div",{className:O},i.ui)):console.log(),i.os?n.createElement("li",{className:N},n.createElement("div",{className:k},"OS:")," ",n.createElement("div",{className:O},i.os)):console.log())),"Battery"===a.title&&(e=n.createElement("div",{className:y},s.type?n.createElement("li",{className:N},n.createElement("div",{className:k},"Type:")," ",n.createElement("div",{className:O},s.type)):console.log(),s.talkTime?n.createElement("li",{className:N},n.createElement("div",{className:k},"Talk time:")," ",n.createElement("div",{className:O},s.talkTime)):console.log(),s.standbyTime?n.createElement("li",{className:N},n.createElement("div",{className:k},"Stand by time:")," ",n.createElement("div",{className:O},s.standbyTime)):console.log())),"Camera"===a.title){var h=c.features?"object"===typeof c.features?c.features.map(function(e,t){return n.createElement("div",{key:t,className:O},e)}):c.features:console.log();e=n.createElement("div",{className:y},c.primary?n.createElement("li",{className:N},n.createElement("div",{className:k},"Primary:")," ",n.createElement("div",{className:O},c.primary)):console.log(),n.createElement("li",{className:N},n.createElement("div",{className:k},"Features:")," ",n.createElement("div",{className:O},h)))}if("Connectivity"===a.title&&(e=n.createElement("div",{className:y},o.wifi?n.createElement("li",{className:N},n.createElement("div",{className:k},"WI-FI:")," ",n.createElement("div",{className:O},o.wifi)):console.log(),o.infrared?n.createElement("li",{className:N},n.createElement("div",{className:k},"Infrared:")," ",w):n.createElement("li",{className:N},n.createElement("div",{className:k},"Infrared:")," ",j),o.gps?n.createElement("li",{className:N},n.createElement("div",{className:k},"GPS:")," ",w):n.createElement("li",{className:N},n.createElement("div",{className:k},"GPS:")," ",j),o.cell?n.createElement("li",{className:N},n.createElement("div",{className:k},"Cell:")," ",n.createElement("div",{className:O},o.cell)):console.log(),o.bluetooth?n.createElement("li",{className:N},n.createElement("div",{className:k},"Bluetooth:")," ",n.createElement("div",{className:O},o.bluetooth)):console.log())),"Display"===a.title&&(e=n.createElement("div",{className:y},r.touchScreen?n.createElement("li",{className:N},n.createElement("div",{className:k},"Touch screen:")," ",w):n.createElement("li",{className:N},n.createElement("div",{className:k},"Touch screen:")," ",j),r.screenSize?n.createElement("li",{className:N},n.createElement("div",{className:k},"Screen size:")," ",n.createElement("div",{className:O},r.screenSize)):console.log(),r.screenResolution?n.createElement("li",{className:N},n.createElement("div",{className:k},"Screen resolution:")," ",n.createElement("div",{className:O},r.screenResolution)):console.log())),"Hardware"===a.title&&(e=n.createElement("div",{className:y},l.usb?n.createElement("li",{className:N},n.createElement("div",{className:k},"USB:")," ",n.createElement("div",{className:O},l.usb)):console.log(),l.physicalKeyboard?n.createElement("li",{className:N},n.createElement("div",{className:k},"Physical keyboard:")," ",w):n.createElement("li",{className:N},n.createElement("div",{className:k},"Physical keyboard:")," ",j),l.fmRadio?n.createElement("li",{className:N},n.createElement("div",{className:k},"FM radio:")," ",w):n.createElement("li",{className:N},n.createElement("div",{className:k},"FM radio:")," ",j),l.cpu?n.createElement("li",{className:N},n.createElement("div",{className:k},"CPU:")," ",n.createElement("div",{className:O},l.cpu)):console.log(),l.audioJack?n.createElement("li",{className:N},n.createElement("div",{className:k},"Audio Jack:")," ",n.createElement("div",{className:O},l.audioJack)):console.log(),l.accelerometer?n.createElement("li",{className:N},n.createElement("div",{className:k},"Accelerometer:")," ",w):n.createElement("li",{className:N},n.createElement("div",{className:k},"Accelerometer:")," ",j))),"Size and weight"===a.title&&(e=n.createElement("div",{className:y},d.weight?n.createElement("li",{className:N},n.createElement("div",{className:k},"Weight:")," ",n.createElement("div",{className:O},d.weight)):console.log(),d.dimensions?n.createElement("li",{className:N},n.createElement("div",{className:k},"Dimensions:")," ",n.createElement("div",{className:O},d.dimensions)):console.log())),"Storage"===a.title&&(e=n.createElement("div",{className:y},m.ram?n.createElement("li",{className:N},n.createElement("div",{className:k},"RAM:")," ",n.createElement("div",{className:O},m.ram)):console.log(),m.flash?n.createElement("li",{className:N},n.createElement("div",{className:k},"Flash:")," ",n.createElement("div",{className:O},m.flash)):console.log())),"Availability"===a.title){var p=u?"object"===typeof u?u.map(function(e,t){return n.createElement("div",{key:t,className:O},e)}):u:console.log();e=n.createElement("div",{className:y},n.createElement("li",{className:N},n.createElement("div",{className:k},"Availability:")," ",n.createElement("div",{className:O},p)))}return n.createElement("ul",{className:"specification__title specification__title_active",onClick:this.toggleSpecification},a.title,n.createElement("div",{className:"item-toggle"}),e)}}]),t}(n.Component),A="product__button product__button_add-to-cart mdc-button mdc-button--outlined",T="product__button mdc-button mdc-button--outlined",C=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).setActiveImage=e.setActiveImage.bind(Object(u.a)(Object(u.a)(e))),e.addToCart=e.addToCart.bind(Object(u.a)(Object(u.a)(e))),e.addToWishlist=e.addToWishlist.bind(Object(u.a)(Object(u.a)(e))),e.getActiveTabID=e.getActiveTabID.bind(Object(u.a)(Object(u.a)(e))),e.toggleAccordion=e.toggleAccordion.bind(Object(u.a)(Object(u.a)(e))),e.state={isActiveTab:"tab_0",isActiveImg:0,addToCartTitle:"Add to cart",addToCartStyleClassName:A,addToWishListTitle:"Add to wish list",addToWishListStyleClassName:T,specificationTitle:[{title:"Android"},{title:"Battery"},{title:"Camera"},{title:"Connectivity"},{title:"Display"},{title:"Hardware"},{title:"Size and weight"},{title:"Storage"},{title:"Availability"}],windowWidth:window.screen.width},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",function(){e.setState(function(e){var t=Object.assign({},e);return t.windowWidth=window.screen.width,t})})}},{key:"getActiveTabID",value:function(e){var t=e.target.id;this.setState(function(e){var a=Object.assign({},e);return a.isActiveTab=t,a})}},{key:"addToCart",value:function(){"Add to cart"===this.state.addToCartTitle?this.setState(function(e){var t=Object.assign({},e);return t.addToCartTitle="Added to cart",t.addToCartStyleClassName="product__button_add-to-cart mdc-button mdc-icon-button--on",t}):this.setState(function(e){var t=Object.assign({},e);return t.addToCartTitle="Add to cart",t.addToCartStyleClassName=A,t})}},{key:"addToWishlist",value:function(){"Add to wish list"===this.state.addToWishListTitle?this.setState(function(e){var t=Object.assign({},e);return t.addToWishListTitle="Added to wish list",t.addToWishListStyleClassName="mdc-button mdc-icon-button--on",t}):this.setState(function(e){var t=Object.assign({},e);return t.addToWishListTitle="Add to wish list",t.addToWishListStyleClassName=T,t})}},{key:"setActiveImage",value:function(e){var t=e.target.id;this.setState(function(e){var a=Object.assign({},e);return a.isActiveImg=t,a})}},{key:"toggleAccordion",value:function(e){e.target.classList.toggle("conteiner__accordions_opened")}},{key:"render",value:function(){for(var e,t=this,a=this.props,i=a._id,s=a.additionalFeatures,c=a.price,o=a.name,r=a.images,l=a.description,d=0,m=r.map(function(e,a){var i=a===+t.state.isActiveImg?"image image_show":"image";return e="http://localhost:4002/api/v1/"+e,d++,n.createElement("img",{key:a,src:e,alt:o,className:i})}),u=[],h=0;h<d;h++){var p=h===+this.state.isActiveImg?"image-toggle image-toggle_focused":"image-toggle";u[h]=n.createElement("button",{id:h,key:h,className:p})}var _="mdc-tab__ripple tab ";"tab_0"===this.state.isActiveTab&&(_+="tab_active",e=n.createElement("div",{className:"product__description product__description_second-child content content_active"},l));var b="mdc-tab__ripple tab ";"tab_1"===this.state.isActiveTab&&(b+="tab_active",e=n.createElement("div",{className:"product__specifications content content_active"},this.state.specificationTitle.map(function(e,a){return n.createElement(S,Object.assign({key:a},t.props,{item:e}))})));var g,f="mdc-tab__ripple tab ";return"tab_2"===this.state.isActiveTab&&(f+="tab_active",e=n.createElement("div",{className:"product__additional-features content content_active"},s)),g=this.state.windowWidth>992?n.createElement("div",{className:"product__details"},n.createElement("div",{className:"conteiner__tabs"},n.createElement("button",{className:"product__tab mdc-tab",onClick:this.getActiveTabID},"Description",n.createElement("span",{id:"tab_0",className:_})),n.createElement("button",{className:"product__tab mdc-tab",onClick:this.getActiveTabID},"Specifications",n.createElement("span",{id:"tab_1",className:b})),n.createElement("button",{className:"product__tab mdc-tab",onClick:this.getActiveTabID},"Additional Features",n.createElement("span",{id:"tab_2",className:f}))),n.createElement("div",{className:"conteiner__content"},e)):n.createElement("div",{className:"product__details"},n.createElement("div",{className:"conteiner__accordions",onClick:this.toggleAccordion},n.createElement("button",{className:"product__tab mdc-tab"},"Description"),n.createElement("div",{className:"content__accordion content__accordion_opened"},n.createElement("div",{className:"product__description product__description_second-child"},l))),n.createElement("div",{className:"conteiner__accordions",onClick:this.toggleAccordion},n.createElement("button",{className:"product__tab mdc-tab"},"Specifications"),n.createElement("div",{className:"content__accordion content__accordion_opened"},n.createElement("div",{className:"product__specifications"},this.state.specificationTitle.map(function(e,a){return n.createElement(S,Object.assign({key:a},t.props,{item:e}))})))),n.createElement("div",{className:"conteiner__accordions",onClick:this.toggleAccordion},n.createElement("button",{className:"product__tab mdc-tab"},"Additional Features"),n.createElement("div",{className:"content__accordion content__accordion_opened"},n.createElement("div",{className:"product__additional-features"},s)))),n.createElement("div",{id:i,className:"product"},n.createElement(v.a,{to:"/",className:"product__back-link"},n.createElement("h3",{className:"product__small-title"},n.createElement("i",{className:"small-title__arrow-back-to-previous-page material-icons"},"arrow_back_ios"),"All products")),n.createElement("div",{className:"product__conteiner"},n.createElement("div",{className:"product__image-conteiner"},n.createElement("div",{className:"product__images"},m),n.createElement("div",{className:"product__images-toggle",onClick:this.setActiveImage},u)),n.createElement("div",{className:"product__information"},n.createElement("div",{className:"conteiner__text"},n.createElement("h2",{className:"product__title"},o),n.createElement("div",{className:"product__price"},c),n.createElement("div",{className:"product__description product__description_first-child"},l)),n.createElement("div",{className:"conteiner__button"},n.createElement("button",{className:this.state.addToCartStyleClassName,onClick:this.addToCart},n.createElement("i",{className:"icon icon_active-cart material-icons mdc-icon-button__icon mdc-icon-button__icon--on"},"shopping_cart"),n.createElement("i",{className:"icon material-icons mdc-icon-button__icon"},"add_shopping_cart"),this.state.addToCartTitle),n.createElement("button",{className:this.state.addToWishListStyleClassName,onClick:this.addToWishlist},n.createElement("i",{className:"icon icon_active-favorite material-icons mdc-icon-button__icon mdc-icon-button__icon--on"},"favorite"),n.createElement("i",{className:"icon material-icons mdc-icon-button__icon"},"favorite_border"),this.state.addToWishListTitle)))),g)}}]),t}(n.Component),I=(a(41),a(55)),L=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).httpService=new _,e.changeLogin=e.changeLogin.bind(Object(u.a)(Object(u.a)(e))),e.changePassword=e.changePassword.bind(Object(u.a)(Object(u.a)(e))),e.textInput=n.createRef(),e.passwordInput=n.createRef(),e.dataError=n.createRef(),e.state={users:[],login:"",password:"",isSubmited:!1,isValidLogin:!0,isValidPassword:!0,eventTargetType:""},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.httpService.get("authorization.json",function(t){e.setState(function(e){return Object.assign({},e,{users:t})})},function(e){console.log(e)})}},{key:"onFocus",value:function(e){var t=e.target.type;this.dataError.current.classList.remove("authorization__error_show"),this.textInput.current.parentNode.classList.remove("authorization__input-conteiner_empty"),this.passwordInput.current.parentNode.classList.remove("authorization__input-conteiner_empty"),this.state.eventTargetType?t!==this.state.eventTargetType?(e.currentTarget.classList.add("authorization__input-conteiner_focused"),this.setState(function(e){var a=Object.assign({},e);return a.eventTargetType=t,a}),"text"===t?this.passwordInput.current.value?console.log():this.passwordInput.current.parentNode.classList.remove("authorization__input-conteiner_focused"):this.textInput.current.value?console.log():this.textInput.current.parentNode.classList.remove("authorization__input-conteiner_focused")):console.log():(e.currentTarget.classList.add("authorization__input-conteiner_focused"),this.setState(function(e){var a=Object.assign({},e);return a.eventTargetType=t,a}))}},{key:"changeLogin",value:function(e){var t=e.target.value;this.setState(function(e){var a=Object.assign({},e);return a.login=t,a})}},{key:"changePassword",value:function(e){var t=e.target.value;this.setState(function(e){var a=Object.assign({},e);return a.password=t,a})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),this.setState(function(e){var t=Object.assign({},e);return t.isSubmited=!0,t.eventTargetType="",t}),this.state.login||this.state.password||(this.textInput.current.parentNode.classList.add("authorization__input-conteiner_empty"),this.passwordInput.current.parentNode.classList.add("authorization__input-conteiner_empty")),this.state.login||(this.textInput.current.parentNode.classList.add("authorization__input-conteiner_empty"),this.textInput.current.parentNode.classList.remove("authorization__input-conteiner_focused"),this.setState(function(e){var t=Object.assign({},e);return t.isValidLogin=!1,t})),this.state.password||(this.passwordInput.current.parentNode.classList.add("authorization__input-conteiner_empty"),this.passwordInput.current.parentNode.classList.remove("authorization__input-conteiner_focused"),this.setState(function(e){var t=Object.assign({},e);return t.isValidPassword=!1,t})),this.state.login&&this.state.password&&this.state.users.forEach(function(e){e.login===t.state.login&&e.password===t.state.password?(t.props.history.push("/"),t.props.authorized(!0),t.textInput.current.parentNode.classList.remove("authorization__input-conteiner_focused"),t.passwordInput.current.parentNode.classList.remove("authorization__input-conteiner_focused"),t.setState(function(e){var t=Object.assign({},e);return t.login="",t.password="",t})):t.dataError.current.classList.add("authorization__error_show")})}},{key:"onReset",value:function(){this.textInput.current.parentNode.classList.remove("authorization__input-conteiner_empty"),this.passwordInput.current.parentNode.classList.remove("authorization__input-conteiner_empty"),this.textInput.current.parentNode.classList.remove("authorization__input-conteiner_focused"),this.passwordInput.current.parentNode.classList.remove("authorization__input-conteiner_focused"),this.setState(function(e){var t=Object.assign({},e);return t.eventTargetType="",t}),this.setState(function(e){var t=Object.assign({},e);return t.login="",t.password="",t})}},{key:"render",value:function(){return n.createElement("div",{className:"authorization"},n.createElement(v.a,{to:"/",className:"authorization__back-link"},n.createElement("h3",{className:"authorization__back-to-home-page"},n.createElement("i",{className:"authorization__arrow-to-home-page material-icons"},"arrow_back_ios"),"Home")),n.createElement("form",{className:"authorization__form",onSubmit:this.onSubmit.bind(this),onReset:this.onReset.bind(this)},n.createElement("div",null,n.createElement("div",{className:"authorization__input-conteiner "+(!this.state.isValidLogin&&this.state.isSubmited?" authorization__input-conteiner_empty":""),onFocus:this.onFocus.bind(this)},n.createElement("div",{className:"authorization__input-title authorization__input-title_input-active"},"Login"),n.createElement("input",{className:"authorization__input",type:"text",onChange:this.changeLogin,value:this.state.login,ref:this.textInput}),n.createElement("span",{className:"input-underline",ref:this.underlineText})),n.createElement("div",{className:"authorization__input-conteiner "+(!this.state.isValidPassword&&this.state.isSubmited?" authorization__input-conteiner_empty":""),onFocus:this.onFocus.bind(this)},n.createElement("div",{className:"authorization__input-title authorization__input-title_input-active"},"Password"),n.createElement("input",{className:"authorization__input",type:"password",onChange:this.changePassword,value:this.state.password,ref:this.passwordInput}),n.createElement("span",{className:"input-underline",ref:this.underlinePassword})),n.createElement("div",{className:"authorization__error ",ref:this.dataError},"User does not exist!")),n.createElement("div",{className:"authorization__action"},n.createElement("button",{className:"action__button mdc-button mdc-button--raised",type:"submit"},"Sign in"),n.createElement("button",{className:"action__button mdc-button",type:"reset"},"Cancel"))),n.createElement("div",{className:"authorization__logo"}),n.createElement("div",{className:"authorization__author"},"by Alina Moskalenko"))}}]),t}(n.Component),z=Object(I.a)(L),P=(a(44),n.Component,a(46),function(){return n.createElement("div",{className:"about-us"},n.createElement(v.a,{to:"/",className:"about-us__back-link"},n.createElement("h3",{className:"about-us__back-to-home-page"},n.createElement("i",{className:"about-us__arrow-to-home-page material-icons"},"arrow_back_ios"),"Home")),n.createElement("div",{className:"about-us__content"},n.createElement("div",{className:"about-us__logo"}),n.createElement("div",{className:"about-us__text"},n.createElement("div",{className:"about-us__author"},"Created by Alina Moskalenko"),n.createElement("div",{className:"about-us__contact"},n.createElement("div",{className:"contact-title"},"For more details"),n.createElement("div",{className:"about-us__email"},n.createElement("div",null,"E-mail:"),n.createElement("div",{className:"email"},n.createElement("div",{className:"email-link"},"alina.kravchenko@ukr.net"),n.createElement("div",{className:"email-link"},"alina17kravchenko@gmail.com"))),n.createElement("div",{className:"about-us__number-phone"},"Phone number: +38(093)471-29-63")))))}),W=(a(48),function(){return n.createElement("div",{className:"footer"},n.createElement("div",{className:"footer__top-border"}),n.createElement("div",null,n.createElement("div",{className:"footer__logo"}),n.createElement("div",{className:"footer__site-author"},"Created by Alina Moskalenko")))}),M=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).httpService=new _,e.setSidebarMode=e.setSidebarMode.bind(Object(u.a)(Object(u.a)(e))),e.getProductID=e.getProductID.bind(Object(u.a)(Object(u.a)(e))),e.setAccess=e.setAccess.bind(Object(u.a)(Object(u.a)(e))),e.state={isAccess:!1,selectedProduct:[],isSidebarOpened:!1,sidebar_links:[{title:"Home",href:"/"},{title:"Catalog",item:[{title:"Dell",href:"#/dell"},{title:"LG",href:"#/lg"},{title:"Motorola",href:"#/motorola"},{title:"Nexus",href:"#/nexus"},{title:"Samsung",href:"#/samsung"},{title:"Sanyo",href:"#/sanyo"},{title:"T-Mobile",href:"#/t-mobile"}]},{title:"About us",href:"#/about_us"}]},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"setAccess",value:function(e){this.setState(function(t){var a=Object.assign({},t);return a.isAccess=e,a})}},{key:"getProductID",value:function(e){var t=this;this.httpService.get("http://localhost:4002/api/v1/phones/"+"".concat(e),function(e){t.setState(function(t){return Object.assign({},t,{selectedProduct:e})})},function(e){console.log(e)})}},{key:"setSidebarMode",value:function(e){this.setState(function(t){var a=Object.assign({},t);return a.isSidebarOpened=e,a})}},{key:"render",value:function(){var e=this,t="app__aside ",a="app__section ",n="app__footer ";return this.state.isSidebarOpened&&(a+="app__section_small",n+="app__footer_small",t+="app__aside_opened"),i.a.createElement(h.a,null,i.a.createElement("div",{className:"app"},i.a.createElement("header",{className:"app__header"},i.a.createElement(p.a,{path:"/",component:function(){return i.a.createElement(b,{isAccess:e.state.isAccess})}})),i.a.createElement("div",{className:"app__main"},i.a.createElement("div",{className:t},i.a.createElement(g,{links:this.state.sidebar_links,onChangeMode:this.setSidebarMode})),i.a.createElement("section",{className:a},i.a.createElement(p.a,{path:"/",exact:!0,component:function(){return i.a.createElement(E,Object.assign({productID:e.getProductID,isAccess:e.state.isAccess},e.state.products))}}),0!==this.state.selectedProduct.length?i.a.createElement(p.a,{path:"/"+"".concat(this.state.selectedProduct._id),component:function(){return i.a.createElement(C,e.state.selectedProduct)}}):console.log(),i.a.createElement(p.a,{path:"/sign_in",component:function(){return i.a.createElement(z,{authorized:e.setAccess})}}),i.a.createElement(p.a,{path:"/about_us",component:P})),i.a.createElement("footer",{className:n},i.a.createElement(W,null)))))}}]),t}(n.Component),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(i.a.createElement(M,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/inMStore",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/inMStore","/service-worker.js");D?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):R(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):R(t,e)})}}()}},[[18,2,1]]]);
//# sourceMappingURL=main.2e77b4c4.chunk.js.map