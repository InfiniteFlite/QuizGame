let qOrder = [];
let easyAnswersTL = ["1","2","3","4","5","6","7","8","9","10"];
let easyAnswersTR = ["1","2","3","4","5","6","7","8","9","10"];
let easyAnswersBL = ["1","2","3","4","5","6","7","8","9","10"];
let easyAnswersBR = ["1","2","3","4","5","6","7","8","9","10"];
let correctButtons = ["2","4","2","1","1","3","2","4","3","2"];
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
  });
  $("#hardButton").click(function(){
    $(".mmButton").hide();
    $(".qbButton").show();
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
  $(".qbButton").css({"background-color":"lightgreen"});
  $("#q1b").text(easyAnswersTL[questionIndex]);
  $("#q2b").text(easyAnswersTR[questionIndex]);
  $("#q3b").text(easyAnswersBL[questionIndex]);
  $("#q4b").text(easyAnswersBR[questionIndex]);
}

function easyGame()
{
  getQuestionOrder(10);
  displayEasyAnswers(questionOn);
    $("#q1b").click(function(){
      if(checkAnswer(qOrder[questionOn], 1))
      {
        questionOn++;
        console.log("correct");
        displayEasyAnswers(questionOn);
      }
    else {
      $("#q1b").css({"background-color":"red"});
    }
    });
    $("#q2b").click(function(){
      if(checkAnswer(qOrder[questionOn], 2))
      {
        questionOn++;
        console.log("correct");
        displayEasyAnswers(questionOn);
      }
    else {
      $("#q2b").css({"background-color":"red"});
    }
    });
    $("#q3b").click(function(){
      if(checkAnswer(qOrder[questionOn], 3))
      {
        questionOn++;
        console.log("correct");
        displayEasyAnswers(questionOn);
      }
    else {
      $("#q3b").css({"background-color":"red"});
    }
    });
    $("#q4b").click(function(){
      if(checkAnswer(qOrder[questionOn], 4))
      {
        questionOn++;
        console.log("correct");
        displayEasyAnswers(questionOn);
      }
    else {
      $("#q4b").css({"background-color":"red"});
    }
    });
    if(questionOn == 9)
    {
        $(".qbButton").css({"background-color":"white"});
    }
}


function checkAnswer(qIndex, bIndex)
{
  if(correctButtons[qIndex] == bIndex)
  {
    return true;
  }
  else
  {
    return false;
  }
}
