// stuff that happens when all the elements on the page are loaded in the browser
$(document).ready(function () {

	// audio player and source
	var audioPlayer = $("#audioPlayer");
	var audioSource = $("#audioSource");
	
	// folder where images are located
	var folder = "sounds/";
	var audioSelection = "";
	
	// load the current selection
	audioSelection = folder + $("#audioSelection option:selected").val();
	audioSource.attr('src', audioSelection);
    audioPlayer.load();
    
	
	// change the sound selection
    $("#audioSelection").change(function () {
    
        audioSelection = folder + $("#audioSelection option:selected").val();
        audioSource.attr('src', audioSelection);
        audioPlayer.load(); 
        
    });

});