import './Cart.scss';
import * as React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

export const Cart = () => {
    return <div className="cart">
        <Link to={"/"} className="cart__back-link">
            <h3 className="cart__back-to-home-page">
                <i className="cart__arrow-to-home-page material-icons">arrow_back_ios</i>
                Home
            </h3>
        </Link>
        <div className="cart__content">
            <div className="cart__logo"></div>
            <div className="cart__text">
                Thanks for your choice!<br/>Our manager will contact you soon.
            </div>
        </div>
    </div>

}