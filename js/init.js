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

function addSection() {
  var x = document.getElementById("section-select");
  var txt = document.getElementById("addSectionInput").value;
  var option = document.createElement("option");
  option.text = txt
  x.add(option);
  $('#addSectionInput').val('');
  addMarkup(txt);
}

function deleteSections() {
  let selectOps = $('#section-select option:selected');
  selectOps.remove();
  removeMarkup(selectOps);
}

function addMarkup(txt) {
  $(".my-nav").append(`<a class="my-link" href="#${txt}">${txt}</a>`);
  $("section").last().after(`<section id="${txt}" class="flex"><h1>${txt}</h1></section>`);
  navClick();
}

function removeMarkup(selectOps) {
  $(selectOps).each(function() {
    $(`a[href="#${this.text}"]`).remove();
    $(`#${this.text}`).remove();
  });
}

navClick();
