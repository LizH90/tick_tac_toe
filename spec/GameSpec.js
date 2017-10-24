describe("Game", function() {
  var game;


  beforeEach(function() {
    game = new Game();
    game.play();
  });

  it("play game creates an empty board", function() {
    expect(game.board).toEqual([0,0,0,0,0,0,0,0,0])
  });

  it("player 1 move adds X to board", function() {
    game.player1Move(5);
    expect(game.board).toEqual([0,0,0,0,0,"X",0,0,0])
  });

  it("player 2 move adds 0 to board", function() {
    game.player2Move(3);
    expect(game.board).toEqual([0,0,0,"0",0,0,0,0,0])
  });
});
