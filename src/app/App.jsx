import React, { Component } from 'react';
import './App.scss';
import { Header } from './components/header/Header.jsx';
import { GlobalSidebar } from './components/global-sidebar/GlobalSidebar.jsx';
import { Catalog } from './components/catalog/Catalog.jsx';
import { Footer } from './components/footer/Footer.jsx';

class App extends Component {
  constructor() {
    super();
    this.setSidebarMode = this.setSidebarMode.bind(this);
    this.state = {
      isSidebarOpened: false,
      sidebar_links: [
        {
          title: 'Home',
          href: 'https://www.apple.com/mac/',
        },
        {
          title: 'Wish list',
          href: 'https://www.apple.com/iphone/',
        },
        {
          title: 'Basket',
          href: 'https://www.apple.com/watch/',
        },
        {
          title: 'About us',
          href: 'https://www.apple.com/music/',
        },
        // {
        //   title: 'Support',
        //   href: 'https://support.apple.com/',
        // },
      ]
    };
  }

  setSidebarMode(value) {
    this.setState((oldState) => {
      const newState = Object.assign({}, oldState);
      newState.isSidebarOpened = value;
      return newState;
    });
  }

  render() {
    let classSectionNames = 'app__section ';

    if (this.state.isSidebarOpened) {
      classSectionNames += ' app__section_compressed';
    }

    return (
      <div className="app">
        <header className="app__header">
          <Header />
        </header>
        <main className="app__main">
          <div className="app__aside">
            <GlobalSidebar links={this.state.sidebar_links}
              onChangeMode={this.setSidebarMode} />
          </div>
          <section className={classSectionNames}>
            <Catalog />
          </section>
        </main>
        <footer className="app__footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
