$(function(){

  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    return false;
});

  $('.user-nav__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__link').on('click', function(){
    $('.menu__list').removeClass('menu__list--active');
  });
 
  $('.reviews__slider').slick({
   dots: false,
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   vertical: true,
   infinite: false,
    prevArrow: '<button type="button" class="reviews__slider-arrow--top"><svg width="17" height="27" viewBox="0 0 17 27" fill="#292929" xmlns="http://www.w3.org/2000/svg"><path d="M8.38889 25.6113L8.38889 2.00022" stroke="black" stroke-width="2.3" stroke-linecap="round"stroke-linejoin="round"/><path d="M1.77778 8.61133L8.38889 2.00022L15 8.61133" stroke="black" stroke-width="2.3"stroke-linecap="round" stroke-linejoin="round" /></svg></button>',
    nextArrow: '<button type="button" class="reviews__slider-arrow--down"><svg width="14" height="24" viewBox="0 0 14 24" fill="#292929" xmlns="http://www.w3.org/2000/svg"><g><path d="M7.00043 1.47949L7.00043 22.9088" stroke="black" stroke-width="2" stroke-linecap="round"stroke-linejoin="round" /><path d="M13.0004 16.9086L7.00022 22.9088L1 16.9086" stroke="black" stroke-width="2"stroke-linecap="round" stroke-linejoin="round"/></g></svg></button>',
 });

 

});