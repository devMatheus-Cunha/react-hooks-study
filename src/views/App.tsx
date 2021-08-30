import "./App.scss";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Context
import DataContext, { data } from "../data/DataContext";
import ContexStore from "../data/ContexStore";

// Components
import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

const App = () => {
  return (
    <div className="App">
      <ContexStore>
        <DataContext.Provider value={data}>
          <Router>
            <Menu />
            <Content />
          </Router>
        </DataContext.Provider>
      </ContexStore>
    </div>
  );
};

export default App;
