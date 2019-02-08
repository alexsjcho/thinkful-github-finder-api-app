"use strict";

/*
Client ID
362fe94a55ccf18ace2d

Client Secret
2568375eb617ab6ac52a9380ec2c21d7cf91d9c7
*/

$(document).ready(function() {
  console.log("Ready to fetch GitHub User Repo!");
  userInput();
});

function userInput() {
  let wordInput = $("#listen-user-input").val();
  $("#search-form").submit(e => {
    e.preventDefault();
    return wordInput;
  });
  fetchUserName();
}

//Make Request to GitHub API
function fetchUserName() {
  fetch(`https://api.github.com/users/alexsjcho/repos`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("Hmmm. Cannot find GitHub UserName"));
}

//Render Repos to the DOM

function displayResults(responseJson) {
  console.log(responseJson);
  $("#display-profile").empty();
  responseJson.message.forEach(userRepo => {
    $("#display-profile").html(`<div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">${repos.name}</h3>
    </div>
    <div class="panel-body">
     <div class= "row>
     <div class="col-md-3">
     <a href=" ${repos.repos_url}">Repo URL Link</a>
     </div>
    </div>
  </div>`);
  });
  //display the results section
  $(".display-results-container").removeClass("hidden");
}
