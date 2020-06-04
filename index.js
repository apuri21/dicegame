
// var randomNumber1 = Math.random(randomNumber1);
// randomNumber1 = randomNumber1 * 6;
// randomNumber1 = Math.floor(randomNumber1) + 1;

var images = ["/Users/avishpuri/Desktop/Development Learning /Dicee Challenge - Starting Files/images/dice1.png" , "/Users/avishpuri/Desktop/Development Learning /Dicee Challenge - Starting Files/images/dice2.png"
, "/Users/avishpuri/Desktop/Development Learning /Dicee Challenge - Starting Files/images/dice3.png" , "/Users/avishpuri/Desktop/Development Learning /Dicee Challenge - Starting Files/images/dice4.png" ,
"/Users/avishpuri/Desktop/Development Learning /Dicee Challenge - Starting Files/images/dice5.png" , "/Users/avishpuri/Desktop/Development Learning /Dicee Challenge - Starting Files/images/dice6.png"]

// var numberOfImages = images.length; = To Get the length of in the array i.e number of images = 6
//   var randomImagePosition = Math.floor(Math.random()*numberOfImages); = multiplying 6 with random number and to not get decimal rounding off
//   var randomImage = images[randomImagePosition]; storing the value in array


//Dice 1
  var numberOfImages = images.length;
  var randomImagePosition = Math.floor(Math.random()*numberOfImages);
  var randomImage = images[randomImagePosition];

  // var imageUrl = document.querySelectorAll("img")[0]; = using query selecting element is img and 0 means img1
  // imageUrl.setAttribute("src", randomImage); = setting the value of attribute src to random image

var imageUrl = document.querySelectorAll("img")[0];
imageUrl.setAttribute("src", randomImage);

//Dice 2

var numberOfImages = images.length;
var randomImagePosition = Math.floor(Math.random()*numberOfImages);
var randomImage1 = images[randomImagePosition];

var imageUrl = document.querySelectorAll("img")[1];
imageUrl.setAttribute("src", randomImage1);

//If else conditions 

if (randomImage > randomImage1) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
 else if (randomImage < randomImage1) {
   document.querySelector("h1").innerHTML = "Player 2 Wins!  🚩";
 }
 else if (randomImage === randomImage1) {
  document.querySelector("h1").innerHTML = "Match Tied";

 }
