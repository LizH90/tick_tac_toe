describe("Score", function() {

  var score;

  beforeEach(function() {
    game = new Game();
    score = new Score(game);
    board1 = [0,0,0,"X","X","X",0,0,0];
    board2 = [0,0,0,"X","X",0,0,0,0];
    board3 = [0,"X",0,0,"X",0,0,"X",0];
  });

  it('calculates if winning row', function () {
    var calcRow = score.calculateRows(board1);
    expect(calcRow).toEqual("You have won!");
  });

  it('calculates if no winning rows', function() {
    expect(score.calculateRows(board2)).toEqual("Next players turn");
  });

  it('calculates if winning column', function () {
    var calcCol = score.calculateColumns(board3);
    expect(calcCol).toEqual("You have won!");
  });

  it('calculates if no winning column', function() {
    expect(score.calculateColumns(board1)).toEqual("Next players turn");
  });
});
