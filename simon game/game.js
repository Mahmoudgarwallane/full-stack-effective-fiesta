let buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickedPattern = []

var started = false
var level = 0
$(document).on("keypress",()=>{
    if(!started){
        nextSequence()
        started = true
        
    }else{
nextSequence()
    }

})



$(".btn").on("click",function(item){
   var  userChosenColour = $(this).attr('id')
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length-1)
})

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play()
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed")
    setTimeout(()=>{
        $("#"+currentColor).removeClass("pressed")
    },100)
}

function nextSequence(){
    var randomNumber =   Math.floor( Math.random()*4)
    var randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomChosenColor)
    level ++;
    $("h1").text("Level " + level)
}


function checkAnswer(answer){

if(gamePattern[answer] == userClickedPattern[answer]){
    console.log("success");
}else{
    $("body").addClass("game-over")
    setTimeout(()=>{
        $("body").removeClass("game-over")
        playSound("wrong")
    },200)
    $("h1").text("Game Over, Press Any Key to Restart")
    startOver()
}
if(answer+1 === gamePattern.length){
    setTimeout(()=>{
        nextSequence()
        userClickedPattern = []
    },1000)
    }
}

function startOver(){
    started = false
    gamePattern = []
    level = 0
    userClickedPattern =[]
}