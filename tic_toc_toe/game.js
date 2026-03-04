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
        
        return { getBoard, markBoard, resetBoard 

        }; 
    })




const createPlayer = (name, mark) => {

    const getName = () => name ;
    const getMark = () => mark;

    return {getMark, getName};
}



const GameController = (() => {

   const  player1 = createPlayer("P1", "X");
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


    return {playRound};

})();