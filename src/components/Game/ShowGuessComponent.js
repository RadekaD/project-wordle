import React from "react";

import Guess from "./Guess";

// utils
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function ShowGuessComponent({ guess, answer, isCorrect }) {
  
  const tooManyGuesses = guess.length > NUM_OF_GUESSES_ALLOWED;

  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess key={num} guess={guess[num]} answer={answer} />
        ))}
      </div>
      {isCorrect && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guess.length} guesses</strong>
          </p>
        </div>
      )}
      {tooManyGuesses && (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      )}
    </>
  );
}

export default ShowGuessComponent;
