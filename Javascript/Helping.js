// preloader and navbar appearance
const head1 =  document.querySelector("#h11");
const head2 =  document.querySelector("#h22");
var loader = document.getElementById("loader");
var navba = document.getElementById("navbar");
      window.addEventListener("load", function(){
          loader.style.height="100px";
          loader.style.width="100px";
          loader.style.borderRadius="50%";
          loader.style.visibility="hidden";
          navba.classList.remove("d-none");
          head1.classList.remove('d-none');
          head1.classList.add('animated', 'fadeInUp', 'delay-1s');
          head1.addEventListener('animationend', function() { 
            head2.classList.remove('d-none'); 
            head2.classList.add('animated', 'fadeInUp'); 
          });
      });
new WOW().init();
// Navbar collapsing on outside touch
$(document).click(function(e) {
  if (!$(e.target).is('#navbar')) {
    $('.collapse').collapse('hide');	    
  }
});

// Navbar colour change on scrolling
$(function () {
  $(document).scroll(function () {
      var $nav = $("#navbr");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});