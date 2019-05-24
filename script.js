$(document).ready(function() {
	var li = $('li'),
			hb = $('.hamburger'),
			actives = '.drop, main';
	li.on('click', function() {
		var id = $(this).children('a').attr('href');
		id = id.substr(1,2);
		id = ", #s" + id;
		
		$(actives + id).addClass('active');
	});
	hb.on('click', function() {
		$('.active').removeClass('active');
	});
});