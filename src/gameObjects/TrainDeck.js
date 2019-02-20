export default class TrainDeck {
  constructor(trainCards) {
    this.pile = trainCards;
    this.junk = [];

    this.resetAndShuffle();
  }

  resetAndShuffle() {
      // move all to pile
      this.pile = [...this.pile, ...this.junk];
      this.junk = [];
    
      // shuffle pile
      for (let i = 0; i < this.pile.length; i++) {
        const j = Math.floor(Math.random() * this.pile.length);
        [this.pile[i], this.pile[j]] = [this.pile[j], this.pile[i]];
      }

      if (this.pile.length === 0) { throw 'Out of train cards'; }
    }

    drawFromPile(n = 2) {
      const cards = [];

      while (cards.length < n) {
        if (!this.pile.length) { this.resetAndShuffle()} ;
        cards.push(this.pile.shift());
      }

      return cards;
    }

    addToJunk(cards) {
      this.junk = [...this.junk, ...cards];
    }

}