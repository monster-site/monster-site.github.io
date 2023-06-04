function handleAccountCreated() {
  window.name = document.getElementById("create-name").value;
  window.name2 = document.getElementById("create-username").value;
  console.log("name: " + window.name);
  console.log("username: " + window.name2);
  window.location.href = "https://monster-site.github.io/profile/user.html";
  return false;
}

function handleUserLoggedIn() {
  window.name2 = document.getElementById("login-username").value;
  console.log("name: " + window.name);
  console.log("username: " + window.name2);
  window.location.href = "https://monster-site.github.io/profile/user.html";
  return false;
}

function showSignedInView() {
  document.getElementById("signed-in").hidden = false;
  document.getElementById("signed-out").hidden = true;
}

function logout() {
  window.name = "";
  window.name2 = "";
  document.getElementById("signed-in").hidden = true;
  document.getElementById("signed-out").hidden = false;
  window.location.href = "https://monster-site.github.io/profile/user.html";
  return false;
}

function onProfileLoaded() {
  console.log("name: " + window.name);
  console.log("username: " + window.name2);
  if(!window.name && !window.name2) {
    return;
  }
  else if(window.name) {
    console.log("1");
    showSignedInView();
    document.getElementById("profile-header-text").value = "Hello, " + window.name + "!";
  } else {
    console.log("2");
    showSignedInView();
    document.getElementById("profile-header-text").value = "Hello, " + window.name2 + "!";
  }
}

addEventListener("DOMContentLoaded", (event) => {onProfileLoaded();});
