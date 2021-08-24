import React from "react";

// styles
import "./SectionTitle.scss";

const SectionTitle = (props: any) => (
  <div className="SectionTitle">
    <h3>{props.title}</h3>
  </div>
);

export default SectionTitle;
