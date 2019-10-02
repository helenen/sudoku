import { createBoard } from "./index.js";

function generateBoard(board) {
  board = createBoard();
}

generateBoard();

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
