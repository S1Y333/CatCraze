const loginEl = document.getElementById("loginButton");
const usernameEl = document.getElementById("username");
const passwordEl = document.getElementById("password");
const wrongTextEl = document.getElementById("wrongText");

loginEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (usernameEl.value === "demo" && passwordEl.value == "12345") {
    window.location.href = "./hub.html";
  } else {
    wrongTextEl.style.display = "inline-block";
  }
});
