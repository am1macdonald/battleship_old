/* eslint-disable no-unused-expressions */
/* eslint-disable no-prototype-builtins */
import newShip from "./shipFactory";

const newBoard = () => {
  const shipLengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
  };
  const shipyard = {};

  const missedShots = [];
  const shipLocations = {};

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
    return shipyard;
  }

  function recieveAttack(location) {
    const coords = location.join("-");
    if (shipLocations.hasOwnProperty(coords)) {
      const target = shipLocations[coords];
      shipyard[target].directHit(location);
      if (shipyard[target].isSunk() === true) {
        return "sunk";
      }
      return "hit";
    }
    if (!missedShots.includes(coords)) {
      missedShots.push(coords);
      return "miss";
    }
    throw new Error("already shot here!");
  }

  return { placeShip, recieveAttack };
};

export default newBoard;
