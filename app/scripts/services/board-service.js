app.factory('boardService', [function() {
    var currentPlayer;
    var board = [];
    var players = [{
        id: 1,
        position: {
            x: 0,
            y: 0
        },
        pacman: 0
    }];

    function checkIfCanMove(playerPosition, toPosition) {
        if (playerPosition.x+1 < toPosition.x || playerPosition.x-1 > toPosition.x ||
            playerPosition.y+1 < toPosition.y || playerPosition.y-1 > toPosition.y) {
            console.log('error. selected field is to far.');
            return false;
        }

        return true;
    }

    function checkIfMoveIsLegal(playerId, toPosition) {
        if (toPosition.x >= board[0].length || toPosition.x < 0) {
            return false;
        }

        if (toPosition.y >= board.length || toPosition.y < 0) {
            return false;
        }

        for (var i = players.length; i--;) {
            var player = players[i];

            // we do validation only for current player. 
            // validation of all moves should be done on server side
            if (player.id === playerId && playerId === currentPlayer.id) { 
                if (!checkIfCanMove(player.position, toPosition)) {
                    return false;
                }
            }
        }

        // check if field is empty or we are able to move
        return board[toPosition.x][toPosition.y];
    }

    function emptyField(position) {
        board[position.x][position.y] = 1;
    }

    function moveActions(playerId, toPosition) {
        var actions = [];
        
    }

    function move(playerId, toPosition) {
        if (!checkIfMoveIsLegal(playerId, toPosition)) { return false; }

    }

    return {
        returnBoard: function() {
            return board;
        },
        generateBoard: function() {
            // write board generation stuff here

        },
        moveLeft: function() {
            console.log('poszedlem w lewo');        
        },
        moveRight: function() {
          return [{ x: 0, y: 0, status: 2}]
        },
        moveUp: function() {
          return [{ x: 0, y: 0, status: 3}]
        },
        moveDown: function() {
          return [{ x: 0, y: 0, status: 4}]
        }
    }
}]);
