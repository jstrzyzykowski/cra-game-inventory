import React from 'react';
import '../styles/Equipment.css';
import EquipmentSlot from '../components/EquipmentSlot';

const Equipment = props => {

    const { head, armor, belt, boots, neck, weapon, shield, ring1, ring2, ring3 } = props.equippedItems;

    return (
        <div className="equipment-user" >
            <div className="user-set">
                <EquipmentSlot item={head} slotType="head" clickWearOff={props.clickWearOff} />
                <EquipmentSlot item={neck} slotType="neck" clickWearOff={props.clickWearOff} />
                <EquipmentSlot item={armor} slotType="armor" clickWearOff={props.clickWearOff} />
                <EquipmentSlot item={weapon} slotType="weapon" clickWearOff={props.clickWearOff} />
                <EquipmentSlot item={shield} slotType="shield" clickWearOff={props.clickWearOff} />
                <EquipmentSlot item={belt} slotType="belt" clickWearOff={props.clickWearOff} />
                <EquipmentSlot item={boots} slotType="boots" clickWearOff={props.clickWearOff} />

                <EquipmentSlot item={ring1} slotType="ring1" clickWearOff={props.clickWearOff} />
                <EquipmentSlot item={ring2} slotType="ring2" clickWearOff={props.clickWearOff} />
                <EquipmentSlot item={ring3} slotType="ring3" clickWearOff={props.clickWearOff} />
            </div>
            <div className="user-statistics">
                User Statistics
            </div>
        </div>
    );
}

export default Equipment;