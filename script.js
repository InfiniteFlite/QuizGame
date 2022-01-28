$(document).ready(function(){
  $("#easyButton").click(function(){
    displayEasyAnswers(0);
    $(".mmButton").hide();
    $(".qbButton").show();
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

  var questionOn = 0;
  let qOrder = [];
  let easyAnswersTL = ["1","2","3","4","5","6","7","8","9","10"];
  let easyAnswersTR = ["1","2","3","4","5","6","7","8","9","10"];
  let easyAnswersBL = ["1","2","3","4","5","6","7","8","9","10"];
  let easyAnswersBR = ["1","2","3","4","5","6","7","8","9","10"];
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
  getQuestionOrder(10);
  var questionIndex = qOrder[qNumber];
  $("#q1b").text(easyAnswersTL[questionIndex]);
  $("#q2b").text(easyAnswersTR[questionIndex]);
  $("#q3b").text(easyAnswersBL[questionIndex]);
  $("#q4b").text(easyAnswersBR[questionIndex]);
}
