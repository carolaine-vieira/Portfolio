import ModalProjects from "./modules/ModalProjects.js";
import ModalSkills from "./modules/ModalSkills.js";

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
  folders.forEach((element, index) => {
    const current = $(element).attr("class");

    element.addEventListener("click", function () {
      switch (current) {
        case "projects":
          ModalProjects();
          break;

        case "skills":
          ModalSkills();
          break;
      }
    });
  });
};
