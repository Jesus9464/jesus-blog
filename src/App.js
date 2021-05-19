import React from "react";

import Header from "./components/Header";
import Container from "./components/Container";
import "./style/App.css";

function App() {
  return (
    <div className="container__app">
      <div>
        <Header />
      </div>
      <div>
        <Container />
      </div>
    </div>
  );
}

export default App;
