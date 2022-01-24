var playing = false;
var score;
var trialsLeft;
var fruits = ['mango','pineappl','pomegranate',
'strawberry','watermelon'];


$(function(){
	$("#startreset").click(function(){
		if(playing==true){
			location.reload();
		}else{
			playing = true;
			score = 0;
			$("#scorevalue").html(score);

			$("#trialsLeft").show();
			trialsLeft = 3;
			addHearts();
			$("#startreset").html("Reset Game");
       startAction();
		}


	});
});



//click on start reset button
//are we playing
   //yes
     //reload page
   //no
      //show trials left
//change button text to "reset game"
//1.create a randon fruit
//define a random step
//2.move fruit down one step every 30 sec
  //is fruit too low?
  //no->repeat nb2
    //yes-> any trials left?
    //yes:repeat nb1
 //no:show game over,button text:start game

 //slice a fruit
 //play sound
 //explode fruit

 function addHearts(){
 	for(i = 0; i < trialsLeft; i++){
				$("#trialsLeft").append('<img src = "images/heart.jpg" class="lifeline">');
			}
 }


 function startAction(){
 	$("#fruit1").show();
 	chooseFruit();
 }


 function chooseFruit(){
 	  $("#fruit1").attr('src','images/'+
 	  	fruits[1] +'.jpg');

 }