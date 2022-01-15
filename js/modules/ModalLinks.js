import initModal from "./InitModal.js";
import * as Global from "./Global.js";

export default function ModalLinks() {
  initModal();
  $(".label").html(Global.labelLinks);

  const insertLinks = () => {
    const links = [
      {
        id: 0,
        title: "GitHub",
        URI: "https://github.com/carolaine-vieira",
      },
      {
        id: 1,
        title: "LinkedIn",
        URI: "https://www.linkedin.com/in/carolaine-vieira-7602b1145/",
      },
      {
        id: 2,
        title: "Facebook",
        URI: "https://www.facebook.com/CarolesNobrega/",
      },
      {
        id: 3,
        title: "Codepen",
        URI: "https://codepen.io/carolaine-vieira",
      },
      {
        id: 4,
        title: "Behance",
        URI: "https://www.behance.net/carolainevieira",
      },
    ];

    $(".left").append(`<ul><li>Tipo<ol><li><a>Tudo</a></li></ol></li></ul>`);

    $(".explorer").show();

    $(".right").append(`<ul class="links-list"></ul>`);
    links.forEach((link) => {
      $(".right ul").append(
        `<li><a href="${link.URI}" target="_blank">${link.title}</a></li>`
      );
    });
  };

  insertLinks();
}
