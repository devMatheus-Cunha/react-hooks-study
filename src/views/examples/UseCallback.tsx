import React from "react";

// components
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

export const UseCallback = (props: any) => {
  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      /> 
      <SectionTitle title="Exercicio #01" />
    </div>
  );
};
