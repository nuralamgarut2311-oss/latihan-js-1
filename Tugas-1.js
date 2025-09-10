alert('Selamat Datang, Silahkan Klik "OK" Untuk Melanjutkan Proses Pengecekan Nilai');

var nilai=prompt('Masukan Nilai 1-10 (Jika nilai yang dimasukan kurang dari 6 maka dinyatakan "Tidak Lulus", dan jika nilai yang dimasukan lebih dari 6 maka dinyatakan "Lulus"');
if (nilai >= 1 && nilai <= 10) {
    if (nilai >6){
        alert('Lulus');}
    else if(nilai<6){
        alert('Tidak Lulus');}
}
