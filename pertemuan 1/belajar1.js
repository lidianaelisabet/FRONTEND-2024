/** jika nilai di atas 90 dinyatakan lulus dan sebaliknya*/
const nilai = 90;

// if : membuat satu kondisi
if (nilai > 75) {
  console.log("Grade: A");
// else if : membuat dua kondisi
} else if (nilai > 87) {
  console.log("Grade: B");
} else if (nilai > 88) {
  console.log("Grade: C");
  // else : membuat kondisi terakhir
} else {
  console.log("Grade: D");
}
