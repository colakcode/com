$(document).ready(function(){     
    $("#get-header").load("header.html");
});

$(document).ready(function(){     
  $("#get-footer").load("footer.html");
});

$(document).ready(function(){     
  $("#get-topnav").load("topnav.html");
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
