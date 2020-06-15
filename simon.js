

//Pattern produce by game
var gamepattern = [];

//pattern made by user
var userClickpattern = [];

var buttonColors = ["green","red","yellow","blue"];
var level = 0;
var started = false;

//to detect that a key is pressed
$(document).keypress(function(){
  if(started === false){
    nextSequence();
    started = true;
    $(".hide").css("visibility","hidden");
  }
  else{
    location.reload(true);
  }
});

$("#btn-click").click(function(){
  if(started === false){
    nextSequence();
    started = true;
    $(".hide").css("visibility","hidden");
  }
  else{
    location.reload(true);
  }
});

//detecting the new nextSequence
function nextSequence(){
  var randomnumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomnumber];

  gamepattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  level++;
  $("#level-title").text("Level " + level);
  userClickpattern = [];
}

//detecting which btn is clicked
$(".btn").click(function(){
  var userChosencolor = $(this).attr('id');
  userClickpattern.push(userChosencolor);
  playSound(userChosencolor);
  animatePress(userChosencolor);
  checkpattern(userClickpattern.length-1);
});

// function wrong button is clicked
function wrongpattern(){
  $("#body").addClass("game-over");
  setTimeout(function(){
    $("#body").removeClass("game-over");
  },200);
  var wrongsound = new Audio("sounds/wrong.mp3");
  wrongsound.play();
  $("h1").text("Game-over, Press any key to restart.");
  $(".hide").text("Restart");
  $(".hide").css("visibility","visible");
}

//function to play the sound
function playSound(name){
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

//function to animate the press
function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// function to check the pattern
function checkpattern(currentlevel){
  if(userClickpattern[currentlevel] === gamepattern[currentlevel])
  {
    if(userClickpattern.length === gamepattern.length)
    {
      setTimeout(function(){
        nextSequence();
      },1500);
    }
  }
  else
  {
    wrongpattern();
  }
}

$("#twitter").click(function(){
  window.open("https://twitter.com/paras_2199");
});

$("#facebook").click(function(){
  window.open("https://www.facebook.com/paras.patel.2199");
});

$("#instagram").click(function(){
  window.open("https://www.instagram.com/_._bunny_patel_._/?hl=en");
});

$("#mail").click(function(){
  window.open("mailto:parasmarsoniya123@gmail.com");
});
