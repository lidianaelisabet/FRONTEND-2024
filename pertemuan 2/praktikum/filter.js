// Membuat array object
const users = [
    {
        name: "Jonas",
        age: 15,
    },
    {
        name: "Michael",
        age: 40,
    },
    {
        name: "Hannah",
        age: 35,
    },
];
/**
 * Menjalankan method find.
 * Mencari I data berdasarkan kondisi tertentu.
 * Koondisi umur lebih dari 21
 */
const filterdUser = users.filter(function (user) {
    return user.age > 21;
});

console.log(filterdUser);
