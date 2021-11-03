import initModal from "./InitModal.js";

export default function ModalLinks() {
  initModal();

  const insertLinks = () => {
    const links = [
      {
        id: 0,
        title: "Tudo",
        URI: "/",
      },
      {
        id: 1,
        title: "HTML, CSS e JS",
        URI: "/",
      },
      {
        id: 2,
        title: "PHP com WordPress",
        URI: "/",
      },
      {
        id: 3,
        title: "Python + Django",
        URI: "/",
      },
      {
        id: 4,
        title: "React JS",
        URI: "/",
      },
      {
        id: 5,
        title: "Figma e Photoshop",
        URI: "/",
      },
      {
        id: 6,
        title: "Aleatório",
        URI: "/",
      },
    ];

    $(".left").append(`<ul><li>Tipo<ol><li><a>Tudo</a></li></ol></li></ul>`);

    $(".explorer").show();

    $(".right").append(`<ul class="links-list"></ul>`);
    links.forEach((link) => {
      $(".right ul").append(`<li><a href="${link.URI}">${link.title}</a></li>`);
    });
  };

  insertLinks();
}
