import newBoard from "./boardFactory";
import { computerMover, player } from "./playerFactory";

const newGame = (playerOneName, playerTwoName) => {
  let stage = "setup";
  const getStage = () => {
    return stage;
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

  const playerOne = playerOneName ? player(playerOneName) : null;
  const playerTwo = playerTwoName
    ? player(playerTwoName)
    : Object.assign(player("Computer Player"), computerMover());
  const playerOneBoard = newBoard(playerOne);
  const playerTwoBoard = newBoard(playerTwo);

  if (playerTwo.getName() === "Computer Player") {
    playerTwo.randomlyPlaceShips(playerTwoBoard);
    console.log(playerTwoBoard.getShipLocations());
  }
  let turn = "playerOne";
  const toggleTurn = () => {
    if (turn === "playerOne") {
      turn = "playerTwo";
    } else {
      turn = "playerOne";
    }
  };

  let curryTemp;
  const setupCurry = (coordOne, board) => {
    return function (coordTwo) {
      const result = board.placeShip(board.nextShip(), coordOne, coordTwo);
      console.log(result);
    };
  };
  const eventManager = (data) => {
    if (stage === "setup") {
      if (playerOneBoard.nextShip() === "setup complete") {
        nextGameStage();
        return;
      }
      if (curryTemp !== undefined) {
        try {
          console.log(curryTemp(data.coord));
          curryTemp = undefined;
          return;
        } catch (error) {
          console.log(error);
          curryTemp = undefined;
          return;
        }
      }
      curryTemp = setupCurry(data.coord, playerOneBoard);
      console.log(curryTemp);
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
    playerOneBoard,
    playerTwoBoard,
    toggleTurn,
    next,
    getStage,
    nextGameStage,
    eventManager,
  };
};

export default newGame;
