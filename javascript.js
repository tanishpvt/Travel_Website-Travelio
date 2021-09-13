 
 
     //javascript for navigation bar effect on scroll
    window.addEventListener("scroll", function(){
      var header = document.querySelector("header");
      header.classList.toggle('sticky', window.scrollY > 0);
    });


 //Javacript for responsive navigation menu
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
    });

    //Javacript for video slider navigation
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".content");

    var sliderNav = function(manual){
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });

      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      contents.forEach((content) => {
        content.classList.remove("active");
      });

      btns[manual].classList.add("active");
      slides[manual].classList.add("active");
      contents[manual].classList.add("active");
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        sliderNav(i);
      });
    });

    //test GIFT CARD

    $(window).on('load', function() {
      var $container = $('.portfolioContainer');
      var $filter = $('#filter');
      $container.isotope({
          filter: '*',
          layoutMode: 'masonry',
          animationOptions: {
              duration: 750,
              easing: 'linear'
          }
      });
      $filter.find('a').click(function() {
          var selector = $(this).attr('data-filter');
          $filter.find('a').removeClass('active');
          $(this).addClass('active');
          $container.isotope({
              filter: selector,
              animationOptions: {
                  animationDuration: 750,
                  easing: 'linear',
                  queue: false,
              }
          });
          return false;
      });
  });
  
  // YOUTUBE

  $(function() {
    var $allVideos = $("iframe[src^='https://www.youtube.com/embed/35npVaFGHMY'], iframe[src^='https://www.youtube.com/embed/35npVaFGHMY'], object, embed"),
        $fluidEl = $("figure");

    $allVideos.each(function() {
        $(this)
            // jQuery .data does not work on object/embed elements
            .attr('data-aspectRatio', this.height / this.width)
            .removeAttr('height')
            .removeAttr('width');
    });
    $(window).resize(function() {
        var newWidth = $fluidEl.width();
        $allVideos.each(function() {
            var $el = $(this);
            $el
                .width(newWidth)
                .height(newWidth * $el.attr('data-aspectRatio'));
        });
    }).resize();
});

//LOADING SCREEN
jQuery(window).load(function() {
    //$(".loader-centered").fadeOut();
    //in production change 5000 to 400
    $(".loader").delay(3000).fadeOut("slow");
    $("#loading-text").addClass('text-success').html('page loaded');
    
});