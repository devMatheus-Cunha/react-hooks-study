import React, { useContext } from "react";

// components
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

// contexto
import DataContext from "../../data/DataContext";
import { AuthContext } from "../../data/ContexStore";

export const UseContext = () => {
  const context = useContext(DataContext);
  const { number, setNumber, text } = useContext(AuthContext as any);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <span className="text">{context.text}</span>
        <span className="text">{context.number}</span>
      </div>

      <SectionTitle title="Exercicio #02" />
      <div className="center">
        <span className="text">{text}</span>
        <span className="text">{number}</span>
        <div>
          <button className="btn" onClick={() => setNumber(number + 1)}>
            +1
          </button>
          <button className="btn" onClick={() => setNumber(number - 1)}>
            -1
          </button>
        </div>
      </div>
    </div>
  );
};
