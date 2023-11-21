import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  return (
    <>
      <form className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input type="text" id="guess-input" />
      </form>
      Put a game here!
    </>
  );
}

export default Game;
