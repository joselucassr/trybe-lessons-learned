// Capturando o elemento da tabela utilizando o querySelector.
let table = document.querySelector('table');

// Adicionando um "escutador" de eventos e impedindo do botão direito funcionar.
table.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

// Definindo quantos "pixels" por linha e por coluna.
let canvasSize = 64;

// Definindo o tamanho da tabela para 512px por 512px.
table.style = `width: ${canvasSize * 8}px; height: ${canvasSize * 8}px`;

// Definindo a cor que pode ser pintada.
let selectedColor = '#000';

// Inicializando a string que vai conter as tags geradas dentro dos loops.
let innerTable = '';
// O primeiro loop passa pelas linhas, ou eixo X.
for (let x = 0; x < canvasSize; x++) {
  // Declarando a tag de abertura de linha de tabela.
  let innerRow = '<tr>';

  // O segundo loop passa pelas colunas, ou eixo Y.
  for (let y = 0; y < canvasSize; y++) {
    // Aqui uma célula é criada e recebe id e funções que são chamadas em eventos: "onmouseover" e "onmousedown".
    innerRow += `
      <td 
        id='x${x}-y${y}' 
        class='cell' 
        onmouseover="colorCell(event, 'x${x}-y${y}')"
        onmousedown="colorCell(event, 'x${x}-y${y}')"
      >
      </td>
    `;
  }

  // A tag de linha de tabela é fechada.
  innerRow += '</tr>';

  // A linha construida acima é adicionada a string que armazena o conteúdo da tabela.
  innerTable += innerRow;
}

// O conteúdo da tag <table> é substituido pela string criada
table.innerHTML = innerTable;

// Função responsável por dar cor às células.
// Recebe um evento, que é passado pelos "escutadores" de eventos.
// E recebe um id, que pode ser usado para encontrar a célula correta.
const colorCell = (event, id) => {
  // Uma célula com o id igual ao passado na função é procurada.
  let cell = document.querySelector('#' + id);

  // Caso a pessoa aperte o botão da esquerda do mouse, a função abaixo é executada.
  if (event?.buttons === 1) {
    // A célula tem o atributo "background-color" atribuido a cor escolhida para pintar.
    cell.style = `background-color: ${selectedColor};`;
  }

  // Caso a pessoa aperte o botão da direita do mouse, a função abaixo é executada.
  if (event?.buttons === 2) {
    // A célula tem o atributo "background-color" atribuido a cor branca.
    cell.style = `background-color: #fff;`;
  }
};
