app.factory('boardService', [function() {
    var currentPlayer;
    var board = {};
    var players = [];
    
    return {
        move: function(playerId, fromPosition, toPosition) {
            console.log('ttttt');
        },
        returnBoard: function() {
            return board;
        },
        generateBoard: function() {
            // write board generation stuff here

        },
        moveLeft: function() {
          return [{ x: 0, y: 0, status: 1}]
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
