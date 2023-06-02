function handleAccountCreated() {
  window.name = document.getElementById("create-name").value;
  window.username = document.getElementById("create-username").value;
  window.location.href = "https://monster-site.github.io/profile/user.html";
  console.log(window.name);
  console.log(window.username);
  return false;
}

function handleUserLoggedIn() {
  window.username = document.getElementById("username").value;
  window.location.href = "https://monster-site.github.io/profile/user.html";
  console.log(window.username);
  return false;
}

function onProfileLoaded() {
  if(!window.name && !window.username) {
    return;
  }
  else if(window.name) {
    console.log("1");
    document.getElementById("profile-header-text").value = "Hello, " + window.name + "!";
  } else {
    console.log("2");
    document.getElementById("profile-header-text").value = "Hello, " + window.username + "!";
  }
   document.getElementById("username").value = window.username;
}

addEventListener("DOMContentLoaded", (event) => {onProfileLoaded();});
