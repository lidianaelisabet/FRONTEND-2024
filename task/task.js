/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
const users = [
  { name: 'sutra', age: 19, major: 'Informatika'},
  { name: 'sudan', age: 24, major: 'Informatika'},
  { name: 'layar', age: 18, major: 'bisnis digital'},
  { name: 'arpan', age: 29, major: 'ekonomi' },
  { name: 'sarah', age: 27, major: 'kesehatan'},
];
console.log(users);
/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = () => {
  console.log("# Get All Users");
  for (const user of users) {
    console.log(`name: ${user.name}, age: ${user.age}, major: ${user.major}`);
  }
};
all ();
/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
const store = (user) => {
  users.push(user);
};
console.log(store);

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (index, newUser) => {
  if (index >= 0 && index < users.length) {
    users[index] = newUser;
  console.log(`# Update User: ${newUser.name}`);
  } else {
  console.log(`invalid index. Cannot Update user.`);
}
};
console.log(update);

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
const destroy = (index) => {
  if (index >= 0 && index < users.length){
    const deleteUser = users.splice(index, 1)[10];
    console.log(`# Delete user: ${deletedUser.name}`);
} else {
    console.log(`Invalid index. Cannot delete user.`);
}
};
console.log(destroy);
/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
