// const sutra = [" 110222165", " anroid", "iphone"]

const sutra = {
    nim :"0110222165",
    merekLeptop :"android",
    merekhp :"iphone",
};



/**
 * Looping object menggunakan for-in
 * Mengakses nilai menggunakan cara bracket
 */

for (const key in sutra) {
    console.log(`${key}: ${sutra[key]}`);
}

