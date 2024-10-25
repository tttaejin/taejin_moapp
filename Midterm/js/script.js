$(document).ready(function () {
  // Example: Handling an event when the user scrolls to a specific section
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 300) {
      // Add any jQuery functionality here when scrolling past 300px
      console.log("You've scrolled past 300px!");
    }
  });

  // Example: Smooth scroll to a section (if needed)
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(document).ready(function () {
  $("nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      // 애니메이션을 통해 해당 위치로 부드럽게 스크롤
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
