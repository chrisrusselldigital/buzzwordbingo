var list = document.getElementsByTagName("li");
var buzzwordsContainer = [];
var checks = 0;

//Add the buzzwords
function readBuzzword(keyword) {

  if (buzzwordsContainer.length < 6) {

    buzzwordsContainer.push(document.getElementById(keyword).value);

    document.getElementById("words").innerHTML = '';

    for (var i in buzzwordsContainer) {
      document.getElementById("words").innerHTML += "<li id = " + [i] + ">" + buzzwordsContainer[i] + "</div>" + "</li>";
    }
  }

  else {
    alert("No more than 6 words");
  }
}

function strikeWordThrough() {
  if (this.style.textDecoration !== "line-through" ) {
    this.style.textDecoration = "line-through";
  } else {
    this.style.textDecoration = "normal";
  }

}

function strike() {
  for (var i = 0; i < list.length; i++) {
    list[i].onclick = strikeWordThrough;
  }
}



//New game
function clearBuzzwordContainer() {
  location.reload();
}
