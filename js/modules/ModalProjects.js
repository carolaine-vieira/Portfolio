import initModal from "./InitModal.js";

export default function ModalProjects() {
  initModal();
  $(".label").html("Projetos — Carolaine Vieira");

  const insertProjects = () => {
    const projects = [
      {
        id: 0,
        image: "./assets/Songster.png",
        title: "Projeto para estudar React",
        description: "Criei a página inicial. Falta o resto...",
        type: "React",
        URI: "https://www.figma.com/file/qGMl9TLpu25H5s9pjDMeDK/Music-Player---React?node-id=0%3A1",
      },
      {
        id: 1,
        image: "./assets/Portfolio-2.png",
        title: "Meu suposto novo portfólio",
        description:
          "Estava achando o meu antigo bem simples. Fiz esse, porém, conforme assistia as palestras da faculdade pensei em fazer algo mais interativo então criei este aqui.",
        type: "Figma",
        URI: "https://www.figma.com/file/5GsQsX4HshYLaMOkIic8HW/Portfolio-2?node-id=0%3A1",
      },
      {
        id: 2,
        image: "./assets/Alternativo.png",
        title: "Alternativo",
        description:
          "Este tema foi criado para ser vendido no Codester. Não foi usado nada além de HTML, CSS e JS. Tumblr é uma plataforma simples de blogs pessoais.",
        type: "HTML",
        URI: "https://cavithemes-alternativo.tumblr.com/",
      },
      {
        id: 4,
        image: "./assets/Novamente.png",
        title: "Novamente",
        description:
          "Este tema foi criado para ser vendido no Codester. Não foi usado nada além de HTML, CSS e JS. Tumblr é uma plataforma simples de blogs pessoais.",
        type: "HTML",
        URI: "https://www.codester.com/items/preview/16299/novamente-tumblr-theme",
      },
      {
        id: 5,
        image: "./assets/Waves.png",
        title: "Waves",
        description:
          "Este tema foi criado para ser vendido no Codester. Não foi usado nada além de HTML, CSS e JS. Tumblr é uma plataforma simples de blogs pessoais.",
        type: "HTML",
        URI: "https://www.codester.com/items/preview/10250/waves-tumblr-theme",
      },
      {
        id: 6,
        image: "./assets/Doravante.png",
        title: "Doravante",
        description:
          "Este tema foi criado para ser vendido no Codester. Não foi usado nada além de HTML, CSS e JS. Tumblr é uma plataforma simples de blogs pessoais.",
        type: "HTML",
        URI: "https://www.codester.com/items/preview/10251/doravante-tumblr-theme",
      },
      {
        id: 7,
        image: "./assets/Soli_Deo_Gloria.png",
        title: "Soli Deo Gloria",
        description:
          "Este tema foi criado para ser vendido no Codester. Não foi usado nada além de HTML, CSS e JS. Tumblr é uma plataforma simples de blogs pessoais.",
        type: "HTML",
        URI: "",
      },
      {
        id: 8,
        image: "./assets/screenshot.png",
        title: "Solsticio",
        description:
          "Este é meu primeira tema para WordPress. Recentemente, iniciei a configuração para uso de CMS.",
        type: "php",
        URI: "",
      },
    ];

    const links = [
      {
        id: 0,
        class: "all",
        title: "Tudo",
      },
      {
        id: 1,
        class: "html",
        title: "HTML, CSS e JS",
      },
      {
        id: 2,
        class: "php",
        title: "PHP com WordPress",
      },
      {
        id: 3,
        class: "python",
        title: "Python + Django",
      },
      {
        id: 4,
        class: "react",
        title: "React JS",
      },
      {
        id: 5,
        class: "figma",
        title: "Figma e Photoshop",
      },
      {
        id: 6,
        class: "other",
        title: "Outros",
      },
    ];

    $(".left").append(`<ul><li><a class="hide">Tipo</a><ol></ol></li></ul>`);

    links.forEach((link) => {
      $(".left ol").append(
        `<li><a class="${link.class}">${link.title}</a></li>`
      );
    });

    $(".explorer").show();

    projects.forEach((project, index) => {
      $(".right").append(
        `<div class="project project-${index}"><div class="image-container"><img src="${project.image}" alt="${project.title}"/></div><div class="description"><h3>${project.title}</h3><p>${project.description}</p></div></div>`
      );
    });

    const insertReadMore = () => {
      projects.forEach((project, index) => {
        if (project.URI !== "") {
          $(".right .description")
            .eq(index)
            .append(
              `<div class="read-more"><a href="${project.URI}" target="_blank">Dar uma olhada</a></div>`
            );
        }
      });
    };
    insertReadMore();

    const filters = document.querySelectorAll(".left ol li a");

    filters.forEach((filter) => {
      filter.addEventListener("click", function (event) {
        $(".right").html("");
        $(".left ol li a").removeClass("active");

        projects.forEach((project, index) => {
          const projectType = project.type.toLowerCase();
          const filterType = $(filter).attr("class").toLowerCase();

          if (projectType === filterType) {
            $(".right").append(
              `<div class="project project-${index}"><div class="image-container"><img src="${project.image}" alt="${project.title}"/></div><div class="description"><h3>${project.title}</h3><p>${project.description}</p><div class="read-more"></div></div></div>`
            );
          } else if (filterType === "all") {
            $(".right").append(
              `<div class="project project-${index}"><div class="image-container"><img src="${project.image}" alt="${project.title}"/></div><div class="description"><h3>${project.title}</h3><p>${project.description}</p><div class="read-more"></div></div></div>`
            );
          }
        });

        //insertReadMore();
        $(event.target).addClass("active");
      });
    });
  };

  insertProjects();

  $(".hide").eq(0).css("cursor", "pointer");

  $(".hide")
    .eq(0)
    .click(function () {
      $(".left ol").slideToggle("fast");
    });
}
