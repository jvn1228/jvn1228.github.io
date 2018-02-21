AWS.config.update({accessKeyId: 'AKIAIG7GOO2HSNZUCW4A', secretAccessKey: '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'});
AWS.config.region = "us-east-2";
var params = {
	Bucket: 'jvn1228-image-data',
	Delimiter: '/',
	EncodingType: 'url'
}
var bucket = new AWS.S3({params});

$(document).ready(function(){

	bucket.listObjects(function (err, data) {
		if (err) {
			console.log(err);
		}
		else {
			var dataLength = data.Contents.length;
			var images = [];
			for(var i = 0; i < dataLength; i++){
				images.push(data.Contents[i].Key);
			}	
			imageGallery(images, images, params.Bucket, 0);
			console.log(images);
			
			$(window).bind('resizeEnd', function() {
				imageGallery(images, images, params.Bucket, 1);
				console.log(images);
			});
		}
	})

	
	$(window).resize(function() {
        if(this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
            $(this).trigger('resizeEnd');
        }, 500);
    });
		
})