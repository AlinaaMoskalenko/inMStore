import * as React from 'react';
import './Product.scss';
import { Specifications } from './specifications/Specifications.jsx';

export class Product extends React.Component {
    constructor() {
        super();
        this.state = {
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

    render() {
        const { _id, additionalFeatures, price, name, images, description } = this.props;

        const imgUrl = images.map((image, i) => {
            image = "http://localhost:4002/api/v1/" + image;
            return <img key={i}
                src={image}
                alt={name}
                className="image" />;
        });

        let classNamesForButtonAddToWishlist = "product__button mdc-icon-button "

        return <div id={_id} className="product">
            <h3 className="product__small-title">{name}</h3>
            <div className="product__conteiner">
                <div className="product__images">{imgUrl}</div>
                <div className="product__information">
                    <h2 className="product__title">{name}</h2>
                    <div className="product__price">{price}</div>
                    <button className="product__button">
                        <i className="material-icons">add_shopping_cart</i>
                    </button>
                    <button className={classNamesForButtonAddToWishlist}
                        title="Add to wishlist"
                        aria-label="Add to wishlist"
                        aria-hidden="true"
                        aria-pressed="false"
                        onClick={this.addToWishlist}>
                        <i className="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">favorite</i>
                        <i className="material-icons mdc-icon-button__icon">favorite_border</i>
                    </button>
                </div>
            </div>
            <div className="product__details">
                <div className="conteiner__tabs">
                    <button className="tab">Description</button>
                    <button className="tab">Specifications</button>
                    <button className="tab">Additional Features</button>
                </div>
                <div className="conteiner__content">
                    <div className="product__description">{description}</div>
                    <div className="product__specifications">
                        {this.state.specificationTitle.map((item, i) =>
                            <Specifications key={i}
                                {...this.props}
                                item={item} />)}
                    </div>
                    <div className="product__additional-features">{additionalFeatures}</div>
                </div>
            </div>
        </div>
    }
}