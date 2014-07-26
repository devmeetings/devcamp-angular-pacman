app.factory('boardService', [function() {
  var board = [];
  var players = [{
    position: {
      x: 0,
      y: 0
    },
    score: 0
  }, {

  }];

  function checkIfCanMove(playerPosition, toPosition) {
    if (playerPosition.x+1 < toPosition.x || playerPosition.x-1 > toPosition.x ||
        playerPosition.y+1 < toPosition.y || playerPosition.y-1 > toPosition.y) {
      console.log('error. selected field is to far.');
    return false;
    }

    return true;
  }

  function checkIfMoveIsLegal(player, toPosition) {
    if (toPosition.x >= board[0].length || toPosition.x < 0) {
      return false;
    }

    if (toPosition.y >= board.length || toPosition.y < 0) {
      return false;
    }

    if (!checkIfCanMove(player.position, toPosition)) {
      return false;
    }

    // check if field is empty or we are able to move
    return board[toPosition.x][toPosition.y];
  }

  function emptyField(position) {
    board[position.x][position.y] = 1;
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

      return [{ x: 0, y: 0, status: 2}];
    }
  }
}]);
