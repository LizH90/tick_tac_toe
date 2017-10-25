describe("Score", function() {

  var score;

  beforeEach(function() {
    game = new Game();
    score = new Score(game);
    board = ["X","X","X",0,0,0,0,0,0];
  });

  it('calculates if winning row', function () {
    var calc = score.calculateRows(board);
    expect(calc).toEqual("You have won!");
  });

  // it('calculates if there is a row of the same symbols', function() {
  //   expect(score.calculateRow).toEqual(true);
  // });
});
