import React, { Component } from 'react';
import '../styles/App.css';
import Inventory from '../components/Inventory';
import Details from '../components/Details';
import Equipment from '../components/Equipment';
import { items } from '../components/Data';

class App extends Component {

  state = {
    items: items,
  }

  render() {
    return (
      <div className="app">
        <div className="right-side">
          <Inventory items={this.state.items} />
          <Details />
        </div>
        <div className="left-side">
          <Equipment />
        </div>
      </div>
    );
  }
}

export default App;
