import React, { Component } from 'react';
import '../styles/App.css';
import Inventory from '../components/Inventory';
import Details from '../components/Details';
import Equipment from '../components/Equipment';
import Footer from '../components/Footer';

class App extends Component {

  // Health, energy, attack, defensive, armor.
  baseStats = [200, 50, 0, 0, 0];

  state = {
    items: [
      {
        id: 0,
        type: 'weapon',
        unique: 'sacrificial-dagger',
        name: "Ben's knife",
        desc: "Be carefull, it's still very poisonous.",
        active: false,
        statistics: {
          attack: 10,
          defensive: 2,
        }
      },
      {
        id: 1,
        type: 'armor',
        unique: 'lamellar',
        name: 'Lamellar Armor',
        desc: "Legends was true! You can feel something magic emanates from this armor.",
        active: false,
        statistics: {
          health: 20,
          armor: 10,
        }
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
    statistics: {
      health: this.baseStats[0],
      energy: this.baseStats[1],
      attack: this.baseStats[2],
      defensive: this.baseStats[3],
      armor: this.baseStats[4],
    },
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
    const equippedItemsCopy = this.state.equippedItems;
    const statisticsCopy = this.state.statistics;
    const item = itemsCopy[index];
    const itemStats = Object.keys(item.statistics);

    item.active = false;
    equippedItemsCopy[type] = item;
    const items = itemsCopy.filter(item => item.id !== id);

    itemStats.forEach(itemStat => {
      statisticsCopy[itemStat] += item.statistics[itemStat];
    });

    this.setState({
      items,
      activeItem: '',
      equippedItems: equippedItemsCopy,
      statistics: statisticsCopy,
    })
  }

  handleWearOff = item => {
    const items = [...this.state.items];
    const equippedItems = this.state.equippedItems;
    const statsCopy = this.state.statistics;
    const itemStats = Object.keys(item.statistics);

    equippedItems[item.type] = '';
    items.push(item);

    itemStats.forEach(itemStat => {
      statsCopy[itemStat] -= item.statistics[itemStat];
    })

    this.setState({
      items,
      equippedItems,
      statistics: statsCopy,
    })
  }

  render() {

    return (
      <>
        <div className="app">
          <div className="right-side">
            <Inventory items={this.state.items} click={this.handleClick} />
            <Details items={this.state.items} activeItem={this.state.activeItem} clickEquip={this.handleClickEquip} />
          </div>
          <div className="left-side">
            <Equipment equippedItems={this.state.equippedItems} clickWearOff={this.handleWearOff} stats={this.state.statistics} baseStats={this.baseStats} />
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

export default App;
