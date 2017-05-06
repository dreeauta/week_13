import $ from 'jquery';
const MOVIE_APP_ID = "78bbc87178377f3c8fb30ddbae8a6db6";


export function changeName(name) {
  return  {type: 'changeName',
        query: name  };
}

export function startGetMovie() {
  return {type: 'start_get_movie'};
}

function movieInfo(data) {
  return {
     type: 'movie_info', payload: data};
  }

function movieError(resp) {
  let error = (resp && resp.responseJSON && resp.responseJSON.message) || 'Something went wrong!';
  return { type: 'movie_error', error: error};
}

function fetchingMovieInfo(){
  return { type: 'fetch_movie'};
}


export function getMovie(query_string) {

  return function(dispatch)  {
    dispatch(fetchingMovieInfo());
    $.ajax({
      url: 'https://api.themoviedb.org/3/search/movie',
      data: {
        query: query_string,
        api_key: MOVIE_APP_ID
      }
    })
    .then(data => dispatch(movieInfo(data)))
    .catch(resp => dispatch(movieError(resp)));
   }
};
