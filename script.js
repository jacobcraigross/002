// Styles //

$("h1").css("fontFamily", "helvetica");
$("img").css("width", "100px");
$("body").css("background", "#f2f2f2");
$("button").css({
  fontFamily: "helvetica",
  fontSize: "20px",
  background: "#ff4040"
});

// Functionality //

$("button").on("click", function(){
  $(this).css("fontSize", "200px");
  $(this).text("YOU BLEW IT.");
});
