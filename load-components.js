async function loadComponent(id, file) {
  const response = await fetch(file);
  const text = await response.text();
  document.getElementById(id).innerHTML = text;
}

/* Wait for HTML to load first, then look for areas with the 'header'
 or 'footer' id and load the relevant HTML file for each */

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "/header.html");
  loadComponent("footer", "/footer.html");
});