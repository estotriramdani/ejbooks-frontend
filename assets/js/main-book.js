const bookList = document.querySelector(".book-list");
const kategori_buku = localStorage.getItem("kategori");
const sectionTitle = document.getElementById("section-title");
console.log(kategori_buku.length);

sectionTitle.innerHTML = kategori_buku;

fetch("http://penerbit-ejbooks.my.id/ejbooks-backend/api/")
  .then((res) => res.json())
  .then((res) => {
    let bookCard = "";
    res.forEach((res) => {
      if (res.kategori == kategori_buku) {
        bookCard += showBookCard(res);
      }
      bookList.innerHTML = bookCard;
    });
  });

function showBookCard(b) {
  return `
    <div class="book">
      <div class="book-card">
        <div class="thumb"> 
          <img src="http://penerbit-ejbooks.my.id/ejbooks-backend/crud/${b.cover}" alt="EJ Books. 2020. ${b.judul}" />
          <span class="price">Rp${b.harga} </span>
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
      </div>
    </div>
    `;
}
