import React from 'react';

import './card.styles.css';

export const Card = ({id, name, email}) => {
    return (
        <div className="card-container">
            <img alt={name} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}