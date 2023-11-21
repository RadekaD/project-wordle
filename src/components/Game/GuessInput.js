import React from "react";

const GuessInput = () => {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault()
      console.log({guess: inputValue})
      setInputValue("")
    }}>
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
};

export default GuessInput;
