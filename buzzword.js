var list = document.getElementsByTagName("li");
var buzzwordsContainer = [];
var checks = [];

window.dataLayer = window.dataLayer || [];

//Add the buzzwords
function readBuzzword(keyword) {

  if (buzzwordsContainer.length < 9) {

    buzzwordsContainer.push(document.getElementById(keyword).value);

    document.getElementById("words").innerHTML = '';

    for (var i in buzzwordsContainer) {
      document.getElementById("words").innerHTML += "<li onclick=strike(this);>" + buzzwordsContainer[i] + "</div>" + "</li>";
    }
  }

  else {
    alert("No more than 9 words");
  }
}

function strike(ele) {
  if ((buzzwordsContainer.length === 9) && (ele.style.textDecoration !== "line-through")) {
    ele.style.textDecoration = "line-through";
    ele.style.color = "#8A2BE2";
  } else {
    ele.style.textDecoration = "normal";
    console.log(buzzwordsContainer);
  }
}

function clickCounter() {
  for (var i = 0; i < list.length; i++) {
    if (list[i].style.textDecoration === "line-through" && !checks.includes(list[i])) {
      checks.push(list[i])
      console.log(checks);
    }

  }
  if (checks.length === 9) {
    dataLayer.push({
      'buzzwords': buzzwordsContainer.toString(),
      'event': 'buzzwordsAdded'
    });
    console.log(dataLayer);
    alert("Buzzword bingo!");
  }
}


//New game
function clearBuzzwordContainer() {
  location.reload();
}
