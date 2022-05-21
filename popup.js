// Variables
const searchInput = document.getElementById("search__input");
const loadingPage = document.getElementById("loading__page");


// Event Listeners & Functions
loadingPage.style.display = "none";

document.addEventListener("keydown", (event) => {
  if(event.key == "Enter" && searchInput.value != "") {
    searchInput.style.display = "none";
    document.body.style.backgroundImage = "none";
    loadingPage.style.display = "block";


    let username = searchInput.value;
    
    function searchUsers(username) {
      const githubApiUrl = `https://api.github.com/users/${username}`;

      fetch(githubApiUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
    }

    searchUsers(username);

  } else
    if(event.key == "Enter" && searchInput.value == "") {
      window.open("https://www.github.com");
    }
})


