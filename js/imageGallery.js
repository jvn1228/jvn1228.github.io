/* imageGallery.js
Creates a mosaic-style image gallery using j-query. Amazon S3 ready.
Image thumbnails can be linked to larger images, which open in a modal
window.

Helper files: imageModal.js, s3GetImages.js

Input parameters:
-images: array of image thumbnails
-imgsFull: array of full-size image files
-bucket: Amazon S3 bucket, must be public readable
-rendered: 0 if page is first loaded, 1 when elements have been added, css changed
*/

/* Hard coded image locations for directory on server
var images = ["imgThumbnail-1.jpg","imgThumbnail-2.jpg","imgThumbnail-3.jpg","imgThumbnail-4.jpg","imgThumbnail-5.jpg","imgThumbnail-6.jpg","imgThumbnail-7.jpg","imgThumbnail-8.jpg","imgThumbnail-9.jpg","imgThumbnail-10.jpg","imgThumbnail-11.jpg","imgThumbnail-12.jpg","imgThumbnail-13.jpg","imgThumbnail-14.jpg"];
var imgsFull = ["imgFull-1.jpg","imgFull-2.jpg","imgFull-3.jpg","imgFull-4.jpg","imgFull-5.jpg","imgFull-6.jpg","imgFull-7.jpg","imgFull-8.jpg","imgFull-9.jpg","imgFull-10.jpg","imgFull-11.jpg","imgFull-12.jpg","imgFull-13.jpg","imgFull-14.jpg",]
var imagePath = "media/thumbnails/";
var fullImagePath = "media/photos/";
*/

var columns = 4;
var imagePadding = 0;
var verticalOffset = 70;
var horizontalOffset = 50;
var imageBorder = 0;
var imageWidth = 300;

//How to respond to page resize or different window widths (such as mobile device)
var onResizeChange = "columns";




var imageGrid = [];

function imageGallery(images,imgsFull,bucket, rendered){
	
	if (onResizeChange=="imgWidth"){
		imageWidth = Math.round((window.innerWidth-horizontalOffset*2-imagePadding*columns)/columns);
	}
	else{
		columns = Math.ceil(window.innerWidth/(imageWidth+imagePadding*2))-1;
	}
	
	var imagePath = "https://s3.us-east-2.amazonaws.com/" + bucket + "/";
	var fullImagePath = "https://s3.us-east-2.amazonaws.com/" + bucket + "/";
	
	var verPos = verticalOffset;

	//Images fade onto the page
	if (rendered == 0){
		setTimeout(function(){buildGallery(0,0);},100);
	}
	else{
		imageGrid.length = 0;
		buildGallery(0,1)
	}
			
	/*getNewImg(callback)
	Called by buildGallery() to find image dimensions, required to properly
	stack the images in a mosaic style. Since x.onload is asynchronous, the
	callback function is executed after the image is loaded; otherwise,
	size is reported as 0 unless the page is refreshed (cached)
	*/
	function getNewImg(callback, i, rendered){
		var imageObj = new Image();
		imageObj.name = imagePath+images[i];
		imageObj.onload = function(){
			var imgWidth = this.width;
			var imgHeight = this.height;
			console.log("Within onload function size: "+imgWidth+"x"+imgHeight);
			callback(imgWidth, imgHeight, i, rendered);
		};
		imageObj.src = imagePath+images[i];
		return
	}
	
	/* buildGallery()
	Main helper function which recursively adds styled html img elements
	to the page at calculated locations.
	*/
	function buildGallery(i, rendered){
		
		if (i < images.length) {

			
			getNewImg(function(imgWidth, imgHeight, i, rendered){
				
				//Callback function begins here, which does the page rendering 
				//work and ratio calculations
				console.log('Current index: '+i);
				console.log("Within callback function size: "+imgWidth+"x"+imgHeight);
				console.log("Actual ratio: "+(imgHeight/imgWidth));
				console.log("Rendered: "+rendered);
				console.log(imageGrid);
				
				var image=images[i];
				var imageClass=image.replace(/\.[^/.]+$/,"");
				
				if (i >= columns) {
					imageGrid[i] = imgHeight/imgWidth + imageGrid[i-columns];
					verPos = imageGrid[i-columns]*(imageWidth+imagePadding+imageBorder)+verticalOffset;
				}
				else {
					imageGrid[i] = imgHeight/imgWidth;
				}
				
				console.log('Image Offset : '+verPos+"\n\n");
				
				var horPos = ((i+columns)%columns)*(imageWidth+imagePadding+imageBorder)+horizontalOffset;
				var fullImage = "'"+fullImagePath+imgsFull[i]+"'";
				
				if (rendered == 0){
					$(".gallery").append("<div class=\""+imageClass+"\"><img src=\""+imagePath+image+"\" onload=\"$(this).fadeIn(2000);\" onclick=\"imageModal("+fullImage+","+imgWidth/imgHeight+")\"></div>");
				}
				$("."+imageClass+" img").css({"width":imageWidth,"height":"auto","border":imageBorder+"px solid black","z-index":i+100});
				$("."+imageClass).css({"display":"inline-block","padding":"5px","position":"absolute","left":horPos+"px","top":verPos+"px","cursor":"pointer"});
				
				//Recursive call, advance the image list, so only one image
				//placed at a time
				if (rendered == 0){
					return setTimeout(function(){i++; buildGallery(i, rendered);},100);
				}
				else{
					i++
					return buildGallery(i, rendered);
				}

			},i, rendered);
			
			//If i++ is placed outside the callback function,
			//We have to cache the images but on second refresh, multiple
			//images are rendered at once and out of order,
			//as the onload is completed.
			
		}
		else {
			return
		}
			
	}
}
