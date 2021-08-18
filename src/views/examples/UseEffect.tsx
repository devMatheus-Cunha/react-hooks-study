import React, { useEffect, useState} from "react";

// component
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
    setEvenAndOdd(value % 2 === 0 ? "Par" : "Ímpar")
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
        <h1>Fatorial: <span className="red">{fatorial}</span></h1>
        <input
          type="number"
          value={number}
          className="input"
          onChange={(event: any) => setNumber(event.target.value)}
        />
      </div>

      <SectionTitle title="Exercicio #02" />
      <div className="center">
        <h1>Par ou impar: <span className="red">{evenAndOdd}</span></h1>
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
