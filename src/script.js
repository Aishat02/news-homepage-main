function hideContainer() {
  document
    .querySelectorAll(".hide")
    .forEach((element) => (element.style.display = "none"));
  /*document.querySelector(".updates").style.display = "none";*/
}

function showContainer() {
  document
    .querySelectorAll(".hide")
    .forEach((element) => (element.style.display = ""));
  /*document.querySelector(".updates").style.display = "";*/
}
