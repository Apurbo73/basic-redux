// const { createStore } = require("redux");

const { createStore, combineReducers } = require("redux");

// // state-count:0:
// const initialState = {
//   count: 0,
//   text: "Basic Redux Counter App"
// };
// //constants:
// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";
// const RESET = "RESET";
// const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
// //action- increment, decrement, reset:
// const incrementCounterAction = () => {
//   return {
//     type: INCREMENT
//   };
// };
// const decrementCounterAction = () => {
//   return {
//     type: DECREMENT
//   };
// };
// const resetCounterAction = () => {
//   return {
//     type: RESET
//   };
// };

// const incrementByValue = value => {
//   return {
//     type: INCREMENT_BY_VALUE,
//     payload: value
//   };
// };

// //Reducer:
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return {
//         ...state,
//         count: state.count + 1
//       };
//     case DECREMENT:
//       return {
//         ...state,
//         count: state.count - 1
//       };
//     case RESET:
//       return {
//         ...state,
//         count: 0
//       };
//     case INCREMENT_BY_VALUE: {
//       return {
//         ...state,
//         count: state.count + action.payload
//       };
//     }
//     default:
//       return state;
//   }
// };
// //store:
// const store = createStore(counterReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });

// //action dispatch:
// // store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
// // store.dispatch(incrementCounterAction());
// // store.dispatch(resetCounterAction());
// store.dispatch(incrementByValue(11));
// store.dispatch(resetCounterAction());
// store.dispatch(incrementCounterAction());

//******************Multiple Reducers: */
//product Constant:
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";
// Product Initial State:
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2
};
//actions:
const getProducts = () => {
  return {
    type: GET_PRODUCTS
  };
};
const addProducts = products => {
  return {
    type: ADD_PRODUCTS,
    payload: products
  };
};
// Product Reducer:
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state
      };

    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1
      };

    default:
      return state;
  }
};

// //Products Store:
// const productStore = createStore(productReducer);
// productStore.subscribe(() => {
//   console.log(productStore.getState());
// });

//Cart Constant:
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS";
//cart Initial State:
const cartInitialState = {
  items: ["sugar", "salt"],
  numberOfItems: 2
};

//Cart Actions:
const getCartItems = () => {
  return {
    type: GET_CART_ITEMS
  };
};
const AddCartItems = item => {
  return {
    type: ADD_CART_ITEMS,
    payload: item
  };
};
// Cart Reducer:
const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state
      };
    case ADD_CART_ITEMS:
      return {
        items: [...state.items, action.payload],
        numberOfItems: state.numberOfItems + 1
      };

    default:
      return state;
  }
};

// Multiple Reducers Combining:
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer
});
//Creating Store:
const Store = createStore(rootReducer);
Store.subscribe(() => {
  console.log(Store.getState());
});
// Products Action Dispatch:
Store.dispatch(getProducts());
Store.dispatch(addProducts("Rice"));

// Cart Actions Dispatch:
Store.dispatch(getCartItems());
Store.dispatch(AddCartItems("Samsung Laptop"));
