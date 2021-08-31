import React, { useReducer, useState } from "react";

// components
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

// store
import { addNumber, entire, initialState, numberAddTwo, numberMultiplySeven, numberSplitSeven, reducer } from "../../store";



export const UseReducer = () => {
  const [infoUser] = useState([
    {
      name: "matheus gomes",
      idade: "19",
      cidade: "Bh",
    },
  ]);

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
        <div>
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

      <SectionTitle title="Exercicio #02" />
      <div className="center">
        <span className="text">{state.number}</span>
        <div>
          {" "}
          <button className="btn" onClick={() => numberAddTwo(dispatch)}>
            +2
          </button>
          <button className="btn" onClick={() => numberMultiplySeven(dispatch)}>
            *7
          </button>
          <button className="btn" onClick={() => numberSplitSeven(dispatch)}>
            /25
          </button>
          <button className="btn" onClick={() => entire(dispatch)}>
            Transformar em inteiro
          </button>
          <button
            className="btn"
            onClick={() =>  addNumber(dispatch,  getRandomInt(0, 40))}
          >
            Adicionar numero aleatorio de 0 a 40
          </button>
        </div>
      </div>
    </div>
  );
};
