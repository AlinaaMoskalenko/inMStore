import * as React from 'react';
import './Header.scss';

export class Header extends React.Component {
    constructor() {
        super();
        this.getSearchQuery = this.getSearchQuery.bind(this);
        this.inputValueChange = this.inputValueChange.bind(this);
        this.onReset = this.onReset.bind(this);
        this.state = {
            inputValue: '',
            isInputSearchOpened: false,
            navItem: [
                {
                    title: "Catalog",
                    href: "",
                },
                {
                    title: "About us",
                    href: "",
                },
            ],
        }
    }

    inputValueChange(event) {
        const value = event.target.value;
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.inputValue = value;
            return newState;
        });
    }

    getSearchQuery(event) {
        if (event.key === "Enter" || !event.key) {
            if (this.state.inputValue) {
                this.onReset();
            }
        }
    }

    onReset() {
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.inputValue = '';
            return newState;
        });
    }

    render() {
        const navItem = this.state.navItem.map((item, i) => {
            return <a key={i} href={item.href} className="nav__link">
                {item.title}
            </a>
        });

        return <div className="header">
            <div className="header__logo">
                <div className="logo logo__icon"></div>
                <div className="logo logo__title"></div>
            </div>
            <div className="header__wrapper">
                <div className="header__nav">{navItem}</div>
                <div className="header__action">
                    <div className="header__search">
                        <input type="text"
                            className="header__search-input"
                            placeholder="Search products"
                            onChange={this.inputValueChange}
                            onKeyPress={this.getSearchQuery}
                            value={this.state.inputValue} />
                        <button
                            className="header__button"
                            title="Search a product">
                            <i className="icon icon__search mdc-icon-button material-icons"
                                onClick={this.getSearchQuery}>search</i>
                        </button>
                    </div>
                    <button className="header__button"
                        title="Sign in">
                        <i className="icon icon__sign mdc-icon-button material-icons">perm_identity</i>
                    </button>
                </div>
            </div>
        </div>
    }
}