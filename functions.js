// moving the basket with the mouse
$(document).on("mousemove",function(e){
	basket.css("left",e.pageX)
});
//var collide =parseInt(egg.css("top",50%));
//moving the eggs from the top
function egg_down(egg) {
	egg_current_pos=parseInt(egg.css("top"));
	egg.css("top",egg_current_pos +speed);
	
	
}
    function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}

 var mySound = new sound("crack.mp3");

function checks_egg_hits_floor(egg){
	if(collision(egg, floor)){
		decrese_life();
        mySound.play();
		return true;
		  	
		  }return false;
	}

function decrese_life(egg){
      //decrese the life_span
            life--;
            life_span.text(life);

}
function Update_score(){
	score++;
	if(score % 10===0 && speed<=max_speed){
		speed++;
		level++;
		your_level.text(level);
	}
	your_score.text(score);


} 
function egg_hits_basket(egg){
	if(collision(egg, basket)){
		egg_top=parseInt(egg.css("top"));
		if(egg_top<basket_top){
		Update_score();
		return true;
	}
	}return false;
}
    
    

function set_egg_to_init(egg){
	egg.css("top",egg_init_pos);
}



