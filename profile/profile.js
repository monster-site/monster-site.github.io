function handleAccountCreated() {
  window.name = document.getElementById("create-username").value;
  console.log("name: " + window.name);
  window.location.href = "https://monster-site.github.io/profile/user.html";
  return false;
}

function handleUserLoggedIn() {
  window.name = document.getElementById("login-username").value;
  console.log("name: " + window.name);
  window.location.href = "https://monster-site.github.io/profile/user.html";
  return false;
}

function showSignedInView() {
  document.getElementById("signed-in").hidden = false;
  document.getElementById("signed-out").hidden = true;
}

function logout() {
  window.name = "";
  document.getElementById("signed-in").hidden = true;
  document.getElementById("signed-out").hidden = false;
  window.location.href = "https://monster-site.github.io/profile/user.html";
  return false;
}

function onProfileLoaded() {
  console.log("name: " + window.name);
  if(!window.name) {
    return;
  }
  else {
    showSignedInView();
    console.log(document.getElementById("profile-header-text"));
    document.getElementById("profile-header-text").value = "Hello, " + window.name + "!";
    console.log(document.getElementById("profile-header-text").value);
  }
}

addEventListener("DOMContentLoaded", (event) => {onProfileLoaded();});
