var buzzwordsContainer = [];
var checks = [];

function readBuzzword(keyword) {

  if (buzzwordsContainer.length < 6) {

  buzzwordsContainer.push(document.getElementById(keyword).value);

  document.getElementById("words").innerHTML = '';

    for (var i in buzzwordsContainer) {
      document.getElementById("words").innerHTML += "<li>" + buzzwordsContainer[i] + "  <input type='checkbox' id='checked' onClick='checkboxes();'> " + "</li>" ;
    }

  }
  else {
    alert("Each game can contain 6 buzzwords");
  }
}

function checkboxes() {
  if (document.getElementById('checked').checked === true) {
    checks.push("x");
    console.log(checks);
    if (checks.length === 6) {
      alert("BINGO!");
    }
  }
}

function clearBuzzwordContainer() {
  location.reload();
}
