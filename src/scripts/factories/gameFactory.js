import newBoard from "./boardFactory";
import { computerMover, player } from "./playerFactory";

const newGame = (playerOneName, playerTwoName) => {
  let stage = "setup";
  const getStage = () => {
    return stage;
  };
  const nextGameStage = () => {
    if (stage === "setup") {
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
      console.log(result)
    }
  }
  const eventManager = (data) => {
    if (stage ==='setup') {
      if (playerOneBoard.nextShip() === 'setup complete') {
        nextGameStage();
        return;
      }
      if (curryTemp !== undefined) {
        try {
          curryTemp(data.coord)
          curryTemp = undefined
          return;
        }
        catch(error) {
          console.log(error)
          curryTemp = undefined
          return;
        }

      } 
      curryTemp = setupCurry(data.coord, playerOneBoard)
      console.log(curryTemp);
      
      
    }
  };

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
    getStage,
    nextGameStage,
    eventManager
  };
};

newGame("joe", null);

export default newGame;
