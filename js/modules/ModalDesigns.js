import initModal from "./InitModal.js";

export default function ModalDesigns() {
  initModal();

  const insertDesigns = () => {
    const designs = [
      {
        id: 0,
        title: "Tudo",
        image: "../../assets/Songster.png",
      },
      {
        id: 1,
        title: "Tudo",
        image: "../../assets/Portfolio-2.png",
      },
      {
        id: 2,
        title: "Tudo",
        image: "../../assets/Songster.png",
      },
      {
        id: 3,
        title: "Tudo",
        image: "../../assets/Songster.png",
      },
      {
        id: 4,
        title: "Tudo",
        image: "../../assets/Songster.png",
      },
      {
        id: 5,
        title: "Tudo",
        image: "../../assets/Songster.png",
      },
      {
        id: 6,
        title: "Tudo",
        image: "../../assets/Songster.png",
      },
    ];

    $(".view-container").show();
    $(".view-container").append('<div class="view"></div>');

    console.log($(".view"));

    designs.forEach((design) => {
      $(".view").append(
        `<div class="design"><img src="${design.image}"/><h3>${design.title}</h3></div>`
      );
    });
  };

  insertDesigns();

  const isotopElements = () => {
    $(".view").isotope({
      itemSelector: ".design",
      masonry: {
        columnWidth: 100,
      },
    });
  };

  setInterval(() => {
    isotopElements();
  }, 900);
}
