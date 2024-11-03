    function mute(btn,elem){
    var video = document.getElementById(elem);
	var unmuteIcon = '<i class="fas fa-volume-up" style="color: #ffffff;"></i>'
	var muteIcon = '<i class="fas fa-volume-mute" style="color: #ffffff;"></i>'
    if (video.muted){
      video.muted = false;
      btn.innerHTML = unmuteIcon;
    } else{
      video.muted = true;
      btn.innerHTML = muteIcon;
    }
  }