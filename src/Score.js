(function(exports) {
  var Score = function(game = new Game) {
    this.game = game;
  };

  Score.prototype.splitRows = function(board) {

  };

  Score.prototype.calculateRows = function(board) {
    if ((board[0] != 0) && (board[0] === (board[1] && board[2]))) {
      console.log("row1")
      return "You have won!";
    } else if ((board[3] != 0) && (board[3] === (board[4] && board[5]))) {
      console.log("row2")
        return "You have won!";
    } else if ((board[6] != 0) && (board[6] === (board[7] && board[8]))) {
      console.log("row3")
      return "You have won!";
    } else {
      return "Next players turn";
    }
  };
//
exports.Score = Score;
})(this);
