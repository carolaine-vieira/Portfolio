export default function initBox() {
  const zoomIn = () => {
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

  const zoomOut = () => {
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

  const maximize = () => {
    $(".explorer").css({
      width: "100%",
      height: "100%",
      borderRadius: 0,
    });
    $(".left").css("height", $(".explorer").height() - 33);
    $(".right").css("height", $(".explorer").height() - 42);
  };

  const minimize = () => {
    $(".explorer").css({
      width: "90%",
      height: "75%",
      borderRadius: 5,
    });

    $(".left").css("height", $(".explorer").height() - 33);
    $(".right").css("height", $(".explorer").height() - 42);
  };

  const openModal = () => {
    $(".open-folder").css("display", "flex");
    $(".left").html("");
    $(".right").html("");
    $(".left").css("height", $(".explorer").height() - 33);
    $(".right").css("height", $(".explorer").height() - 42);
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

  $(".close-modal").click(function (e) {
    e.preventDefault();
    closeModal();
  });

  $(".controls-container .maximize-modal").click(function (e) {
    e.preventDefault();
    zoomIn();
  });

  $(".controls-container .minimize-modal").click(function (e) {
    e.preventDefault();
    zoomOut();
  });

  $(".left-controls .maximize-modal").click(function (e) {
    e.preventDefault();
    maximize();
  });

  $(".left-controls .minimize-modal").click(function (e) {
    e.preventDefault();
    minimize();
  });
}
