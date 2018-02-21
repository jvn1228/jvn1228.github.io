function imageModal(popupSrc, imgRatio){
	$("<div class = \"imageModal\"><div class=\"imageContentContainer\"><img src = \""+popupSrc+"\"></div></div>").hide().appendTo(".gallerycontent").fadeIn(250);
	$("<div class = \"imageModalText\"><h1>Test</h1><p>What's up</p></div>").appendTo(".imageContentContainer");
	$.getScript("js/closemodal.js");

	
	if (window.innerWidth/window.innerHeight > imgRatio){
		$(".imageContentContainer img").css({"z-index":"1000", "display":"block","width":"auto","height":"100%"});
		$(".imageContentContainer").css({"left":"50%","transform":"translate(-50%,0%)","width":"auto","height":"86%","top":"7%","position":"absolute","box-shadow":"0 0 20px 10px rgba(0,0,0,.35)"});
	}
	else {
		$(".imageContentContainer img").css({"z-index":"1000", "display":"block","max-width":"100%","height":"auto"});
		$(".imageContentContainer").css({"left":"50%","transform":"translate(-50%,0%)","width":"86%","height":"auto","top":"7%","position":"absolute","box-shadow":"0 0 20px 10px rgba(0,0,0,.35)"});
	}
	$(".imageModal").css({"background-color":"rgba(1,1,1,0.6)","position":"fixed","overflow":"hidden","top":"0","width":"100%","height":"100%","z-index":"999"})
	$(".imageModalText").css({"background-color":"rgba(0,0,0,0.5)","width":"100%","bottom":"0","position":"absolute"});
	$(".imageModalText h1,p").css({"z-index":"1001","color":"white","padding":"0","margin":"0"});
}