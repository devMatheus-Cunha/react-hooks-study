import React from "react";

// components
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

// Hooks
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

export const UseCustom = () => {

  // my hooks
  const [count, inc, dec] = useCounter();
  const url = "http://files.cod3r.com.br/curso-react/estados.json";
  const states = useFetch(url);


  // functions
  function showStates(states: any) {
    return states.map(({ nome, sigla }: any) => (
      <li key={nome}>
        {nome} - {sigla}
      </li>
    ));
  }

  return (
    <div className="UseCustom">
      <PageTitle
        title="Seu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => dec()}>
            -1
          </button>
          <button className="btn" onClick={() => inc()}>
            +1
          </button>
        </div>
      </div>
      <SectionTitle title="Exercicio #02" />
      <div className="center">
        <ul>
            {states.data ? showStates(states.data) : "Nenhum dado"}
        </ul>
      </div>
    </div>
  );
};
