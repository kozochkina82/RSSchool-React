import React, { Component } from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
}

interface SearchState {
  query: string;
}

class Search extends Component<SearchProps, SearchState> {
  state: SearchState = {
    query: '',
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.onSearch(this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
          placeholder="Search Pokémon..."
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Search;