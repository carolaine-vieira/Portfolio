export default function Modal(element, index) {
  const current = $(element).attr("class");

  const projects = [
    {
      id: 4,
      image: "../../assets/Songster.png",
      title: "Projeto para estudar React",
      description: "Criei a página inicial. Falta o resto...",
      type: "React",
    },
    {
      id: 4,
      image: "../../assets/Portfolio-2.png",
      title: "Meu suposto novo portfólio",
      description:
        "Estava achando o meu antigo bem simples. Fiz esse, porém, conforme assistia as palestras da faculdade pensei em fazer algo mais interativo então criei este aqui.",
      type: "Figma",
    },
    {
      id: 4,
      image: "../../assets/Alternativo.png",
      title: "Alternativo",
      description:
        "Este tema foi criado para ser vendido no Codester. Não foi usado nada além de HTML, CSS e JS. Tumblr é uma plataforma simples de blogs pessoais.",
      type: "HTML",
    },
    {
      id: 4,
      image: "../../assets/Novamente.png",
      title: "Novamente",
      description:
        "Este tema foi criado para ser vendido no Codester. Não foi usado nada além de HTML, CSS e JS. Tumblr é uma plataforma simples de blogs pessoais.",
      type: "HTML",
    },
    {
      id: 4,
      image: "../../assets/Waves.png",
      title: "Waves",
      description:
        "Este tema foi criado para ser vendido no Codester. Não foi usado nada além de HTML, CSS e JS. Tumblr é uma plataforma simples de blogs pessoais.",
      type: "HTML",
    },
    {
      id: 4,
      image: "../../assets/Doravante.png",
      title: "Doravante",
      description:
        "Este tema foi criado para ser vendido no Codester. Não foi usado nada além de HTML, CSS e JS. Tumblr é uma plataforma simples de blogs pessoais.",
      type: "HTML",
    },
    {
      id: 4,
      image: "../../assets/Soli_Deo_Gloria.png",
      title: "Soli Deo Gloria",
      description:
        "Este tema foi criado para ser vendido no Codester. Não foi usado nada além de HTML, CSS e JS. Tumblr é uma plataforma simples de blogs pessoais.",
      type: "HTML",
    },
  ];

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

  const insertProjects = () => {
    const filters = document.querySelectorAll(".left ol li a");
    filters.forEach((filter) => {
      filter.addEventListener("click", function () {
        $(".right").html("");
        projects.forEach((project, index) => {
          const projectType = project.type.toLowerCase();
          const filterType = $(filter).attr("class").toLowerCase();

          if (projectType === filterType) {
            $(".right").append(
              `<div class="project project-${index}"><div class="image-container"><img src="${project.image}" alt="${project.title}"/></div><div class="description"><h3>${project.title}</h3> ${project.description}</div></div>`
            );
          } else if (filterType === "all") {
            $(".right").append(
              `<div class="project project-${index}"><div class="image-container"><img src="${project.image}" alt="${project.title}"/></div><div class="description"><h3>${project.title}</h3> ${project.description}</div></div>`
            );
          }
        });
      });
    });

    $(".explorer").show();

    projects.forEach((project, index) => {
      $(".right").append(
        `<div class="project project-${index}"><div class="image-container"><img src="${project.image}" alt="${project.title}"/></div><div class="description"><h3>${project.title}</h3> ${project.description}</div></div>`
      );
    });
    // $(".project").css("height", $(".project").width());
  };

  const inputData = () => {
    switch (current) {
      case "projects":
        insertProjects();
        break;
    }
  };

  inputData();
}
