import React, { Component } from 'react';
import './App.scss';
import { HTTPService } from "./components/http-service/http-service";
import { Header } from './components/header/Header.jsx';
import { GlobalSidebar } from './components/global-sidebar/GlobalSidebar.jsx';
import { Catalog } from './components/catalog/Catalog.jsx';
import { Product } from './components/product/Product.jsx';
import { Footer } from './components/footer/Footer.jsx';

class App extends Component {
  constructor() {
    super();
    this.setSidebarMode = this.setSidebarMode.bind(this);
    this.httpService = new HTTPService();
    this.state = {
      product: [],
      isSidebarOpened: true,
      sidebar_links: [
        {
          title: 'Home',
          href: 'https://www.apple.com/mac/',
        },
        {
          title: 'Catalog',
          href: 'https://www.apple.com/iphone/',
          item: [
            {
              title: 'Dell',
              href: '',
            },
            {
              title: 'LG',
              href: '',
            },
            {
              title: 'Motorola',
              href: '',
            },
            {
              title: 'Nexus',
              href: '',
            },
            {
              title: 'Samsung',
              href: '',
            },
            {
              title: 'Sanyo',
              href: '',
            },
            {
              title: 'T-Mobile',
              href: '',
            },
          ]
        },
        {
          title: 'About us',
          href: 'https://www.apple.com/music/',
        },
      ],
    };
  }

  componentDidMount() {
    this.httpService.get('http://localhost:4002/api/v1/phones/5bf537dca53801fa3459dfa3', (product) => {
      this.setState((oldState) => Object.assign({}, oldState, { product }));
    }, (e) => {
      console.log(e); //если все плохо, то приходит какой-то callback
    });
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
      <div className="app" >
        <header className="app__header">
          <Header />
        </header>
        <div className="app__main">
          <div className="app__aside">
            <GlobalSidebar links={this.state.sidebar_links}
              onChangeMode={this.setSidebarMode} />
          </div>
          <div></div>
          <section className={classSectionNames}>
            <Catalog />
            {/* {this.state.product.length !== 0 ? <Product {...this.state.product} /> : console.log()} */}
            <footer className="app__footer">
              <Footer />
            </footer>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
