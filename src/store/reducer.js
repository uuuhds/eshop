export const initialState = {
  login: false,
  basket: [],
};

let count = 0;

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, { ...action.payload, number: count++ }],
      };
    case "DEL_TO_BASKET":
      const basket = state.basket;
      const index = basket.findIndex((item) => item.number === action.payload);
      basket.splice(index, 1);
      return {
        ...state,
        basket,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        login: true,
      };
    case "LOGOUT":
      return {
        ...state,
        login: false,
      };
    default:
      return state;
  }
}
