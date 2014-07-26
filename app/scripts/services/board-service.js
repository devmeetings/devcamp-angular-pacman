app.factory('boardService', [function() {

  var board = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[0,2,0,0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,2,0,0,2,0,0,0,0,2,0],[0,2,0,0,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0],[0,2,0,0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,2,0,0,2,0,0,0,0,2,0],[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[0,2,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,2,0],[0,2,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,2,0],[0,2,2,2,2,2,2,0,0,2,2,2,2,0,0,2,2,2,2,0,0,2,2,2,2,2,2,0],[0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0],[0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0],[0,0,0,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,0,0,0],[0,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0],[0,0,0,2,0,0,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2,0,0,0],[0,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,0],[0,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0],[0,0,0,2,0,0,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2,0,0,0],[0,0,0,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,0,0,0],[0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0],[0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0],[0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0],[0,2,0,0,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0],[0,2,0,0,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0],[0,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0],[0,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0],[0,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0],[0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0],[0,2,0,0,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0],[0,2,0,0,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0],[0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
  var players = [{
    position: {
      column: 0,
      row: 0
    },
    score: 0
  }, {
    position: {
      column: 0,
      row: 0
    },
    score: 0
  }];

  function checkIfCanMove(playerPosition, toPosition) {
    if (playerPosition.column+1 < toPosition.column || playerPosition.column-1 > toPosition.column ||
      playerPosition.row+1 < toPosition.row || playerPosition.row-1 > toPosition.row) {
      console.log('error. selected field is to far.');
      return false;
    }

    return true;
  }

  function checkIfMoveIsLegal(player, toPosition) {
    if (toPosition.column >= board[0].length || toPosition.column < 0) {
      return false;
    }

    if (toPosition.row >= board.length || toPosition.row < 0) {
      return false;
    }

    if (!checkIfCanMove(player.position, toPosition)) {
      return false;
    }

    // check if field is empty or we are able to move
    return board[toPosition.column][toPosition.row];
  }

  function emptyField(position) {
    board[position.column][position.row] = 1;
  }

  return {
    returnBoard: function() {
      return board;
    },
    generateBoard: function() {
      // write board generation stuff here

    },
    move: function (playerId, toPosition) {
      var actions = [];
      var player = players[playerId];
      console.log(playerId, toPosition)
      if (!checkIfMoveIsLegal(player, toPosition)) { return actions; }

      return [{ column: 0, row: 0, status: 2}];
    }
  }
}]);
