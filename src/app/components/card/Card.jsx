import * as React from 'react';
import './Card.scss';

export const Card = (props) => {
    const { name, description, imgUrl, price, _id } = props;
    return <div id={_id} className="card">
        <div className="card__image">
            <img src={imgUrl} alt={name} />
        </div>
        <div className="card__title">{name}</div>
        <div className="card__description">{description}</div>
    </div>
}