
var randomNumber1 = Math.random() * 6 + 1
randomNumber1 = Math.floor(randomNumber1)
var image1 = document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 + ".png")

var randomNumber2 = Math.random() * 6 + 1
randomNumber2 = Math.floor(randomNumber2)
var image2 = document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 + ".png")


var header = document.querySelector("h1") ;

if(randomNumber1 > randomNumber2){
    header.innerHTML = "player 1 wins"
}else if (randomNumber1 < randomNumber2){
    header.innerHTML = "player 2 wins"
}else{
    header.innerHTML = "draw !!"
}