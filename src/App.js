import React, { Component } from 'react';
import Container from './components/Container';
import Modal from './components/Modal';
import './App.css';

class App extends Component {
  state = {
    player: 0,
    computer: 0,
    restartBtn: false,
    modal: false,
    result: {
      title: '',
      option: '',
      msg: ''
    }
  }

  play = e => {
    this.setState({restartBtn: true});
    const playerChoice = e.target.id;
    const computerChoice = this.getComputerChoice();

    const winner = this.getWinner(playerChoice, computerChoice);
    
    this.showWinner(winner, computerChoice);
  }

  // Get Computer Choice
  getComputerChoice = () => {
    const rand = Math.random();
    if (rand <= 0.34) {
      return 'rock';
    }
    else if (rand <= 0.67){
      return 'paper';
    }
    else {
      return 'scissors';
    }
  }

  // Get Game Winner
  getWinner = (p, c) => {
    if (p === c) {
      return 'draw';
    }
    else if (p === 'rock') {
      if (c === 'paper') {
        return 'computer';
      }
      else {
        return 'player';
      }
    }
    else if (p === 'paper') {
      if (c === 'scissors') {
        return 'computer';
      }
      else {
        return 'player';
      }
    }
    else if (p === 'scissors') {
      if (c === 'rock') {
        return 'computer';
      }
      else {
        return 'player';
      }
    }
  }

  // Show Game Winner
  showWinner = (winner, computerChoice) => {
    if (winner === 'player') {
      this.setState(prevState => ({
        player: prevState.player + 1,
        result: {
          title: `You Win`,
          option: `win`,
          msg: `${computerChoice}`
        }
     }))
    }
    else if (winner === 'computer') {
      this.setState(prevState => ({
        computer: prevState.computer + 1,
        result: {
          title: `You Lose`,
          option: `lose`,
          msg: `${computerChoice}`
        }
     }))
    }
    else {
      this.setState({
        result: {
          title: `It's A Draw`,
          msg: `${computerChoice}`
        }
      })
    }
    
    this.setState({
      modal: true
    })
  }

  // Restart Game
  restartGame = () => {
    this.setState({
      player: 0,
      computer: 0,
      restartBtn: false
    })
  }

  // Close Modal
  closeModal = e => {
    if(e.target.className === `modal`) {
      this.setState({
        modal: false
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container scores={this.state} play={this.play} restartGame={this.restartGame} />
        <Modal result={this.state.result} modal={this.state.modal} closeModal={this.closeModal} />
      </React.Fragment>
    )
  }
}

export default App;