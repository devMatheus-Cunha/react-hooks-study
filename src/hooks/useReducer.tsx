import React, { useReducer } from "react";

function reducer(state: any, action: any) {
  switch (action.type) {
    case "plus":
      return {
        counter: state.counter + 1,
        clicks: state.clicks + 1,
      };

    case "minus":
      return {
        counter: state.counter - 1,
        clicks: state.clicks - 1,
      };
    default:
      return state;
  }
}

const initialValue = {
  counter: 0,
  clicks: 0,
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  // const reducer = useReducer(
  // function (state: any, action: any) {},
  // "Matheus",
  // function(initialValue){
  //   return { name: initialValue}
  // },
  // );
  // console.log(reducer);

  function handlePlus() {
    dispatch({ type: "plus" });
  }

  function handleMinus() {
    dispatch({ type: "minus" });
  }

  return (
    <>
      <h1>{state?.counter}</h1>
      <h1>Cliques: {state?.clicks}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </>
  );
}
