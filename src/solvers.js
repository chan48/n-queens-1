/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  var solution = null;
  if (n < 1) {
    console.log('eff yeah');
    return null;
  }

  var rootTree = function(rowNum, colNum) {
    if(colNum === n) {
      //no possibilities on this row
      return null;
    } else if (rowNum === n) {
      //finished the board
      solution = board.rows();
      return solution;
    }

    board.togglePiece(rowNum,colNum);

    if(!board.hasAnyRooksConflicts()) {
      rootTree(rowNum+1,0);
    } else {
      board.togglePiece(rowNum,colNum);
      rootTree(rowNum,colNum+1);
    }
  };

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));

  return rootTree(0,0);
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
