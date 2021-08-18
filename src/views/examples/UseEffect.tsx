import React, { useEffect } from "react";
import { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = (props: any) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);

  const [numberEenAndOdd, setNumberEenAndOdd] = useState(0);
  const [evenAndOdd, setEvenAndOdd] = useState("")

  function calcFatorial(params: any) {
    if (params < 0) {
      return -1;
    }
    if (params === 0) {
      return 1;
    }
    const calc = (params - 1) * params;
    setFatorial(calc)
  }

  function handleEvenAndOdd(value: number) {
    const result = value % 2
    if (result === 1)  setEvenAndOdd("Impar")
    if (result === 0)  setEvenAndOdd("Par")
  }

  useEffect(() => {
    calcFatorial(number)
    handleEvenAndOdd(numberEenAndOdd)
  }, [number, numberEenAndOdd])

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <h1>Fatorial: {fatorial}</h1>
        <input
          type="number"
          value={number}
          className="input"
          onChange={(event: any) => setNumber(event.target.value)}
        />
      </div>

      <SectionTitle title="Exercicio #02" />
      <div className="center">
        <h1>Par ou impar: {evenAndOdd}</h1>
        <input
          type="number"
          value={numberEenAndOdd}
          className="input"
          onChange={(event: any) => setNumberEenAndOdd(event.target.value)}
        />
      </div>
    </div>
  );
};

export default UseEffect;
