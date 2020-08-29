		var videoArray = [
			'one.mp4',
			'two.mp4',
			'three.mp4',
			'four.mp4',
			'five.mp4',
			'six.mp4',
			'seven.mp4'
				];
		var count = Math.floor(Math.random() * videoArray.length);
		document.getElementsByTagName('source')[0].src = 'mov/' + videoArray[count];
		var video = document.getElementById('video');
		video.load();
		video.play();