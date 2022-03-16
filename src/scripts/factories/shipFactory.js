const newShip = (str, num, position) => {
  const name = str;
  const length = num;
  const coords = position;
  let sunk = false;
  const hitMap = {};

  const getName = () => {
    return name;
  };

  const getLength = () => {
    return length;
  };

  const getHitMap = () => {
    return hitMap;
  };
  const isSunk = () => {
    return sunk;
  };

  // the following builds the hitMap of the ship
  (() => {
    if (!coords) {
      return;
    }
    if (coords.start.x === coords.end.x) {
      const constantAxis = coords.start.x;
      const start = coords.start.y;
      for (let i = 0; i < length; i += 1) {
        hitMap[i + 1] = {
          coord: [constantAxis, start + i],
          hit: false,
        };
      }
    } else if (coords.start.y === coords.end.y) {
      const constantAxis = coords.start.y;
      const start = coords.start.x;
      for (let i = 0; i < length; i += 1) {
        hitMap[i + 1] = {
          coord: [start + i, constantAxis],
          hit: false,
        };
      }
    }
  })();

  const checkHull = () => {
    let status = true;
    for (const hitMapLocation in hitMap) {
      if (hitMap[hitMapLocation].hit === false) {
        status = false;
      }
    }
    sunk = status;
    return sunk;
  };

  const directHit = (hitLocation) => {
    if (sunk === true) {
      throw new Error("already down");
    }

    for (const hitMapLocation in hitMap) {
      if (
        hitMap[hitMapLocation].coord[0] === hitLocation[0] &&
        hitMap[hitMapLocation].coord[1] === hitLocation[1]
      ) {
        hitMap[hitMapLocation].hit = true;
      }
    }
    checkHull();
    return hitMap;
  };

  return {
    getName,
    getLength,
    directHit,
    isSunk,
  };
};

const bob = newShip("bob", 2, {
  start: { x: 2, y: 2 },
  end: { x: 2, y: 3 },
});

console.log(bob.directHit([2, 2]));
console.log(bob.directHit([2, 3]));
console.log(bob.isSunk());

export default newShip;
