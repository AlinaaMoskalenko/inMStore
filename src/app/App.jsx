import React, { Component } from 'react';
import './App.scss';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { HTTPService } from "./components/http-service/http-service";
import Header from './components/header/Header.jsx';
import { GlobalSidebar } from './components/global-sidebar/GlobalSidebar.jsx';
import { Catalog } from './components/catalog/Catalog.jsx';
import { Product } from './components/product/Product.jsx';
import Authorization from './components/page_authorization/Authorization.jsx';
import { Cart } from './components/page_cart/Cart.jsx';
import { Registration } from './components/page_registration/Registration.jsx';
import { AboutUs } from './components/page_about_us/AboutUs.jsx';
import { Footer } from './components/footer/Footer.jsx';

class App extends Component {
  constructor() {
    super();
    this.httpService = new HTTPService();
    this.setSidebarMode = this.setSidebarMode.bind(this);
    this.getProductID = this.getProductID.bind(this);
    this.setAccess = this.setAccess.bind(this);
    this.state = {
      isAccess: false,
      selectedProduct: [],
      isSidebarOpened: false,
      sidebar_links: [
        {
          title: 'Home',
          href: '#/',
        },
        {
          title: 'Catalog',
          item: [
            {
              title: 'Dell',
              href: '#/dell',
            },
            {
              title: 'LG',
              href: '#/lg',
            },
            {
              title: 'Motorola',
              href: '#/motorola',
            },
            {
              title: 'Nexus',
              href: '#/nexus',
            },
            {
              title: 'Samsung',
              href: '#/samsung',
            },
            {
              title: 'Sanyo',
              href: '#/sanyo',
            },
            {
              title: 'T-Mobile',
              href: '#/t-mobile',
            },
          ]
        },
        {
          title: 'About us',
          href: '#/about_us',
        },
      ],
    };
  }

  setAccess(access) {
    this.setState((oldState) => {
      const newState = Object.assign({}, oldState);
      newState.isAccess = access;
      return newState;
    });
  }

  getProductID(id) {
    // this.httpService.get('http://localhost:4002/api/v1/phones/' + `${id}`, (selectedProduct) => {
    //   this.setState((oldState) => Object.assign({}, oldState, { selectedProduct }));
    // }, (e) => {
    //   console.log(e); //если все плохо, то приходит какой-то callback
    // });
    this.httpService.get('mobile_phones_catalog/phones_description/' + `${id}` + '.json', (selectedProduct) => {
      this.setState((oldState) => Object.assign({}, oldState, { selectedProduct }));
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
    let classSidebarNames = "app__aside ";
    let classSectionNames = 'app__section ';
    let classFooterNames = 'app__footer ';

    if (this.state.isSidebarOpened) {
      classSectionNames += 'app__section_small';
      classFooterNames += 'app__footer_small';
      classSidebarNames += 'app__aside_opened';
    }

    return <Router>
      <div className="app" >
        <header className="app__header">
          <Route path="/" component={() => <Header isAccess={this.state.isAccess} authorized={this.setAccess} />} />
        </header>
        <div className="app__main">
          <div className={classSidebarNames}>
            <GlobalSidebar links={this.state.sidebar_links}
              onChangeMode={this.setSidebarMode} />
          </div>
          <section className={classSectionNames}>
            {/* переход на catalog, который по умолчанию есть root page, exact = true указывает на то, 
            что если у нас есть чисто / в адресе, то это home page(catalog)*/}
            <Route path="/" exact={true} component={() => <Catalog productID={this.getProductID} isAccess={this.state.isAccess} {...this.state.products} />} />
            {this.state.selectedProduct.length !== 0 ? <Route path={"/" + `${this.state.selectedProduct._id}`} component={() => <Product {...this.state.selectedProduct} isAccess={this.state.isAccess} />} /> : console.log()}
            <Route path='/sign_in' component={() => <Authorization authorized={this.setAccess} />} />
            {/* <Route path='/sign_up' component={Registration} /> */}
            <Route path='/cart' component={Cart} />
            <Route path='/about_us' component={AboutUs} />
          </section>
          <footer className={classFooterNames}>
            <Footer />
          </footer>
        </div>
      </div >
    </Router>
  }
}

export default App;
