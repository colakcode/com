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

$(document).ready(function(){
  $("#get-android-libraries").load("contents/android_libraries.html")
})

$(document).ready(function(){
  $("#get-clk-pie-charts").load("contents/clk_pie_charts.html")
})

$(document).ready(function(){
  $("#get-clk-progress").load("contents/clk_progress.html")
})

$(document).ready(function(){
  $("#get-clk-options-dialog").load("contents/clk_options_dialog.html")
})

$(document).ready(function(){
  $("#right-menu").load("menus/right-menu.html");
})