(function(exports) {
	var Score = function(game = new Game) {
		this.game = game;
	};

	Score.prototype.calculateRows = function(board) {
		if ((board[0] != 0) && (board[0] === (board[1] && board[2]))) {
			return "You have won!";
		} else if ((board[3] != 0) && (board[3] === (board[4] && board[5]))) {
			return "You have won!";
		} else if ((board[6] != 0) && (board[6] === (board[7] && board[8]))) {
			return "You have won!";
		} else {
			return "Next players turn";
		}
	};

	Score.prototype.calculateColumns = function(board) {
		if ((board[0] != 0) && (board[0] === (board[3] && board[6]))) {
			return "You have won!";
		} else if ((board[1] != 0) && (board[1] === (board[4] && board[7]))) {
			return "You have won!";
		} else if ((board[2] != 0) && (board[2] === (board[5] && board[8]))) {
			return "You have won!";
		} else {
			return "Next players turn";
		}
	};

	exports.Score = Score;
})(this);
