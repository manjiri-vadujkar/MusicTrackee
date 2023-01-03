import logo from "./images/logo-new.png";
import { useState } from "react";
import "./App.css";

function App() {
  const [fieldVisiblity, setFieldVisiblity] = useState("userInputs");
  const [resultVisiblity, setResultVisiblity] = useState("resultBox");
  const [placeholder, setPlaceholder] = useState("");

  function displayUserFields(e) {
    console.log(e.target.text);
    //make userFields visible
    setFieldVisiblity("userInputs-visible");
    //Change userField input placeholder
    setPlaceholder(e.target.innerText);
  }

  function displayResult(e) {
    setResultVisiblity("resultBox-visible");
  }

  return (
    <main>
      <header className="logo">
        <img src={logo}></img>
      </header>
      <div className="userFields container">
        <div className="userOptions">
          <button
            className="button optionsBtn"
            value="lyricSearch"
            onClick={(e) => {
              displayUserFields(e);
            }}
          >
            Search By Lyrics
          </button>
          <button
            className="button optionsBtn"
            value="songSearch"
            onClick={(e) => {
              displayUserFields(e);
            }}
          >
            Search By Song Name
          </button>
          <button
            className="button optionsBtn"
            value="artistSearch"
            onClick={(e) => {
              displayUserFields(e);
            }}
          >
            Search By Artist Name
          </button>
        </div>
        <div className={fieldVisiblity}>
          <input type="text" placeholder={placeholder}></input>
          <button
            className="button"
            value="submit"
            name="Search"
            onClick={(e) => {
              displayResult(e);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div id={resultVisiblity} className="container">
        <p>dewiobfiwenfwpofncweopfnewofnwe</p>
      </div>
    </main>
  );
}

export default App;
