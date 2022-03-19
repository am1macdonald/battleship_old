import newBoard from "../boardFactory.js";

it("returns an object", () => {
  expect(typeof newBoard()).toBe("object");
});

it("returns a shipyard's contents when  a ship is placed", () => {
  const gameboard = newBoard();

  expect(newBoard().placeShip("carrier", [2, 1], [2, 5])).toHaveProperty('carrier');

});

it("returns a shipyard's contents when  a ship is placed", () => {
  const gameboard = newBoard();

  expect(newBoard().placeShip("destroyer", [2, 1], [2, 5])).toHaveProperty('destroyer');
  
});

it("returns 'hit' when a ship has been hit", () => {
  const gameboard = newBoard();
  gameboard.placeShip("carrier", [2, 1], [2, 5]);

  expect(gameboard.recieveAttack([2, 3])).toBe('hit');
});

it("returns 'hit' when a ship has been hit", () => {
  const gameboard = newBoard();
  gameboard.placeShip("carrier", [2, 1], [2, 5]);

  expect(gameboard.recieveAttack([3, 3])).toBe('miss');
});

it("returns 'hit' when a ship has been hit", () => {
  const gameboard = newBoard();
  gameboard.placeShip("destroyer", [2, 1], [2, 2]);

  expect(gameboard.recieveAttack([2, 1])).toBe('hit');
});
