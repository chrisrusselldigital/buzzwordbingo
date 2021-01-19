var list = document.getElementsByTagName("li");
var buzzwords = ["Aligned","Strategy","Resources","Stakeholder","Data science","Innovate","Deep dive","Omni-channel","Quick win"];
var checks = [];

window.dataLayer = window.dataLayer || [];

//Add the buzzwords
function readBuzzword() {

  document.getElementById("words").innerHTML = '';

  for (var i in buzzwords) {
    document.getElementById("words").innerHTML += "<li onclick=strike(this);>" + buzzwords[i] + "</div>" + "</li>";
  }
}

function strike(ele) {
  if (ele.style.textDecoration !== "line-through") {
    ele.style.textDecoration = "line-through";
    ele.style.color = "#8A2BE2";
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

  if (checks.length === 9) {
    dataLayer.push({
      'buzzwords': buzzwords.toString(),
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
