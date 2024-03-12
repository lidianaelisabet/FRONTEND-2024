/**
 * Buat Function hitungUmur.
 * Inputnya adalah tahun lahir.
 * Output nya dalah umur seseorang.
 * Rumus : Tahun skrng- - tahun lahir
 */

function hitungUmur(bod) {
  const year = 2024;
  const age = year - bod;

  return age;
}
  console.log(`usia kamu saat ini ${hitungUmur(2004)} tahun`);

