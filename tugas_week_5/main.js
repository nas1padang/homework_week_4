// buat enkapsulasi sederhana
class Pendaftar {
  constructor(nama, umur, uangSaku) {
    this.nama = nama;
    this.umur = umur;
    this.uangSaku = uangSaku;
  }
}

// menyimpan data pendaftar
let paraPendaftar = [];

// jalanin duluan elemen didalam ini ketika pertama kali di load
document.addEventListener("DOMContentLoaded", () => {
  
  // ambil elemen
  const regTab = document.getElementById("regTab");
  const listTab = document.getElementById("listTab");
  const regForm = document.getElementById("regForm");

  // tambahin elemen listener
  regTab.addEventListener("click", showTab);
  listTab.addEventListener("click", showTab);

  // jalankan kode kalo di klik submit
  regForm.addEventListener("submit", async function(event) {

    // cegah data dikirim ke server
    event.preventDefault();

    // ambil data
    const nama = document.getElementById("nama").value;
    const umur = parseInt(document.getElementById("umur").value);
    const uangSaku = parseInt(document.getElementById("uangSaku").value);

    // validasi
    if (nama.length < 10) {
      return alert("Nama harus lebih dari 10 karakter!");
    }
    if (umur < 25) {
      return alert("Umur harus lebih dari 25 tahun!");
    }
    if (uangSaku < 100000) {
      return alert("Uang saku minimal Rp 100,000!");
    }
    if (uangSaku > 1000000) {
      return alert("Uang saku maksimal Rp 1,000,000!");
    }

    // buat obyek pendaftar
    const pendaftar = new Pendaftar(nama, umur, uangSaku);
    paraPendaftar.push(pendaftar);

    // ketika berhasil data dikirm dan form di reset
    alert("Data berhasil dikirim!");
    regForm.reset();

    // kalo tabel diupdate, resume nya juga update
    updateTabel().then(updateResume);

  });
});

function showTab(event) {
  // sembunyiin elemen kalo pindah tab
  document.getElementById("registrasi").style.display = "none";
  document.getElementById("listPendaftar").style.display = "none";
  document.getElementById(event.target.href.split("#")[1]).style.display = "block";

  // buat gantiin css active kalo pindah tab
  document.getElementById("regTab").classList.remove("active");
  document.getElementById("listTab").classList.remove("active");
  event.target.classList.add("active");

}

// promise buat update tabel
function updateTabel() {
  return new Promise((resolve) => {
    const tbody = document.getElementById("pendaftarTable");

    // setiap data diupdate kosongin dulu biar nggak duplikat
    tbody.innerHTML = "";
    for (let pendaftar of paraPendaftar) {
      const row = `<tr><td>${pendaftar.nama}</td><td>${pendaftar.umur}</td><td>Rp.${pendaftar.uangSaku}</td></tr>`;
      tbody.innerHTML += row;
    }
    resolve(console.log('Tabel sudah diupdate!')); 
  });
}

function updateResume() {
  let totalUang = 0
  let totalUmur = 0;

  // ambil total
  for (let pendaftar of paraPendaftar) {
    totalUang += pendaftar.uangSaku;
    totalUmur += pendaftar.umur;
  }

  // hitung rata-rata
  const avgUang = (totalUang / paraPendaftar.length).toFixed(2);
  const avgUmur = (totalUmur / paraPendaftar.length).toFixed(2);

  document.getElementById("resume").innerText = `Rata-rata pendaftar memiliki uang saku sebesar Rp.${avgUang} dengan rata-rata umur ${avgUmur}`;
}
