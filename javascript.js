 
 
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
  