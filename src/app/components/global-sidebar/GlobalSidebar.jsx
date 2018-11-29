import * as React from 'react';
import './GlobalSidebar.scss';

export class GlobalSidebar extends React.Component {
    constructor() {
        super();
        this.toggleMenu = this.toggleMenu.bind(this);
        this.getItemList = this.getItemList.bind(this);
        this.state = {
            isOpened: true,
            isOpenedLink: false,
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

    getItemList() {
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.isOpenedLink = !oldState.isOpenedLink;
            return newState;
        });
    }

    render() {
        const classNameLink = 'sidebar__link';

        let classNameItem = 'sidebar__link-item';

        if (this.state.isOpenedLink) {
            classNameItem = 'sidebar__link-item_active';
        }

        const listLink = this.props.links.map((link, i) => {
            if (link.item) {
                const itemList = link.item.map((item, i) => {
                    return <li key={i} className={classNameItem}>
                        <a href={item.href} className={classNameLink}>{item.title}</a>
                    </li>
                });
                return <ul key={i} className={classNameLink}
                    onClick={this.getItemList}>
                    {link.title}
                    {itemList}
                </ul>
            } else {
                return <a key={i} href={link.href} className={classNameLink}>
                    {link.title}
                </a>
            }
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