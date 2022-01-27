var playing = false;
var score;
var trialsLeft;
var step;
var action;
var fruits = ['apple','pineapple','pomegranate',
'strawberry','watermelon','peach','pear','grapes','banana'];


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

			$("#gameOver").hide();
			$("#startreset").html("Reset Game");
			startAction();
		}
	});

  $("#fruit1").mouseover(function(){
  	score++;
  	$("scorevalue").html(score);

  	$("#slicesound")[0].play();

  	clearInterval(action);

  	$("#fruit1").hide("explode",500);

  	setTimeout(startAction,500);
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
 	 $("#trialsLeft").empty();
 	for(i = 0; i < trialsLeft; i++){
				$("#trialsLeft").append('<img src = "images/heart.jpg" class="lifeline">');
			}
 }


 function startAction(){
 	$("#fruit1").show();
 	chooseFruit();//choose a random fruit
 	$("#fruit1").css({'left' : 
 		Math.round(510*Math.random()),
 	 'top' : -50});

 	step = 1+ Math.round(5*Math.random());


 	action = setInterval(function(){
 		$("#fruit1").css('top',
 			$("fruit1").position().top + step);

 		if($("#fruit1").position().top >$("#fruitsContainer").height())
 		{
 			if(trialsLeft > 1){
 				$("#fruit1").show();
 	chooseFruit();//choose a random fruit
 	$("#fruit1").css({'left' : 
 		Math.round(510*Math.random()),
 	 'top' : -50});

 	step = 1+ Math.round(5*Math.random());

 	trialsLeft --;
 	addHearts();
 			}else{
 				//game over
 				playing = false;
 				$("#startreset").html("Start Game");
 				$("#gameOver").show();
 				$("#gameOver").html('<p>Game Over!</p><p>Your score is '+ score +'</p>'</p>');
        $("#trialsLeft").hide()
 					stopAction();

 			}

 		}
 	},10);
 }


 function chooseFruit(){
 	  $("#fruit1").attr('src','images/'+
 	  	fruits[Math.round(8*Math.random())] +'.jpg');

 }

function stopAction(){
  clearInterval(action);
  $("#fruit1").hide();

}

});