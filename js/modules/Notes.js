export default function Note() {
  const notes = [
    {
      title: "Breve descrição",
      description:
        "Olá! Tenho 22 anos e moro em Salvador/BA. Curso Sistemas de Informação na Universidade Federal da Bahia. \n\n (Este portfólio está sendo finalizado)",
    },
  ];

  notes.forEach((note) => {
    $(".screen .notes").append(
      `<div class="note"><h4>${note.title}</h4><p>${note.description}</p></div>`
    );
  });

  $(".note").draggable({
    containment: "parent",
  });
}
