var body = document.body;

var hScoresPage = document.createElement("div");
var hSh1 = document.createElement("h1");
var hSmain = document.createElement("main");
// var hSoL = document.createElement("ol");
var gBackBut = document.createElement("button");
var clrBut = document.createElement("button");
var mPageDiv = document.createElement("div");
var vHDiv = document.createElement("section");

// var oLarray = [];













vHDiv.textContent = "View Highscores";
hSh1.textContent = "Highscores";
// hSoL.textContent = "blah";
hSmain.textContent = "TS-44";
gBackBut.textContent = "Go Back";
clrBut.textContent = "Clear Highscores";







vHDiv.setAttribute("style", "color: purple");
// hScoresPage.setAttribute("style", "margin-top: 7%");
hScoresPage.setAttribute("style", "text-align: center");
// hSmain.setAttribute("style", "background: blue");
// hSmain.setAttribute("style", "margin: 5px");
hSmain.setAttribute("style", "color: purple");
gBackBut.setAttribute("style", "margin: 5px");
clrBut.setAttribute("style", "margin: 5px");






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
    body.appendChild(mPageDiv);
    mPageDiv.appendChild(vHDiv);
});

clrBut.addEventListener("click", function () {
    hSmain.innerHTML = "";
});




body.appendChild(mPageDiv);
mPageDiv.appendChild(vHDiv);
