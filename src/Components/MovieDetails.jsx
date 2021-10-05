import React, { Component } from 'react';
import popularityIcon from '../assets/popularity.png';

export class MovieDetails extends Component {

    state = {
        genres: null
    }

    // pair the genre ids in the movie info with the array of genres that we got in initial API call in the Interface component
    componentDidMount() {
        this.setState({
            genres: this.props.details.genre_ids.map((ID) => {
            return this.props.genres.filter(oneGenre => oneGenre.id === ID)[0]
        })})
    }

    // since the props change, specifically the genres, we need to update the component to get the genres of the new movie being displayed
    componentDidUpdate(prevProps, prevState) {
        if(this.props.details.genre_ids !== prevProps.details.genre_ids) {
            this.setState({
                genres: this.props.details.genre_ids.map((ID) => {
                return this.props.genres.filter(oneGenre => oneGenre.id === ID)[0]
            })})
        }
    }
    
    render() {
        // console.log(this.props.details)
        return (
            <div className="MovieDetails">

                <div className="movie-info-container">

                    <div className="backdrop-container"
                    style={this.props.details.backdrop_path ? 
                        {backgroundImage: `url(https://image.tmdb.org/t/p/original${this.props.details.backdrop_path})`} : 
                        {backgroundColor: "grey"}}
                    >
                        <div className="poster-container">
                            {this.props.details.poster_path ?
                            <img src={"https://image.tmdb.org/t/p/original" + this.props.details.poster_path} alt="poster"/> : 
                            <p>No poster available</p>}
                        </div>

                        <div className="banner">
                            <p className="movie-title">{this.props.details.title}</p>
                            {this.props.details.title !== this.props.details.original_title && 
                            <p className="sub-title">{this.props.details.original_title} (<span>{this.props.details.original_language}</span>)</p>
                            }
                            <p className="overview">{this.props.details.overview}</p>
                        </div>
                    </div>

                    <div className="info-div">
                        <div className="first-container">
                            <div>
                                <img src={popularityIcon} alt="icon Freepik" className="popularity"/>
                                {this.props.details.popularity}
                            </div>
                            <p>Released : {this.props.details.release_date}</p>
                            <p>{this.props.details.adult ? "+18" : "  "}</p>
                        </div>
                        
                        <div className="votes">
                            <p>Average vote : {this.props.details.vote_average}</p>
                            <p>Number of votes : {this.props.details.vote_count}</p>
                        </div>
                        
                        {this.state.genres && 
                        <ul className="genres">{this.state.genres.map((genre) => {
                            return (<li key={genre.id}>{genre.name}</li>)
                        })}</ul>}
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetails


