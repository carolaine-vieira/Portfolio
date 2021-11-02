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
    element.addEventListener("click", function () {
      maximizeScreen(index);
    });
  });
};

const maximizeScreen = (index) => {
  const folders = document.querySelectorAll(".screen .open-folder");
  console.log(folders[index]);

  const projects = [
    {
      id: 0,
      image:
        "https://images.unsplash.com/photo-1635765506301-536e9bb52dfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80",
      title: "Project 1",
      description: "lorem ipsum",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1635765506301-536e9bb52dfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80",
      title: "Project 1",
      description: "lorem ipsum",
    },
  ];

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
  $(".left").css("height", $(".explorer").height() - 35);
  $(".right").css("height", $(".explorer").height() - 35);

  projects.forEach((project, index) => {
    $(".right").append(
      `<div class="project project-${index}"><img src="${project.image}" alt="${project.title}" /><h3>${project.title}</h3><div class="description">${project.description}</div></div>`
    );
  });
};
