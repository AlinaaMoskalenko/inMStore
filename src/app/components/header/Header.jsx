import * as React from 'react';
import './Header.scss';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
    constructor() {
        super();
        this.toggleSearchRow = this.toggleSearchRow.bind(this);
        this.getSearchQuery = this.getSearchQuery.bind(this);
        this.inputValueChange = this.inputValueChange.bind(this);
        this.onReset = this.onReset.bind(this);
        this.state = {
            isAccess: false,
            searchRowOpened: false,
            inputValue: '',
            isInputSearchOpened: false,
            navItem: [
                {
                    title: "Catalog",
                    href: "#/",
                },
                {
                    title: "About us",
                    href: "#/about_us",
                },
            ],
        }
    }

    componentDidMount() {
        // debugger;
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.isAccess = this.props.isAccess;
            return newState;
        });
    }

    toggleSearchRow() {
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.searchRowOpened = !oldState.searchRowOpened;
            return newState;
        });
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

    onClick() {
        // this.state.isAccess ? this.props.history.push('/') : console.log()
        if (this.state.isAccess) {
            this.setState((oldState) => {
                const newState = Object.assign({}, oldState);
                newState.isAccess = !oldState.isAccess;
                return newState;
            });
        }
        this.props.authorized(false);
    }

    render() {
        // console.log(this.state.isAccess);
        const navItem = this.state.navItem.map((item, i) => {
            return <a key={i} href={item.href} className="nav__link">
                {item.title}
            </a>
        });

        let classNamesSearchRow = "header__search-input ";
        let classNamesSearchIcon = "header__button btn-search ";

        if (this.state.searchRowOpened) {
            classNamesSearchRow += "header__search-input_opened";
            classNamesSearchIcon += "btn-search_opened";
        }

        let button;
        if (this.state.isAccess) {
            button = <button className="header__button"
                title="Sign out" onClick={this.onClick.bind(this)}>
                <i className="icon icon__sign mdc-icon-button material-icons">exit_to_app</i>
            </button>
        } else {
            button = <Link to="/sign_in" className="header__button"
                title="Sign in">
                <i className="icon icon__sign mdc-icon-button material-icons">perm_identity</i>
            </Link>
        }

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
                            className={classNamesSearchRow}
                            placeholder="Search products"
                            onChange={this.inputValueChange}
                            onKeyPress={this.getSearchQuery}
                            value={this.state.inputValue} />
                        <button
                            className={classNamesSearchIcon}
                            title="Search a product"
                            onClick={this.toggleSearchRow}>
                            <i className="icon icon__search mdc-icon-button material-icons">search</i>
                        </button>
                    </div>
                    {button}
                </div>
            </div>
        </div>
    }
}
export default withRouter(Header);