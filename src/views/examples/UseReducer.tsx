import React, { useReducer, useState } from "react";

// components
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

export const UseReducer = () => {
  const [infoUser] = useState([
    {
      name: "matheus gomes",
      idade: "19",
      cidade: "Bh",
    },
  ]);

  const initialState = {
    other: [],
    products: [],
    user: [],
    number: 0,
  };

  function reducer(state: any, action: any) {
    switch (action.type) {
      case "numberAddTwo":
        return { ...state, number: state.number + 2 };
      case "login":
        return { ...state, user: action.payload };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <span className="text">{state.number}</span>
        {state.user.map(({ name, idade, cidade }: any) => (
          <>
            <div>
              <p>{name}</p>
              <p>{idade}</p>
              <p>{cidade}</p>
            </div>
          </>
        ))}
        <button
          className="btn"
          onClick={() => dispatch({ type: "numberAddTwo" })}
        >
          +2
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "login", payload: infoUser })}
        >
          login
        </button>
      </div>
    </div>
  );
};
