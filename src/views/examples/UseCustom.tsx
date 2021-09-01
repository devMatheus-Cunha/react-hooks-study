import React from "react";

// components
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

// Hooks
import { useCounter } from "../../hooks/useCounter";

export const UseCustom = () => {
  const [count, inc, dec ] = useCounter();

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
    </div>
  );
};
