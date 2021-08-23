import React, { useEffect, useMemo, useState } from "react";

// component
import SectionTitle from "../../components/layout/SectionTitle";
import PageTitle from "../../components/layout/PageTitle";

export const UseMemo = (props: any) => {
  const [n1, setN1] = useState<any>(0);
  const [n2, setN2] = useState<any>(0);
  const [n3, setN3] = useState<any>(0);

  function sum(a: any, b: any) {
    const future = Date.now() + 2000;
    while (Date.now() < future) {}
    return a + b;
  }

  // whith useMeMo
  const resultMeMo = useMemo(() => sum(n1, n2), [n1, n2]);
  
  // whith useEffect and useState
  const [resultState, setResultState] = useState<any>(0);
  useEffect(() => {
    setResultState(sum(n1, n2));
  }, [n1, n2]);

  return (
    <div className="UseMemo">
      <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memoizado!" />
      <SectionTitle title="Exercicio #01" />

      <div className="center">
        <input
          type="number"
          className="input"
          value={n1}
          onChange={(event) => setN1(parseInt(event.target.value))}
        />
        <input
          type="number"
          className="input"
          value={n2}
          onChange={(event) => setN2(parseInt(event.target.value))}
        />
        <input
          type="number"
          className="input"
          value={n3}
          onChange={(event) => setN3(parseInt(event.target.value))}
        />

        <span className="text">{resultMeMo}</span>
      </div>
    </div>
  );
};
