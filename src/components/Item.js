import React from 'react';
import '../styles/Item.css';

const Item = props => {

    const icon = require(`../images/${props.item.name}.png`);
    const style = {
        backgroundImage: `url("${icon}")`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="item-outer" style={style}>

        </div>
    );
}

export default Item;