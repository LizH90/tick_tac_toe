function Game() {
  this.board = [];
  var player1 = new Player("X");
  var player2 = new Player("O");
}

Game.prototype.play = function () {
  for (var i=0; i<9; i++) {
    this.board.push(0);
  }
};
