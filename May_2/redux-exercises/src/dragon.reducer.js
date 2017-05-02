const INITIAL_STATE = {
  dragonHealth = 20,
  heroHealth = 10
}

function reducer(state = INITIAL_STATE, action) {
  if (action.type === "flight") {
    return Object.assign ({}, state {
      hero: heroHealth
    })
  }

  return state;
}


export default reducer;
