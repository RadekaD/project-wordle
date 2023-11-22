import React from "react";

function ShowGuessComponent({ guess }) {
  console.log("Guess ===>", guess);

  return (
    <div className="guess-results">
      {guess.map((item) => {
        return (
          <p key={item.id} className="guess">
            {item.guess}
          </p>
        );
      })}
    </div>
  );
}

export default ShowGuessComponent;
