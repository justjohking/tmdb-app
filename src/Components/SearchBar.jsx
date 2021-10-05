import React, { Component } from 'react'

export class SearchBar extends Component {
    

    handleSearch = (event) => {
        this.props.handleSearch(event);
    }

    filterMovies = () => {
        this.props.filterMovies()
    }

    resetSearch = () => {
        this.props.resetSearch()
    }

    render() {
        return (
            <nav className="SearchBar">
                <input 
                    id="search-input"
                    name="search"
                    type='text'
                    value={this.props.value}
                    onChange={this.handleSearch}
                />
                    <button onClick={this.filterMovies} className="btn search">search</button>
                    <button onClick={this.resetSearch} className="btn reset">reset</button>
            </nav>
        )
    }
}

export default SearchBar
