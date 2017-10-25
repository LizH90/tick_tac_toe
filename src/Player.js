(function(exports) {
	var Player = function(symbol) {
		this.symbol = symbol;
	};

	Player.prototype.play = function(game) {
		this.game = game;
	};

	exports.Player = Player;

})(this);
