import newGame from "../gameFactory.js";

// newGame tests
test("returns a new game", () => {
  expect(typeof newGame()).toBe("object");
});
