import * as React from 'react';
import './GlobalSidebar.scss';

export class GlobalSidebar extends React.Component {
    constructor() {
        super();
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            isOpened: false,
        };
    }

    toggleMenu() {
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.isOpened = !oldState.isOpened;
            this.props.onChangeMode(newState.isOpened);
            return newState;
        });
    }

    render() {
        const listLink = this.props.links.map((link, i) => {
            return <a key={i} href={link.href} className="sidebar__link">
                {link.title}
            </a>
        });

        let classNames = 'sidebar ';

        if (this.state.isOpened) {
            classNames += 'sidebar_opened';
        }

        return <aside className={classNames}>
            <div className="sidebar__toggle mdc-icon-button" onClick={this.toggleMenu}>
                <div className="toggle__row"></div>
                <div className="toggle__row"></div>
                <div className="toggle__row"></div>
            </div>
            <div className="sidebar__items">
                {listLink}
            </div>
        </aside>
    }
}