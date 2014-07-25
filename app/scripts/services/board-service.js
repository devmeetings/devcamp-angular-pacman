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
        moveLeft: function() {
            //this.move(currentPlayer
        },
        moveRight: function() {

        },
        moveTop: function() {

        },
        moveBot: function() {

        }
    }
}]);