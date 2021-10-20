function responsiveNavigation() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function carousel() {
  var i;
  var x = document.getElementsByClassName("top-slider");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  selectDots(myIndex-1);
  x[myIndex-1].style.display = "block";
  
  setTimeout(carousel, 15000); 
}

slideIndex=0;
function plusSlides(n) {
  slideIndex+=n;
  if(slideIndex>1) slideIndex=1;
  else if(slideIndex<0) slideIndex=0;
  showSlides(slideIndex);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

var slideCount = 0;
function showSlides(n) {
  
  var slides = document.getElementsByClassName("top-slider");

  for (var i = 0; i < slides.length; i++) {
    if(slideIndex!=i)
      slides[i].style.display = "none";  
    else 
      slides[slideIndex].style.display = "block";
  }

  selectDots(slideIndex);
}

function selectDots(n){
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    if(i!=n){
      dots[i].className = "dot";
    }else{
      dots[i].className = "dot active";
    }     
  }
}

//jQuery --> Get screen bottom position and item vertical position and detect item is visible?
function detectVerticalPosition(item){
    var itemCN = item.attr("class");
    if(itemCN==null) itemCN="";
    $(window).scroll(function() {
        if(item.offset().top < ($(window).scrollTop()+$(window).height())){
            item.attr('class', itemCN+" move_up");
            $('.note').text(item.offset().top+"/"+($(window).scrollTop()+$(window).height())+ " : true / "+ item.attr("class"));
        }else{
            item.attr('class', itemCN);
        }
    }).scroll();
}

/* Snackbar message
   <div id="snackbar">Snackbar message..</div> --> Anywhere on the page
*/
function showSnackbar() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

/* Write a message to html element with jQuery
   With id : $('#itemId').text(message) or With class : $('.itemClass').text(message)
   <div id="itemId"></div>
*/
function writeAMessageToItem(item, message){
    item.text(message);
}



