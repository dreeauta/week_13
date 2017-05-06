const INITIAL_STATE = {
  query: '',
  movieData: null,
  isFetching: false
};

export function reducer(state= INITIAL_STATE, action) {
  if (action.type === 'changeName'){
    return Object.assign({}, state, {
      query:action.query
    });
  } else if (action.type === 'movie_info'){
    return Object.assign({}, state, {
      movieData: action.payload,
      isFetching: false,
      error: null
    });
  } else if (action.type === 'fetch_movie') {
    return Object.assign({}, state, {
      movieData: null,
      isFetching: true,
      error: null
    });
  } else if (action.type === 'movie_error') {
    return Object.assign({}, state, {
      isFetching: false,
      error: action.error,
      movieData: null
    });
  }


  return state;
};


// export default reducer;
