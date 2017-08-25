$(document).ready(function(){
	$(".imageModal").on("click", function() {
		$(".imageModal").fadeOut(250, function(){
			$(".imageModal").remove();
		});
	});
});