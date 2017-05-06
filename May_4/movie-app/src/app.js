import React from 'react';

export default class App extends React.Component {
  render() {
    let movie = this.props.search.movieData;
    let movieDisplay;
    if (movie) {

      movieDisplay = (
        <div>
        {movie.results.map((movie,idx) =>
          <p key={idx}> {movie.title} <br/>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>

            <br/>
            {movie.release_date}
            <br/>
            {movie.overview}
            </p>
        )}

        </div>
      );
      }
      else if (this.props.search.isFetching) {
        movieDisplay = <p> loading! </p>;

      }
      else if (this.props.search.error) {
        movieDisplay = <p> {this.props.search.error} </p>;
      }

  return (
    <div>


    <input type="text" value={this.props.search.query} onChange={event => this.props.changeName(event.target.value)}/>

    <button onClick={() => this.props.getMovie(this.props.search.query)}> Get Movie</button>
    {movieDisplay}

    </div>


  );

}

}
