import React from 'react';
import '../styles/Item.css';

const Item = props => {

    const icon = require(`../images/${props.item.unique}.png`);
    const style = {
        backgroundImage: `url("${icon}")`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className={props.item.active ? " item-outer active" : " item-outer"} style={style} onClick={() => {
            props.click(props.item.id);
        }}>

        </div>
    );
}

export default Item;