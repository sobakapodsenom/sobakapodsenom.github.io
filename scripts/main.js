// Я вообще в шоке от всего што тут происходит
var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/SOSIA.jpg") {
    myImage.setAttribute("src", "images/doge.jpg");
  } else {
    myImage.setAttribute("src", "images/SOSIA.jpg");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Ты класненький, " + myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Ты класненький, " + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };