import Game from "./Game.js";


const ROW = 3;
const COL = 3;


class GameDOM extends Game {
  constructor() {
    super(); // Call the constructor of the Game class
    this.domBoard = []; // New property to store DOM elements
    this.gameContainer = document.querySelector(".game-container");
  }

  createDOMBoard() {
    this.board.forEach((row, i) => {
      row.forEach((value, j) => {
        const box = this.createBoxElement(i, j);
        this.gameContainer.appendChild(box);
      });
    });
  }

  resetDOM() {
    this.domBoard.forEach((row) => {
      row.forEach((box) => {
        this.gameContainer.removeChild(box);
      });
    });

    // Clear the domBoard
    this.domBoard = [];

    // Recreate the game board
    this.createDOMBoard();
  }


  

  createBoxElement(i, j) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.addEventListener("click", () => {
      this.handleBoxClick(i, j);
      console.log(this.domBoard);
    });
    if (!this.domBoard[i]) {
      this.domBoard[i] = [];
    }
    this.domBoard[i][j] = div; // Store DOM element in domBoard
    console.log(this.domBoard);
    return div;
  }

  handleBoxClick(i, j) {
    if (this.board[i][j] !== 0) {
      return;
    }

    this.makeMove(i, j, "X");
    if (this.checkWin()) {
      
        this.handleGameWin();
    } else if (this.checkEquality()) {
        this.handleGameDraw();
    } else {
        this.computerMakeMove();
        if (this.checkWin()) {
          this.handleGameLost();
      }
    }
  }

  // This should be in Game or rethink the logic of this
  handleGameWin(){
    setTimeout(()=>{
        alert("You won!");
        this.setScore(1);
        this.resetDisplay();
        this.reset();
        this.resetDOM();
    }, 50)

  }
  handleGameDraw(){
    setTimeout(()=>{
        alert("Draw!");
    
        this.reset();
        this.resetDOM();
        this.resetDisplay();
    }, 50)

  }
  handleGameLost(){
    setTimeout(()=>{
        this.setScore(-1);
        alert("You lost!");
        this.reset();
        this.resetDOM();
        this.resetDisplay();
    },50)

  }
  makeMove(row, col, value) {
    super.makeMove(row, col, value); // Call the makeMove method of the Game class
    this.domBoard[row][col].textContent = value === 0 ? "" : value; // Update DOM
  }

  displayScore() {
    const scoreContainer = document.querySelector(".score-container");
    const score = document.createElement("p");
    scoreContainer.appendChild(score);
    score.textContent = `Score: ${this.score}`;
  }
  resetDisplay() {
    const scoreContainer = document.querySelector(".score-container");
    // Remove all child nodes from the score container
    while (scoreContainer.firstChild) {
      scoreContainer.removeChild(scoreContainer.firstChild);
    }
    // Display the initial score
    this.displayScore();
  }
}

export default GameDOM;
