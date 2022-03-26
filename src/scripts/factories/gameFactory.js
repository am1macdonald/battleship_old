import newBoard from "./boardFactory";
import { computerMover, player } from "./playerFactory";

const newGame = (playerOneName, playerTwoName) => {
  const state = "setup";

  const playerOne = playerOneName ? player(playerOneName) : null;
  const playerTwo = playerTwoName
    ? player(playerTwoName)
    : Object.assign(player("Computer Player"), computerMover());
  const playerOneBoard = newBoard(playerOne);
  const playerTwoBoard = newBoard(playerTwo);
  let turn = "playerOne";
  const toggleTurn = () => {
    if (turn === "playerOne") {
      turn = "playerTwo";
    } else {
      turn = "playerOne";
    }
  };
  const nextGameStage = () => {
    if (stage === "setup") {
      stage = "gameplay";
    }
    return state;
  };

  const eventManager = () => {};

  const next = () => {
    if (state === "setup") {
      // do something
    } else if (state === "gameplay") {
      // do something different
    }
  };
  return {
    playerOne,
    playerTwo,
    playerOneBoard,
    playerTwoBoard,
    toggleTurn,
    next,
  };
};

newGame("joe", null);

export default newGame;
