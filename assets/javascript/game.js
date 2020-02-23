// Execute this code when the DOM has fully loaded.
$(document).ready(function() {
  
   var randomNum = randomNumGen();

    var wins = 0;
    var losses = 0;
    var crystals;

    $(".btn").on("click", function() {
        console.log("I've been clicked!");
      });

})

function randomNumGen() {
  return Math.floor(Math.random() * 102) + 19;
}
