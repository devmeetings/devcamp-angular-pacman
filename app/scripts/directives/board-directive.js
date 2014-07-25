app.directive('board', ['boardService', function(boardService) {

		return {
			restrict: 'EC',
      templateUrl: '/views/board.html',
			link: function($scope, $element, $attrs) {
				var moveKeyCode = {
					37: 'Left',
					38: 'Up',
					39: 'Right',
					40: 'Down'
				};
				$('html').on('keydown', function(e) {
					var changesArray = boardService['move' + moveKeyCode[e.keyCode]]();
					changesArray.forEach(function(item) {
            drawNewStatus($element, item)
					});
				});

				// statusObject structure: { x: integer, y: integer, status: integer }
				function drawNewStatus($element, statusObject) {
          field = $element.find('field').eq(statusObject.x * 25 + statusObject.y * 35)
          field.attr('status', statusObject.status)
				}
			}
		}
	}]);
