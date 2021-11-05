import ModalLinks from "./modules/ModalLinks.js";
import ModalProjects from "./modules/ModalProjects.js";
import ModalSkills from "./modules/ModalSkills.js";
import ModalDesigns from "./modules/ModalDesigns.js";
import ModalTopics from "./modules/ModalTopics.js";
import SwitchMode from "./modules/SwitchMode.js";
import Notes from "./modules/Notes.js";
import * as Global from "./modules/Global.js";

$(document).ready(function () {
  const notebookWidth = $(Global.screenContainer).width();
  $(Global.screenContainer).css("height", notebookWidth * 0.7);

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

SwitchMode();
Notes();
