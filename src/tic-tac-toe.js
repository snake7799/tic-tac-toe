class TicTacToe {
    constructor() {
        this.boardLength = 3;
        this.board = [];
        for (let i = 0; i < this.boardLength; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.boardLength; j++)
                this.board[i][j] = null;
        }
        
        this.playerSymbol = 'x';
        this.tempSymbol = null;
        this.moves = 0;
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.board[rowIndex][columnIndex] == null) {
            this.board[rowIndex][columnIndex] = this.tempSymbol = this.getCurrentPlayerSymbol();
            this.moves++;
            this.playerSymbol = (this.playerSymbol == 'x') ? 'o' : 'x';
        }
    }

    isFinished() {
        return ((this.getWinner() != null) || this.isDraw());
    }

    getWinner() {
        for (let i = 0; i < this.boardLength; i++) {
            if ((this.board[i][0] != null && this.board[i][0] == this.board[i][1] && this.board[i][0] == this.board[i][this.boardLength-1]) ||
                (this.board[0][i] != null && this.board[0][i] == this.board[1][i] && this.board[0][i] == this.board[this.boardLength-1][i]))
                return this.tempSymbol;
            if ((this.board[0][0] != null && this.board[0][0] == this.board[1][1] && this.board[0][0] == this.board[2][2]) ||
                (this.board[0][2] != null &&  this.board[0][2] == this.board[1][1] && this.board[0][2] == this.board[2][0]))
                return this.tempSymbol;
        }
        return null;
    }

    noMoreTurns() {
        return (this.moves == 9);
    }

    isDraw() {
        return (this.noMoreTurns() && !this.getWinner());
    }

    getFieldValue(rowIndex, colIndex) {
        return (this.board[rowIndex][colIndex] == null) ? null : this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
