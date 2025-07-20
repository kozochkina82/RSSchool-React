import React, { Component } from 'react';
import Card from '../Card/Card';

interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

interface CardListProps {
  pokemons: Pokemon[];
}

class CardList extends Component<CardListProps> {
    render() {
        const { pokemons } = this.props;
        return (
      <div className="card-list">
        {pokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
          />
        ))}
      </div>
    );
    }
}
export default CardList;