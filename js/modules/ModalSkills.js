import initModal from "./InitModal.js";

export default function ModalLinks() {
  initModal();

  const insertSkills = () => {
    const skills = [
      {
        id: 0,
        type: "HTML",
        progress: 95.9,
        color: "#ffbb99",
      },
      {
        id: 1,
        type: "CSS",
        progress: 98.9,
        color: "#b3ccff",
      },
      {
        id: 2,
        type: "React Web",
        progress: 39,
        color: "#e6ccff",
      },
      {
        id: 3,
        type: "Figma",
        progress: 55.9,
        color: "#b3ffd9",
      },
      {
        id: 4,
        type: "Photoshop",
        progress: 22,
        color: "#b3e6ff",
      },
      {
        id: 5,
        type: "jQuery",
        progress: 70,
        color: "#ffecb3",
      },
      {
        id: 6,
        type: "Word Office",
        progress: 60,
        color: "#ccccff",
      },
      {
        id: 7,
        type: "PHP",
        progress: 30,
        color: "#ab9b96",
      },
      {
        id: 8,
        type: "Python",
        progress: 10,
        color: "#ecc6c6",
      },
      {
        id: 9,
        type: "Kotlin",
        progress: 5,
        color: "#ecc6c6",
      },
    ];

    $(".left").append(`<ul><li>Tipo<ol><li><a>Tudo</a></li></ol></li></ul>`);

    $(".explorer").show();

    skills.forEach((skill) => {
      $(".right").append(
        `<div class="skill">${skill.type}<div class="progress-bar"><div class="bar"></div></div></div>`
      );
    });

    skills.forEach((skill, index) => {
      $(".progress-bar .bar")
        .eq(index)
        .css({
          width: `${skill.progress}%`,
          background: skill.color,
        });
    });
  };

  insertSkills();
}
