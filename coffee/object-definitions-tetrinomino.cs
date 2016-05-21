blockId = 1

class Tetromino
  constructor: (@blocktype) ->

  blockId: (blockId) ->
  	blockid = blockId

  move: (blockspace) ->
    consol.log(@id + ' moved #{blockspace} spaces.')

  direction: (direction) ->
  	console.log('moving ' + direction)

  active:  ->
    true

class Polyomino extends Tetromino
	blockId: ->
		super blockId

	move: ->
	  consol.log('Polyomino moves')
	  super 1

	direction: ->
		super 'down'

	active: ->
		true

new Polyomino blocktype: 'polyomino'
