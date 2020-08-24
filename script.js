$(document).ready(function(){     
  $("#get_header").load("header.html");
});

jQuery(document).ready(function(){
  jQuery("#contents").load("header.html", function(response, status) {
      /* Optional, but consider revising this function to alert on error */
      if(status === 'error') {
          alert("Failed to load menu.html");
      }
      else {
          alert("Success!");
      }    
  });
});