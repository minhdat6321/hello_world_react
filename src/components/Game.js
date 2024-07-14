import React, { useState, useEffect } from "react";
import Board from "./Board";
import History from "./History";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(false);
  const [winner, setWinner] = useState(null);
  const [step, setStep] = useState({
    number: [0],
    oldArray: [Array(9).fill(null)], countStep: 0,
  });

  //Declaring a Winner
  useEffect(() => {
    if (squares.every((square) => square === null)) {
      console.log(`ko co squares`);
      return;
    } else {
      setWinner(calculateWinner(squares));
    }
  }, [squares]);


  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i) => {
    if (winner === "X" || winner === "O") return;
    else {
      const newArray = [...squares];

      if (squares[i]) return;
      else {
        newArray[i] = xIsNext ? "O" : "X";
        setXIsNext(!xIsNext);
        setSquares(newArray);
        setStep({ number: [...step.number, step.countStep + 1], oldArray: [...step.oldArray, newArray], countStep: step.countStep + 1 });
      }
      console.log(newArray);
    }
  };

  //Undo game
  const jumpTo = (index) => {
    setSquares(step.oldArray[index])
    const newArrayNumberSlice = step.number.slice(0, index + 1);
    setStep({ number: newArrayNumberSlice, oldArray: step.oldArray.splice(0, index + 1), countStep: index })
    setXIsNext(index % 2 === 0 ? false : true)
  };

  //Restart game
  const handlRestart = () => {
    setSquares(squares.map(() => null));
    setWinner("N/N");
    setStep({
      number: [0],
      oldArray: [Array(9).fill(null)], countStep: 0,
    })
    setXIsNext(false)
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div className="game">
        <span className="player">Next player is: {xIsNext ? "O" : "X"}</span>
        <Board squares={squares} handleClick={handleClick} />
      </div>
      <History jumpTo={jumpTo} step={step} handleRestart={handlRestart} />
      <button onClick={handlRestart} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;
