import React, { Component } from 'react';
import './App.scss';
import { Catalog } from './components/catalog/Catalog.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Catalog />
        </header>
      </div>
    );
  }
}

export default App;
