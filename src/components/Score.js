import React from 'react'


const Score = (scores) => {
    console.log(scores);
  return (
    <div>
      {scores.scores.map(({ score, date }) => (
        <>
          <p>{date}</p>
          <p>{score}</p>
        </>
      ))}
    </div>
  );
}

export default Score