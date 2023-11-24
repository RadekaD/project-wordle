import React from "react";

import Guess from "./Guess";

// utils
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function ShowGuessComponent({ guess }) {
  console.log("Guess ===>", guess);

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} guess={guess[num]} />
      ))}
    </div>
  );
}

export default ShowGuessComponent;
