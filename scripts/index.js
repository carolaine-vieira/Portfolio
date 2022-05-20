const root = document.querySelector(':root');
const styles = JSON.parse(localStorage.getItem('styles'));

if(styles) {
  Object.entries(styles).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  })
}