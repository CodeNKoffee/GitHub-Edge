// Variables
const searchInput = document.getElementById("search__input");
const loadingPage = document.getElementById("loading__page");
const row = document.getElementById("row");


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

          let html = "";
          if(data) {
            html += `
              <div id="card" class="card">
                <div class="card__content">
                  <div class="card__content--left">
                    <figure class="card__avatar--wrapper">
                      <img src="${data.avatar_url}" alt="${data.login}'s Avatar" class="card__avatar">
                    </figure>
                    <span class="card__blog">${data.blog}</span>
                    <div class="card__social--btns">
                      <a href="${data.html_url}" class="card__social--btn">
                        <figure class="social__btn--icon__wrapper">
                          <img src="./assets/white-github_icon.svg" alt="GitHub Icon" class="social__btn--icon">
                      </figure>
                      <span class="social__btn--title">GitHub</span>
                    </a>
                    <a href="https://www.twitter.com/${data.twitter_username}" class="card__social--btn">
                      <figure class="social__btn--icon__wrapper">
                        <img src="./assets/white-twitter_icon.svg" alt="Twitter Icon" class="social__btn--icon">
                      </figure>
                      <span class="social__btn--title">Twitter</span>
                    </a>
                  </div>
                  <div class="card__content--right">
                    <span class="card__name">${data.name}</span>
                    <span class="card__username">@${data.login}</span>
                    <span class="card__location">${data.location}</span>
                    <p class="card__bio">
                      ${data.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>  
            `;
          } else {
            html = "Sorry, we didn't find any matching user!";
          }

        setTimeout(function() {
          loadingPage.style.display = "none";
        }, 5000, row.innerHTML = html)
        })
    }

    searchUsers(username);

  } else
    if(event.key == "Enter" && searchInput.value == "") {
      window.open("https://www.github.com");
    }
})


