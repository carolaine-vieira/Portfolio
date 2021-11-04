import initModal from "./InitModal.js";

export default function ModalTopics() {
  initModal();

  const insertTopics = () => {
    const topics = [
      {
        id: 0,
        title: "DevOps",
        description:
          "Uma cultura que visa concilicar o antagonismo entre a equipe de desenvolvimento e infraestrutura.",
      },
      {
        id: 1,
        title: "Qualidade de Software e IHC",
        description:
          "Não adianta focar apenas em dispor funcionalidades e outras características de um sistema e esquecer que o usuário interage através da interface. Caso o software seja extremamente difícil de ser utilizado por questões visuais, todas as funcionalidades e consitência de bancos, estará em perigo.",
      },
      {
        id: 2,
        title: "Acessibilidade",
        description:
          "Além de ser lei, é uma questão de empatia. Alguns sistemas não dispõem de mecânismos que ajudem a utilização por deficientes.",
      },
      {
        id: 3,
        title: "Pré processadores",
        description:
          "Se é possível fazer algo em 2 passos, por que fazer em 5? Usar sass, pug e outros que cumprem o mesmo tipo de função facilitam e aceleram o desenvolvimento.",
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
