var body = document.body;
var vHDiv = document.createElement("h4");
var mPageh1 = document.createElement("h1");
var mPageP = document.createElement("p");
var hScoresPage = document.createElement("div");
var hSh1 = document.createElement("h1");
var hSmain = document.createElement("main");
// var hSoL = document.createElement("ol");
var gBackBut = document.createElement("button");
var clrBut = document.createElement("button");

var sqButton = document.createElement("button");

var mPageDiv = document.createElement("div");
var tDiv = document.getElementById("timeDiv");
var secondsLeft = 0;

var rWdiv = document.createElement("h1");
var wRdiv = document.createElement("h1");

var qOneDiv = document.createElement("div");
var qOneh1 = document.createElement("h1");
var q1aBut = document.createElement("button");
var q1bBut = document.createElement("button");
var q1cBut = document.createElement("button");
var q1dBut = document.createElement("button");

var qTwoDiv = document.createElement("div");
var qTwoh1 = document.createElement("h1");
var q2aBut = document.createElement("button");
var q2bBut = document.createElement("button");
var q2cBut = document.createElement("button");
var q2dBut = document.createElement("button");

var qThreeDiv = document.createElement("div");
var qThreeh1 = document.createElement("h1");
var q3aBut = document.createElement("button");
var q3bBut = document.createElement("button");
var q3cBut = document.createElement("button");
var q3dBut = document.createElement("button");

var qFourDiv = document.createElement("div");
var qFourh1 = document.createElement("h1");
var q4aBut = document.createElement("button");
var q4bBut = document.createElement("button");
var q4cBut = document.createElement("button");
var q4dBut = document.createElement("button");

var qFiveDiv = document.createElement("div");
var qFiveh1 = document.createElement("h1");
var q5aBut = document.createElement("button");
var q5bBut = document.createElement("button");
var q5cBut = document.createElement("button");
var q5dBut = document.createElement("button");

var aDdiv = document.createElement("div");
var aDh1 = document.createElement("h1");
var aDp = document.createElement("p");
var aDtxtI = document.createElement("textarea");
var aDsubBut = document.createElement("button");









tDiv.textContent = "Time: " + secondsLeft;
mPageh1.textContent = "Coding Challenge Quiz";
mPageP.textContent = "To answer the following questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!";
vHDiv.textContent = "View Highscores";
hSh1.textContent = "Highscores";
// hSoL.textContent = "blah";
hSmain.textContent = "TS-44";
gBackBut.textContent = "Go Back";
clrBut.textContent = "Clear Highscores";
sqButton.textContent = "Start Quiz";
rWdiv.textContent = "Right!"; 
wRdiv.textContent = "Wrong!"; 

qOneh1.textContent = "Commonly used data types DO NOT include:";
q1aBut.textContent = "strings";
q1bBut.textContent = "booleans";
q1cBut.textContent = "alerts";
q1dBut.textContent = "numbers";


qTwoh1.textContent = "The condition of an if else statement is enclosed within ____.";
q2aBut.textContent = "qoutes";
q2bBut.textContent = "curly brackets";
q2cBut.textContent = "parenthasis";
q2dBut.textContent = "square brackets";

qThreeh1.textContent = "Arrays in JavaScript can be used to store ____.";
q3aBut.textContent = "numbers & strings";
q3bBut.textContent = "other arrays";
q3cBut.textContent = "booleans";
q3dBut.textContent = "all of the above";

qFourh1.textContent = "String values must be enclosed within ____ when being assigned to variables.";
q4aBut.textContent = "commas";
q4bBut.textContent = "curly brackets";
q4cBut.textContent = "qoutes";
q4dBut.textContent = "parenthasis";

qFiveh1.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
q5aBut.textContent = "JavaScript";
q5bBut.textContent = "Terminal / Bash";
q5cBut.textContent = "for loops";
q5dBut.textContent = "console.log";

aDh1.textContent = "All Done!";
aDp.textContent = "Your final score is " + secondsLeft;


hSh1.setAttribute("style", "margin-top: 20px");
hSh1.setAttribute("style", "padding-left: 45px");

vHDiv.setAttribute("style", "color: purple");
mPageh1.setAttribute("style", "text-align: center");
mPageP.setAttribute("style", "text-align: center");
// hScoresPage.setAttribute("style", "margin-top: 7%");
hScoresPage.setAttribute("style", "text-align: center");
// hSmain.setAttribute("style", "background: blue");
// hSmain.setAttribute("style", "margin: 5px");
hSmain.setAttribute("style", "color: purple");
timeDiv.setAttribute("style", "float: right");

gBackBut.setAttribute("style", "margin: 5px");
clrBut.setAttribute("style", "margin: 5px");
sqButton.setAttribute("style", "margin-left: 47%");


rWdiv.setAttribute("style", "border-top: 2px solid #e1e1e1");
wRdiv.setAttribute("style", "border-top: 2px solid #e1e1e1");


qOneDiv.setAttribute("style", "text-align: center");
q1aBut.setAttribute("style", "margin: 5px");
q1bBut.setAttribute("style", "margin: 5px");
q1cBut.setAttribute("style", "margin: 5px");
q1dBut.setAttribute("style", "margin: 5px");

qTwoDiv.setAttribute("style", "text-align: center");
q2aBut.setAttribute("style", "margin: 5px");
q2bBut.setAttribute("style", "margin: 5px");
q2cBut.setAttribute("style", "margin: 5px");
q2dBut.setAttribute("style", "margin: 5px");

qThreeDiv.setAttribute("style", "text-align: center");
q3aBut.setAttribute("style", "margin: 5px");
q3bBut.setAttribute("style", "margin: 5px");
q3cBut.setAttribute("style", "margin: 5px");
q3dBut.setAttribute("style", "margin: 5px");

qFourDiv.setAttribute("style", "text-align: center");
q4aBut.setAttribute("style", "margin: 5px");
q4bBut.setAttribute("style", "margin: 5px");
q4cBut.setAttribute("style", "margin: 5px");
q4dBut.setAttribute("style", "margin: 5px");

qFiveDiv.setAttribute("style", "text-align: center");
q5aBut.setAttribute("style", "margin: 5px");
q5bBut.setAttribute("style", "margin: 5px");
q5cBut.setAttribute("style", "margin: 5px");
q5dBut.setAttribute("style", "margin: 5px");

aDdiv.setAttribute("style", "text-align: center");
aDtxtI.setAttribute("placeholder", "Enter Initials");

vHDiv.addEventListener("click", function(){
    body.removeChild(mPageDiv);
    body.appendChild(hScoresPage);
    hScoresPage.appendChild(hSh1);
    hScoresPage.appendChild(hSmain);
    hScoresPage.appendChild(gBackBut);
    hScoresPage.appendChild(clrBut);
});

gBackBut.addEventListener("click", function(){
    body.removeChild(hScoresPage);
    body.appendChild(vHDiv);
    body.appendChild(mPageDiv);
});

clrBut.addEventListener("click", function () {
    hSmain.innerHTML = "";
});



sqButton.addEventListener("click", function () {

    var secondsLeft = 75;

    function setTime() {
        var timerInterval = setInterval(function() {
          secondsLeft--;
          tDiv.textContent = "Time: " + secondsLeft;
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            secondsLeft = 0;
          }
      
        }, 1000);
        
      }
      
      setTime();
      body.removeChild(mPageDiv);
      body.appendChild(qOneDiv);
      body.appendChild(vHDiv);
      qOneDiv.appendChild(qOneh1);
      qOneDiv.appendChild(q1aBut);
      qOneDiv.appendChild(q1bBut);
      qOneDiv.appendChild(q1cBut);
      qOneDiv.appendChild(q1dBut);

});


q1aBut.addEventListener("click", function () {
    body.removeChild(qOneDiv);
    body.appendChild(qTwoDiv);
    body.appendChild(vHDiv);
    qTwoDiv.appendChild(qTwoh1);
    qTwoDiv.appendChild(q2aBut);
    qTwoDiv.appendChild(q2bBut);
    qTwoDiv.appendChild(q2cBut);
    qTwoDiv.appendChild(q2dBut);
    qTwoDiv.appendChild(wRdiv);

}); 


q1bBut.addEventListener("click", function () {
    body.removeChild(qOneDiv);
    body.appendChild(qTwoDiv);
    body.appendChild(vHDiv);
    qTwoDiv.appendChild(qTwoh1);
    qTwoDiv.appendChild(q2aBut);
    qTwoDiv.appendChild(q2bBut);
    qTwoDiv.appendChild(q2cBut);
    qTwoDiv.appendChild(q2dBut);
    qTwoDiv.appendChild(wRdiv);
});


q1cBut.addEventListener("click", function () {
    body.removeChild(qOneDiv);
    body.appendChild(qTwoDiv);
    body.appendChild(vHDiv);
    qTwoDiv.appendChild(qTwoh1);
    qTwoDiv.appendChild(q2aBut);
    qTwoDiv.appendChild(q2bBut);
    qTwoDiv.appendChild(q2cBut);
    qTwoDiv.appendChild(q2dBut);
    qTwoDiv.appendChild(rWdiv);
});


q1dBut.addEventListener("click", function () {
    body.removeChild(qOneDiv);
    body.appendChild(qTwoDiv);
    body.appendChild(vHDiv);
    qTwoDiv.appendChild(qTwoh1);
    qTwoDiv.appendChild(q2aBut);
    qTwoDiv.appendChild(q2bBut);
    qTwoDiv.appendChild(q2cBut);
    qTwoDiv.appendChild(q2dBut);
    qTwoDiv.appendChild(wRdiv);
});




q2aBut.addEventListener("click", function () {
    body.removeChild(qTwoDiv);
    body.appendChild(qThreeDiv);
    body.appendChild(vHDiv);
    qThreeDiv.appendChild(qThreeh1);
    qThreeDiv.appendChild(q3aBut);
    qThreeDiv.appendChild(q3bBut);
    qThreeDiv.appendChild(q3cBut);
    qThreeDiv.appendChild(q3dBut);
    qThreeDiv.appendChild(wRdiv);

}); 


q2bBut.addEventListener("click", function () {
    body.removeChild(qTwoDiv);
    body.appendChild(qThreeDiv);
    body.appendChild(vHDiv);
    qThreeDiv.appendChild(qThreeh1);
    qThreeDiv.appendChild(q3aBut);
    qThreeDiv.appendChild(q3bBut);
    qThreeDiv.appendChild(q3cBut);
    qThreeDiv.appendChild(q3dBut);
    qThreeDiv.appendChild(wRdiv);
});


q2cBut.addEventListener("click", function () {
    body.removeChild(qTwoDiv);
    body.appendChild(qThreeDiv);
    body.appendChild(vHDiv);
    qThreeDiv.appendChild(qThreeh1);
    qThreeDiv.appendChild(q3aBut);
    qThreeDiv.appendChild(q3bBut);
    qThreeDiv.appendChild(q3cBut);
    qThreeDiv.appendChild(q3dBut);
    qThreeDiv.appendChild(rWdiv);
});


q2dBut.addEventListener("click", function () {
    body.removeChild(qTwoDiv);
    body.appendChild(qThreeDiv);
    body.appendChild(vHDiv);
    qThreeDiv.appendChild(qThreeh1);
    qThreeDiv.appendChild(q3aBut);
    qThreeDiv.appendChild(q3bBut);
    qThreeDiv.appendChild(q3cBut);
    qThreeDiv.appendChild(q3dBut);
    qThreeDiv.appendChild(wRdiv);
});





q3aBut.addEventListener("click", function () {
    body.removeChild(qThreeDiv);
    body.appendChild(qFourDiv);
    body.appendChild(vHDiv);
    qFourDiv.appendChild(qFourh1);
    qFourDiv.appendChild(q4aBut);
    qFourDiv.appendChild(q4bBut);
    qFourDiv.appendChild(q4cBut);
    qFourDiv.appendChild(q4dBut);
    qFourDiv.appendChild(wRdiv);
});

q3bBut.addEventListener("click", function () {
    body.removeChild(qThreeDiv);
    body.appendChild(qFourDiv);
    body.appendChild(vHDiv);
    qFourDiv.appendChild(qFourh1);
    qFourDiv.appendChild(q4aBut);
    qFourDiv.appendChild(q4bBut);
    qFourDiv.appendChild(q4cBut);
    qFourDiv.appendChild(q4dBut);
    qFourDiv.appendChild(wRdiv);
});

q3cBut.addEventListener("click", function () {
    body.removeChild(qThreeDiv);
    body.appendChild(qFourDiv);
    body.appendChild(vHDiv);
    qFourDiv.appendChild(qFourh1);
    qFourDiv.appendChild(q4aBut);
    qFourDiv.appendChild(q4bBut);
    qFourDiv.appendChild(q4cBut);
    qFourDiv.appendChild(q4dBut);
    qFourDiv.appendChild(wRdiv);
});

q3dBut.addEventListener("click", function () {
    body.removeChild(qThreeDiv);
    body.appendChild(qFourDiv);
    body.appendChild(vHDiv);
    qFourDiv.appendChild(qFourh1);
    qFourDiv.appendChild(q4aBut);
    qFourDiv.appendChild(q4bBut);
    qFourDiv.appendChild(q4cBut);
    qFourDiv.appendChild(q4dBut);
    qFourDiv.appendChild(rWdiv);
});




q4aBut.addEventListener("click", function () {
    body.removeChild(qFourDiv);
    body.appendChild(qFiveDiv);
    body.appendChild(vHDiv);
    qFiveDiv.appendChild(qFiveh1);
    qFiveDiv.appendChild(q5aBut);
    qFiveDiv.appendChild(q5bBut);
    qFiveDiv.appendChild(q5cBut);
    qFiveDiv.appendChild(q5dBut);
    qFiveDiv.appendChild(wRdiv);
});

q4bBut.addEventListener("click", function () {
    body.removeChild(qFourDiv);
    body.appendChild(qFiveDiv);
    body.appendChild(vHDiv);
    qFiveDiv.appendChild(qFiveh1);
    qFiveDiv.appendChild(q5aBut);
    qFiveDiv.appendChild(q5bBut);
    qFiveDiv.appendChild(q5cBut);
    qFiveDiv.appendChild(q5dBut);
    qFiveDiv.appendChild(wRdiv);
});

q4cBut.addEventListener("click", function () {
    body.removeChild(qFourDiv);
    body.appendChild(qFiveDiv);
    body.appendChild(vHDiv);
    qFiveDiv.appendChild(qFiveh1);
    qFiveDiv.appendChild(q5aBut);
    qFiveDiv.appendChild(q5bBut);
    qFiveDiv.appendChild(q5cBut);
    qFiveDiv.appendChild(q5dBut);
    qFiveDiv.appendChild(rWdiv);
});

q4dBut.addEventListener("click", function () {
    body.removeChild(qFourDiv);
    body.appendChild(qFiveDiv);
    body.appendChild(vHDiv);
    qFiveDiv.appendChild(qFiveh1);
    qFiveDiv.appendChild(q5aBut);
    qFiveDiv.appendChild(q5bBut);
    qFiveDiv.appendChild(q5cBut);
    qFiveDiv.appendChild(q5dBut);
    qFiveDiv.appendChild(wRdiv);
});




q5aBut.addEventListener("click", function () {
    body.removeChild(qFiveDiv);
    body.appendChild(aDdiv);
    body.appendChild(vHDiv);
    aDdiv.appendChild(aDh1);
    aDdiv.appendChild(aDp);
    aDdiv.appendChild(aDtxtI);
    aDdiv.appendChild(aDsubBut);
});

q5bBut.addEventListener("click", function () {
    body.removeChild(qFiveDiv);
    body.appendChild(aDdiv);
    body.appendChild(vHDiv);
    aDdiv.appendChild(aDh1);
    aDdiv.appendChild(aDp);
    aDdiv.appendChild(aDtxtI);
    aDdiv.appendChild(aDsubBut);
});
q5cBut.addEventListener("click", function () {
    body.removeChild(qFiveDiv);
    body.appendChild(aDdiv);
    body.appendChild(vHDiv);
    aDdiv.appendChild(aDh1);
    aDdiv.appendChild(aDp);
    aDdiv.appendChild(aDtxtI);
    aDdiv.appendChild(aDsubBut);
});
q5dBut.addEventListener("click", function () {
    body.removeChild(qFiveDiv);
    body.appendChild(aDdiv);
    body.appendChild(vHDiv);
    aDdiv.appendChild(aDh1);
    aDdiv.appendChild(aDp);
    aDdiv.appendChild(aDtxtI);
    aDdiv.appendChild(aDsubBut);
});

body.appendChild(mPageDiv);
mPageDiv.append(vHDiv);
mPageDiv.append(mPageh1);
mPageDiv.append(mPageP);
mPageDiv.append(sqButton);










