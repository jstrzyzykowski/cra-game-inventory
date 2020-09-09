import React, { Component } from 'react';
import '../styles/App.css';
import Inventory from '../components/Inventory';
import Details from '../components/Details';
import Equipment from '../components/Equipment';

class App extends Component {

  state = {
    items: [
      {
        id: 0,
        type: 'weapon',
        unique: 'sacrificial-dagger',
        name: "Ben's knife",
        desc: "Be carefull, it's still very poisonous.",
        active: false,
      },
      {
        id: 1,
        type: 'armor',
        unique: 'lamellar',
        name: 'Lamellar Armor',
        desc: "Legends was true! You can feel something magic emanates from this armor.",
        active: false,
      },
    ],
    activeItem: '',
    equippedItems: {
      head: '',
      armor: '',
      belt: '',
      boots: '',
      neck: '',
      weapon: '',
      shield: '',
      ring1: '',
      ring2: '',
      ring3: '',
    },
    statistics: {},
  }

  handleClick = id => {

    const items = [...this.state.items];
    const index = items.findIndex(item => item.id === id);

    if (items[index].active) {
      items[index].active = false;
      this.setState({
        items,
        activeItem: '',
      })
    } else {
      items.forEach(item => item.active = false);
      items[index].active = true;
      this.setState({
        items,
        activeItem: items[index],
      })
    }
  }

  handleClickEquip = (id, type) => {
    const itemsCopy = [...this.state.items];
    const index = itemsCopy.findIndex(item => item.id === id);

    const equippedItems = this.state.equippedItems;
    equippedItems[type] = itemsCopy[index];

    const items = itemsCopy.filter(item => item.id !== id);

    this.setState({
      items,
      activeItem: '',
      equippedItems,
    })
  }

  handleWearOff = item => {
    const equippedItems = this.state.equippedItems;
    equippedItems[item.type] = '';


  }

  render() {

    return (
      <div className="app">
        <div className="right-side">
          <Inventory items={this.state.items} click={this.handleClick} />
          <Details items={this.state.items} activeItem={this.state.activeItem} clickEquip={this.handleClickEquip} />
        </div>
        <div className="left-side">
          <Equipment equippedItems={this.state.equippedItems} clickWearOff={this.handleWearOff} />
        </div>
      </div>
    );
  }
}

export default App;
