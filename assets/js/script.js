const btnMenu = document.getElementById("btn-menu");
const headerBody = document.getElementById("header-body");
const contentBody = document.getElementsByClassName("content-body")[0];

btnMenu.addEventListener("click", function () {
  if (headerBody.classList.contains("show")) {
    headerBody.classList.remove("show");
  } else {
    headerBody.classList.add("show");
  }
});
