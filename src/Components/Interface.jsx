import React, { Component } from 'react';
import axios from 'axios';
import MoviesList from './MoviesList';
import MovieDetails from './MovieDetails';
import SearchBar from './SearchBar';

export class Interface extends Component {
    state = {
        movies : [],
        search: "",
        selectedMovie: null,
        genres: []
    };

    handleSearch = (event) => {
        this.setState({
            search: event.target.value
        });
    }

    filterMovies = (value) => {
        axios
        .get("https://api.themoviedb.org/3/search/movie?api_key=0d132f86ea28928807693b5cda4e8779&query=" + this.state.search)
        .then((response) => this.setState({
            movies: response.data.results
        }))
        .catch(err => console.log(err))
    }

    selectMovie = (ID) => {
        const foundMovie = this.state.movies.filter(movie => movie.id === ID);
        this.setState({selectedMovie : foundMovie[0]});
    }

    resetSearch = () => {
        axios
        .get("https://api.themoviedb.org/3/discover/movie?api_key=0d132f86ea28928807693b5cda4e8779")
        .then((response) => {this.setState({
            movies: response.data.results,
            selectedMovie: null
        })})
        .catch(err => console.log(err))
    }

    componentDidMount () {
        axios
        .get("https://api.themoviedb.org/3/genre/movie/list?api_key=0d132f86ea28928807693b5cda4e8779&language=en-US&")
        .then((response) => this.setState({genres: response.data.genres}))
        .catch(err => console.log(err))

        this.resetSearch()
    }

    render() {
        return (
            <div className="Interface">
                <div>
                    <SearchBar 
                    handleSearch={this.handleSearch}
                    filterMovies={this.filterMovies}
                    resetSearch={this.resetSearch}
                    value={this.state.search}
                    />
                    <MoviesList 
                    movies={this.state.movies}
                    select={this.selectMovie}
                    />
                    
                </div>

                {!this.state.selectedMovie && 
                <div>
                    <p>Select a movie</p>
                </div>}
                {this.state.selectedMovie && 
                <MovieDetails 
                genres={this.state.genres}
                details={this.state.selectedMovie}
                />}
            </div>
        )
    }
}

export default Interface
