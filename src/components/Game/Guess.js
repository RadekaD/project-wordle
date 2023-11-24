import React from "react";

// utils
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { WORDS } from "../../data";

function Guess({ guess, answer }) {

  const checkedGuesses = guess ? checkGuess(guess, answer) : [];

  return (
    <p className="guess">
      {range(5).map((num) => (
         checkedGuesses.length > 0 ? (
          <span key={num} className={"cell " + checkedGuesses[num].status}>
            {checkedGuesses[num].letter}
          </span>
         ) : (
          <span key={num} className={"cell "}>
            {guess ? guess[num] : undefined}
          </span>
          )
      )
      )}
    </p>
  );
}

export default Guess;
