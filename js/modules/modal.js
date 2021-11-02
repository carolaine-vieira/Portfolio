export default function Modal(element, index) {
  const folders = document.querySelectorAll(".screen .open-folder");
  var teste = $(element).attr("class");
  console.log(teste);

  const current = $(element).attr("class");

  const initBox = () => {
    $("aside").css({
      left: "-100%",
      width: "0%",
    });

    $("#notebook").css({
      right: "0",
      flex: "unset",
      width: "100%",
    });

    $(".screen-container").css("width", "70%");
    $(".basis").css("width", "90%");
    $(".open-folder").css("display", "flex");
    $(".left").css("height", $(".explorer").height() - 35);
    $(".right").css("height", $(".explorer").height() - 35);
  };

  initBox();

  const insertSkills = () => {
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
        title: "Project 2",
        description: "lorem ipsum",
      },
    ];

    projects.forEach((project, index) => {
      $(".right").append(
        `<div class="project project-${index}"><img src="${project.image}" alt="${project.title}" /><h3>${project.title}</h3><div class="description">${project.description}</div></div>`
      );
    });
  };

  const inputData = () => {
    switch (current) {
      case "skills":
        insertSkills();
        break;
    }
  };

  inputData();
}
