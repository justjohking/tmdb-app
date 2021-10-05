import React, { Component } from 'react';
import axios from 'axios';
import MoviesList from './MoviesList';
import MovieDetails from './MovieDetails';
import SearchBar from './SearchBar';
import SelectMovie from './SelectMovie';

export class Interface extends Component {
    state = {
        movies : [],
        search: "",
        selectedMovie: "",
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
            search: "",
            selectedMovie: ""
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
                <SearchBar 
                    handleSearch={this.handleSearch}
                    filterMovies={this.filterMovies}
                    resetSearch={this.resetSearch}
                    value={this.state.search}
                    />
                <div className="movies-container">
                    <MoviesList 
                    movies={this.state.movies}
                    select={this.selectMovie}
                    />

                    {this.state.selectedMovie.length === 0 && 
                    <SelectMovie />}

                    {this.state.selectedMovie && 
                    <MovieDetails 
                    genres={this.state.genres}
                    details={this.state.selectedMovie}
                    />}
                </div>
            </div>
        )
    }
}

export default Interface
