import React, { useState, useRef, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";

import SectionTitle from "../../components/layout/SectionTitle";

export const UseRef = (props: any) => {
  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");

  const count = useRef(0);
  const myInputOne = useRef<any>(null);
  const myInputTwo = useRef<any>(null);

  const merge = function(s1: any, s2: any){
    return [...s1].map((e, i) => {
      return `${e}${s2[i] || ""}`
    }).join("")
  }

  useEffect(() => {
    count.current = count.current + 1;
    myInputTwo.current.focus()
  }, [valueOne]);

  useEffect(() => {
    count.current++
    myInputOne.current.focus()
  }, [valueTwo]);

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercicio #01" />

      <div className="center">
        <h1>
          Valor: <span className="red">{merge(valueOne, valueTwo)}</span>
        </h1>
        <h1>
          Contador: <span className="red">{count.current}</span>
        </h1>
        <input
          type="text"
          ref={myInputOne}
          className="input"
          value={valueOne}
          onChange={(event) => setValueOne(event.target.value)}
        />
      </div>

      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <input
          type="text"
          className="input"
          ref={myInputTwo}
          value={valueTwo}
          onChange={(event) => setValueTwo(event.target.value)}
        />
      </div>
    </div>
  );
};
