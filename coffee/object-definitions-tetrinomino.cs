class Tetromino
  constructor: (@blocktype) ->

  move: (blockspace) ->
    consol.log(@id + ' moved #{blockspace} spaces.')

class Polyomino extends Tetromino
	template: ->
  		'<div class="tetromino i-block freefall">
				<span></span><span></span><span></span><span></span>
			</div>'
	name: (name) ->
		'polyblocker'
