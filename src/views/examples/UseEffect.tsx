import React from "react";
import { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = (props: any) => {
    const [text, setText] = useState("Digite")
  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
          <h2>{text}</h2>
          <input type="text" className="input" onChange={({target: value}: any) => setText(value)}/>
      </div>
    </div>
  );
};

export default UseEffect;
