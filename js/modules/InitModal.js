export default function initBox() {
  $("aside").css({
    left: "-100%",
    width: "0%",
  });

  $("#notebook").css({
    right: "0",
    flex: "10 1 100%",
    width: "100%",
  });

  $(".screen-container").css("width", "70%");
  $(".basis").css("width", "90%");
  $(".open-folder").css("display", "flex");
  $(".left").css("height", $(".explorer").height() - 33);
  $(".right").css("height", $(".explorer").height() - 33);
}
