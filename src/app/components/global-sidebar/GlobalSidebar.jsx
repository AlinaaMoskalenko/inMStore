import * as React from 'react';
import './GlobalSidebar.scss';

export class GlobalSidebar extends React.Component {
    constructor() {
        super();
        this.toggleMenu = this.toggleMenu.bind(this);
        this.state = {
            isOpened: false,
        };

        /*
        Запись объекта не в state
        this.menu = [
            {
                title: 'Mac',
                href: 'https://www.apple.com/mac/',
            },
            {
                title: 'iPhone',
                href: 'https://www.apple.com/iphone/',
            },
            {
                title: 'Watch',
                href: 'https://www.apple.com/watch/',
            },
            {
                title: 'Music',
                href: 'https://www.apple.com/music/',
            },
            {
                title: 'Support',
                href: 'https://support.apple.com/',
            },
            {
                title: 'Users comments',
                href: '/comment_page.html',
            },
        ];
        */
    }

    toggleMenu() {
        this.setState((oldState) => {
            const newState = Object.assign({}, oldState);
            newState.isOpened = !oldState.isOpened;
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
        let classToggleNames = 'sidebar__toggle ';

        if (this.state.isOpened) {
            classNames += 'sidebar_opened';
            classToggleNames += 'sidebar__toggle_opened';
        }

        return <aside className={classNames}>
            <div className={classToggleNames} onClick={this.toggleMenu}>
                <div className="toggle__row"></div>
                <div className="toggle__row"></div>
            </div>
            <div className="sidebar__items">
                {listLink}
            </div>
        </aside>
    }
}