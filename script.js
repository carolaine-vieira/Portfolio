$(document).ready(function () {
  const notebookWidth = $(".screen-container").width();
  $(".screen-container").css("height", notebookWidth * 0.7);

  if ($(window).width() > 1600) {
    $("#notebook").css({
      right: "40px",
      margin: "0 auto 11vh auto",
    });

    $("aside .container").css("margin", "15vh 5vh 0 0");
  } else {
    $("#notebook");
  }
});
