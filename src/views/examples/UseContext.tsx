import React, { useContext } from "react";

// components
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

// contexto
import DataContext from "../../data/DataContext";

export const UseContext = () => {
  const { number,  text} = useContext(DataContext);
  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <span className="text">{text}</span>
        <span className="text">{number}</span>
      </div>
    </div>
  );
};
