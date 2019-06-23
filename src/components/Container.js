import React from 'react';

const Container = props => {
    const { scores: { player, computer, restartBtn }, play, restartGame } = props;

    return (
      <div className="container">
        <header className="header">
          <h1>Rock Paper Scissors</h1>
          <button onClick={restartGame} className="restart-btn" style={{display: restartBtn ? 'inline-block' : ''}}>Restart Game</button>
          <div className="score">
            <p>Player: {player}</p>
            <p>Computer: {computer}</p>
          </div>
        </header>

        <h2>Make Your Selection</h2>
        <div className="choices">
          <i onClick={play} id="rock" className="choice fas fa-hand-rock fa-10x"></i>
          <i onClick={play} id="paper" className="choice fas fa-hand-paper fa-10x"></i>
          <i onClick={play} id="scissors" className="choice fas fa-hand-scissors fa-10x"></i>
        </div>
      </div>
    )
}

export default Container;