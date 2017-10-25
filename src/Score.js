(function(exports) {
  var Score = function(game = new Game) {
    this.game = game;
  };

  Score.prototype.calculateRows = function(board) {
    var row1 = board.slice(0,3);
    var row2 = board.slice(3,6);
    var row3 = board.slice(6,9);
    if (row1.includes(0)) {
      console.log("if row includes 0")
      return "Next players turn";
    } else if (row1[0]=== (row1[1] && row1[2])) {
      return "You have won!";
    } else {
      return "Next players turn";
    }
  };
//
  exports.Score = Score;
})(this);
