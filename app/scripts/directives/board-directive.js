app.directive('board', ['boardService', 'PLAYERS_ACTIONS', '$timeout', function(boardService, PLAYERS_ACTIONS, $timeout) {
  var moveKeyCode = PLAYERS_ACTIONS;
  return {
    restrict: 'EC',
    templateUrl: '/views/board.html',
    link: function($scope, $element, $attrs) {
      $scope.board = boardService.returnBoard();

      $('html').on('keydown', function(e) {
        $timeout(function() {
          if (!moveKeyCode[e.keyCode]) return;
          var changesArray = boardService.move(moveKeyCode[e.keyCode].playerId, moveKeyCode[e.keyCode].action);
          changesArray.forEach(function(item) {
            drawNewStatus(item);
          });
        }, 0);
      });

      // statusObject structure: { x: integer, y: integer, status: integer }
      function drawNewStatus(statusObject) {
        var field = $element.find('.board-row').eq(statusObject.row).find('.board-cell').eq(statusObject.column);
        field.attr('data-type', statusObject.status);
      }
    }
  }
}]);
