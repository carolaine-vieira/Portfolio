import initModal from "./InitModal.js";

export default function ModalDesigns() {
  initModal();

  const insertDesigns = () => {
    const designs = [
      {
        id: 0,
        title: "Songster",
        image: "./assets/Songster.png",
      },
      {
        id: 1,
        title: "Portfolio v.2",
        image: "./assets/Portfolio-2.png",
      },
      {
        id: 2,
        title: "Portfolio v.1",
        image: "./assets/Portfolio-1.png",
      },
    ];

    $(".view-container").show();
    $(".view-container").html("");
    $(".view-container").append('<div class="view grid"></div>');

    console.log($(".view"));

    designs.forEach((design) => {
      $(".view").append(
        `<div class="design grid-item"><img src="${design.image}"/><div class="info"><h3>${design.title}</h3></div></div>`
      );
    });
  };

  insertDesigns();

  const isotopElements = () => {
    $(".grid").isotope({
      itemSelector: ".grid-item",
    });
  };

  setInterval(() => {
    isotopElements();
  }, 1000);
}
