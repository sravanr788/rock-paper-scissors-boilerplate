// selecting all the elements to be used from html
let rockbtn = document.getElementById("rock");
let paperbtn = document.getElementById("paper");
let scissorsbtn = document.getElementById("scissors");

let userRock = document.getElementById("rockimg");
let userPaper = document.getElementById("paperimg");
let userScissors = document.getElementById("scissorsimg");

let ROCK = document.getElementById("rockcomp");
let PAPER = document.getElementById("papercomp");
let SCISSORS = document.getElementById("scissorscomp");

let computerScore=document.getElementById("comp-score")
let playerScore=document.getElementById("player-score")

let playAgain = document.getElementById("play-again")

const getRandomNum = () => {
  return Math.floor(Math.random() * 3);
}
//  Creating three functions for computers choice 
function rockComp() {
  ROCK.style.display = "block";
  PAPER.style.display = "none";
  SCISSORS.style.display = "none";
}

function paperComp() {
  PAPER.style.display = "block";
  ROCK.style.display = "none";
  SCISSORS.style.display = "none";
}

function scissorsComp() {
  SCISSORS.style.display = "block";
  PAPER.style.display = "none";
  ROCK.style.display = "none";
}
// Initially both scores are set to  zero
let compScore=0;
let userScore=0;
// On selecting a choice by the user his choice is displayed along with computer's amd score is evaluated based on the conditional elements 
rockbtn.onclick = () => {
  let randomNum = getRandomNum();
  [rockComp, paperComp, scissorsComp][randomNum]();
  userRock.style.display = 'block';
  userPaper.style.display = 'none';
  userScissors.style.display = 'none';
 

  if(randomNum==1){
     compScore++;
     computerScore.textContent=compScore;
  }
  else if(randomNum==2){
    userScore++;
    playerScore.textContent=userScore;
  }
  winStatus()
};

paperbtn.onclick = () => {
  let randomNum = getRandomNum();
  [rockComp, paperComp, scissorsComp][randomNum]();
  userPaper.style.display = 'block';
  userRock.style.display = 'none';
  userScissors.style.display = 'none';

  if(randomNum==2){
    compScore++;
    computerScore.textContent=compScore;

 }
 else if(randomNum==0){
   userScore++;
   playerScore.textContent=userScore;

 }
 winStatus()

};

scissorsbtn.onclick = () => {
  let randomNum = getRandomNum();
  [rockComp, paperComp, scissorsComp][randomNum]();
  userScissors.style.display = 'block';
  userRock.style.display = 'none';
  userPaper.style.display = 'none';

  if(randomNum==0){
    compScore++;
    computerScore.textContent=compScore;

 }
 else if(randomNum==1){
   userScore++;   
   playerScore.textContent=userScore;


 }
 winStatus()

};
// Creating a function to  check who won the game and calling it everytime user plays a round 
function winStatus(){
let gameStatus=document.getElementById("gamestatus")
if(userScore==5){
  gameStatus.textContent="Player won the game"
  playAgain.style.display = "block";
  hideButtons()
}
else if(compScore==5){
  gameStatus.textContent="Computer won the game"
  playAgain.style.display = "block";
  hideButtons()
}
}
// After playing redirecting him to the game page to play again 
playAgain.onclick = () => {
  window.location.href = "./game.html"
}

//AFTER scoring 5 points on either side hiding the buttons 
function hideButtons(){
  rockbtn.style.display = "none";
  paperbtn.style.display = 'none';
  scissorsbtn.style.display = 'none';
}







