const { createStore } = require("redux");

// state-count:0:
const initialState = {
  count: 0,
  text: "Basic Redux Counter App"
};
//constants:
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
//action- increment, decrement, reset:
const incrementCounterAction = () => {
  return {
    type: INCREMENT
  };
};
const decrementCounterAction = () => {
  return {
    type: DECREMENT
  };
};
const resetCounterAction = () => {
  return {
    type: RESET
  };
};

const incrementByValue = value => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value
  };
};

//Reducer:
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case RESET:
      return {
        ...state,
        count: 0
      };
    case INCREMENT_BY_VALUE: {
      return {
        ...state,
        count: state.count + action.payload
      };
    }
    default:
      return state;
  }
};
//store:
const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});

//action dispatch:
// store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(resetCounterAction());
store.dispatch(incrementByValue(11));
store.dispatch(resetCounterAction());
store.dispatch(incrementCounterAction());
