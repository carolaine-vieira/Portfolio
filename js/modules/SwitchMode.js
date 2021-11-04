export default function SwitchMode() {
  $(".switch-mode").click(function (e) {
    e.preventDefault();
    const root = $(":root");
    console.log(e.target);

    if ($(e.target).hasClass("night")) {
      root.css("--accent-color", "#db7070");
      root.css("--accent-color-two", "#1dadaf");
      root.css("--first-color", "#222");
      root.css("--second-color", "#fff");
      root.css("--third-color", "#fff");
      root.css("--fourth-color", "#333");
      root.css("--fifth-color", "#444");

      $(".screen-container").css("background", "#ebebeb");
      $(".basis").css("background", "rgb(60, 60, 60)");
      $(".screen").css("background", "rgb(29,173,175)");
      $(".screen").css(
        "background",
        "linear-gradient(210deg, rgba(29,173,175,1) 0%, rgba(219,112,112,1) 77%, rgba(219,112,112,1) 100%)"
      );

      $(".switch-mode").html("Modo claro");
      $(".switch-mode").addClass("light");
      $(".switch-mode").removeClass("night");
    } else if ($(e.target).hasClass("light")) {
      root.css("--accent-color", "#F5F9DC");
      root.css("--accent-color-two", "#db7070");
      root.css("--first-color", "#fff");
      root.css("--second-color", "#555");
      root.css("--third-color", "#222");
      root.css("--fourth-color", "#fbfbfb");
      root.css("--fifth-color", "#eee");

      $(".screen-container").css("background", "#222");
      $(".basis").css("background", "#666");
      $(".screen").css("background", "rgb(219,112,112)");
      $(".screen").css(
        "background",
        "linear-gradient(210deg, rgba(219,112,112,1) 0%, rgba(245,249,220,1) 77%, rgba(245,249,220,1) 100%)"
      );

      $(".switch-mode").html("Modo escuro");
      $(".switch-mode").addClass("night");
      $(".switch-mode").removeClass("light");
    }
  });
}
