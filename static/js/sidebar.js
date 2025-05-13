document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.add("collapsed");
  document
    .getElementById("expandBtn")
    .addEventListener("click", () => sidebar.classList.toggle("collapsed"));
});
