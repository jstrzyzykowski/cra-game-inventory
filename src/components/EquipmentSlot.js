import React from 'react';
import '../styles/EquipmentSlot.css';

const EquipmentSlot = props => {

    let item = <div className={`main-${props.slotType}`}></div>;

    if (props.item !== '') {
        const icon = require(`../images/${props.item.unique}.png`);
        const style = {
            backgroundImage: `url("${icon}")`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
        };

        item = <div className={`main-${props.slotType}`} style={style}>
            <i className="fas fa-minus-square" onClick={() => {
                props.clickWearOff(props.item);
            }}></i>
        </div>;
    }

    return (
        <>
            {item}
        </>
    );
}

export default EquipmentSlot;