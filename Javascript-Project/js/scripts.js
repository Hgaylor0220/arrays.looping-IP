$(document).ready(function() {
  var result;
  $("form#jurassic").submit(function(event) {
    event.preventDefault();

    var operator = $("input:radio[name=operator]:checked").val();

    if (operator === "Yes") {
      character = "Dr. Alan Grant. Oh and watch out for cars. They seem to be falling from the trees these days ";
    } else if (operator === "No") {
      character = "Newman, try not to get eaten!"
    }
  } else if (operator === "absolutly") {
    character = "Newman, try not to get eaten!"
  }} else if (operator === "No") {
    character = "Newman, try not to get eaten!"
  }

    $("#character").empty().append(character);
      $("#result").show();

   });
 });
