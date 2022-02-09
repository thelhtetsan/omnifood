$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});
$(document).ready(function () {
  //sticky nav
  $(".js--section-feature").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "25%",
    }
  );

  //scroll button effects
  $(".js-btn-full").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-plan").offset().top },
      1000
    );
  });
  $(".js-btn-ghost").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-feature").offset().top },
      1000
    );
  });

  // Scroll Nav Button Effect
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
  //animation scroll
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated fadeInUpBig");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );
  //mobile nav
  $(".js--mobile-nav-icon").click(function () {
    $(".main-nav").slideToggle(200);

    if ($(".js--mobile-nav-icon i").hasClass("fa-bars")) {
      $(".js--mobile-nav-icon i").removeClass("fa-bars");
      $(".js--mobile-nav-icon i").addClass("fa-times");
    } else {
      $(".js--mobile-nav-icon i").removeClass("fa-times");
      $(".js--mobile-nav-icon i").addClass("fa-bars");
    }
  });
});
