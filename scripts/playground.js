var root = document.querySelector(':root');

const inputColor = document.querySelectorAll('[data-color]');
inputColor.forEach(input => {
  input.addEventListener('change', (e) => {
    root.style.setProperty(input.getAttribute('data-color'), e.target.value);
  })
})