"use strict";

$(document).ready(function() {
  console.log("I'm ready baby!");
  searchUserInput();
});

function searchUserInput() {
  $("#search-user").on("keyup", function() {
    console.log("key pressed");
  });
}
