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
            <div className="SearchBar">
                    <input 
                        id="search-input"
                        name="search"
                        type='text'
                        value={this.props.value}
                        onChange={this.handleSearch}
                    />
                    <div>
                        <button onClick={this.filterMovies} class="btn search">search</button>
                        <button onClick={this.resetSearch} class="btn reset">reset</button>
                    </div>
            </div>
        )
    }
}

export default SearchBar
