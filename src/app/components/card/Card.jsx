import * as React from 'react';
import './Card.scss';

export class Card extends React.Component {
    constructor() {
        super();
        this.getDetails = this.getDetails.bind(this);
        this.addToWishlist = this.addToWishlist.bind(this);
        this.state = {
            isCardFocus: false,
            isAddToWishlistChecked: false,
            arrayActionButtons: [
                {
                    title: 'view more',
                    href: ''
                },
                {
                    title: 'buy',
                    href: ''
                }
            ],
        }
    }

    getDetails() {
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.isCardFocus = !oldState.isCardFocus;
            return newState;
        });
    }

    addToWishlist() {
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.isAddToWishlistChecked = !oldState.isAddToWishlistChecked;
            return newState;
        });
    }

    render() {
        const { name, description, imgUrl, _id } = this.props;

        const cardImage = {
            backgroundImage: `url(${imgUrl})`
        }

        let classNamesForCardContent = "card__content mdc-card__primary-action mdc-ripple-upgraded "
        let classNamesForButtonAddToWishlist = "action__add-to-wishlist mdc-icon-button ";

        if (this.state.isCardFocus) {
            classNamesForCardContent += "mdc-ripple-upgraded--background-focused mdc-ripple-upgraded--foreground-activation";
            setTimeout(this.getDetails, 250);
        }

        if (this.state.isAddToWishlistChecked) {
            classNamesForButtonAddToWishlist += "mdc-icon-button--on";
        }

        const actionButtons = this.state.arrayActionButtons.map((button, i) => {
            return <button key={i} className="action__btn mdc-button">
                {button.title}
            </button>
        });

        return <div id={_id} className="card">

            <div className={classNamesForCardContent} onClick={this.getDetails}>
                <div className="card__image" style={cardImage}></div>
                <div className="card__text">
                    <div className="card__title">{name}</div>
                    <div className="card__description">{description}</div>
                </div>
            </div>

            <div className="card__button">
                <div className="main-action">
                    {actionButtons}
                </div>
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
    }
}