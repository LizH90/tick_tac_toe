(function(exports) {
	var Game = function(board, player1 = new Player("X"), player2 = new Player("O")) {
		this.board = [];
		this.player1 = player1;
		this.player2 = player2;
	};

	Game.prototype.play = function() {
		for (var i=0; i<9; i++) {
			this.board.push(0);
		}
	};

	Game.prototype.player1Move = function(boardindex) {
		this.board.splice(boardindex,1,"X");
	};

	Game.prototype.player2Move = function(boardindex) {
		this.board.splice(boardindex,1,"0");
	};
	exports.Game = Game;
})(this);
