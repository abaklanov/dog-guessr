import * as React from "react";
import "./App.css";
import logo from "../../assets/logo.jpg";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <header>
        <div>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>dog-guessr</div>
        </div>
        <div>score: 0</div>
      </header>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
};

export default App;
