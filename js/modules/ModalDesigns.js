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
        title: "Portfolio v2",
        image: "./assets/Portfolio-2.png",
      },
    ];

    $(".view-container").show();
    $(".view-container").html("");
    $(".view-container").append('<div class="view"></div>');

    console.log($(".view"));

    designs.forEach((design) => {
      $(".view").append(
        `<div class="design"><img src="${design.image}"/><div class="info"><h3>${design.title}</h3></div></div>`
      );
    });
  };

  insertDesigns();

  const isotopElements = () => {
    $(".view").isotope({
      itemSelector: ".design",
    });
  };

  setInterval(() => {
    isotopElements();
  }, 900);
}
