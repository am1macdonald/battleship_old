import { gameArea } from "./DOMControls";
import newGame from "./factories/gameFactory";

const bindListeners = () => {
  console.log("stuff");
};

let game;

const startGame = (playerOneName, playerTwoName = null) => {
  gameArea(playerOneName, "Computer Player");
  game = newGame(playerOneName, playerTwoName);
};

export default startGame;
