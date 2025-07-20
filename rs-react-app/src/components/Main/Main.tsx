import React, { Component } from 'react';
import CardList from '../CardList/CardList';
import Search from '../Search/search';
import styles from './Main.module.css';

interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

interface MainState {
  pokemons: Pokemon[];
  offset: number;
  limit: number;
  query: string;
}

class Main extends Component <{}, MainState>{
  state: MainState = {
    pokemons: [],
    offset: 0,
    limit: 20,
    query: '',
  };

  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemons = async () => {
    const { offset, limit, query } = this.state;
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    if (query) {
      url = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (query) {

      this.setState({
        pokemons: [{
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          types: data.types.map(t => t.type.name),
        }],
      });
    } else {
      // Если это список покемонов
      const pokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const pokemonData = await res.json();
          return {
            id: pokemonData.id,
            name: pokemonData.name,
            image: pokemonData.sprites.front_default,
            types: pokemonData.types.map(t => t.type.name),
          };
        })
      );
      this.setState({ pokemons });
    }
  };

  handleSearch = (query: string) => {
    this.setState({ query, offset: 0 }, this.fetchPokemons);
  };

  handleNextPage = () => {
    this.setState(
      (prevState:string) => ({ offset: prevState.offset + prevState.limit }),
      this.fetchPokemons
    );
  };

  handlePrevPage = () => {
    this.setState(
      (prevState:string) => ({ offset: Math.max(0, prevState.offset - prevState.limit) }),
      this.fetchPokemons
    );
  };

  render() {
    return (
      <div>
        <Search onSearch={this.handleSearch} />
        <CardList pokemons={this.state.pokemons} />
        <div className="pagination">
          <button onClick={this.handlePrevPage}>← Prev</button>
          <button onClick={this.handleNextPage}>Next →</button>
        </div>
      </div>
    );
  }
}

export default Main;