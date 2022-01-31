let qOrder = [];
let easyAnswersTL = ["change","1","Banach-Tarski","Animal and Plant","Without","NonPolar Covalent","Really strong","Heat Capacity","Basicness","Their shape is unstable"];
let easyAnswersTR = ["life","2","Miller-Urey","Water and Carbon based","With","Hydrogen","Hydrogen","Capillary Action","The amount of water","Diffusion would take too long"];
let easyAnswersBL = ["animals","3","Walter-Jesse","Big and Small","Within","Polar Covelent","Carbon","Surface Tension","Acidity","They can't move on their own"];
let easyAnswersBR = ["water","4","Riechman-Weltzer","Underhanded and Overhanded","Withstand","one-sided","Dioxyribonucelicacid","Lizmotis","Potency","They would need too much water"];
let correctButtonsE = ["2","4","2","1","1","3","2","4","3","2"];
let easyQuestions = ["Biology is the study of","How many nucleobases are there?","What experiment showed that amino acids can come from nothing?","What are the two basic types of cells?","'A' is the latin root for","The bonds INSIDE of water are what?","The bonds BETWEEN water molecules are what?","Which is not a property of water?","What is PH a measure of?","Why are cells small?"];
let mediumAnswersTL = ["1","2","3","4","5","6","7","8","9","10"];
let mediumAnswersTR = ["1","2","3","4","5","6","7","8","9","10"];
let mediumAnswersBL = ["1","2","3","4","5","6","7","8","9","10"];
let mediumAnswersBR = ["1","2","3","4","5","6","7","8","9","10"];
let correctButtonsM = ["4","2","3","1","3","4","1","1","2","4"];
let mediumQuestions = ["Question 1","Question 2","Question 3","Question 4","Question 5","Question 6","Question 7","Question 8","Question 9","Question 10"];
let hardAnswersTL = ["1","2","3","4","5","6","7","8","9","10"];
let hardAnswersTR = ["1","2","3","4","5","6","7","8","9","10"];
let hardAnswersBL = ["1","2","3","4","5","6","7","8","9","10"];
let hardAnswersBR = ["1","2","3","4","5","6","7","8","9","10"];
let correctButtonsH = ["2","4","1","1","3","2","4","3","1","2"];
let hardQuestions = ["Question 1","Question 2","Question 3","Question 4","Question 5","Question 6","Question 7","Question 8","Question 9","Question 10"];
var gameOver = false;
var questionOn = 0;

$(document).ready(function(){
  $('#easyButton').click(easyGame);
  $("#mediumButton").click(mediumGame);
  $("#hardButton").click(hardGame);

function getQuestionOrder(numQuetions)
{

  for(let i=0;i<numQuetions;i++)
  {
    currentNum = Math.round(Math.random() * (numQuetions - 1));
    while(qOrder.indexOf(currentNum) != -1)
    {
      currentNum = Math.round(Math.random() * (numQuetions - 1));
    }
    qOrder.push(currentNum);
  }
  console.log(qOrder);
}

function displayEasyAnswers(qNumber)
{
  var questionIndex = qOrder[qNumber];
  $(".qbButton").css({"background-color":"lightgreen"});
  $("#q1b").text(easyAnswersTL[questionIndex]);
  $("#q2b").text(easyAnswersTR[questionIndex]);
  $("#q3b").text(easyAnswersBL[questionIndex]);
  $("#q4b").text(easyAnswersBR[questionIndex]);
  $("#Question").text(easyQuestions[questionIndex]);
}

function displayMediumAnswers(qNumber)
{
  var questionIndex = qOrder[qNumber];
  $(".qbButton").css({"background-color":"lightgreen"});
  $("#q1b").text(mediumAnswersTL[questionIndex]);
  $("#q2b").text(mediumAnswersTR[questionIndex]);
  $("#q3b").text(mediumAnswersBL[questionIndex]);
  $("#q4b").text(mediumAnswersBR[questionIndex]);
  $("#Question").text(mediumQuestions[questionIndex]);
}

function displayHardAnswers(qNumber)
{
  var questionIndex = qOrder[qNumber];
  $(".qbButton").css({"background-color":"lightgreen"});
  $("#q1b").text(hardAnswersTL[questionIndex]);
  $("#q2b").text(hardAnswersTR[questionIndex]);
  $("#q3b").text(hardAnswersBL[questionIndex]);
  $("#q4b").text(hardAnswersBR[questionIndex]);
  $("#Question").text(hardQuestions[questionIndex]);
}

function easyGame()
{
  getQuestionOrder(10);
  questionOn = 0;
  $(".mmButton").hide();
  $(".qbButton").show();
  $("#Question").show();
  displayEasyAnswers(questionOn);

    $("#q1b").click(function(){
      if(checkAnswer(qOrder[questionOn], 1, "easy"))
      {
        questionOn++;
        console.log(questionOn);
        displayEasyAnswers(questionOn);
      }
      else if(questionOn == 10)
      {
          gameOverButtons("easy");
      }
    else {
      $("#q1b").css({"background-color":"red"});
    }
    });
    $("#q2b").click(function(){
      if(checkAnswer(qOrder[questionOn], 2, "easy"))
      {
        questionOn++;
        console.log(questionOn);
        displayEasyAnswers(questionOn);
      }
      else if(questionOn == 10)
      {
          gameOverButtons("easy");
      }
    else {
      $("#q2b").css({"background-color":"red"});
    }
    });
    $("#q3b").click(function(){
      if(checkAnswer(qOrder[questionOn], 3, "easy"))
      {
        questionOn++;
        console.log(questionOn);
        displayEasyAnswers(questionOn);
      }
      else if(questionOn == 10)
      {
          gameOverButtons("easy");
      }
    else {
      $("#q3b").css({"background-color":"red"});
    }
    });
    $("#q4b").click(function(){
      if(checkAnswer(qOrder[questionOn], 4, "easy"))
      {
        questionOn++;
        console.log(questionOn);
        displayEasyAnswers(questionOn);
      }
      else if(questionOn == 10)
      {
        gameOverButtons("easy");
      }
    else {
      $("#q4b").css({"background-color":"red"});
    }
    });
}

function mediumGame()
{
  getQuestionOrder(10);
  questionOn = 0;
  displayMediumAnswers(questionOn);
  $(".mmButton").hide();
  $(".qbButton").show();
  $("#Question").show();

    $("#q1b").click(function(){
      if(checkAnswer(qOrder[questionOn], 1, "medium"))
      {
        questionOn++;
        console.log(questionOn);
        displayMediumAnswers(questionOn);
      }
      else if(questionOn == 10)
      {
          gameOverButtons("medium");
      }
    else {
      $("#q1b").css({"background-color":"red"});
    }
    });
    $("#q2b").click(function(){
      if(checkAnswer(qOrder[questionOn], 2, "medium"))
      {
        questionOn++;
        console.log(questionOn);
        displayMediumAnswers(questionOn);
      }
      else if(questionOn == 10)
      {
          gameOverButtons("medium");
      }
    else {
      $("#q2b").css({"background-color":"red"});
    }
    });
    $("#q3b").click(function(){
      if(checkAnswer(qOrder[questionOn], 3, "medium"))
      {
        questionOn++;
        console.log(questionOn);
        displayMediumAnswers(questionOn);
      }
      else if(questionOn == 10)
      {
          gameOverButtons("medium");
      }
    else {
      $("#q3b").css({"background-color":"red"});
    }
    });
    $("#q4b").click(function(){
      if(checkAnswer(qOrder[questionOn], 4, "medium"))
      {
        questionOn++;
        console.log(questionOn);
        displayMediumAnswers(questionOn);
      }
      else if(questionOn == 10)
      {
        gameOverButtons("medium");
      }
    else {
      $("#q4b").css({"background-color":"red"});
    }
    });
}

function hardGame()
{
  getQuestionOrder(10);
  questionOn = 0;
  displayHardAnswers(questionOn);
  $(".mmButton").hide();
  $(".qbButton").show();
  $("#Question").show();

    $("#q1b").click(function(){
      if(checkAnswer(qOrder[questionOn], 1, "hard"))
      {
        questionOn++;
        console.log(questionOn);
        displayHardAnswers(questionOn);
      }
      else if(questionOn == 10)
      {
          gameOverButtons("hard");
      }
    else {
      $("#q1b").css({"background-color":"red"});
    }
    });
    $("#q2b").click(function(){
      if(checkAnswer(qOrder[questionOn], 2, "hard"))
      {
        questionOn++;
        console.log(questionOn);
        displayHardAnswers(questionOn);
      }
      else if(questionOn == 10)
      {
          gameOverButtons("hard");
      }
    else {
      $("#q2b").css({"background-color":"red"});
    }
    });
    $("#q3b").click(function(){
      if(checkAnswer(qOrder[questionOn], 3, "hard"))
      {
        questionOn++;
        console.log(questionOn);
        displayHardAnswers(questionOn);
      }
      else if(questionOn == 10)
      {
          gameOverButtons("hard");
      }
    else {
      $("#q3b").css({"background-color":"red"});
    }
    });
    $("#q4b").click(function(){
      if(checkAnswer(qOrder[questionOn], 4, "hard"))
      {
        questionOn++;
        console.log(questionOn);
        displayHardAnswers(questionOn);
      }
      else if(questionOn == 10)
      {
        gameOverButtons("hard");
      }
    else {
      $("#q4b").css({"background-color":"red"});
    }
    });
}

function checkAnswer(qIndex, bIndex, difficulty)
{
  if(difficulty == "easy"){
  if(correctButtonsE[qIndex] == bIndex)
  {
    return true;
  }
  else
  {
    return false;
  }
}
  if(difficulty == "medium"){
    if(correctButtonsM[qIndex] == bIndex)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  if(difficulty == "hard"){
    if(correctButtonsH[qIndex] == bIndex)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}

function gameOverButtons(mode){
  $(".qbButton").hide();
  $(".returnButton").show();
  $(".returnButton").css({"background-color":"yellow"});
  $("#Question").text("Congratulations! You passed the test.")

  $("#replayButton").click(function(){
    questionOn = 0;
    $(".qbButton").show();
    $(".returnButton").hide();
    if(difficulty == easy)easyGame();
    if(difficulty == medium)easyGame();
    if(difficulty == hard)easyGame();
  });
}
});
