let list = document.getElementsByTagName("li");
let buzzwordsContainer = [];
let checks = [];
let onBuzzwordSubmit = document.getElementById('submitbutton');


//Google Tag Manager Data Layer
window.dataLayer = window.dataLayer || [];

function parseUrl() {
  let url = window.location.href;
  if (url.includes('https://buzzwordbingo.uk/?')) {
    decodeSharedUrl();
    for (var i in buzzwordsContainer) {
      document.getElementById("words").innerHTML += "<li onclick=strike(this);>" + buzzwordsContainer[i] + "</div>" + "</li>";
    }
  }
}


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
  shortUrl = encodeURIComponent(arr);
  add = add.concat(shortUrl).slice(0, -3);
  return add;
}

//Decode shareable URL
function decodeSharedUrl() {
  let fullPage = document.URL;
  fullPage = fullPage.replace("https://buzzwordbingo.uk/?","");
  fullPage = decodeURIComponent(fullPage);
  fullPage = fullPage.replace(/&|=/g, "");
  fullPage = fullPage.replace(/[0-9]/g, ", ");
  fullPage = fullPage.substring(2);
  console.log(fullPage);
  buzzwordsContainer = fullPage.split(",");
  console.log(buzzwordsContainer.length);
  console.log(buzzwordsContainer);
}

//Populate shareable URL in form
function populateUrl() {
  document.getElementById("gameUrl").value = urlGenerator();
}

//Copy shareable URL
function copyUrl() {
  /* Get the text field */
  let copyText = document.getElementById("gameUrl");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
}


//New game
function clearBuzzwordContainer() {
  location.href = 'https://buzzwordbingo.uk';
}
