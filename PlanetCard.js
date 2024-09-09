import React from 'react';
import './PlanetCard.css';

const PlanetCard = ({ planet }) => {
  return (
    <div className="planet-card">
      <h3>{planet.name}</h3>
      <p>Population: {planet.population}</p>
    </div>
  );
};

export default PlanetCard;
