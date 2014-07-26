app.factory('boardService', [function() {
    var currentPlayer;
    var board = [];
    var players = [];

    function move(playerId, fromPosition, toPosition) {
        if (toPosition.x >= board[0].length || toPosition.x < 0) {
            return false;
        }

        if (toPosition.y >= board.length || toPosition.y < 0) {
            return false;
        }


    }
    
    return {
        returnBoard: function() {
            return board;
        },
        generateBoard: function() {
            // write board generation stuff here

        },
        moveLeft: function(playerId) {
          console.log('player ', playerId, ' went left')
        },
        moveRight: function(playerId) {
          console.log('player ', playerId, ' went right')
        },
        moveUp: function(playerId) {
          console.log('player ', playerId, ' went up')
        },
        moveDown: function(playerId) {
          console.log('player ', playerId, ' went down')
        }
    }
}]);
