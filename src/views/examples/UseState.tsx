import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseState = (props: any) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("inicial");

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => setCount(count - 1)}>
            -1
          </button>
          <button className="btn" onClick={() => setCount(count + 1)}>
            +1
          </button>
          <button
            className="btn"
            onClick={() => setCount((currect: number) => currect + 100)}
          >
            +100
          </button>
          <button className="btn" onClick={() => setCount(0)}>
            Clear
          </button>
        </div>
      </div>

      <SectionTitle title="Exercicio #02" />
      <div className="center">
        <input type="text" className="input" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
    </div>
  );
};

export default UseState;
