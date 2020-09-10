import React from 'react';
import Item from '../components/Item';

const ItemList = props => {

    const items = props.items.map(item => (
        <Item key={item.id} item={item} click={props.click} />
    ))

    return (
        <>
            {items}
        </>
    );
}

export default ItemList;