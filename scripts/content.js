var on = true;

$(document).ready(function() {
  // Add spans to the <p> elements
  makeSpans();

  // The idea here is that if you click an element, its text opacity goes to
  // 0.0, making it totally transparent. But if you click it again, it goes
  // back to normal
  $("span").on("click", function() {
    if (on) {
      if ($(this).hasClass("hideWord")) {
        $(this).removeClass("hideWord hoverOver");
      } else {
        $(this).addClass("hideWord");
      }
    }

  });

  // This allows the user to see a word if it's hidden by hovering the
  // mouse over it
  $("span").hover(
    function() {
      if ($(this).hasClass("hideWord")) {
        $(this).addClass("hoverOver");
      }
    }, function() {
      $(this).removeClass("hoverOver");
    }

  );

});

// Takes a paragraph and puts spans in each of them. Credit for this idea
// goes to Daniel Tonon (http://stackoverflow.com/a/20850348)
function makeSpans() {
  // For each <p> element
  $("p").each(function() {
    // take all the words and put them in an array
    var words = $(this).text().split(" ");

    // empty the original <p> element
    $(this).empty();

    // then append every word in the array into the <p>, except this time
    // wrap them with <span>...</span>
    for (var i = 0; i < words.length; i++) {
      $(this).append("<span>" + words[i] + " </span>");
    }

  });

}
