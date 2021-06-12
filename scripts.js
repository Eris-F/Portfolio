$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})

// Scroll into view 

function homefunction() {
    var element = document.getElementById("Home");
    element.scrollIntoView();
  }

function amfunction() {
    var element = document.getElementById("AboutMe");
    element.scrollIntoView();
  }

function prfunction() {
    var element = document.getElementById("Projects");
    element.scrollIntoView();
  }

