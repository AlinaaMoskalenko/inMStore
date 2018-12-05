import * as React from 'react';
import { HashRouter as Link } from 'react-router-dom';
import './AboutUs.scss';

export const AboutUs = () => {
    return <div className="about-us">
        <Link to={"/"} className="about-us__back-link">
            <h3 className="about-us__back-to-home-page">
                <i className="about-us__arrow-to-home-page material-icons">arrow_back_ios</i>
                Home
            </h3>
        </Link>
        <div className="about-us__content">
            <div className="about-us__logo"></div>
            <div className="about-us__text">
                <div className="about-us__author">Created by Alina Moskalenko</div>
                <div className="about-us__contact">
                    <div className="contact-title">For more details</div>
                    <div className="about-us__email">
                        <div>E-mail:</div>
                        <div className="email">
                            <div className="email-link">alina.kravchenko@ukr.net</div>
                            <div className="email-link">alina17kravchenko@gmail.com</div>
                        </div>
                    </div>
                    <div className="about-us__number-phone">Phone number: +38(093)471-29-63</div>
                </div>
            </div>
        </div>
    </div>
}