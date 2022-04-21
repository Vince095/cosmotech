
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".navbar").addClass("sticky-nav");
        } else {
            $(".navbar").removeClass("sticky-nav");
        }
    });

    // BACKSTRETCH SLIDESHOW
    $('#section_1').backstretch([
      "images/slide/surface-1x5jnhtlp3Y-unsplash.jpg",
      "images/slide/cosmo.jpg",
      "images/slide/cosmo2.jpg",
    ],  {duration: 2000, fade: 750});

    //Post request
    $('#submit').click(function(e){
      $.ajax({
        url: "https://www.shop-mo.app/api/cosmotech/project",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({"name": $('#name').val(), "email": $('#email').val(), "info": $('#subject').val(), "description": $('#message').val()}),
        processData: false,
        success: function(data) {
          alert("Successfully sent!");
          console.log(data);
        },
        error: function(error) {
          console.log(error);
        }
      })
      e.preventDefault();
    });

    $('#subscribe').click(function(e){
      $.ajax({
          url: "https://www.shop-mo.app/api/cosmotech/newsletter",
          type: "POST",
          dataType: "json",
          contentType: "application/json",
          data: JSON.stringify({"name": $('#subscribe-email').val()}),
          processData: false,
          success: function (data) {
              alert("Subscribed to NewsLetter!");
              console.log(data);
          },
          error: function (error) {
              console.log(error);
          }
      })
        e.preventDefault();
    });
    
  })(window.jQuery);


