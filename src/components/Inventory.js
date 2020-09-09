import React from 'react';
import '../styles/Inventory.css';
import ItemList from '../components/ItemList';

const Invntory = props => {
    return (
        <div className="inventory-outer">
            {props.items.length ? <ItemList items={props.items} click={props.click} /> : <p className="msg-empty">Inventory is empty...</p>}

        </div>
    );
}

export default Invntory;