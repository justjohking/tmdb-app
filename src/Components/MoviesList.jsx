import React, { Component } from 'react';

export class MoviesList extends Component {

    selectMovie = (id) => {
        this.props.select(id)
    }

    render() {
        return (
            <div className="MoviesList">
                {this.props.movies.map((movie) => {
                     return(
                        <li 
                        key={movie.id} 
                        onClick={() => this.selectMovie(movie.id)}
                        style={movie.backdrop_path ? 
                            {backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`} : 
                            {backgroundColor: "grey"}}
                        >
                            <p>{movie.title}</p>
                        </li>
                     )   
                    })} 
            </div>
        )
    }
}

export default MoviesList
