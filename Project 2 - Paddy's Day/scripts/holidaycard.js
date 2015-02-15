// stuff that happens when all the elements on the page are loaded in the browser
$(document).ready(function () {

	// folder where images are located
	var imageLocation = "images/";
	
	var minsize = 10;
	var maxsize = 80;
	var flakecount;
    var maxspeed;
    var imagetype;
    
    imagetype = imageLocation + $("#flaketype option:selected").val();
          
	// jQuery event which happens when any element with as class name of btn is clicked e.g. class='.btn'  
    $(".btn").click(function () {
          		
    	// event.target.id allows us to access the id for the element that is clicked e.g. id='light'
        var snowtype = event.target.id;
        var flakecount;
        var maxspeed;
                
        // Use an if else conditional statement to set different flake count and speeds depending on the type of snow selected
        // if the snowtype selected is light
        if(snowtype == "light")
        {
            flakecount = 25;
            maxspeed = 5;
        }
        // else if the snowtype selected is medium
        else if(snowtype == "medium")
        {
            flakecount = 75;
            maxspeed = 10;
        }
        // the only other option is heavy snow
        else
        {
            flakecount = 150;
            maxspeed = 20;
        }
                
        // clear the previous snow settings  	
        $(document).snowfall('clear');
                
        // apply the new settings for flakecount and maxspeed
        // The image used is flake.png which is in the images folder. Try changing flake.png to twix.png or pikachu.png. The images pn format files and are approx 100px x 80px.
        $(document).snowfall({ image: imagetype, minSize: minsize, maxSize: maxsize, flakeCount : flakecount, minSpeed: 1, maxSpeed : maxspeed  });
        	
    });
    
    // change image for snow flakes
    $("#flaketype").change(function () {
        imagetype = imageLocation + $("#flaketype option:selected").val();
        $(document).snowfall('clear');
        $(document).snowfall({ image: imagetype, minSize: minsize, maxSize: maxsize, flakeCount : flakecount, minSpeed: 1, maxSpeed : maxspeed  });
    });

});