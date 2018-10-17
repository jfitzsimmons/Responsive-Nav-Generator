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
  $(".bars").before(`<a class="my-link" href="#${txt}">${txt}</a>\n      `);
  $("section").last().after(`\n  <section id="${txt}" class="flex">\n    <h1>${txt}</h1>\n  </section>\n`);
  navClick();
}

function removeMarkup(selectOps) {
  $(selectOps).each(function() {
    $(`a[href="#${this.text}"]`).remove();
    $(`#${this.text}`).remove();
  });
}

function createMarkup() {
  let markup = $("html").clone();
  markup.find(".controls").remove();
  markup.find('script[src="js/init.js"]').remove();
  markup.find("link").attr("href", "css/style.css");
  let markupnew = $(markup).prop('innerHTML');
  $("#markup").text(markupnew);
}
