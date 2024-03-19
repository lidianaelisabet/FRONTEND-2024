/**
 * Membuat fungssi sum.
 * Menjumlahkan semua bilangan.
 * fungsi memiliki 2 parameter
 */

function sum(a,b,c,d,e) {
    const hasil = a + b + c + d + e;
    return hasil;
}
sum(1,2,3,4,5);
function sum (...numbers) {
    let hasil = 0;

    for (const number of numbers) {
        hasil += number;
    }
    return hasil;
}
console.log(sum(1,2,3,4,5));

/**
 * Membuat fungsi showFamilies.
 * Menampilkan anggota keluarga.
 * Parameter ketiga menggunakan rest parameters.
 */

function showFamilies (husban, wife, ...children) {
    console.log(`suami: ${husban}`) ;
    console.log(`istri: ${wife}`) ;

    for (const child of children) {
        console.log(`Anak: ${child}`);
    }   
}
showFamilies("Mikel", "Hannah", "Jonas", "Martha", "Magnuz");