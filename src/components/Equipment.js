import React from 'react';
import '../styles/Equipment.css';

const Equipment = () => {
    return (
        <div className="equipment-user">
            <div className="user-set">
                <div className="set-main">
                    <div className="main-head"></div>
                    <div className="main-neck"></div>
                    <div className="main-armor"></div>
                    <div className="main-weapon"></div>
                    <div className="main-shield"></div>
                    <div className="main-belt"></div>
                    <div className="main-boots"></div>
                </div>
                <div className="set-rings">
                    <div className="rings-ring"></div>
                    <div className="rings-ring"></div>
                    <div className="rings-ring"></div>
                </div>
            </div>
            <div className="user-statistics">
                User Statistics
            </div>
        </div>
    );
}

export default Equipment;