import DestinationDeck from './DestinationDeck';
import TrainDeck from './TrainDeck';

import DESTINATIONCARDS from './gameData/destinationDeckUSAData';
import TRAINCARDS from './gameData/trainDeckData';

export default class Game {
  constructor(numPlayers = 2) {
    this.players = new Array(numPlayers);
    this.DestinationDeck = new DestinationDeck(DESTINATIONCARDS);
    this.TrainDeck = new TrainDeck(TRAINCARDS);
  }
}