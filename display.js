import { createBoard } from "./index.js";

function generateBoard(board) {
  board = createBoard();

  // crée une div dans le DOM
  const mainContainer = document.createElement("table");
  const container = document.createElement("tbody");

  // je donne une class à l'élément et je dis que container est son nom
  mainContainer.setAttribute("class", "container");

  // je dis au DOM que container est l'enfant de <body />
  document.body.appendChild(mainContainer);
  mainContainer.appendChild(container);

  // fait
  for (var i = 0; i < board.length; i++) {
    const row = document.createElement("tr");
    row.setAttribute("class", "row");
    container.appendChild(row);

    for (var j = 0; j < board[i].length; j++) {
      const column = document.createElement("td");
      column.setAttribute("class", "column");
      row.appendChild(column);
    }
  }
}

generateBoard(createBoard());

/* <table border="10" cellpadding="20" cellspacing="0">
      <tbody>
        <tr>
          <td class="row">2</td>
          <td class="row">
            <input type="number" maxlength="1" min="1" max="6" size="4" />
          </td>
          <td class="row"></td>
          <td class="row">6</td>
          <td class="row"></td>
          <td class="row"></td>
        </tr>
      </tbody>
    </table> */
