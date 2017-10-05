describe("Player", function() {

  var player;


  beforeEach(function() {
    player = new Player();
  });

  it("blah blah", function() {
    player.play("game1");
    expect(player.game).toEqual("game1");
  });

});
