import React, { Component } from 'react';
import styles from './Card.modules.css';

interface PokemonCardProps {
  name: string;
  image: string;
  types: string[];
}

class Card extends Component <PokemonCardProps> {
    render() {
        const { name, image, types } = this.props;
        return (
      <div className="card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>Types: {types.join(', ')}</p>
      </div>
    );
}
}
export default Card;