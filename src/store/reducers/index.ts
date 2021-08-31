export const initialState = {
  other: [],
  products: [],
  user: [],
  number: 0,
};


export function reducer(state: any, action: any) {
  switch (action.type) {
    case "numberAddTwo":
      return { ...state, number: state.number + 2 };
    case "numberMultiplySeven":
      return { ...state, number: state.number * 7 };
    case "numberSplitSeven":
      return { ...state, number: state.number / 25 };
    case "entire":
      return { ...state, number: parseInt(state.number) };
    case "addNumber":
      return { ...state, number: state.number + action.ramdomNumber };
    case "login":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}