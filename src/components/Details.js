import React from 'react';
import '../styles/Details.css';

const Details = () => {
    return (
        <div className="details-outer">
            <div className="details-info">
                <div className="header">
                    <p>Item name</p>
                </div>
                <div className="main">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos numquam similique asperiores dolorum vero voluptates delectus ullam dolore hic cumque.</p>
                </div>
            </div>
            <div className="details-control">
                <button>Equip</button>
                <button>Drop</button>
                <button>Destroy</button>
            </div>
        </div>
    );
}

export default Details;