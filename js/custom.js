$(document).ready(function () {
  $(".burger-menu").click(function () {
    $(".mobile-nav").toggleClass("show");
    $(".categories").toggleClass("hide");
    $(".btn-primary").toggleClass("hide");
    $(this).toggleClass("hide");
    $(".cross-menu").toggleClass("show");
  });

  $(".cross-menu").click(function () {
    $(".mobile-nav").toggleClass("show");
    $(".categories").toggleClass("hide");
    $(".btn-primary").toggleClass("hide");
    $(this).toggleClass("show");
    $(".burger-menu").toggleClass("hide");
  });

  // $(".goto").click(function (event) {
  //   event.preventDefault();
  //   var targetId = $(this).attr("href");
  //   $("html, body").animate({ scrollTop: jQuery(targetId).offset().top }, 1000);
  // });
});

$(document).ready(function () {
  $(".trusted-testimonial.owl-carousel").owlCarousel({
    loop: true, // Enable looping
    items: 1, // Show one testimonial per row
    dots: true, // Enable dots navigation
    nav: false, // Enable arrows navigation
    margin: 30, // Adjust the space between testimonial items
  });
});

$(document).ready(function () {
  $(".our-team-testimonial.owl-carousel").owlCarousel({
    loop: true, // Infinite loop
    margin: 32, // Space between items
    dots: true, // Display navigation dots
    nav: false, // Display navigation arrows
    responsive: {
      0: {
        items: 1, // 1 item per row on mobile
      },
      768: {
        items: 4, // 4 items per row on desktop
      },
    },
  });
});

$(document).ready(function () {
  $(".question").click(function () {
    const answer = $(this).next(".answer");
    const icon = $(this).find(".toggle-icon");

    if (answer.is(":visible")) {
      answer.slideUp();
      icon.text("+");
    } else {
      answer.slideDown();
      icon.text("X");
    }
  });
});
// $(document).ready(function () {
//   $(".carousel.owl-carousel").owlCarousel({
//     items: 3,
//     loop: true,
//     nav: false,
//     dots: true,
//     margin: 30,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       768: {
//         items: 2,
//       },
//       992: {
//         items: 3,
//       },
//     },
//   });
// });

// $(document).ready(function () {
//   $(".works-carousel.owl-carousel").owlCarousel({
//     items: 3,
//     loop: true,
//     nav: false,
//     dots: true,
//     autoplay: true,
//     autoPlaySpeed: 2000,
//     margin: 30,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       768: {
//         items: 1,
//       },
//       992: {
//         items: 1,
//       },
//     },
//   });
// });
