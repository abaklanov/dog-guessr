import * as React from "react";
import "./App.css";
import logo from "../../assets/logo.jpg";
import placeholderImage from "../../assets/logo.jpg";

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
      <section>
        <img src={placeholderImage} alt="main-image" />
      </section>
      <section>
        <button role="guess-button"></button>
        <button role="guess-button"></button>
        <button role="guess-button"></button>
        <button role="guess-button"></button>
      </section>
      <section>score: 0</section>
    </div>
  );
};

export default App;
