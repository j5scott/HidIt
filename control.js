$(document).ready(function() {
  $("p").on("click", function() {
    if ($(this).hasClass("blend")) {
      alert("has class");
    } else {
      alert("doesn't have class");
    }
  });
});
