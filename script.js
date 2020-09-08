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
var secondsLeft = 75;
// var oLarray = [];












mPageh1.textContent = "Coding Challenge Quiz";
mPageP.textContent = "To answer the following questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!";
vHDiv.textContent = "View Highscores";
hSh1.textContent = "Highscores";
// hSoL.textContent = "blah";
hSmain.textContent = "TS-44";
gBackBut.textContent = "Go Back";
clrBut.textContent = "Clear Highscores";
sqButton.textContent = "Start Quiz";




vHDiv.setAttribute("style", "color: purple");
mPageh1.setAttribute("style", "text-align: center");
mPageP.setAttribute("style", "text-align: center");
// hScoresPage.setAttribute("style", "margin-top: 7%");
hScoresPage.setAttribute("style", "text-align: center");
// hSmain.setAttribute("style", "background: blue");
// hSmain.setAttribute("style", "margin: 5px");
hSmain.setAttribute("style", "color: purple");
gBackBut.setAttribute("style", "margin: 5px");
clrBut.setAttribute("style", "margin: 5px");
timeDiv.setAttribute("style", "float: right");
sqButton.setAttribute("style", "margin-left: 47%");



vHDiv.addEventListener("click", function(){
    body.removeChild(mPageDiv);
    body.appendChild(hScoresPage);
    hScoresPage.appendChild(hSh1);
    hScoresPage.appendChild(hSmain);
    // hScoresPage.appendChild(hSoL);
    hScoresPage.appendChild(gBackBut);
    hScoresPage.appendChild(clrBut);
});

gBackBut.addEventListener("click", function(){
    body.removeChild(hScoresPage);
    hScoresPage.removeChild(hSh1);
    hScoresPage.removeChild(hSmain);
    // hScoresPage.removeChild(hSoL);
    hScoresPage.removeChild(gBackBut);
    hScoresPage.removeChild(clrBut);
    body.appendChild(vHDiv);
    body.appendChild(mPageDiv);
});

clrBut.addEventListener("click", function () {
    hSmain.innerHTML = "";
});



sqButton.addEventListener("click", function () {

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
});






body.appendChild(mPageDiv);
mPageDiv.append(vHDiv);
mPageDiv.append(mPageh1);
mPageDiv.append(mPageP);
mPageDiv.append(sqButton);










