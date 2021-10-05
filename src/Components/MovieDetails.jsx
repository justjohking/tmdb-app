import React, { Component } from 'react'

export class MovieDetails extends Component {

    state = {
        genres: null
    }

    componentDidMount() {
        this.setState({
            genres: this.props.details.genre_ids.map((ID) => {
            return this.props.genres.filter(oneGenre => oneGenre.id === ID)[0]
        })})
    }
    
    render() {
        console.log(this.props.details)
        return (
            <div className="MovieDetails">
                <div className="backdrop-container"
                style={this.props.details.backdrop_path ? 
                {backgroundImage: `url(https://image.tmdb.org/t/p/original${this.props.details.backdrop_path})`} : 
                {backgroundColor: "white"}}>

                    <div className="info-container">
                        <h2>{this.props.details.title}</h2>
                        <img src={"https://image.tmdb.org/t/p/original" + this.props.details.poster_path} alt="poster"/>
                        <p>{this.props.details.overview}</p>
                        <p>{this.props.details.popularity}</p>
                        <p>Released : {this.props.details.release_date}</p>
                        <p>Original title : {this.props.details.original_title}</p>
                        
                        <p>{this.props.details.adult ? "+18" : ""}</p>
                        <p>{this.props.details.id}</p>
                        <p>Average vote : {this.props.details.vote_average}</p>
                        <p>Number of votes : {this.props.details.vote_count}</p>
                        {this.state.genres && 
                        <ul>{this.state.genres.map((genre) => {
                            return (<li key={genre.id}>{genre.name}</li>)
                        })}</ul>}
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetails


