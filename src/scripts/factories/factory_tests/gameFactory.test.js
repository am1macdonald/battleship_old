import newGame from "../gameFactory.js";

// newGame tests
test("returns a new game", () => {
  expect(typeof newGame()).toBe("object");
});

test('has a gameboards', () => {
  const game = newGame('joe', 'blow')

  expect(game).toHaveProperty('playerOneBoard')
})