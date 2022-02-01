let qOrder = [];
let easyAnswersTL = ["change","1","Banach-Tarski","Animal and Plant","Without","NonPolar Covalent","Really strong","Heat Capacity","Basicness","Their shape is unstable"];
let easyAnswersTR = ["life","2","Miller-Urey","Water and Carbon based","With","Hydrogen","Hydrogen","Capillary Action","The amount of water","Diffusion would take too long"];
let easyAnswersBL = ["animals","3","Walter-Jesse","Big and Small","Within","Polar Covelent","Carbon","Surface Tension","Acidity","They can't move on their own"];
let easyAnswersBR = ["water","4","Riechman-Weltzer","Underhanded and Overhanded","Withstand","one-sided","Dioxyribonucelicacid","Lizmotis","Potency","They would need too much water"];
let correctButtonsE = ["2","4","2","1","1","3","2","4","3","2"];
let easyQuestions = ["Biology is the study of","How many nucleobases are there?","What experiment showed that amino acids can come from nothing?","What are the two basic types of cells?","'A' is the latin root for","The bonds INSIDE of water are what?","The bonds BETWEEN water molecules are what?","Which is not a property of water?","What is PH a measure of?","Why are cells small?"];
let mediumAnswersTL = ["Calcium Ions","Cohesion","Nutrients out, Waste in","Nucleus","Volume","Useless","Yes","Cell Wall","100 thousand","1 meter"];
let mediumAnswersTR = ["Helium Ions","Adhesion","Hydrogen in, Nitrogen out","Chromosome","Roundness","Used to store waste","Only with protons","They have a cell membrane","1 trillion","6 milimeters"];
let mediumAnswersBL = ["Sodium Ions","Waterhesion","Nutrients in, Waste out","Cytoplasm","Surface Area","Regulates DNA","No","Cell Coating","500 billion","1 centimeter"];
let mediumAnswersBR = ["Hydrogen Ions","Selfhesion","Hydrogen out, Nitrogen in","Membrane","Squareness","The powerhouse of the cell","Only with electrons","Cell Shell","5 million","30 centimeters"];
let correctButtonsM = ["4","2","3","1","3","4","1","1","2","4"];
let mediumQuestions = ["Acidity is the concentration of","Water sticking to iteself is called","Cell walls allow","The center of a cell is the","Cells want to maximise","The mitochondia is","Is water a good solvent?","Plant cells have what instead of a cell membrane","About how many cells does a human have","How big is the largest single celled organism"];
let hardAnswersTL = ["acid","Heat Tension","RNA","1","Mylons","Water","Ribosomes","Vixils","Carbon","Electricty"];
let hardAnswersTR = ["base","Heat Levels","BNA","2","Intestinal Cells","Oxygen","Dioxyribonucelicacid","Ventricles","Nitrogen","Heat"];
let hardAnswersBL = ["salty","High Osmosis","MMA","4","Neurons","Nitrogen","Bismuth","Villi","Oxygen","Water"];
let hardAnswersBR = ["sweet","Heat Capacity","TBA","6","Electrons","Carbon","Enzymes","Venzymes","Hydrogen","Hydroelectric"];
let correctButtonsH = ["2","4","1","1","3","2","4","3","1","2"];
let hardQuestions = ["A high pH means something is a(n)","Water being able to absorb large amounts of heat is called","What is the single strand version of DNA","How many Oxygens does water have","The longest cells are","Dissolving CaCN in an acid releases","What breaks down proteins","What are the folds on cell membranes called","What is all life based on","What is a form of energy used in chemical reactions"];
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
          gameOverButtons("easy","gameOver");
      }
    else {
      $("#q1b").css({"background-color":"red"});
      wrongShake("#q1b", 2);
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
          gameOverButtons("easy","gameOver");
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
          gameOverButtons("easy","gameOver");
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
        gameOverButtons("easy","gameOver");
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
  $("#timer").show();
  countdown(60, "medium");

    $("#q1b").click(function(){
      if(checkAnswer(qOrder[questionOn], 1, "medium"))
      {
        questionOn++;
        console.log(questionOn);
        displayMediumAnswers(questionOn);
      }
      else if(questionOn == 10)
      {
          gameOverButtons("medium","gameOver");
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
          gameOverButtons("medium","gameOver");
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
          gameOverButtons("medium","gameOver");
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
        gameOverButtons("medium","gameOver");
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
  $("#timer").show();
  countdown(20, "hard");

    $("#q1b").click(function(){
      if(checkAnswer(qOrder[questionOn], 1, "hard"))
      {
        questionOn++;
        console.log(questionOn);
        displayHardAnswers(questionOn);
      }
      else if(questionOn == 10)
      {
          gameOverButtons("hard","gameOver");
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
          gameOverButtons("hard","gameOver");
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
          gameOverButtons("hard","gameOver");
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
        gameOverButtons("hard","gameOver");
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

function gameOverButtons(mode, reason){
  $(".qbButton").hide();
  $(".returnButton").show();
  $(".returnButton").css({"background-color":"yellow"});
  if(reason == "time")
    $("#Question").text("You ran out of time!");

  if(reason == "gameOver")
    $("#Question").text("You passed the test!");

  $("#replayButton").click(function(){
    questionOn = 0;
    $(".qbButton").show();
    $(".returnButton").hide();
    if(difficulty == easy)
      easyGame();
    if(difficulty == medium)
      easyGame();
    if(difficulty == hard)
      easyGame();
  });
}


function countdown(time, difficulty){
  $("#timer").text(time);
  var timer = setInterval(function(){
    time--;
    if(time == 0){
      gameOverButtons(difficulty, "time");
      clearInterval(timer);
    }
    if(questionOn == 10)
      clearInterval(timer);
    $("#timer").text(time);
  },1000);
}
});

function wrongShake(btnName, numShakes){
  for(let i = 0; i<numShakes; i++)
  {
    $(btnName).animate({left : "5px"}, fast);
    $(btnName).animate({right : "10px"}, fast);
    $(btnName).animate({left : "10px"}, fast);
    $(btnName).animate({right : "5px"}, fast);
  }
}
