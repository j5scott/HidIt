$(document).ready(function() {
  // Add spans to the <p> elements
  makeSpans();
  
  //make background white 
  $('BODY').addClass("whiteBG");
  
  // The idea here is that if you click an element, its text opacity goes to
  // 0.0, making it totally transparent. But if you click it again, it goes
  // back to normal
  
  
  $("span").on("click", function() {
    if ($(this).hasClass("hideWord")) {
      $(this).removeClass("hideWord hoverOver");
      $(this).addClass("hideWord2");
    } 
    else if($(this).hasClass("hideWord2")) {
      $(this).removeClass("hideWord2");
    }
    else {
      $(this).addClass("hideWord");
      
    }
    //make background white 
  });

  // This allows the user to see a word if it's hidden by hovering the
  // mouse over it, text will turn to dark red and will no longer be opaque
  $("span").hover(
    function() {
      if ($(this).hasClass("hideWord")) {
        $(this).addClass("hoverOver");
      }
    }, function() {
      $(this).removeClass("hoverOver");
    }

  );
  
  $("img").on("click", function(){
    if($(this).hasClass("imageHide")){
      $(this).removeClass("imageHide");
      $(this).addClass("imageReveal");
    }
    else{
      $(this).addClass("imageHide");
    }
  });
  
  $("img").hover(
    function() {
      if ($(this).hasClass("imageHide")) {
        $(this).addClass("imageReveal");
      }
    }, function() {
      $(this).removeClass("imageReveal");
    }

  );

});

// Takes a paragraph and puts spans in each of them. Credit for this idea
// goes to Daniel Tonon (http://stackoverflow.com/a/20850348)
function makeSpans() {
  // For each element
  $("h1, h2, h3, h4, h5, h6, p, li, td, img").each(function() {
    // take all the HTML and put the properly separated values in an array
    var words = splitText($(this).html());

    // empty the original element
    $(this).empty();

    // then append every word in the array into a string
    var newStr = "";
    for (var i = 0; i < words.length; i++) {
      newStr += words[i];
    }

    // Make this string the new HTML of the page
    $(this).html(newStr);
  });

}

// Splits the HTML text appropriately for our purposes
function splitText(text) {
  var strArr = []; // string array
  var word = ""; // this is a word
  for (var i = 0; i < text.length; i++) {
    // if there's a carot, that's the sign of a new element tag, which we
    // want to preserve
    if (text.charAt(i) === "<") {
      strArr.push("<span>" + word + "</span>");
      word = "<"; // signals start of tag
      var nests = 1; // we want to keep track of nested tags
      do {
        i++;
        if (text.charAt(i) === "<") {
          nests++;
        }
        if (text.charAt(i) === ">") {
          nests--;
        }
        word += text.charAt(i);
      } while (nests > 0);  // while nests are not equal to zero, we don't
                            // want to add spans
      console.log(word);
      strArr.push(word); // push the new word to the array
      word = ""; // clear the word value
    // If the chars are not alphanumeric, we don't want to make spans
    } else if (text.charAt(i) != " " && text.charAt(i) != ".") {
      word += text.charAt(i);
    // If, however, the chars ARE alphanumeric, we want to wrap the "word"
    // with spans and push the wrapped content onto the array
    } else {
      console.log(word);
      strArr.push("<span>" + word + "</span>");
      word = "";
      strArr.push("" + text.charAt(i));
    }
  }

  // return the completed array
  return strArr;
}
