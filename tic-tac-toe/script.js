const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameOver = false;

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.textContent && !gameOver) {
            cell.textContent = currentPlayer;
            if (checkWin()) {
                gameOver = true;
                alert(`Jogador ${currentPlayer} venceu!`);
            } else if (checkDraw()) {
                gameOver = true;
                alert('Os Jogadores Empataram!');
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

function checkWin() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winningCombos.some(combo => {
        const [a, b, c] = combo;
        return cells[a].textContent && 
               cells[a].textContent === cells[b].textContent &&
               cells[a].textContent === cells[c].textContent;
    });
}

function checkDraw() {
    return [...cells].every(cell => cell.textContent);
}
