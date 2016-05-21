$(document).ready(function() {
	$('.tetromino').on('click', function() {
  		$(this).toggleClass('switched');
	});
});