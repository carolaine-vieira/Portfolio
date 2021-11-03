import ModalLinks from "./modules/ModalLinks.js";
import ModalProjects from "./modules/ModalProjects.js";
import ModalSkills from "./modules/ModalSkills.js";
import ModalDesigns from "./modules/ModalDesigns.js";
import ModalTopics from "./modules/ModalTopics.js";

$(document).ready(function () {
  const notebookWidth = $(".screen-container").width();
  $(".screen-container").css("height", notebookWidth * 0.7);

  $(".switch-mode").html("Modo escuro");
  $(".switch-mode").addClass("night");

  if ($(window).width() > 1600) {
    $("#notebook").css({
      right: "40px",
      margin: "0 auto 11vh auto",
    });

    $("aside .container").css("margin", "15vh 5vh 0 0");
  }
  openFolder();
});

const openFolder = () => {
  const folders = document.querySelectorAll(".screen ul a");
  folders.forEach((folder) => {
    const current = $(folder).attr("class");

    folder.addEventListener("click", function () {
      switch (current) {
        case "projects":
          ModalProjects();
          break;

        case "skills":
          ModalSkills();
          break;

        case "links":
          ModalLinks();
          break;

        case "designs":
          ModalDesigns();
          break;

        case "topics":
          ModalTopics();
          break;
      }
    });
  });
};

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

    $(".screen-container").css("background", "#fff");
    $(".basis").css("background", "#eee");
    $(".screen").css("background-image", `url("../../assets/2.jpg")`);

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
    $(".screen").css("background-image", `url("../../assets/1.jpg")`);

    $(".switch-mode").html("Modo escuro");
    $(".switch-mode").addClass("night");
    $(".switch-mode").removeClass("light");
  }
});
