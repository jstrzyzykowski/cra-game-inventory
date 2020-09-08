import React from 'react';
import Item from '../components/Item';

const ItemList = props => {

    const items = props.items.map(item => (
        <Item key={item.id} item={item} />
    ))

    return (
        <>
            {items}
        </>
    );
}

export default ItemList;