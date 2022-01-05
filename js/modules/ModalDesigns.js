import initModal from "./InitModal.js";

export default function ModalDesigns() {
  initModal();

  const insertDesigns = () => {
    const designs = [
      {
        id: 0,
        title: "Songster",
        image: "./assets/Songster.png",
        uri: "https://www.figma.com/proto/qGMl9TLpu25H5s9pjDMeDK/Music-Player---React?node-id=1%3A2&scaling=scale-down-width&page-id=0%3A1&hide-ui=1",
      },
      {
        id: 1,
        title: "Portfolio v.2",
        image: "./assets/Portfolio-2.png",
        uri: "#",
      },
      {
        id: 2,
        title: "Portfolio v.1",
        image: "./assets/Portfolio-1.png",
        uri: "#",
      },
      {
        id: 3,
        title: "Effusus Ecommerce",
        image: "./assets/Effus_Index.png",
        uri: "https://www.figma.com/proto/kydhSsUT0jzTkwLFyEJP4L/Tema-com-WooComerce?node-id=31%3A14&scaling=scale-down-width&page-id=0%3A1&hide-ui=1",
      },
      {
        id: 4,
        title: "Effusus Ecommerce",
        image: "./assets/Effus_Single_Post.png",
        uri: "https://www.figma.com/proto/kydhSsUT0jzTkwLFyEJP4L/Tema-com-WooComerce?node-id=31%3A147&scaling=scale-down-width&page-id=0%3A1&hide-ui=1",
      },
      {
        id: 5,
        title: "Twisted",
        image: "./assets/twisted.png",
        uri: "https://www.figma.com/proto/TqpXhOCuudJFJRnmS7Xc8s/Twisted?node-id=1%3A2&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A2&hide-ui=1",
      },
      {
        id: 6,
        title: "Music School",
        image: "./assets/music_school.png",
        uri: "https://www.figma.com/proto/y2Fr49fonHOlhycoWqAeeI/Prot%C3%B3tipo-Escola-de-M%C3%BAsica?node-id=2%3A2&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=2%3A2&hide-ui=1",
      },
    ];

    $(".view-container").show();
    $(".view-container").html("");
    $(".view-container").append('<div class="view grid"></div>');

    console.log($(".view"));

    designs.forEach((design) => {
      $(".view").append(
        `<div class="design grid-item"><img src="${design.image}"/><div class="info"><h3><a href="${design.uri}" target="_blank">${design.title}</a></h3></div></div>`
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
