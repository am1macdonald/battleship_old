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

  expect(newShip(null, 4)
  .getLength())
  .toBe(4);

});


test("takes a hit", () => {

  const bob = newShip("bob", 4, {
    start: { x: 2, y: 2 },
    end: { x: 5, y: 2 },
  });

  expect(bob.directHit([2, 2]))
  .toMatchObject(
    {
      1: {
        coord: [2, 2],
        hit: true
      },
      2: {
        coord: [3, 2],
        hit: false
      },
      3: {
        coord: [4, 2],
        hit: false
      },
      4: {
        coord: [5, 2],
        hit: false
      },
    
    }
  )
});

test("takes another hit", () => {

  const bob = newShip("bob", 4, {
    start: { x: 2, y: 2 },
    end: { x: 5, y: 2 },
  });

  expect(bob.directHit([5, 2]))
  .toMatchObject(
    {
      1: {
        coord: [2, 2],
        hit: false
      },
      2: {
        coord: [3, 2],
        hit: false
      },
      3: {
        coord: [4, 2],
        hit: false
      },
      4: {
        coord: [5, 2],
        hit: true
      },
    
    }
  )
});

test("ship sinks", () => {

  const bob = newShip("bob", 1, {
    start: { x: 2, y: 2 },
    end: { x: 2, y: 2 },
  });

  bob.directHit([2, 2]);

  expect(bob.isSunk()).toBe(true)

});

test.only("ship sinks after multiple hits ", () => {

  const bob = newShip("bob", 4, {
    start: { x: 2, y: 2 },
    end: { x: 2, y: 5 },
  });

  bob.directHit([2, 2]);
  bob.directHit([2, 3]);
  bob.directHit([2, 4]);
  bob.directHit([2, 5]);

  expect(bob.isSunk()).toBe(true)

});


// test("ship has hitmap works in x-dir", () => {

//   const bob = newShip("bob", 4, {
//     start: { x: 2, y: 2 },
//     end: { x: 5, y: 2 },
//   });
//   expect(bob.getHitMap())
//     .toMatchObject(
//     {
//       1: {
//         coord: [2, 2],
//         hit: false
//       },
//       2: {
//         coord: [3, 2],
//         hit: false
//       },
//       3: {
//         coord: [4, 2],
//         hit: false
//       },
//       4: {
//         coord: [5, 2],
//         hit: false
//       },
    
//     }
//   )
// });

// test("ship has hitmap works in y-dir", () => {

//   const bob = newShip("bob", 4, {
//     start: { x: 2, y: 2 },
//     end: { x: 2, y: 5 },
//   });
//   expect(bob.getHitMap())
//     .toMatchObject(
//     {
//       1: {
//         coord: [2, 2],
//         hit: false
//       },
//       2: {
//         coord: [2, 3],
//         hit: false
//       },
//       3: {
//         coord: [2, 4],
//         hit: false
//       },
//       4: {
//         coord: [2, 5],
//         hit: false
//       },
    
//     }
//   )
// });