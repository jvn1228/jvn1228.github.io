$(document).ready(function(){
	$(document).mouseup(function(event) {
		var container = $(".imageContentContainer");
		if (!container.is(event.target) && container.has(event.target).length === 0)
		{
			
			$(".imageModal").fadeOut(250, function(){
				$(".imageModal").remove();
			});
		}
	});
});