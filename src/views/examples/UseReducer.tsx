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
  const [state, dispatch] = useReducer(reducer, initialState);

  function getRandomInt(min = 0, max = 40) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      {/* <SectionTitle title="Exercicio #01" />
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
       */}
      <SectionTitle title="Exercicio #02" />
      <div className="center">
      <span className="text">{state.number}</span>
      <button
          className="btn"
          onClick={() => dispatch({ type: "numberAddTwo" })}
        >
          +2
        </button>
      <button
          className="btn"
          onClick={() => dispatch({ type: "numberMultiplySeven" })}
        >
          *7
        </button>
      <button
          className="btn"
          onClick={() => dispatch({ type: "numberSplitSeven" })}
        >
          /25
        </button>
      <button
          className="btn"
          onClick={() => dispatch({ type: "entire" })}
        >
          Transformar em inteiro
        </button>
      <button
          className="btn"
          onClick={() => dispatch({ type: "addNumber", ramdomNumber: getRandomInt(0, 40) })}
        >
          Adicionar numero aleatorio de 0 a 40
        </button>
      </div>
    </div>
  );
};
