import React from "react";

function History({ jumpTo, step, handleRestart }) {
  return (
    <div className="history">
      <h4>History</h4>
      <ul>
        {step.number.map((index) => {
          return (
            index === 0 ? (<li key={0}><button onClick={handleRestart}>Go to game start</button>
            </li>) : (

              <li key={index}>
                <button onClick={() => jumpTo(index)}>Go to move #{index}</button>
              </li>)

          )
        })}
      </ul>
    </div>
  );
}

export default History;
