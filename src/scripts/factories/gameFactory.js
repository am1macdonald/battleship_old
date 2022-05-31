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

  let curryTemp;
  const setupCurry = (coordOne, board) => {
    return function (coordTwo) {
      const result = board.placeShip(board.nextShip(), coordOne, coordTwo);
    };
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
  const eventManager = (data) => {
    if (stage === "setup") {
      if (playerOneBoard.nextShip() === "setup complete") {
        return;
      }
      if (curryTemp !== undefined) {
        try {
          curryTemp(data.coord);
          curryTemp = undefined;
          return;
        } catch (error) {
          console.error(error);
          curryTemp = undefined;
          return;
        }
      }
      curryTemp = setupCurry(data.coord, playerOneBoard);
    } else if (stage === "gameplay") {
      const playerResult = playerTwoBoard.recieveAttack(data.coord);

      if (playerResult !== "miss") {
        playerTwoBoard.isFleetSunk();
      } else if (playerResult === "miss") {
        computerTurn();
        playerOneBoard.isFleetSunk();
      }
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
    eventManager,
    computerTurn,
  };
};

export default newGame;
