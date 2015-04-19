// stuff that happens when all the elements on the page are loaded in the browser
$(document).ready(function () {

	// audio player and source
	var audioPlayer = $("#audioPlayer");
	var audioSource = $("#audioSource");
	var audioSelection = $("#audioSelection");
	
	// folder where images are located
	var folder = "sounds/";
	var sound = "";
	
	// load the current selection
	sound = folder + $("#audioSelection option:selected").val();
	audioSource.attr('src', sound);
    audioPlayer.load();
    
	
	// change the sound selection
    audioSelection.change(function () {
    
        sound = folder + $("#audioSelection option:selected").val();
        audioSource.attr('src', sound);
        audioPlayer.load(); 

    });

});