// Best seller section
const bookCardWrapper = document.querySelector(".book-card-wrapper");

fetch("http://localhost/ejbooks-backend/api/")
  .then((res) => res.json())
  .then((res) => {
    let bookCard = "";
    res.forEach((res) => {
      if (res.best_seller == 1) {
        bookCard += showBookCard(res);
        bookCardWrapper.innerHTML = bookCard;
      }
    });
  });

function showBookCard(b) {
  console.log(b.judul);
  return `
  <div class="book-card" style="margin-bottom: 18px;"> 
    <div class="thumb">
      <img src="http://localhost/ejbooks-backend/crud/${b.cover}" alt="" />
      <span class="price">Rp  ${b.harga} </span>
    </div>
    <div class="identity">
      <span class="legend">Judul</>
      <span class="detail">${b.judul}</span>
      <span class="legend">Penulis</span>
      <span class="detail">${b.pengarang}</span>
      <span class="legend">Tahun Terbit</>
      <span class="detail">${b.tahun}</span>
      <span class="legend">Kategori</span>
      <span class="detail">${b.kategori}</p>
    </div>
    <div class="detail-btn">
      <a href="detail.html" onClick="detailBuku('${b.judul}')">Detail Buku</a>
    </div>
  </div>`;
}

// end best seller section

// carousel inner
const carouselInner = document.querySelector(".carousel-inner");

fetch("http://localhost/ejbooks-backend/api/cover.php")
  .then((res) => res.json())
  .then((res) => {
    let cover = "";
    res.forEach((res) => {
      cover += showCover(res);
      carouselInner.innerHTML = cover;
    });
  });

function showCover(c) {
  return `
  <div class="carousel-item">
    <img
      src="http://penerbit-ejbooks.my.id/ejbooks-backend/crud/${c.gambar}"
      class="d-block w-100"
      alt="..."
    />
  </div>
  `;
}

function addActive() {
  const carouselItem = document.querySelector(".carousel-item");
  const turnOn = document.querySelector(".turn-on");
  carouselItem.classList.add("active");
  // turnOn.style.opacity = "0";
  turnOn.style.transform = "translateY(-100%)";
  turnOn.style.transition = "0.5s";
}
