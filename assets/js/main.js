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
      } else {
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
