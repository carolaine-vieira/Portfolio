const root = document.querySelector(':root');
const saveBtn = document.querySelector('.save-colors');
let styles = {};

const inputsColor = Array.from(document.querySelectorAll('[data-color]'));
inputsColor.forEach(input => {
  input.addEventListener('change', (e) => {
    root.style.setProperty(input.getAttribute('data-color'), e.target.value);
    styles[input.getAttribute('data-color')] = e.target.value;
  })
})

saveBtn.addEventListener('click', () => localStorage.setItem('styles', JSON.stringify(styles)))

if(styles) {
  Object.entries(styles).forEach(([key, value], index) => {
    root.style.setProperty(key, value);
    inputsColor[index].setAttribute('teste', value);
  })
}