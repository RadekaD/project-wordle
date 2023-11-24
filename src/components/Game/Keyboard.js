import React from "react";

// utils
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { KEYBOARD_LETTERS } from "../../data";
import { check } from "prettier";

function Keyboard({ guess, answer }) {
  const newKeyboardLettersArr = [...KEYBOARD_LETTERS];
  const newGuessArr = [...guess];
  const letterStatuses = {};

  newGuessArr.forEach((item) => {
    const results = checkGuess(item, answer);
    results.forEach(({ letter, status }) => {
      if (
        !letterStatuses[letter] ||
        status === "correct" ||
        (letterStatuses[letter] === "incorrect" && status === "misplaced")
      ) {
        letterStatuses[letter] = status;
      }
    });
  });

  const rowLengths = [10, 9, 7];
  let startIndex = 0;

  const rows = rowLengths.map((length, rowIndex) => {
    const rowLetters = newKeyboardLettersArr.slice(
      startIndex,
      startIndex + length
    );
    startIndex += length;

    const rowClass = `keyboard-guess keyboard-row-${rowIndex + 1}`;

    return (
      <p key={rowIndex} className={rowClass}>
        {rowLetters.map((letter, index) => {
          const statusClass = letterStatuses[letter] || "";
          return (
            <span key={index} className={`keyboard-cell ${statusClass}`}>
              {letter}
            </span>
          );
        })}
      </p>
    );
  });

  return <div>{rows}</div>;
}

export default Keyboard;
