$(document).on('scroll', function (e) {
	var alpha = (0.5 + $(document).scrollTop() / 200 );
    $('.navigationbar').css('background-color', 'rgba(1,1,1,'+ alpha +')');
	$('.portfoliodropdown').css('background-color', 'rgba(1,1,1,'+ alpha +')');
	});