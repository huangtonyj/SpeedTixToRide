import React, { Component } from 'react';
import './App.css';
import Game from '../gameObjects/Game';

class App extends Component {
  render() {

    const myGame = new Game(5);
    
    let drawnCards = [];
      drawnCards = drawnCards.concat(myGame.TrainDeck.drawFromPile());
      drawnCards = drawnCards.concat(myGame.TrainDeck.drawFromPile());
      drawnCards = drawnCards.concat(myGame.TrainDeck.drawFromPile());
      drawnCards = drawnCards.concat(myGame.TrainDeck.drawFromPile());
    console.log(drawnCards);
    myGame.TrainDeck.addToJunk(drawnCards);
    console.log(myGame);
    
    
    

    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

export default App;
