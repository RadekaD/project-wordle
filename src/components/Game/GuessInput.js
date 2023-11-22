import React from "react";

function GuessInput({ guess, setGuess }) {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        const newGuessArr = [...guess];
        newGuessArr.push({guess: inputValue, id: Math.random()});
        setGuess(newGuessArr);
        setInputValue("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        pattern="^.{5}$"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
