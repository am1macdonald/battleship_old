const newShip = (str, num, front, rear) => {
  const name = str;
  const length = num;
  const coords = {
    start: {
      x: front[0],
      y: front[1],
    },
    end: {
      x: rear[0],
      y: rear[1],
    },
  };
  let sunk = false;
  const hitMap = {};

  const getHitMap = () => {
    return hitMap;
  };

  const getName = () => {
    return name;
  };

  const getLength = () => {
    return length;
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
      const constant = coords.start.x;
      const start =
        coords.start.y <= coords.end.y ? coords.start.y : coords.end.y;
      for (let i = 0; i < length; i += 1) {
        hitMap[`${constant}-${start + i}`] = false;
      }
    } else if (coords.start.y === coords.end.y) {
      const constant = coords.start.y;
      const start =
        coords.start.x <= coords.end.x ? coords.start.x : coords.end.x;
      for (let i = 0; i < length; i += 1) {
        hitMap[`${start + i}-${constant}`] = false;
      }
    } else {
      throw new Error("no diagonal!");
    }
  })();

  const checkHull = () => {
    let status = true;
    for (const key in hitMap) {
      if (hitMap[key] === false) {
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

    for (const key in hitMap) {
      if (key === hitLocation.join("-")) {
        hitMap[key] = true;
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
    getHitMap,
  };
};

export default newShip;
