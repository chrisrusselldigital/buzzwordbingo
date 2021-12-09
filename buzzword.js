let list = document.getElementsByTagName("li");
let buzzwordsContainer = [];
let checks = [];
let onBuzzwordSubmit = document.getElementById('submitbutton');



//Google Tag Manager Data Layer
window.dataLayer = window.dataLayer || [];

//Add the buzzwords
function readBuzzword(keyword) {

  if (buzzwordsContainer.length < 9) {

    buzzwordsContainer.push(document.getElementById(keyword).value);

    document.getElementById("words").innerHTML = '';

    for (var i in buzzwordsContainer) {
      document.getElementById("words").innerHTML += "<li onclick=strike(this);>" + buzzwordsContainer[i] + "</div>" + "</li>";
    }
    console.log(buzzwordsContainer.length);
    urlGenerator();
    populateUrl();
  }

  else if (buzzwordsContainer.length === 9) {
      alert("No more than 9 words");
  }

}

//Strikes through the buzzwords
function strike(ele) {
  if ((buzzwordsContainer.length === 9) && (ele.style.textDecoration !== "line-through")) {
    ele.style.textDecoration = "line-through";
    ele.style.color = "#8A2BE2";
  } else {
    ele.style.textDecoration = "normal";
  }
}

//Adds clicks on buzzwords
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

//Generate shareable URL
function urlGenerator() {
  let add = "https://buzzwordbingo.uk/?";
  let arr = [];
  buzzwordsContainer.forEach((i, index) => {arr.push(((index + 1) + "=" + i + "&"))});
  arr = arr.join("");
  add = add.concat(arr).slice(0, -1);
  shortUrl = encodeURIComponent(add);
  return shortUrl;
}



//Populate shareable URL in form
function populateUrl() {
  document.getElementById("gameUrl").value = urlGenerator();
}


//New game
function clearBuzzwordContainer() {
  location.reload();
}
