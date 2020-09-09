import React from 'react';
import '../styles/Equipment.css';
import EquipmentSlot from '../components/EquipmentSlot';

const Equipment = props => {

    const properties = Object.keys(props.equippedItems);
    const slots = properties.map(property => (
        <EquipmentSlot key={property} item={props.equippedItems[property]} slotType={property} clickWearOff={props.clickWearOff} />
    ));

    return (
        <div className="equipment-user" >
            <div className="user-set">
                {slots}
            </div>
            <div className="user-statistics">
                User Statistics
            </div>
        </div>
    );
}

export default Equipment;