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

  inputDiv.appendChild(label);
  inputDiv.appendChild(textInput);

  const buttonDiv = document.createElement("div");
  const button = document.createElement("button");
  button.innerHTML = "start";

  buttonDiv.appendChild(button);

  form.appendChild(headerDiv);
  form.appendChild(inputDiv);
  form.appendChild(buttonDiv);

  container.appendChild(form);
  overlay.appendChild(container);
  body.appendChild(overlay);
};

const renderBoard = () => {
  const container = document.createElement("div");
  container.classList.add("gameboard-container");
  const board = document.createElement("div");
  board.classList.add("gameboard");

  for (let y = 10; y >= 1; y -= 1) {
    for (let i = 1; i <= 10; i += 1) {
      const square = document.createElement("div");
      square.dataset.coord = `${i}-${y}`;
      board.appendChild(square);
    }
  }

  container.appendChild(board);
  content.appendChild(container);
};

export { playerDataEntry, renderBoard };
