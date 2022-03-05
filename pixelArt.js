let table = document.querySelector('table');
table.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

let canvasSize = 64;
table.style = `width: ${canvasSize * 8}px; height: ${canvasSize * 8}px`;

let gridActive = false;

let selectedColor = '#000';

let didFirstClick = false;

let innerTable = '';
for (let x = 0; x < canvasSize; x++) {
  let innerRow = '<tr>';
  for (let y = 0; y < canvasSize; y++) {
    innerRow += `<td id='x${x}-y${y}' class='cell' onmouseover="colorCell(event, 'x${x}-y${y}')" onmousedown="colorCell(event, 'x${x}-y${y}')"></td>`;
  }

  innerRow += '</tr>';
  innerTable += innerRow;
}

table.innerHTML = innerTable;

const colorCell = (event, id) => {
  if (event?.buttons === 1) {
    let cell = document.querySelector('#' + id);
    cell.style = `background-color: ${selectedColor};`;
  }

  if (event?.buttons === 2) {
    let cell = document.querySelector('#' + id);
    cell.style = `background-color: #fff;`;
  }
};
