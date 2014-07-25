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
            console.log('poszedlem w lewo');
        },
        moveRight: function() {

        },
        moveTop: function() {

        },
        moveBot: function() {
            
        }
    }
}]);