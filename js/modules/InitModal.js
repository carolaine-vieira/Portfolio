export default function initBox() {
  const maximize = () => {
    $("aside").css({
      left: "-100%",
      width: "0%",
    });

    $("#notebook").css({
      right: "0",
      flex: "10 1 100%",
    });

    $(".screen-container").css("width", "70%");
    $(".basis").css("width", "90%");
  };

  const minimize = () => {
    $("aside").css({
      left: "0",
      width: "auto",
    });

    $("#notebook").css({
      right: "-8%",
      flex: "10",
    });

    $(".screen-container").css("width", "80%");
    $(".basis").css("width", "100%");
  };

  const openModal = () => {
    $(".open-folder").css("display", "flex");
    $(".left").html("");
    $(".right").html("");
    $(".left").css("height", $(".explorer").height() - 33);
    $(".right").css("height", $(".explorer").height() - 33);
  };
  openModal();

  const closeModal = () => {
    $(".open-folder").css("display", "none");
    $(".explorer").hide();
    $(".view-container").hide();
    $(".left").css("height", $(".explorer").height() - 33);
    $(".right").css("height", $(".explorer").height() - 33);
    $(".controls-container").hide();
  };

  $(".controls-container").show();

  $(".controls-container .close").click(function (e) {
    e.preventDefault();
    closeModal();
  });

  $(".controls-container .maximize").click(function (e) {
    e.preventDefault();
    maximize();
  });

  $(".controls-container .minimize").click(function (e) {
    e.preventDefault();
    minimize();
  });
}
