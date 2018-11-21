import React, { Component } from 'react';
import './App.scss';
import { Catalog } from './components/catalog/Catalog.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header"></header>
        <aside className="App__aside"></aside>
        <main className="App__main">
          <Catalog />
        </main>
        <footer className="App__footer"></footer>
      </div>
    );
  }
}

export default App;
