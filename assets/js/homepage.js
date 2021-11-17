var repoConatinerEl = document.querySelector("#repos-conatiner");
var repoSearchTerm = document.querySelector("#repo-search-term");

fetch("https://api.github.com/users/octocat/repos") 
  .then(function(response) {
    //request was successful
    if (response.ok) {
      response.json().then(function(data) {
        displayRepos(data, user); 
        console.log(data,user);
      });
    } else {
      alert('Error; GitHub User Not Found');
    }
  })
  .catch(function(error) {
    // Notice this '.catch()' getting chained onto the end of the '.then()' method
console.log("outside");

var userFormEl=document.querySelector("#user-form");
var nameInputEl=document.querySelector("username");

var fromSubmitHandler=function(event) {
  event.preventDefault();
  console.log(event);
  // get value from input element
  // var username = nameInputEl.value.trim();

  if (username) {
    getUserRepos(username);
    nameInputEl.value="";
    console.log(data);
  }else{
    alert("Please enter a GitHub username");
  }
  console.log(event);
};

var displayRepos=function(repos,searchTerm) {
  //check of api returned any repos
  if (repos.length === 0) {
    repoContainerEl.textContent = "No repositories found.";
    return; 
  }

  //create a status element
  var statusEl=document.createElement("span");
  statusEl.classList="flex-row align-center";

  // check if current repo has issues or not
  if (reposi[i].open_issues_count > 0) {
    statusEl.innerHTML =
    "<i class='fas fa-times status-icon icon-danger></i>"
  } else {
    statusEl.innterHtml = "<i class='fas fa-check-square status-icon icon-success'></i>";
  }

  //append to container
  repoEl.appendChild(statusEl);

  // clear old content
  repoContainerEl.textContent = "";
  repoSearchTerm.textContent = searchTerm;
  
  //loop over repos
  for (var i=0; i < repos.length; i++) {
    // format repo name
    var repoName = repos[i].owner.login + "/" + repos[i].name;

    //create a container for each repo
    var repoEl = document.createElement("div");
    repoEl.classList = "list-item flex-row justify-space-between align-center";

    //create a span elemet to hold repo name
    var titleEl = document.createElement("span");
    titleEl.textContent = repoName;

    // append to conatiner
    repoEl.appendChild(titleEl);

    // append container to the dom
    repoConatinerEl.appendChild(repoEl);

  console.log(repos);
  console.log(searchTerm);  
};

userFormEl.addEventListener("submit", fromSubmitHandler);