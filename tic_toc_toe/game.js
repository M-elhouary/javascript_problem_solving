const GameBoard = (() => {

    let board = Array(9).fill("");

    const getBoard = () => {
        let newboard = board.slice(0, board.length);
        return newboard;
    };

    const markBoard = (index, mark) => {
        board[index] = mark;
    };

    const resetBoard = () => {
        board = Array(9).fill("");
    };

    return { getBoard, markBoard, resetBoard };
})


const createPlayer = (name, mark) => {

    const getName = () => name;
    const getMark = () => mark;

    return { getMark, getName };
}



const GameController = (() => {

    const player1 = createPlayer("P1", "X");
    const player2 = createPlayer("P2", "O");

    let currentPlayer = player1;

    const switchPlayer = () => {

        if (currentPlayer === player1)
            currentPlayer = player2;
        else
            currentPlayer = player1;
    }


    const playRound = (index) => {

        GameBoard.markBoard(index, currentPlayer.getMark());
        switchPlayer();

    }


    const checkWinner = () => {

        const board = GameBoard.getBoard();

        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        let winner = "";

        for (let j = 0; j < winningCombos.length; j++) {
            const [a, b, c] = winningCombos[j];

            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                winner = board[a];
                break;
            }
        }

        if (winner === "" && board.every(cell => cell !== "")) {
            winner = "Draw";
        }

        return { winner };
    };
    return { playRound };

})();