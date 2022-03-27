import { gameArea } from "./DOMControls";
import newGame from "./factories/gameFactory";

let game;


// only useful until two player games are possible
const bindListeners = (playerOneName, playerTwoName = null) => {
  const playerOneSquares = [
    ...document.querySelector(`[data-owner="${playerOneName}"]`).children,
  ];
  const playerShipDrawer = document.querySelectorAll(`[data-ship]`);
  console.log(playerShipDrawer);
  const playerTwoSquares = [
    ...document.querySelector('[data-owner="Player Two"]').children,
  ];


  // binds event listeners for player ship setup
  if (game.getStage() === "setup") {
    playerOneSquares.forEach((square) => {
      square.addEventListener("click", () => {
        const data = {
          owner: square.parentElement.dataset.owner,
          coord: square.dataset.coord,
        };
        game.eventManager(data)
      });
    });
    console.log("player selection bound");


    // binds event listeners for player to make attacks
  } else if (game.getStage() === "gameplay") {
    playerTwoSquares.forEach((square) => {
      square.addEventListener("click", () => {
        const data = {
          owner: square.parentElement.dataset.owner,
          coord: square.dataset.coord,
        };
        game.eventManager(data)
      });
    });
    console.log("player attack selection bound");
  }
};

const startGame = (playerOneName, playerTwoName = null) => {
  gameArea(playerOneName, "Player Two");
  game = newGame(playerOneName, playerTwoName);
  bindListeners(playerOneName, playerTwoName);
};

export default startGame;
