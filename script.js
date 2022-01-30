let qOrder = [];
let easyAnswersTL = ["1","2","3","4","5","6","7","8","9","10"];
let easyAnswersTR = ["1","2","3","4","5","6","7","8","9","10"];
let easyAnswersBL = ["1","2","3","4","5","6","7","8","9","10"];
let easyAnswersBR = ["1","2","3","4","5","6","7","8","9","10"];
let correctButtonsE = ["2","4","2","1","1","3","2","4","3","2"];
let easyQuestions = ["Question 1","Question 2","Question 3","Question 4","Question 5","Question 6","Question 7","Question 8","Question 9","Question 10"];
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
  $("#easyButton").click(function(){
    $(".mmButton").hide();
    $(".qbButton").show();
    $("#Question").show();
    easyGame();
  });
  $("#mediumButton").click(function(){
    $(".mmButton").hide();
    $(".qbButton").show();
    $("#Question").show();
    mediumGame();
  });
  $("#hardButton").click(function(){
    $(".mmButton").hide();
    $(".qbButton").show();
    $("#Question").show();
    hardGame();
  });
});


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
  var questionIndex = qOrder[qNumber]-1;
  if(questionIndex == -1)
  {
    questionIndex = 0;
  }
  $(".qbButton").css({"background-color":"lightgreen"});
  $("#q1b").text(easyAnswersTL[questionIndex]);
  $("#q2b").text(easyAnswersTR[questionIndex]);
  $("#q3b").text(easyAnswersBL[questionIndex]);
  $("#q4b").text(easyAnswersBR[questionIndex]);
  $("#Question").text(easyQuestions[questionIndex]);
}

function displayMediumAnswers(qNumber)
{
  var questionIndex = qOrder[qNumber]-1;
  if(questionIndex == -1)
  {
    questionIndex = 0;
  }
  $(".qbButton").css({"background-color":"lightgreen"});
  $("#q1b").text(mediumAnswersTL[questionIndex]);
  $("#q2b").text(mediumAnswersTR[questionIndex]);
  $("#q3b").text(mediumAnswersBL[questionIndex]);
  $("#q4b").text(mediumAnswersBR[questionIndex]);
  $("#Question").text(mediumQuestions[questionIndex]);
}

function displayHardAnswers(qNumber)
{
  var questionIndex = qOrder[qNumber]-1;
  if(questionIndex == -1)
  {
    questionIndex = 0;
  }
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
          gameOverButtons();
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
          gameOverButtons();
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
          gameOverButtons();
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
        gameOverButtons();
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

    $("#q1b").click(function(){
      if(checkAnswer(qOrder[questionOn], 1, "medium"))
      {
        questionOn++;
        console.log(questionOn);
        displayMediumAnswers(questionOn);
      }
      else if(questionOn == 10)
      {
          gameOverButtons();
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
          gameOverButtons();
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
          gameOverButtons();
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
        gameOverButtons();
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

    $("#q1b").click(function(){
      if(checkAnswer(qOrder[questionOn], 1, "hard"))
      {
        questionOn++;
        console.log(questionOn);
        displayHardAnswers(questionOn);
      }
      else if(questionOn == 10)
      {
          gameOverButtons();
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
          gameOverButtons();
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
          gameOverButtons();
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
        gameOverButtons();
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

function gameOverButtons(){
  $(".qbButton").hide();
  $(".returnButton").show();
  $(".returnButton").css({"background-color":"yellow"});
  $("#Question").text("Congratulations! You passed the test.")

  $("#backButton").click(function(){
    $(".returnButton").hide();
    $(".mmButton").show();
    $("#Question").hide();
    questionOn = 0;
  });
}
