app.directive('board', ['boardService', 'PLAYERS_ACTIONS', function(boardService, PLAYERS_ACTIONS) {
  var moveKeyCode = PLAYERS_ACTIONS;
  return {
    restrict: 'EC',
    templateUrl: '/views/board.html',
    link: function($scope, $element, $attrs) {
      $scope.board = boardService.returnBoard();

      $('html').on('keydown', function(e) {
        if (!moveKeyCode[e.keyCode]) return;
        var changesArray = boardService.move(moveKeyCode[e.keyCode].playerId, moveKeyCode[e.keyCode].action);
        changesArray.forEach(function(item) {
          drawNewStatus($element, item);
        });
      });

      // statusObject structure: { x: integer, y: integer, status: integer }
      function drawNewStatus($element, statusObject) {
        field = $element.find('field').eq(statusObject.row * 25 + statusObject.column * 35);
        field.attr('status', statusObject.status);
      }
    }
  }
}]);
