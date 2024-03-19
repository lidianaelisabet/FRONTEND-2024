/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
// CODE HERE
import users from "../models/users";

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */
const formatUser = (title) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!Array.isArray(users)) {
                reject(new Error("Input harus berupa array"));
            } else {
                const formattedUsers = users.map(user => {
                    return {
                        name: `Mr/Mrs. ${user.name}`,
                        age: user.age,
                        major: user.major
                    };
                });
                resolve(formattedUsers);
            }
        }, 3000); // Menunggu 3 detik
    });
};

/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
const findByName = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof name !== 'string') {
                reject(new Error("Input harus berupa string"));
            } else {
                const foundUser = users.find(user => user.name === name);
                if (foundUser) {
                    resolve(foundUser);
                } else {
                    reject(new Error("User tidak ditemukan"));
                }
            }
        }, 2000); // Menunggu 2 detik
    });
};

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */
const filterByMajor = (major) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof major !== 'string') {
                reject(new Error("Input harus berupa string"));
            } else {
                const usersWithMajor = users.filter(user => user.major === major);
                resolve(usersWithMajor);
            }
        }, 4000); // Menunggu 4 detik
    });
};

/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
// CODE HERE
module.exports = { formatUser, findByName, filterByMajor };