app.factory('boardService', ['DEFAULT_BOARD', 'DEFAULT_PLAYERS', function(DEFAULT_BOARD, DEFAULT_PLAYERS) {

	var board = DEFAULT_BOARD;

	var players = DEFAULT_PLAYERS;

	function checkIfCanMove(playerPosition, toPosition) {
		if (playerPosition.row+1 < toPosition.row || playerPosition.row-1 > toPosition.row ||
			playerPosition.column+1 < toPosition.column || playerPosition.column-1 > toPosition.column) {
			console.log('error. selected field is to far.');
			return false;
		}

		return true;
	}

	function checkIfMoveIsLegal(player, toPosition) {
		if (toPosition.row >= board.length || toPosition.row < 0) {
			return false;
		}

		if (toPosition.column >= board[0].length || toPosition.column < 0) {
			return false;
		}

		if (!checkIfCanMove(player.position, toPosition)) {
			return false;
		}

		// check if field is empty or we are able to move
		return board[toPosition.row][toPosition.column];
	}

	function emptyField(position) {
		board[position.row][position.column] = 1;
	}

	function changePlayerPosition(player, position) {
		player.position.row = position.row;
		player.position.column = position.column;
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
		getPlayers: function() {
			return players;
		},
		move: function (playerId, positionChange) {
			var actions = [];
			var player = players[playerId];

			var toPosition = JSON.parse(JSON.stringify(player.position));

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

			actions.push({ row: oldPosition.row, column: oldPosition.column, status: getFieldStatus(oldPosition) });
			actions.push({ row: toPosition.row, column: toPosition.column, status: 3 });

			return actions;
		}
	}
}]);
