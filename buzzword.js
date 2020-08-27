var list = document.getElementsByTagName("li");
var buzzwordsContainer = [];
var checks = [];

//Add the buzzwords
function readBuzzword(keyword) {

  if (buzzwordsContainer.length < 6) {

    buzzwordsContainer.push(document.getElementById(keyword).value);

    document.getElementById("words").innerHTML = '';

    for (var i in buzzwordsContainer) {
      document.getElementById("words").innerHTML += "<li onclick=strike(this);>" + buzzwordsContainer[i] + "</div>" + "</li>";
    }
  }

  else {
    alert("No more than 6 words");
  }
}


function strike(ele) {
  if (ele.style.textDecoration !== "line-through" ) {
    ele.style.textDecoration = "line-through";
  } else {
    ele.style.textDecoration = "normal";
  }
}

function clickCounter() {
  for (var i = 0; i < list.length; i++) {
    if (list[i].style.textDecoration === "line-through" && !checks.includes(list[i])) {
      checks.push(list[i])
      console.log(checks);
    }

  }
  if (checks.length === 6) {
    alert("Buzzword bingo!");
  }
}


//New game
function clearBuzzwordContainer() {
  location.reload();
}
