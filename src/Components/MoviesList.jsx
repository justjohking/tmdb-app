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
                        <li key={movie.id} onClick={() => this.selectMovie(movie.id)}><p>{movie.title}</p></li>
                     )   
                    })} 
            </div>
        )
    }
}

export default MoviesList
