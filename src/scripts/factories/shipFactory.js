const newShip = (str, num) => {
  const name = str;
  const length = num;
  let sunk = false;

  let hits = 0;

  const isSunk = () => {
    return sunk;
  };
  const directHit = () => {
    if (sunk === true) {
      throw new Error("already down");
    }
    hits += 1;
    sunk = hits === length;

    isSunk();
    return hits;
  };

  const getName = () => name;

  const getLength = () => {
    return length;
  };

  return {
    getName,
    getLength,
    directHit,
    isSunk,
  };
};

export default newShip;
