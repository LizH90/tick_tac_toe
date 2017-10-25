describe("Score", function() {

  var score;

  beforeEach(function() {
    game = new Game();
    score = new Score(game);
    board1 = [0,0,0,"X","X","X",0,0,0];
    board2 = [0,0,0,"X","X",0,0,0,0];
  });

  it('calculates if winning row', function () {
    var calc = score.calculateRows(board1);
    expect(calc).toEqual("You have won!");
  });

  it('calculates if no winning rows', function() {
    expect(score.calculateRows(board2)).toEqual("Next players turn");
  });
});
