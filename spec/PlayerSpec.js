describe("Player", function() {

  var player;


  beforeEach(function() {
    player = new Player("X");
  });

  it("player move is added to the board", function() {
    player.play("game1");
    expect(player.game).toEqual("game1");
  });

});
