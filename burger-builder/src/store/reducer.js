const initialState = {
  counter: 10,
  results: [],
  burgerTotal: 5,
};

const reducer = (state = initialState, action) => {
  // action is the object being passed to dispatch function
  // in the functional component

  // we return a new complete state object so that the
  // useselectors can get the updated state value it is listening for
  // so that we can have an updated state in the reducer
  // and so that we dont alter any of the other states not involved

  // remember to do a copy of the ref object your are editing
  // if you are editing an array, make a copy of the array or return a copy
  // if you are editing an object make a copy of the obj
  // if you are editing an obj in an array, copy obj, edit, copy array, insert obj into array

  switch (action.type) {
    case "increment_counter":
      let incrementedCounter = state.counter + action.additional;
      return {
        ...state,
        counter: incrementedCounter,
        results: [
          ...state.results,
          { id: new Date(), value: incrementedCounter },
        ],
      };

    case "delete_counter_result":
      return {
        ...state,
        results: state.results.filter(
          (res) => res.value != action.valueToRemove
        ),
      };

    case "update_burger_total":
      return {
        ...state,
        burgerTotal: action.burgerTotal,
      };

    default:
      return state;
  }
};

export default reducer;
