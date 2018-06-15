var botScore=0;
var playerScore=0;
var botsWeapon=0;
var playersWeapon=0;

//Event listener for Rock
document.getElementById("rock").onclick=function () {
	botsWeapon="rock";
	getRandomWeapon();
	checkWhoWon(botsWeapon, "rock");
};
//Event listener for Scissors
document.getElementById("scissors").onclick=function () {
	botsWeapon="scissors";
	getRandomWeapon();
	checkWhoWon(botsWeapon, "scissors")
};
//Event listener for Paper
document.getElementById("paper").onclick=function () {
	botsWeapon="paper";
	getRandomWeapon();
	checkWhoWon(botsWeapon, "paper")
};


//set random generator for computer
function getRandomWeapon(){
	var randomNumber=Math.random();

	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	else {
		botsWeapon="rock"
	}
	return botsWeapon;
}

//display the results
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
//display the score change
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("you won!");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
