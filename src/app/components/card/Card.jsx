import * as React from 'react';
import './Card.scss';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


export class Card extends React.Component {
    constructor() {
        super();
        this.addToWishlist = this.addToWishlist.bind(this);
        this.state = {
            isAccess: false,
            isAddToWishlistChecked: false,
            arrayActionButtons: [
                {
                    title: 'view more',
                    href: '',
                },
                {
                    title: 'buy',
                    href: '',
                }
            ],
        }
    }

    componentDidMount() {
        const { _id, isAccess } = this.props;
        console.log(this.state.arrayActionButtons[1].href);
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.arrayActionButtons[0].href = '/' + _id;
            newState.isAccess = isAccess;
            return newState;
        });

        if (isAccess) {
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.arrayActionButtons[1].href = '/cart';
                return newState;
            });
        } else {
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.arrayActionButtons[1].href = '/sign_in';
                return newState;
            });
        }
    }

    setProduct(id, event) {
        ((event.target.textContent === this.state.arrayActionButtons[0].title) ||
            (event.target.tagName === "DIV") ||
            (event.target.tagName === "H2")) ?
            this.props.productID(id) :
            console.log("press BUY"); //this.props.productID(id) и сделать переход на корзину в Арр
    }

    addToWishlist() {
        //this.props.productID(id) и просто добавить в список wishlist в Арр
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.isAddToWishlistChecked = !oldState.isAddToWishlistChecked;
            return newState;
        });
    }

    render() {
        const { name, description, imgUrl, price, _id } = this.props;

        const cardImage = {
            backgroundImage: `url(${imgUrl})`
        }

        let classNamesForCardContent = "card__content mdc-card__primary-action mdc-ripple-upgraded "

        if (this.state.isCardFocus) {
            classNamesForCardContent += "mdc-ripple-upgraded--background-focused mdc-ripple-upgraded--foreground-activation";
        }

        let classNamesForButtonAddToWishlist = 'action__add-to-wishlist_hidden';

        if (this.state.isAccess) {
            classNamesForButtonAddToWishlist = "action__add-to-wishlist mdc-icon-button ";
            if (this.state.isAddToWishlistChecked) {
                classNamesForButtonAddToWishlist += "mdc-icon-button--on";
            }
        }

        const actionButtons = this.state.arrayActionButtons.map((button, i) => {
            return <Link to={button.href} key={i} className="action__btn mdc-button"
                onClick={this.setProduct.bind(this, _id)}>
                {button.title}
            </Link>
        });

        return <div id={_id} className="card">
            <Link to={"/" + _id} style={{ textDecoration: "none" }} className={classNamesForCardContent}>
                <div className={classNamesForCardContent}
                    onClick={this.setProduct.bind(this, _id)}>
                    <div className="card__image" style={cardImage}></div>
                    <div className="card__text">
                        <h2 className="card__title">{name}</h2>
                        <div className="card__price">{price}</div>
                        <div className="card__description">{description}</div>
                    </div>
                </div>
            </Link>
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
        </div >
    }
}