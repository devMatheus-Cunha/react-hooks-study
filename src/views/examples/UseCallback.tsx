import React, { useCallback, useState } from "react";

// components
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

export const UseCallback = (props: any) => {
  const [count, setCount] = useState(0);

  // avoid multiple rendering when calling the function and is recommended when passing functions to children
  const handleInc = useCallback((delta) => {
    setCount((prevent) => prevent + delta);
  }, []);

  // render test
  console.log("render...");
  
  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => handleInc(6)}>
            +6
          </button>
          <button className="btn" onClick={() => handleInc(12)}>
            +12
          </button>
          <button className="btn" onClick={() => handleInc(18)}>
            +18
          </button>
        </div>
      </div>
    </div>
  );
};
