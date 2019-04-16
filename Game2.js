$(function () {
	
    var i=1;
	Game=function(){

		              //**********************FOR EGG1*************//
		             
                      if(i===1)
              	setTimeout(function(){
           if(life>0){ egg_down(egg1);}
		if(checks_egg_hits_floor(egg1)){//   when the eggs hits the floor
            set_egg_to_init(egg1);
          $("#brokenEgg1").show();
             setTimeout(function(){
          $("#brokenEgg1").hide();
          },500);
           }

          if (egg_hits_basket(egg1)) {
            	set_egg_to_init(egg1);
                 }
        },400);
              //**********************FOR EGG2*************//
             
           if(life>0){ egg_down(egg2);}
		if(checks_egg_hits_floor(egg2)){//   when the eggs hits the floor
            set_egg_to_init(egg2);
          $("#brokenEgg2").show();
        //  backSound.play();
             setTimeout(function(){
          $("#brokenEgg2").hide();
          },500);
           }

          if (egg_hits_basket(egg2)) {
            	set_egg_to_init(egg2);
                 } 
            
         //**********************FOR EGG3*************//
          if(i===1)
              	setTimeout(function(){
           if(life>0){ egg_down(egg3);}
		if(checks_egg_hits_floor(egg3)){//   when the eggs hits the floor
            set_egg_to_init(egg3);
          $("#brokenEgg3").show();
             setTimeout(function(){
          $("#brokenEgg3").hide();
          },500);
           }

          if (egg_hits_basket(egg3)) {
            	set_egg_to_init(egg3);
                 }   
               
          },800);
                if(life>0){
                frames=requestAnimationFrame(Game);
            }
		    else{                              //ending the game if life =0
		      	cancelAnimationFrame(frames);
		      	$("#restart").fadeIn(100);
		      }
		
	        $("#restart").click(function(){
	        	 location.reload();              
              
      	        });
		
		
		

	};

	frames=requestAnimationFrame(Game);
});