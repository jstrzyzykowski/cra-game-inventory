import React from 'react';
import '../styles/Details.css';

const Details = props => {

    return (
        <div className="details-outer" >
            <div className="details-info">
                <div className="header">
                    <p>{!props.activeItem ? 'Choose Item' : props.activeItem.name}</p>
                </div>
                <div className="main">
                    <p>{!props.activeItem ? 'Here you can check information about choosed item.' : props.activeItem.desc}</p>
                </div>
            </div>
            <div className="details-control">
                <button onClick={() => {
                    if (props.items.length) {
                        if (!props.activeItem) {
                            alert('No active item');
                        } else {
                            props.clickEquip(props.activeItem.id, props.activeItem.type);
                        }
                    } else {
                        alert('Inventory is empty.');
                    }

                }}>Equip</button>
                {/* Drop button is not programmed yet */}
                <button>Drop</button>
                {/* Destroy button is not programmed yet */}
                <button>Destroy</button>
            </div>
        </div>
    );
}

export default Details;