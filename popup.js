// Variables
const searchInput = document.getElementById("search__input");
const loadingPage = document.getElementById("loading__page");


// Functions
loadingPage.style.display = "none";

document.addEventListener("keydown", (event) => {
  if(event.key == "Enter" && searchInput.value != "") {
    searchInput.style.display = "none";
    document.body.style.backgroundImage = "none";
    loadingPage.style.display = "block";
  } else
    if(event.key == "Enter" && searchInput.value == "") {
      window.open("https://www.github.com");
    }
})
