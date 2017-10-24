describe("Game", function() {
  var game;


  beforeEach(function() {
    game = new Game();
  });

  it("play game creates an empty board", function() {
    game.play();
    expect(game.board).toEqual([0,0,0,0,0,0,0,0,0])
  });

});
