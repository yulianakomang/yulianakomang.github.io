$(document).ready(function(){
	$('#menu').click(function(){
		$('#isi-menu').toggle('slow');
	});
	$('#content-php').masonry({
          itemSelector: '.box-content',
        });
	$('#content-wp').masonry({
          itemSelector: '.box-content',
        });
});