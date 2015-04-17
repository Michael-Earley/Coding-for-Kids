// stuff that happens when all the elements on the page are loaded in the browser
$(document).ready(function () {

	// audio player
	audioPlayer = $("#audioPlayer");
	audioSource= $("#audioSource");
	
	// folder where images are located
	var soundLocation = "sounds/";
    
    // initial sound
    audioSource.attr('src', soundLocation + "airplane.mp3");
    
          
    
    // change sound
    $("#soundtype").change(function () {
    	
        soundtype = soundLocation + $("#soundtype option:selected").val();
        
        audioSource.attr('src', soundtype);
        audioPlayer.load(); 
    });

});