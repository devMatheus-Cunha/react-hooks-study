import React, { useState, useRef, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";

import SectionTitle from "../../components/layout/SectionTitle";

export const UseRef = (props: any) => {
  const [valueOne, setValueOne] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  }, [valueOne]);
  
  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercicio #01" />

      <div className="center">
        <h1>
          Valor: <span className="red">{valueOne}</span>
        </h1>
        <h1>
          Contador: <span className="red">{count.current}</span>
        </h1>
        <input
          type="text"
          className="input"
          value={valueOne}
          onChange={(event) => setValueOne(event.target.value)}
        />
      </div>
    </div>
  );
};
