const btnMenu = document.getElementById("btn-menu");
const headerBody = document.getElementById("header-body");
const contentBody = document.getElementsByClassName("content-body")[0];
const hideHeader = document.getElementById("hide-header");

btnMenu.addEventListener("click", function () {
  if (headerBody.classList.contains("show")) {
    headerBody.classList.remove("show");
    hideHeader.classList.remove("clear");
  } else {
    headerBody.classList.add("show");
    hideHeader.classList.add("clear");
  }
});

hideHeader.addEventListener("click", () => {
  headerBody.classList.remove("show");
  hideHeader.classList.remove("clear");
});

function detailBuku(judul) {
  localStorage.setItem("judul_buku", judul);
}

function kategori(kategori) {
  localStorage.setItem("kategori", kategori);
}
