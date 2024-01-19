class Game {
  constructor() {
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.score = 0;
  }

  setScore(newScore) {
    this.score += newScore;
    console.log(this.score);
  }

  getColumns() {
    const columns = [];
    for (let i = 0; i < 3; i++) {
      const column = [];
      for (let j = 0; j < 3; j++) {
        column.push(this.board[j][i]);
      }
      columns.push(column);
    }
    return columns;
  }

  checkColumns() {
    const columns = this.getColumns();

    for (const column of columns) {
      const firstValue = column[0];

      if (
        column.every(
          (value) => value === firstValue && typeof value !== "number"
        )
      ) {
        return true;
      }
    }
    return false;
  }

  checkRows() {
    for (const row of this.board) {
      const firstValue = row[0];
      if (
        row.every((value) => value === firstValue && typeof value !== "number")
      ) {
        return true;
      }
    }
    return false;
  }

  checkDiagonals() {
    // Check the main diagonal (top-left to bottom-right)
    if (
      this.board[0][0] !== 0 &&
      this.board[0][0] === this.board[1][1] &&
      this.board[0][0] === this.board[2][2]
    ) {
      return true;
    }

    // Check the other diagonal (top-right to bottom-left)
    if (
      this.board[0][2] !== 0 &&
      this.board[0][2] === this.board[1][1] &&
      this.board[0][2] === this.board[2][0]
    ) {
      return true;
    }

    return false;
  }
  makeMove(row, col, value) {
    this.board[row][col] = value;
  }

  computerMakeMove() {
    if (this.checkEquality()) {
      return;
    }

    const row = this.getRandom();
    const col = this.getRandom();

    if (this.board[row][col] === 0) {
      this.makeMove(row, col, "O");
      return;
    } else {
      return this.computerMakeMove();
    }
  }

  getRandom() {
    return Math.floor(Math.random() * 3);
  }

 

  checkEquality() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        if (this.board[i][j] === 0) {
          return false;
        }
      }
    }
    return true;
  }

  checkWin() {
    return this.checkRows() || this.checkColumns() || this.checkDiagonals();
  }

  reset() {
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
  }
}

export default Game;
