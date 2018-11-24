import * as React from 'react';
import './Footer.scss';

export const Footer = () => {
    return <div className="footer">
        <div className="footer__logo">
            <div className="logo logo__icon"></div>
            <div className="logo logo__title"></div>
        </div>
        <div className="footer__site-author">
            Create by Alina Moskalenko
        </div>
    </div>
}