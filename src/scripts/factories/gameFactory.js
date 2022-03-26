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
  const nextState = () => {
    if (state === "setup") {
    }
    return state;
  };
  return {
    playerOne,
    playerTwo,
    playerOneBoard,
    playerTwoBoard,
    toggleTurn,
  };
};

newGame("joe", null);

export default newGame;
