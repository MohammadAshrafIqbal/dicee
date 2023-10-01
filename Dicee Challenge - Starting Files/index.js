var randomNumber = Math.floor(Math.random() * 6) + 1; // 1-6
var randomdiceeimage = "dice" + randomNumber + ".png";
var randomimagessrc = "./images/" + randomdiceeimage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagessrc);

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomdiceeimage1 = "dice" + randomNumber1 + ".png";
var randomimagessrc1 = "./images/" + randomdiceeimage1;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagessrc1);

//Heading


if (randomNumber > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 1 Won.";
}
else if (randomNumber1 > randomNumber) {
    document.querySelector("h1").innerHTML = "Player 2 Won.";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}