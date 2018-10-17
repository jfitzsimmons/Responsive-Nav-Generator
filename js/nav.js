function responsiveNav(x) {
  var n = document.getElementById("nav");
  x.classList.toggle("change");
  if (n.className === "my-nav") {
    n.className += " responsive";
  } else {
    n.className = "my-nav";
  }
}

function navClick() {
  $('a[href^="#"]').on('click', function(event) {
    let target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: (target.offset().top)
      }, 1000);
    }
  });
}

navClick();
