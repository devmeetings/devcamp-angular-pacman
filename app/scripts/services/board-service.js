app.factory('boardService', [function() {
	var board = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[0,2,0,0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,2,0,0,2,0,0,0,0,2,0],[0,2,0,0,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0],[0,2,0,0,0,0,2,0,0,2,0,0,2,0,0,2,0,0,2,0,0,2,0,0,0,0,2,0],[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[0,2,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,2,0],[0,2,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,2,0],[0,2,2,2,2,2,2,0,0,2,2,2,2,0,0,2,2,2,2,0,0,2,2,2,2,2,2,0],[0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0],[0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0],[0,0,0,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,0,0,0],[0,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0],[0,0,0,2,0,0,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2,0,0,0],[0,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,0],[0,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0],[0,0,0,2,0,0,2,2,2,2,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2,0,0,0],[0,0,0,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,0,0,0],[0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0],[0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0],[0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0],[0,2,0,0,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0],[0,2,0,0,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0],[0,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,0],[0,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0],[0,0,0,2,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0],[0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0],[0,2,0,0,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0],[0,2,0,0,0,0,2,0,0,0,0,0,2,0,0,2,0,0,0,0,0,2,0,0,0,0,2,0],[0,2,2,2,2,2,2,0,0,0,0,0,2,2,2,2,0,0,0,0,0,2,2,2,2,2,2,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

	var players = [{
		position: {
			row: 0,
			column: 0
		},
		score: 0
	}, 
	{
		position: {
			row: 0,
			column: 0
		},
		score: 0
	}];

	function checkIfCanMove(playerPosition, toPosition) {
		if (playerPosition.row+1 < toPosition.row || playerPosition.row-1 > toPosition.row ||
			playerPosition.column+1 < toPosition.column || playerPosition.column-1 > toPosition.column) {
			console.log('error. selected field is to far.');
			return false;
		}

		return true;
	}

	function checkIfMoveIsLegal(player, toPosition) {
		if (toPosition.row >= board[0].length || toPosition.row < 0) {
			return false;
		}

		if (toPosition.column >= board.length || toPosition.column < 0) {
			return false;
		}

		if (!checkIfCanMove(player.position, toPosition)) {
			return false;
		}

		// check if field is empty or we are able to move
		return board[toPosition.row][toPosition.column];
	}

	function emptyField(position) {
		board[position.row][position.column] = 0;
	}

	function changePlayerPosition(player, position) {
		player.row = position.row;
		player.column = position.column;
	}

	function getFieldStatus(position) {
		return board[position.row][position.column];
	}

	return {
		returnBoard: function() {
			return board;
		},
		generateBoard: function() {
			// write board generation stuff here
			
		},
		move: function (playerId, positionChange) {
			var actions = [];
			var player = players[playerId];

			var toPosition = player.position;
			var fieldStatus;

			var oldPosition = JSON.parse(JSON.stringify(player.position));

			toPosition.row += positionChange.row;
			toPosition.column += positionChange.column;

			fieldStatus = checkIfMoveIsLegal(player, toPosition);

			if (!fieldStatus) { return actions; };

			if (fieldStatus === 2) {
				player.score += 1;

				emptyField(toPosition);
			}

			changePlayerPosition(player, toPosition);

			actions.push({ row: toPosition.row, column: toPosition.column, status: 3 });
			actions.push({ row: toPosition.row, column: toPosition.column, status: getFieldStatus(oldPosition) });

			return actions;
		}
	}
}]);
