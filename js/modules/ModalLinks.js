import initModal from "./InitModal.js";

export default function ModalLinks() {
  initModal();

  const insertLinks = () => {
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
        class: "random",
        title: "Aleatório",
      },
    ];
  };

  $(".left").append(`<ul><li>Tipo<ol><li><a>Tudo</a></li></ol></li></ul>`);

  $(".explorer").show();

  insertLinks();
}
