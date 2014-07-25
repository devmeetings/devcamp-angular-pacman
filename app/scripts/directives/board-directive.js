app.directive('board', ['boardService', function(boardService) {

		return {
			restrict: 'EC',
			link: function($scope, $element, $attrs) {
				var moveKeyCode = {
					37: 'Left',
					38: 'Top',
					39: 'Right',
					40: 'Down'
				};
				$('html').on('keydown', function(e) {
					var changesArray = boardService['move' + moveKeyCode[e.keyCode]]();
					changesArray.forEach(function(item) {

					});
				});

				// statusObject structure: { x: integer, y: integer, status: integer }
				function drawNewStatus(statusObject) {
					
				}
			}
		}
	}]);