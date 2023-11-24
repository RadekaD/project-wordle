import React from "react";

function GuessInput({ guess, setGuess, isCorrect }) {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        const newGuessArr = [...guess];
        newGuessArr.push(inputValue);
        setGuess(newGuessArr);
        setInputValue("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        disabled={isCorrect}
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
