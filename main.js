// Theme switcher
const darkMode = document.getElementById("dark");
const lightMode = document.getElementById("light");
const body = document.body;
// Guardar cambios en localStorage
const theme = localStorage.getItem("theme");

if (theme) {
  body.classList.add(theme);
}

darkMode.onclick = () => {
  body.classList.replace("light", "dark");
  localStorage.setItem("theme", "dark");
};

lightMode.onclick = () => {
  body.classList.replace("dark", "light");
  localStorage.setItem("theme", "light");
};
