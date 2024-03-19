// Import data users dari file data.mjs
import users from './data.mjs';

/**
 * Membuat Controller User
 * Terdapat method index store.
 */

const index = () => {
    users.forEach(function(user) {
    console.log(user);
}) ;
};
const store = (user) => {
    users.push(user);
};

/**
 * Export beberapa data.
 * Data disimpan di dalam object
 */
export {index,store};


