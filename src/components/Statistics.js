import React from 'react';
import '../styles/Statistics.css';

const Statistics = props => {

    const properties = Object.keys(props.stats);
    const stats = properties.map((property, index) => {

        const baseStatValue = props.baseStats[index];
        const totalStatValue = props.stats[property];
        const difference = totalStatValue - baseStatValue;

        let statisticReturn = (
            <li key={property}>
                <p>{property} : {props.stats[property]}</p>
            </li>
        );

        if (totalStatValue > baseStatValue) {
            statisticReturn = (
                <li key={property}>
                    <p>
                        {property} : <span>{props.stats[property]}</span> ({baseStatValue} + {difference})
                    </p>
                </li>
            );
        }

        return statisticReturn;
    })


    return (
        <ul>
            {stats}
        </ul>
    );
}

export default Statistics;