const factorizers = require('./factorizers');

const number = +process.argv[2];
const algorithm = process.argv[3] || 'trialDivision';
const factorizer = factorizers[algorithm];

if (isNaN(number)) {
    throw new Error('Please provide a valid number for factorization');
}

if (!factorizer) {
    throw new Error(`Unknown factorization algorithm ${algorithm}`);
}

console.log(`Using ${algorithm} algorithm for factorization...`);
console.log(`Factors for ${number} are:`, factorizer.factorize(number));
