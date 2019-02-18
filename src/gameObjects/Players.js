import Hand from './Hand';

export default class Player {
  constructor(name, playerColor) {
    this.name = name;
    this.playerColor = playerColor;
    this.hand = new Hand();
    this.trainsLeft = 45;
    this.tracksOwned = [];
    this.destinationCards = [];
    this.score = 0;
  }

  draw() {

  }

  pick() {
    
  }

  claimRoute() {}

}