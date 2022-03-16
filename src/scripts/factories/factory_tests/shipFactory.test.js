import newShip from "../shipFactory.js";

// newShip tests
test("returns an object", () => {

  expect(typeof newShip())
  .toBe("object");

});


test("returns ship with correct name", () => {

  const bob = newShip('bob', 4);

  expect(bob.getName())
  .toBe('bob');

});


test("returns ship with correct spaces", () => {

  expect(newShip("bob", 4)
  .getLength())
  .toBe(4);

});


test("takes a hit", () => {

  const bob = newShip('bob', 5);

  expect(bob.directHit())
  .toBe(1)

});


test("ship sinks", () => {

  const bob = newShip('bob', 1);
  bob.directHit()
  expect(bob.isSunk())
  .toBe(true)

});
