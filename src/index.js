import "./stylesheets/reset.css";
import "./stylesheets/style.sass";
import "./assets/sakura-_LHf-WzBYpo-unsplash.jpg";
import { gameArea, playerDataEntry } from "./scripts/displayControls";
import newGame from "./scripts/factories/gameFactory";

let game;

const onLoad = (() => {
  const dataEntry = playerDataEntry();
  const playerName = document.getElementById("player-name");
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (!dataEntry.form.checkValidity()) {
      return;
    }
    game = newGame(playerName.value, null);
    console.log(game);

    const newGameArea = gameArea(playerName.value, "Computer Player");
    dataEntry.overlay.remove();
  });
})();

// game = newGame("joe", null);
// console.log(game);
// game.playerOneBoard.placeShip("carrier", "1-2", "1-6");
// game.playerOneBoard.placeShip("battleship", "2-1", "2-4");
// game.playerOneBoard.placeShip("cruiser", "3-2", "3-4");
// game.playerOneBoard.placeShip("submarine", "4-1", "4-3");
// game.playerOneBoard.placeShip("destroyer", "6-2", "6-3");
// const killAll = game.playerOneBoard.getShipLocations();

// for (const key in killAll) {
//   console.log(key);
//   game.playerOneBoard.recieveAttack(key);
// }
// console.log(game.playerOneBoard.isFleetSunk());
