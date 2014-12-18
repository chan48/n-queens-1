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

window.searchNBoard = function(n, type, cap) {

  var board = new Board({n:n});
  var solutions = [];

  if(n<1) {
    return [[]];
  }

  var searchTree = function(rowNum, colNum) {
    if (colNum === n) {
      //no possibilities on this row
      return;
    } else if (rowNum === n) {
      //finished the board
      solutions.push(board.rows());
      return;
    }

    board.togglePiece(rowNum,colNum);

    if(type==="rook" ? !board.hasColConflictAt(colNum) : !board.smartQueenConflictsOn(rowNum,colNum)) {
      searchTree(rowNum+1,0);
      if(solutions.length === cap) {
        return;
      }
    }

    board.togglePiece(rowNum,colNum);
    searchTree(rowNum,colNum+1);
  };

  searchTree(0,0);

  return solutions;
};

window.findNRooksSolution = function(n) {
  var solutions = searchNBoard(n,"rook",1);

  if (solutions.length === 0){
    return null;
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutions[0]));

  return solutions[0];
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var solutionCount = searchNBoard(n, "rook").length;

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);

  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solutions = searchNBoard(n,"queen",1);

  if (solutions.length === 0){
    return null;
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solutions[0]));

  return solutions[0];
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = searchNBoard(n,"queen").length;

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
