import * as React from 'react';
import './Product.scss';
import { Specifications } from './specifications/Specifications.jsx';

export class Product extends React.Component {
    constructor() {
        super();
        this.getTabContent = this.getTabContent.bind(this);
        this.addToWishlist = this.addToWishlist.bind(this);
        this.state = {
            isActiveTab: 'tab_0',
            addToWishListTitle: 'Add to wish list',
            addToWishListStyleClassName: 'product__button mdc-button mdc-button--outlined',
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
        };
    }

    getTabContent(event) {
        const id_tab = event.target.id;
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.isActiveTab = id_tab;
            return newState;
        });
        // const coords = event.target.getBoundingClientRect();
    }

    addToWishlist(event) {
        if (this.state.addToWishListTitle === "Add to wish list") {
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.addToWishListTitle = 'Added to wish list';
                newState.addToWishListStyleClassName = 'mdc-button mdc-icon-button--on';
                return newState;
            });
        } else {
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.addToWishListTitle = 'Add to wish list';
                newState.addToWishListStyleClassName = 'product__button mdc-button mdc-button--outlined';
                return newState;
            });
        }
    }

    render() {
        const { _id, additionalFeatures, price, name, images, description } = this.props;

        let counter = 0;
        const imgUrl = images.map((image, i) => {
            let classImageNames = (i === 0) ? "image image_show" : "image";
            image = "http://localhost:4002/api/v1/" + image;
            counter++;
            return <img key={i}
                src={image}
                alt={name}
                className={classImageNames} />;
        });

        let imgToggle = [];
        for (let i = 0; i < counter; i++) {
            let classToggleNames = (i === 0) ? "image-toggle image-toggle_focused" : "image-toggle";
            imgToggle[i] = <button key={i} className={classToggleNames}></button>
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
            tabContent = <div className="product__specifications content content_active ">
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

        return <div id={_id} className="product">
            <h3 className="product__small-title">
                <i className="small-title__arrow-back-to-previous-page material-icons">arrow_back_ios</i>
                {name}
            </h3>
            <div className="product__conteiner">
                <div className="product__image-conteiner">
                    <div className="product__images">{imgUrl}</div>
                    <div className="product__images-toggle">{imgToggle}</div>
                </div>
                <div className="product__information">
                    <div className="conteiner__text">
                        <h2 className="product__title">{name}</h2>
                        <div className="product__price">{price}</div>
                        <div className="product__description product__description_first-child">{description}</div>
                    </div>
                    <div className="conteiner__button">
                        <button className="product__button mdc-button mdc-button--outlined">
                            <i className="icon material-icons">add_shopping_cart</i>
                            Add to cart
                        </button>
                        <button className={this.state.addToWishListStyleClassName}
                            onClick={this.addToWishlist}>
                            <i className="icon icon_active material-icons mdc-icon-button__icon mdc-icon-button__icon--on">favorite</i>
                            <i className="icon material-icons mdc-icon-button__icon">favorite_border</i>
                            {this.state.addToWishListTitle}
                        </button>
                    </div>
                </div>
            </div>
            <div className="product__details">
                <div className="conteiner__tabs">
                    {<button className="product__tab mdc-tab"
                        onClick={this.getTabContent}
                        onFocus={this.onFocus}>
                        Description
                        <span id="tab_0" className={classTab_0Names}></span>
                    </button>}
                    <button className="product__tab mdc-tab"
                        onClick={this.getTabContent}
                        onFocus={this.onFocus}>
                        Specifications
                        <span id="tab_1" className={classTab_1Names}></span>
                    </button>
                    <button className="product__tab mdc-tab"
                        onClick={this.getTabContent}>
                        Additional Features
                        <span id="tab_2" className={classTab_2Names}></span>
                    </button>
                </div>
                <div className="conteiner__content">
                    {tabContent}
                </div>
            </div>
        </div>
    }
}