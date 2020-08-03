var buzzwordsContainer = [];
var checks = 0;

//Add the buzzwords
function readBuzzword(keyword) {

  if (buzzwordsContainer.length < 6) {

    buzzwordsContainer.push(document.getElementById(keyword).value);

    document.getElementById("words").innerHTML = '';

    for (var i in buzzwordsContainer) {
      document.getElementById("words").innerHTML += "<li>" + buzzwordsContainer[i] + "</div>" + "</li>";
    }
  }

  else {
    alert("No more than 6 words");
  }
}


//something in this function about when a keyword is struck, a strikethrough occurs

//strike a word out
function strikeWordThrough(gameWord) {
  for (var i = 0; i < buzzwordsContainer.length; i++) {
    gameWord = buzzwordsContainer[i];
    gameWord.onClick(alert("hi"));
  }

}


//All words struck out




//New game
function clearBuzzwordContainer() {
  location.reload();
}
