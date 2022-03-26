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
    board.placeShip();
  };

  return { makeOwnChoices };
};

// const computer = Object.assign(player("computer"), computerMover());
// const computerBoard = newBoard("computer");
// computer.placeOwnShips(computerBoard);

export { player, computerMover };
