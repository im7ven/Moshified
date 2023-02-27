const collapsibles = document.getElementsByClassName("collapsible");
for (let element of collapsibles) {
  element.addEventListener("click", function () {
    element.classList.toggle("collapsible--expanded");
  });
}
