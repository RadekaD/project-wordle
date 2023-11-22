import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "./GuessInput";
import ShowGuessComponent from "./ShowGuessComponent";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState([]);

  return (
    <>
      <ShowGuessComponent guess={guess} />
      <GuessInput guess={guess} setGuess={setGuess} />
      Put a game here!
    </>
  );
}

export default Game;
