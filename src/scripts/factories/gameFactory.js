import newBoard from "./boardFactory";
import { computerMover, player } from "./playerFactory";

const newGame = (playerOneName, playerTwoName) => {
  let stage = "setup";
  const getStage = () => {
    return stage;
  };

  const playerOne = playerOneName ? player(playerOneName) : null;
  const playerTwo = playerTwoName
    ? player(playerTwoName)
    : Object.assign(player("Computer Player"), computerMover());
  const playerOneBoard = newBoard(playerOne);
  const playerTwoBoard = newBoard(playerTwo);

  const getBoards = () => {
    return {
      playerOneBoard,
      playerTwoBoard,
    };
  };
  if (playerTwo.getName() === "Computer Player") {
    playerTwo.randomlyPlaceShips(playerTwoBoard);
  }
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
      if (
        playerOneBoard.nextShip() === "setup complete" &&
        playerTwoBoard.nextShip() === "setup complete"
      )
        stage = "gameplay";
    }
    return stage;
  };
  const computerTurn = () => {
    const choice = playerTwo.makeOwnChoices(playerOneBoard.getShots());
    try {
      const computerResult = playerOneBoard.recieveAttack(choice);

      if (computerResult !== "miss") {
        computerTurn();
      }
    } catch (err) {
      computerTurn();
    }
  };

  const next = () => {
    if (stage === "setup") {
      // do something
    } else if (stage === "gameplay") {
      // do something different
    }
  };
  return {
    playerOne,
    playerTwo,
    getBoards,
    toggleTurn,
    next,
    getStage,
    nextGameStage,

    computerTurn,
  };
};

export default newGame;
