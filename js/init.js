function responsiveNav(x) {
  var n = document.getElementById("nav");
  x.classList.toggle("change");
  if (n.className === "my-nav") {
    n.className += " responsive";
  } else {
    n.className = "my-nav";
  }
}

$('a[href^="#"]').on('click', function(event) {
  let target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: (target.offset().top) - ($('nav').height() + 43)
    }, 1000);
  }
});


function ListProbs() {
    var x = document.getElementById("sbox");
        var txt1 = document.getElementById("ProbAreaFrom").value;
        var option = document.createElement("option");
        option.text = txt1
        x.add(option);
        AddMarkup(x);
    }

function DeleteProbs() {
    var x = document.getElementById("sbox");
    for (var i = 0; i < x.options.length; i++) {
        if (x.options[i].selected) {
            x.options[i].remove();
        }
    }
    RemoveMarkup(x);
}

function AddMarkup(sel) {
  let links = $('.my-link');
  $(sel.options).each(function( i ) {
    if (typeof links[i] === 'undefined') {
      $( ".my-nav" ).append( `<a class="my-link" href="#${this.text}">${this.text}</a>` );
      $( "section" ).last().after( `<section id="${this.text}" class="flex"><h1>${this.text}</h1></section>` );
    }
  });
}

function RemoveMarkup(sel) {
  let links = $('.my-link');
  $(links).each(function( i ) {
    if (typeof sel.options[i] === 'undefined') {
      $(`a[href="#${this.text}"]`).remove();
      $(`#${this.text}`).remove();
    }
  });
}
