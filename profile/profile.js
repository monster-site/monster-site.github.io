function handleAccountCreated() {
  window.name = document.getElementById("create-username").value;
  console.log("name: " + window.name);
  window.location.href = "https://monster-site.github.io/profile/user.html";
  alert("Branch " + "COMPLETE_REGISTRATION" + " event was tracked!");
  return false;
}

function handleUserLoggedIn() {
  window.name = document.getElementById("login-username").value;
  console.log("name: " + window.name);
  window.location.href = "https://monster-site.github.io/profile/user.html";
  alert("Branch " + "LOGIN" + " event was tracked!");
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
  alert("Branch " + "LOGOUT" + " event was tracked!");
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
    document.getElementById("profile-header-text").innerHTML = "Hello, " + window.name + "!";
  }
}

addEventListener("DOMContentLoaded", (event) => {onProfileLoaded();});
