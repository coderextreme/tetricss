var currentBlockCounter = 0;
var polyominoBlockCounter = 0;



$(document).ready(function() {
	$('.tetromino').on('click', function() {
  		$(this).toggleClass('switched');
	});

	poly1 = new Polyomino({
	  name: 'poly1',
	  type: 'polyomino',
	});

	poly2 = new Polyomino({
	  name: 'poly2',
	  type: 'polyomino',
	});

	console.log(poly2);
});

function getBlockID(blkObj) {
  console.log(blkObj.blocktype);
  if (blkObj.blocktype === 'polyomino') {
    polyominoBlockCounter++;
    console.log('polyomino block counter at ' + polyominoBlockCounter);
  } else {
    console.log('not polyomino');
    return;
  }

  currentBlockCounter++;
  console.log('current block counter at ' + currentBlockCounter);

  return currentBlockCounter;
}