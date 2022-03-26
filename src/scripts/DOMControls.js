const body = document.querySelector("body");
const content = document.getElementById("content");

const playerDataEntry = () => {
  const overlay = document.createElement("div");
  overlay.classList.add("form-overlay");

  const container = document.createElement("div");
  container.classList.add("form-container");

  const form = document.createElement("form");
  form.id = "player-information";

  const headerDiv = document.createElement("div");
  const header = document.createElement("h3");
  header.innerHTML = "Who's playing?";

  headerDiv.appendChild(header);

  const inputDiv = document.createElement("div");
  const label = document.createElement("label");
  label.for = "player-name";
  label.innerHTML = "Enter Your Name";
  const textInput = document.createElement("input");
  textInput.id = "player-name";
  textInput.required = true;

  inputDiv.appendChild(label);
  inputDiv.appendChild(textInput);

  const buttonDiv = document.createElement("div");
  const button = document.createElement("button");
  button.id = "start-button";
  button.innerHTML = "start";

  buttonDiv.appendChild(button);

  form.appendChild(headerDiv);
  form.appendChild(inputDiv);
  form.appendChild(buttonDiv);

  container.appendChild(form);
  overlay.appendChild(container);
  body.appendChild(overlay);

  return { overlay, form };
};

const renderBoard = (parent) => {
  const container = document.createElement("div");
  container.classList.add("gameboard-container");
  const board = document.createElement("div");
  board.classList.add("gameboard");

  for (let y = 10; y >= 1; y -= 1) {
    for (let i = 1; i <= 10; i += 1) {
      const square = document.createElement("div");
      square.dataset.coord = `${i}-${y}`;
      square.addEventListener("click", () => {
        console.log(square.parentElement.dataset.owner);
        return {
          owner: square.parentElement.dataset.owner,
          coord: square.dataset.coord,
        };
      });
      board.appendChild(square);
    }
  }

  container.appendChild(board);
  parent.appendChild(container);

  return board;
};

const shipDrawer = () => {
  const ships = ["carrier", "battleship", "cruiser", "submarine", "destroyer"];
  const container = document.createElement("div");
  container.id = "ship-drawer";

  ships.forEach((ship) => {
    const shipDiv = document.createElement("div");
    shipDiv.id = `${ship}-selection`;
    shipDiv.dataset.ship = `${ship}`;
    shipDiv.innerHTML = `${ship}`;
    container.appendChild(shipDiv);
    console.log(ship);
  });

  content.appendChild(container);

  return { container };
};

const gameArea = (playerOneName, playerTwoName) => {
  const container = document.createElement("div");
  container.id = "game-area";

  const playerOneSide = document.createElement("div");
  playerOneSide.id = "player-one-side";
  const playerOneTitle = document.createElement("h2");
  playerOneTitle.innerHTML = playerOneName;
  playerOneSide.appendChild(playerOneTitle);
  const playerOneBoard = renderBoard(playerOneSide);
  playerOneBoard.dataset.owner = playerOneName;

  const playerTwoSide = document.createElement("div");
  playerTwoSide.id = "player-two-side";
  const playerTwoTitle = document.createElement("h2");
  playerTwoTitle.innerHTML = playerTwoName;
  playerTwoSide.appendChild(playerTwoTitle);
  const playerTwoBoard = renderBoard(playerTwoSide);
  playerTwoBoard.dataset.owner = playerTwoName;

  container.appendChild(playerOneSide);
  container.appendChild(playerTwoSide);

  content.appendChild(container);

  return {
    container,
    playerOneSide,
    playerTwoSide,
    playerOneBoard,
    playerTwoBoard,
  };
};

export { playerDataEntry, renderBoard, gameArea, shipDrawer };
