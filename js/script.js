// objek mobil
const mobil = {
  warna: "silver",
  AC: "digital",
  mundur() {
    console.log("R");
  },
};

// hapus property warna pada objek mobil
delete mobil.warna;

// hapus methods mundur pada objek mobil
delete mobil.mundur;

// cetak objek mobil
console.log(mobil);
