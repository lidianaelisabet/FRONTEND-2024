// Membuat object
const req = {
    body: {
        name: "Sutra",
        age: 19,
        major: "Informatics",
    },
};


// Memanggil nilai name, age, major
console.log(req.body.name, req.body.age, req.body.major);

// Menyimpan nilai object ke variabel terpisah
const name = req.body.name;
const age = req.body.age;
const major = req.body.major;

console.log(name, age, major);
