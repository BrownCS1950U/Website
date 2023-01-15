 $(document).ready(function() {
	$('.staffImage > img').hover(
		function() {
			$(this).attr('src', 'images/'+$(this).parent().attr("id")+'.png');
		},
		function() {
			$(this).attr('src', 'images/'+$(this).parent().attr("id")+'-alt.png');
		}
	);
});
