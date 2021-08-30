import "./App.scss";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Context
import DataContext, { data } from "../data/DataContext";

// components
import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

const App = () => {
  return (
    <div className="App">
      <DataContext.Provider value={data}>
        <Router>
          <Menu />
          <Content />
        </Router>
      </DataContext.Provider>
    </div>
  );
};

export default App;
