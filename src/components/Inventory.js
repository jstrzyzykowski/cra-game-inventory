import React from 'react';
import '../styles/Inventory.css';
import ItemList from '../components/ItemList';

const Invntory = props => {
    return (
        <div className="inventory-outer">
            <ItemList items={props.items} />
        </div>
    );
}

export default Invntory;