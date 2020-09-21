var vid1 = './test.mp4';
var vid2 = './test.mp4';
var vid3 = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/24715/movie3.mp4';

$('.thumb-1').on('click', function(){
	console.log('hola');
	$('video').attr('src', vid1);
});

$('.thumb-2').on('click', function(){
	$('video').attr('src', vid2);
});

$('.thumb-3').on('click', function(){
	$('video').attr('src', vid3);
});

