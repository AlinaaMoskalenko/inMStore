import React, { Component } from 'react';
import './App.scss';
import { GlobalSidebar } from './components/global-sidebar/GlobalSidebar.jsx';
import { Catalog } from './components/catalog/Catalog.jsx';
import { Footer } from './components/footer/Footer.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sidebar_links: [
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
      ]
    };
  }
  
  render() {
    return (
      <div className="App">
        <header className="App__header"></header>
        <main className="App__main">
          <div className="App__aside">
            <GlobalSidebar links={this.state.sidebar_links} />
          </div>
          <section className="App__section">
            <Catalog />
          </section>
        </main>
        <footer className="App__footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
