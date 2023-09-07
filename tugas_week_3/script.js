// Program Cek Kondisi Air
/*
Keterangan
- Beku : -100 sampai 0
- Cair : 1 sampai 100
- Uap : 101 sampai 500
- Suhu selain rentang tersebut tidak terdefinisi

Variabel : Suhu
*/

    function cekKondisiAir() {
    let suhu = document.getElementById("suhu").value;
    
    let suhuAir = suhu >=-100 && suhu <= 0 ? 'Beku' : suhu > 0 && suhu <= 100 ? 'Cair' : suhu > 100 && suhu <= 500 ? 'Uap' : 'Tidak Terdefenisi'
    
    document.getElementById("hasilKondisiAir").innerHTML = "Kondisi air: " + suhuAir;
    }


// Program Cek Jenis BBM
/*
- Plat kuning atau motor maka BBM subsidi
- Mobil CC kurang dari 1500 maka PERTAMAX
- Mobil CC diatas atau sama dengan 1500 maka pertamax turbo

Variabel : jenisKendaraan, platKendaraan, ccMobil
*/

function cekJenisBBM() {
      let jenisKendaraan = document.getElementById("jenisKendaraan").value;
  
      let platKendaraan = document.getElementById("platKendaraan").value;
      let ccMobil = document.getElementById("ccMobil").value;
      
      let jenisBBM = platKendaraan === 'kuning' || jenisKendaraan === 'motor' ? 'BBM Subsidi' : jenisKendaraan === 'mobil' && ccMobil < 1500 ? 'PERTAMAX' : jenisKendaraan === 'mobil' && ccMobil >= 1500 ? 'Pertamax Turbo' : 'Tidak Terdefenisi'
 
      document.getElementById("hasilJenisBBM").innerHTML = "Jenis BBM: " + jenisBBM;
    }

let jenisKendaraanSelect = document.getElementById("jenisKendaraan");
  let ccMobilInput = document.getElementById("ccMobil");
  
  jenisKendaraanSelect.addEventListener("change", function() {
    ccMobilInput.style.display = jenisKendaraanSelect.value === "motor" ? "none" : "block";
  });