const root = document.querySelector(':root');
const saveBtn = document.querySelector('.save-colors');
let styleSet = {};

const inputColor = document.querySelectorAll('[data-color]');
inputColor.forEach(input => {
  input.addEventListener('change', (e) => {
    root.style.setProperty(input.getAttribute('data-color'), e.target.value);
    styleSet[input.getAttribute('data-color')] = e.target.value;
  })
})

saveBtn.addEventListener('click', () => localStorage.setItem('styles', JSON.stringify(styleSet)))

