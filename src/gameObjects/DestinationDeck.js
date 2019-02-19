import DESTINATIONCARDS from './gameData/destinationDeckUSA';

export default class DestinationDeck {
  constructor(destinationCards = DESTINATIONCARDS) {
    this.pile = destinationCards;
    this.junk = [];

    this.resetAndShuffle();
  }

  resetAndShuffle() {
    // move all
    this.pile = [...this.pile, ...this.junk];
    this.junk = [];
  
    // shuffle pile
    for (let i = 0; i < this.pile.length; i++) {
      const j = Math.floor(Math.random() * this.pile.length);
      [this.pile[i], this.pile[j]] = [this.pile[j], this.pile[i]];
    }
  }

  drawFromPile(n = 3) {
    
  }

  addToJunk(cards) {
  }
}

