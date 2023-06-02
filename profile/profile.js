var name = "";
var username = "";

function handleAccountCreated() {
  name = document.getElementById("create-name").value;
  username = document.getElementById("create-username").value;
  window.location.href = "https://monster-site.github.io/profile/user.html";
  document.getElementById("profile-header-text").value = "Hello, " + name + "!";
  //set username
  //show detail view div
  //set the hello name text
  //set the username text
}

function handleUserLoggedIn() {
  //hide the login div
  //set name and password to username
  //show detail view div
  //set the hello name text
  //set the username text
}
