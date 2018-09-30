function responsiveNav(x) {
  var n = document.getElementById("nav");
  x.classList.toggle("change");
  if (n.className === "my-nav") {
    n.className += " responsive";
  } else {
    n.className = "my-nav";
  }
}

function NavClick() {
  $('a[href^="#"]').on('click', function(event) {
    let target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: (target.offset().top) - ($('nav').height() + 43)
      }, 1000);
    }
  });
}

function AddSection() {
  var x = document.getElementById("section-select");
  var txt = document.getElementById("AddSectionInput").value;
  var option = document.createElement("option");
  option.text = txt
  x.add(option);
  $('#AddSectionInput').val('');
  AddMarkup(txt);
}

function DeleteSections() {
  let selectOps = $('#section-select option:selected');
  selectOps.remove();
  RemoveMarkup(selectOps);
}

function AddMarkup(txt) {
  $(".my-nav").append(`<a class="my-link" href="#${txt}">${txt}</a>`);
  $("section").last().after(`<section id="${txt}" class="flex"><h1>${txt}</h1></section>`);
  NavClick();
}

function RemoveMarkup(selectOps) {
  $(selectOps).each(function() {
    $(`a[href="#${this.text}"]`).remove();
    $(`#${this.text}`).remove();
  });
}

NavClick();
