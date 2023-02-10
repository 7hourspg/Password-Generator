import {FaClipboard} from "react-icons/fa";
import React, {useState} from "react";
import copy from "copy-to-clipboard";
import "./App.scss";

import {
  numbers,
  lowerCaseLetters,
  specialCharacters,
  upperCaseLetters,
} from "./Characters";
function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleGeneratePassword = () => {
    if (
      !includeLowerCase &&
      !includeNumbers &&
      !includeSymbols &&
      !includeUpperCase
    ) {
      alert("Please select atleast one checkbox");
    } else {
      let characterLists = "";
      if (includeLowerCase) {
        characterLists += lowerCaseLetters;
      }
      if (includeNumbers) {
        characterLists += numbers;
      }
      if (includeSymbols) {
        characterLists += specialCharacters;
      }
      if (includeUpperCase) {
        characterLists += upperCaseLetters;
      }
      setPassword(createPassword(characterLists));
      console.log("Password generated successfully");
    }
  };

  const createPassword = (characterLists) => {
    let password = "";
    const characterListLength = characterLists.length;
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterLists.charAt(characterIndex);
    }
    return password;
  };
  const handleClipboard = () => {
    copy(password);
    alert("Copied successfully");
  };

  return (
    <div className="container">
      <div className="containerWrapper">
        <h1 className="headerTxt">
          Generate your unique password <span>Now</span>
        </h1>
        <div className="contentBx">
          <div className="showPassBx">
            <input className="passInput" type="text" placeholder={password} />
            <FaClipboard
              onClick={handleClipboard}
              color="green"
              size={"30px"}
              className="FaClipboard"
            />
          </div>
          <div className="passLengthBx">
            <span>
              Password Length
              <input
                className="passRange"
                type="number"
                min="8"
                max="16"
                onChange={(e) => setPasswordLength(e.target.value)}
                value={passwordLength}
              />
            </span>
          </div>
          <span className="checkbox">
            <p>Include upperCase Letters</p>
            <input
              type="checkbox"
              name=""
              id=""
              onChange={(e) => setIncludeUpperCase(e.target.checked)}
            />
          </span>
          <span className="checkbox">
            <p>Include LowerCase Letters</p>
            <input
              type="checkbox"
              name=""
              id=""
              onChange={(e) => setIncludeLowerCase(e.target.checked)}
            />
          </span>
          <span className="checkbox">
            <p>Include Numbers</p>
            <input
              type="checkbox"
              name=""
              id=""
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
          </span>
          <span className="checkbox">
            <p>Include Symbols</p>
            <input
              type="checkbox"
              name=""
              id=""
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
          </span>
          <button className="button" onClick={handleGeneratePassword}>
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
