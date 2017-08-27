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
var i = 1;

$(document).ready(function(){
	


getNewImg(function(num){console.log("Outside function size: "+num);});
	
	
	
	function getImgSize(){
		
		return true
	}
			
	function getNewImg(callback){
		var imageObj = new Image();
		imageObj.name = imagePath+images[i];
		imageObj.onload = function(){
			var imgWidth = this.width;
			var imgHeight = this.height;
			console.log("Within onload function size: "+imgWidth);
			callback.call(imgWidth);
		};
		imageObj.src = imagePath+images[i];
		return
	}
	
});