function Player(symbol) {
  this.symbol = symbol;

}

Player.prototype.play = function(game) {
  this.game = game;
};
