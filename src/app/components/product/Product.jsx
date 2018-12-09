import * as React from 'react';
import './Product.scss';
import { Specifications } from './specifications/Specifications.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

export class Product extends React.Component {
    constructor() {
        super();
        this.setActiveImage = this.setActiveImage.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.addToWishlist = this.addToWishlist.bind(this);
        this.getActiveTabID = this.getActiveTabID.bind(this);
        this.toggleAccordion = this.toggleAccordion.bind(this);
        this.state = {
            isAccess: false,
            isActiveTab: 'tab_0',
            isActiveImg: 0,
            addToCartTitle: 'Add to cart',
            addToWishListTitle: 'Add to wish list',
            specificationTitle: [
                { title: "Android" },
                { title: "Battery" },
                { title: "Camera" },
                { title: "Connectivity" },
                { title: "Display" },
                { title: "Hardware" },
                { title: "Size and weight" },
                { title: "Storage" },
                { title: "Availability" },
            ],
            windowWidth: window.screen.width,
        };
    }

    componentDidMount() {
        const { isAccess } = this.props;

        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.isAccess = isAccess;
            return newState;
        });

        window.addEventListener('resize', () => {
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.windowWidth = window.screen.width;
                return newState;
            });
        });
    }

    getActiveTabID(event) {
        const id_tab = event.target.id;
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.isActiveTab = id_tab;
            return newState;
        });
        // const coords = event.target.getBoundingClientRect();
    }

    addToCart(event) {
        if (this.state.addToCartTitle === "Add to cart") {
            event.target.classList.remove('mdc-button--outlined');
            event.target.classList.add('mdc-icon-button--on');

            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.addToCartTitle = 'Added to cart';
                return newState;
            });
        } else {
            event.target.classList.add('mdc-button--outlined');
            event.target.classList.remove('mdc-icon-button--on');

            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.addToCartTitle = 'Add to cart';
                return newState;
            });
        }
    }

    addToWishlist(event) {
        if (this.state.addToWishListTitle === "Add to wish list") {
            event.target.classList.remove('mdc-button--outlined');
            event.target.classList.add('mdc-icon-button--on');

            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.addToWishListTitle = 'Added to wish list';
                return newState;
            });
        } else {
            event.target.classList.add('mdc-button--outlined');
            event.target.classList.remove('mdc-icon-button--on');

            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.addToWishListTitle = 'Add to wish list';
                return newState;
            });
        }
    }

    setActiveImage(event) {
        const toggleID = event.target.id;
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.isActiveImg = toggleID;
            return newState;
        });
    }

    toggleAccordion(event) {
        event.target.classList.toggle('conteiner__accordions_opened');
    }

    render() {
        const { _id, additionalFeatures, price, name, images, description } = this.props;

        let counter = 0;

        const imgUrl = images.map((image, i) => {
            let classImageNames = (i === +this.state.isActiveImg) ? "image image_show" : "image";
            image = "http://localhost:4002/api/v1/" + image;
            counter++;
            return <img key={i}
                src={image}
                alt={name}
                className={classImageNames} />;
        });

        let imgToggle = [];
        for (let i = 0; i < counter; i++) {
            let classToggleNames = (i === +this.state.isActiveImg) ? "image-toggle image-toggle_focused" : "image-toggle";
            imgToggle[i] = <button id={i} key={i} className={classToggleNames}></button>
        }

        let buyButtonClassName = "product__button_visible_buy-button mdc-button mdc-button--outlined "
        let addToCartStyleClassName = "product__button_visible_add-to-cart mdc-button mdc-button--outlined ";
        let addToWishListStyleClassName = "mdc-button mdc-button--outlined ";

        if (this.state.isAccess) {
            buyButtonClassName += "product__button";
            addToCartStyleClassName += "product__button_visible";
            addToWishListStyleClassName += "product__button_visible";
        } else {
            buyButtonClassName += "product__button_visible"
            addToCartStyleClassName += "product__button";
            addToWishListStyleClassName += "product__button";
        }

        let tabContent;
        let classTab_0Names = "mdc-tab__ripple tab ";
        if (this.state.isActiveTab === "tab_0") {
            classTab_0Names += "tab_active";
            tabContent = <div className="product__description product__description_second-child content content_active">{description}</div>;
        }

        let classTab_1Names = "mdc-tab__ripple tab ";
        if (this.state.isActiveTab === "tab_1") {
            classTab_1Names += "tab_active";
            tabContent = <div className="product__specifications content content_active">
                {this.state.specificationTitle.map((item, i) =>
                    <Specifications key={i}
                        {...this.props}
                        item={item} />)}
            </div>;
        }

        let classTab_2Names = "mdc-tab__ripple tab ";
        if (this.state.isActiveTab === "tab_2") {
            classTab_2Names += "tab_active";
            tabContent = <div className="product__additional-features content content_active">{additionalFeatures}</div>;
        }

        let productDetails;

        if (this.state.windowWidth > 992) { //992 min-width laptop
            productDetails = <div className="product__details">
                <div className="conteiner__tabs">
                    <button className="product__tab mdc-tab"
                        onClick={this.getActiveTabID}>
                        Description
                    <span id="tab_0" className={classTab_0Names}></span>
                    </button>
                    <button className="product__tab mdc-tab"
                        onClick={this.getActiveTabID}>
                        Specifications
                    <span id="tab_1" className={classTab_1Names}></span>
                    </button>
                    <button className="product__tab mdc-tab"
                        onClick={this.getActiveTabID}>
                        Additional Features
                    <span id="tab_2" className={classTab_2Names}></span>
                    </button>
                </div>
                <div className="conteiner__content">
                    {tabContent}
                </div>
            </div>
        } else {
            productDetails = <div className="product__details">
                <div className="conteiner__accordions" onClick={this.toggleAccordion}>
                    <button className="product__tab mdc-tab">
                        Description
                    </button>
                    <div className="content__accordion content__accordion_opened">
                        <div className="product__description product__description_second-child">
                            {description}
                        </div>
                    </div>
                </div>
                <div className="conteiner__accordions" onClick={this.toggleAccordion}>
                    <button className="product__tab mdc-tab">
                        Specifications
                    </button>
                    <div className="content__accordion content__accordion_opened">
                        <div className="product__specifications">
                            {this.state.specificationTitle.map((item, i) =>
                                <Specifications key={i}
                                    {...this.props}
                                    item={item} />)}
                        </div>
                    </div>
                </div>
                <div className="conteiner__accordions" onClick={this.toggleAccordion}>
                    <button className="product__tab mdc-tab">
                        Additional Features
                    </button>
                    <div className="content__accordion content__accordion_opened">
                        <div className="product__additional-features">
                            {additionalFeatures}
                        </div>
                    </div>
                </div>
            </div>
        }

        return <div id={_id} className="product">
            <Link to={"/"} className="product__back-link">
                <h3 className="product__small-title">
                    <i className="small-title__arrow-back-to-previous-page material-icons">arrow_back_ios</i>
                    All products
                </h3>
            </Link>
            <div className="product__conteiner">
                <div className="product__image-conteiner">
                    <div className="product__images">{imgUrl}</div>
                    <div className="product__images-toggle"
                        onClick={this.setActiveImage}>
                        {imgToggle}
                    </div>
                </div>
                <div className="product__information">
                    <div className="conteiner__text">
                        <h2 className="product__title">{name}</h2>
                        <div className="product__price">{price}</div>
                        <div className="product__description product__description_first-child">{description}</div>
                    </div>
                    <div className="conteiner__button">
                        <Link to="/sign_in" className={buyButtonClassName}>
                            <i className="icon material-icons">shopping_basket</i>
                            Buy
                        </Link>
                        <button className={addToCartStyleClassName}
                            onClick={this.addToCart}>
                            <i className="icon icon_active-cart material-icons mdc-icon-button__icon mdc-icon-button__icon--on">shopping_cart</i>
                            <i className="icon material-icons mdc-icon-button__icon">add_shopping_cart</i>
                            {this.state.addToCartTitle}
                        </button>
                        <button className={addToWishListStyleClassName}
                            onClick={this.addToWishlist}>
                            <i className="icon icon_active-favorite material-icons mdc-icon-button__icon mdc-icon-button__icon--on">favorite</i>
                            <i className="icon material-icons mdc-icon-button__icon">favorite_border</i>
                            {this.state.addToWishListTitle}
                        </button>
                    </div>
                </div>
            </div>
            {productDetails}
        </div>
    }
}