import initModal from "./InitModal.js";

export default function ModalTopics() {
  initModal();

  const insertTopics = () => {
    const topics = [
      {
        id: 0,
        title: "Metódos Agéis",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 1,
        title: "Qualidade de Software e IHC",
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 1,
        title: "Acessibilidade",
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        id: 1,
        title: "Songster",
        description:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ];

    $(".view-container").show();
    $(".view-container").html("");
    $(".view-container").append('<div class="view"></div>');

    topics.forEach((topic) => {
      $(".view").append(
        `<div class="topic"><div class="info"><h3>${topic.title}</h3><p>${topic.description}</p></div></div>`
      );
    });
  };

  insertTopics();

  const isotopElements = () => {
    $(".view").isotope({
      itemSelector: ".topic",
    });
  };

  setInterval(() => {
    isotopElements();
  }, 900);
}
