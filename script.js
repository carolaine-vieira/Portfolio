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

  openFolder();
});

const openFolder = () => {
  const folders = document.querySelectorAll(".screen ul a");
  folders.forEach((element) => {
    element.addEventListener("click", function () {
      maximizeScreen();
    });
  });
};

const maximizeScreen = () => {
  $("aside").css({
    left: "-100%",
    width: "0%",
  });

  $("#notebook").css({
    right: "0",
    flex: "unset",
    width: "100%",
    // display: "block",
  });

  $(".screen-container").css("width", "70%");
  $(".basis").css("width", "90%");
  $(".open-folder").css("display", "flex");
};
