var images = ["imgThumbnail-1.jpg","imgThumbnail-2.jpg","imgThumbnail-3.jpg","imgThumbnail-4.jpg","imgThumbnail-5.jpg","imgThumbnail-6.jpg","imgThumbnail-7.jpg","imgThumbnail-8.jpg","imgThumbnail-9.jpg","imgThumbnail-10.jpg","imgThumbnail-11.jpg","imgThumbnail-12.jpg","imgThumbnail-13.jpg","imgThumbnail-14.jpg"];
var imgsFull = ["imgFull-1.jpg","imgFull-2.jpg","imgFull-3.jpg","imgFull-4.jpg","imgFull-5.jpg","imgFull-6.jpg","imgFull-7.jpg","imgFull-8.jpg","imgFull-9.jpg","imgFull-10.jpg","imgFull-11.jpg","imgFull-12.jpg","imgFull-13.jpg","imgFull-14.jpg",]
var imagePath = "media/thumbnails/";
var fullImagePath = "media/photos/";
var columns = 4;
var imageGrid = [];
var imageWidth = 500;
var imagePadding = 2;
var verticalOffset = 70;
var horizontalOffset = 50;
var imageBorder = 2;
var verPos = verticalOffset;
var i = 0;
var imgWidth;
var imgHeight;

$(document).ready(function(){
	


	
	setTimeout(function(){buildGallery();},100);
	
	
	
	function getImgSize(){
		imgWidth = this.width;
		imgHeight = this.height;
		
		return true
	}
			
	function getNewImg(){
		var imageObj = new Image();
		imageObj.name = imagePath+images[i];
		imageObj.onload = getImgSize;
		imageObj.src = imagePath+images[i];
	}
	
	function buildGallery(){
		if (i < images.length) {	
			
			getNewImg();
			
			
					var image=images[i];
		var imageClass=image.replace(/\.[^/.]+$/,"");
		
		if (i >= columns) {
			imageGrid[i] = imgHeight/imgWidth + imageGrid[i-columns];
			verPos = imageGrid[i-columns]*(imageWidth+imagePadding)+verticalOffset;
		}
		else {
			imageGrid[i] = imgHeight/imgWidth;
		}
		var horPos = ((i+columns)%columns)*(imageWidth+imagePadding)+horizontalOffset;
		var fullImage = "'"+fullImagePath+imgsFull[i]+"'";

		$(".gallery").append("<div class=\""+imageClass+"\"><img src=\""+imagePath+image+"\" onload=\"$(this).fadeIn(2000);\" onclick=\"imageModal("+fullImage+")\"></div>");
		$("."+imageClass+" img").css({"width":imageWidth,"height":"auto","border":imageBorder+"px solid black","z-index":i+100});
		$("."+imageClass).css({"display":"inline-block","padding":"5px","position":"absolute","left":horPos+"px","top":verPos+"px"});
			

			
			i++;
			return setTimeout(function(){buildGallery();},100);
		}
		else {
			return
		}
			
	}
});