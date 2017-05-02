// Do not generate a random number in this function!
// That would violate the purity of this function.
// Generate a random number and then dispatch it as
// an action.


function reducer(state = 0, action) {
  if(action.type === 'flip'){
    return action.value;
  }

 return state;

}


export default reducer;
