import * as React from 'react';
import './Catalog.scss';
import { HTTPService } from "../http-service/http-service";
import { Card } from '../card/Card.jsx';

export class Catalog extends React.Component {
    constructor() {
        super();
        this.httpService = new HTTPService();
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        // this.httpService.get('http://localhost:4002/api/v1/phones', (products) => {
        //     products = products.map((product) => {
        //         product.imgUrl = 'http://localhost:4002/api/v1/' + product.imgUrl;
        //         return product;
        //     })
        //     this.setState((oldState) => Object.assign({}, oldState, { products }));
        // }, (e) => {
        //     console.log(e); //если все плохо, то приходит какой-то callback
        // });
        this.httpService.get('mobile_phones_catalog/phones.json', (products) => {
            products = products.map((product) => {
                product.imgUrl = 'mobile_phones_catalog/' + product.imgUrl;
                return product;
            })
            this.setState((oldState) => Object.assign({}, oldState, { products }));
        }, (e) => {
            console.log(e); //если все плохо, то приходит какой-то callback
        });
    }

    render() {
        console.log(window.location.href);
        return <div className="catalog-content">
            {this.state.products.map((product, i) => <Card {...product} key={i} productID={this.props.productID} isAccess={this.props.isAccess} />)}
        </div>
    }
}
