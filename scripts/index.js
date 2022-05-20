const root = document.querySelector(':root');
const styles = JSON.parse(localStorage.getItem('styles'));
const inputsColor = Array.from(document.querySelectorAll('[data-color]'));

if(styles) {
  Object.entries(styles).forEach(([key, value]) => {
    root.style.setProperty(key, value);
    document.querySelector(`[data-color=${key}]`)?.setAttribute('value', value);
  })
}