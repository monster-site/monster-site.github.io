var name = "";
var username = "";

function handleAccountCreated() {
  name = document.getElementById("create-name").value;
  username = document.getElementById("create-username").value;
  window.location.href = "https://monster-site.github.io/profile/user.html";
}

function handleUserLoggedIn() {
  username = document.getElementById("username").value;
  window.location.href = "https://monster-site.github.io/profile/user.html";
}

function onProfileLoaded() {
  if(!name && !username) {
    return;
  }
  else if(name) {
    document.getElementById("profile-header-text").value = "Hello, " + name + "!";
  } else {
    document.getElementById("profile-header-text").value = "Hello, " + username + "!";
  }
   document.getElementById("username").value = username;
}

addEventListener("DOMContentLoaded", (event) => {onProfileLoaded();});
