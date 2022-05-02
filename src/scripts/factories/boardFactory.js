import newShip from "./shipFactory";

const newBoard = (ownerName) => {
  const shipLengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
  };
  const getShipLengths = () => {
    return shipLengths;
  };
  const shipyard = {};
  const shipLocations = {};
  const shots = [];
  const owner = ownerName;

  const getShipLocations = () => {
    return shipLocations;
  };

  const getOwnerName = () => {
    return owner;
  };

  const getShots = () => {
    return shots;
  };

  function placeShip(name, start, end) {
    const temp = newShip(name, shipLengths[name], start, end);
    const map = temp.getHitMap();
    for (const key in map) {
      if (shipLocations.hasOwnProperty(key)) {
        throw new Error("space already occupied");
      }
    }
    shipyard[name] = temp;
    for (const key in map) {
      shipLocations[key] = name;
    }
    return map;
  }

  function recieveAttack(location) {
    let coords = location;
    if (typeof location === "object") {
      coords = location.join("-");
    }
    if (shots.includes(coords)) {
      throw new Error("already shot here!");
    }
    shots.push(coords);
    if (shipLocations.hasOwnProperty(coords)) {
      const target = shipLocations[coords];
      shipyard[target].directHit(location);

      if (shipyard[target].isSunk() === true) {
        return "sunk";
      }
      return "hit";
    }
    return "miss";
  }

  function isFleetSunk() {
    let allShipsSunk = true;
    for (const key in shipyard) {
      if (shipyard[key].isSunk() === false) {
        allShipsSunk = false;
      }
    }
    return allShipsSunk;
  }
  function nextShip() {
    for (const key in shipLengths) {
      if (!shipyard.hasOwnProperty(key)) {
        return key;
      }
    }
    return "setup complete";
  }

  return {
    placeShip,
    recieveAttack,
    isFleetSunk,
    getShots,
    getOwnerName,
    getShipLocations,
    nextShip,
    getShipLengths,
  };
};

// const bobsBoard = newBoard("bob");
// bobsBoard.placeShip("carrier", "1-1", "1-5");
// bobsBoard.placeShip("battleship", "2-1", "2-4");
// bobsBoard.placeShip("cruiser", "3-2", "3-4");
// bobsBoard.placeShip("submarine", "4-1", "4-3");
// bobsBoard.placeShip("destroyer", "6-2", "6-3");

// bobsBoard.nextShip();

export default newBoard;
