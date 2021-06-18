

//declare variables
var highScores = document.getElementById("high-scores");
var back = document.getElementById("back-button");
var clear = document.getElementById("clear");

//event listener to clear scores
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

//retrieve local storage
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScores.appendChild(createLi);
    }
}

// go back to index page
back.addEventListener("click", function () {
    window.location.replace("index.html");
});


