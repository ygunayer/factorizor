const SieveOfEratosthenes = require('./eratosthenes');

module.exports = {
    eratosthenes: new SieveOfEratosthenes(+process.env.SIEVE_MAX || 5000)
};
