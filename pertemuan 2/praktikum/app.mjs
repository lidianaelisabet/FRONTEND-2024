
/**
 * Import user controller dari file Controller.mjs
 * Melakukan destrucjing untuk extrak object hasil import
 */

import {index, store} from './controller.mjs'

const main = () => {
    const user = {name: " Nartha", age: 22};
    index();
    store(user);
    index();
}

main ();
