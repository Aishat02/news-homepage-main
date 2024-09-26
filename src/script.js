function hideContainer() {
  document
    .querySelectorAll(".hide")
    .forEach((element) => (element.style.display = "none"));
}

function showContainer() {
  document
    .querySelectorAll(".hide")
    .forEach((element) => (element.style.display = ""));
}
