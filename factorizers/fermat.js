const BaseFactorizer = require('./base');

const { isSquare, divide, isPrime } = require('../lib');

/**
 * Factorizes a number using Fermat's factorization method, which attempts to find a pair of factors (s, t) where N = s * t.
 * 
 * The core logic only accepts odd values as valid inputs, and does not guaarantee that s or t will be a prime.
 * 
 * As such, the method is improved to check for primes and even numbers so an exhaustive list of prime factors can be found.
 */
class FermatsFactorizationMethod extends BaseFactorizer {
    doFactor(number) {
        for (let x = Math.ceil(Math.sqrt(number)); x < number; x++) {
            let ys = x * x - number;

            if (isSquare(ys)) {
                const y = Math.sqrt(ys);
                const s = x - y, t = x + y;

                return [ s, t ];
            }
        }

        throw new Error('Unreachable code');
    }
}

module.exports = FermatsFactorizationMethod;
