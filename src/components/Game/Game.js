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

  const newGuessArr = [...guess];
  const guessToCompare = newGuessArr.pop();

  const isCorrect = guessToCompare === answer;

  return (
    <>
      <ShowGuessComponent guess={guess} answer={answer} isCorrect={isCorrect} />
      <GuessInput guess={guess} setGuess={setGuess} isCorrect={isCorrect} />
    </>
  );
}

export default Game;
