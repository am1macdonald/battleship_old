const player = (name) => {
  const playerName = name;
  let turn = false;
  const getName = () => {
    return playerName;
  };
  const myTurn = () => {
    turn = true;
  };
  const takeTurn = (coord, board) => {
    if (!turn) {
      throw new Error("not your turn");
    } else if (board.includes(coord)) {
      throw new Error("already shot there");
    } else return "splash";
  };

  return { getName, takeTurn, myTurn };
};

const computerMover = () => {
  const makeOwnChoices = (board) => {
    const coord = `${Math.floor(Math.random() * 10) + 1}-${
      Math.floor(Math.random() * 10) + 1
    }`;
    if (board.includes(coord)) {
      makeOwnChoices(board);
    }
    return coord;
  };

  const randomlyPlaceShips = (board) => {
    if (board.nextShip() === "setup complete") {
      return;
    }
    const nextShip = board.nextShip();
    const chooseAxis = Math.floor(Math.random() * 2); // 0 for x; 1 for y
    const mainAxisCoord = Math.floor(Math.random() * 10) + 1;
    const shipStartCoord = Math.floor(Math.random() * 10) + 1;
    const shipEndCoord = shipStartCoord + board.getShipLengths()[nextShip] - 1;

    if (chooseAxis) {
      board.placeShip(
        nextShip,
        `${shipStartCoord}-${mainAxisCoord}`,
        `${shipEndCoord}-${mainAxisCoord}`
      );
    } else if (!chooseAxis) {
      board.placeShip(
        nextShip,
        `${mainAxisCoord}-${shipStartCoord}`,
        `${mainAxisCoord}-${shipEndCoord}`
      );
    }
    // console.log(chooseAxis, mainAxisCoord, shipStartCoord, shipEndCoord);
    randomlyPlaceShips(board);
  };

  return { makeOwnChoices, randomlyPlaceShips };
};

// const computer = Object.assign(player("computer"), computerMover());
// const computerBoard = newBoard("computer");
// computer.placeOwnShips(computerBoard);

export { player, computerMover };
