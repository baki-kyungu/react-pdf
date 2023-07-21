import { useState } from "react";
import "./App.css";

function App() {
  //Counter:
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState("ON");
  const [buttonColor, setButtonColot] = useState("green");
  const [color, setColor] = useState("white");

  const buttonStyle = {
    backgroundColor: buttonColor,
    color: color,
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };

  //Toggle Button:

  const handleToggleClick = () => {
    if ((toggle === "ON") & (buttonColor === "green") & (color === "white")) {
      setToggle("OFF");
      setColor("white");
      setButtonColot("red");
    } else {
      setToggle("ON");
      setColor("white");
      setButtonColot("green");
    }
  };

  //Random Number Generator:

  const [randomNumber, setRandomNumber] = useState(0);

  const handleNumberGenerator = () => {
    const randomDecimal = Math.random();
    const randomNumberBetween0And100 = randomDecimal * 100;
    const randomNumberInt = Math.floor(randomNumberBetween0And100);
    const finalRandomNumber = randomNumberInt + 1;
    setRandomNumber(finalRandomNumber);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-6">
          <p className="fs-5 bg-light.bg-gradient">
            1.Créez un compteur simple qui s&apos;incrémente et se décrémente
            lorsque vous cliquez sur les boutons respectifs..
          </p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="d-flex rounded-1 bg-white mb-3 justify-content-center align-items-center">
            <button className="me-4 rounded-circle bg-success">Ans</button>
            <button
              type="button"
              className="btn btn-light me-2 h1"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="h1 text-secondary me-3">Count is {count}</span>
            <button
              type="button ms-2"
              className="btn btn-light h1"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-md-8 col-lg-6">
          <p className="fs-5 bg-light.bg-gradient">
            Créez un bouton qui bascule son texte entre ON et OFF lorsqu&apos;
            on clique dessus. La couleur de fond doit être verte lorsque le
            bouton est en position ON et rouge lorsque le bouton est en position
            OFF..
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="d-flex rounded-1 bg-white mb-3 justify-content-center align-items-center">
            <button className="me-4 rounded-circle bg-success">Ans</button>
            <button
              onClick={handleToggleClick}
              className="btn btn-light h1 me-2"
            >
              {" "}
              switch{" "}
            </button>
            <button className="btn btn-light h1" style={buttonStyle}>
              {toggle}
            </button>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-md-8 col-lg-6">
          <p className="fs-5 bg-light.bg-gradient">
            Create a button that generates and displays a random number between
            1 and 100 when clicked.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="d-flex rounded-1 bg-white mb-3 justify-content-center align-items-center">
            <button className="me-4 rounded-circle bg-success">Ans</button>
            <button
              onClick={handleNumberGenerator}
              className="btn btn-light h1 me-2"
            >
              {" "}
              The random{" "}
            </button>
            <button className="btn btn-light h1">is {randomNumber}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
