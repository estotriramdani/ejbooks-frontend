const content = document.querySelector(".content");
const judul_buku = localStorage.getItem("judul_buku");
console.log(judul_buku.length);

fetch("http://localhost/ejbooks-backend/api/")
  .then((res) => res.json())
  .then((res) => {
    let bookDetail = "";
    res.forEach((res) => {
      if (res.judul == judul_buku) {
        bookDetail = showBookDetail(res);
      }
      content.innerHTML = bookDetail;
    });
  });

function showBookDetail(b) {
  const linkWA = `https://api.whatsapp.com/send/?phone=6285710335651&text=Halo saya mau pesan buku *${b.judul}* karya *${b.pengarang}* dengan harga *Rp${b.harga}*. Mohon dibantu, Min!`;
  return `
    <div class="thumb">
      <img src="http://localhost/ejbooks-backend/crud/${b.cover}" alt="" />
    </div>
    <div class="identity">
      <table>
        <tr>
          <td>Judul</td>
          <td id="title">${b.judul}</td>
        </tr>
        <tr>
          <td>Penulis</td>
          <td id="author">${b.pengarang}</td>
        </tr>
        <tr>
          <td>Tahun</td>
          <td id="year">${b.tahun}</td>
        </tr>
        <tr>
          <td>Dimensi</td>
          <td id="dimensions">${b.dimensi}</td>
        </tr>
        <tr>
          <td>Harga</td>
          <td id="price">Rp ${b.harga}</td>
        </tr>
        <tr>
          <td style="padding-top: 10px"><b> Sinopsis</b></td>
        </tr>
        <tr>
          <td colspan="2" style="text-align: left">
            ${b.sinopsis}
          </td>
        </tr>
      </table>
    </div>
    <div class="btn-buy" style="margin: 10px 0 10px 0">
      <a href="${linkWA}" target="_blank">Beli Buku</a>
    </div>
    <div class="btn-see"><a href="buku.html">Lihat Buku Lainnya</a></div>
    <br />
    `;
}
