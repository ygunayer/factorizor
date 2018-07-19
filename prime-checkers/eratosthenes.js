/**
 * A primality checker that sacrifices boot time and completeness for quick lookup
 */
class SieveOfEratosthenes {
    constructor(max = 1000) {
        this.sieve = null;
        this.max = max;
    }

    initializeSieve() {
        console.log('Preparing sieve of Eratosthenes...');

        const sieve = {};
        
        for (let i = 2; i <= this.max; i++) {
            for (let j = 2; j <= this.max; j++) {
                sieve[i * j] = true;
            }
        }

        return this.sieve = sieve;
    }

    isPrime(x) {
        if (x < 0) {
            return false;
        }

        if (!this.sieve) {
            this.initializeSieve();
        }

        return !this.sieve[x];
    }
}

module.exports = SieveOfEratosthenes;
