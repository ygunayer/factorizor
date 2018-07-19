const BaseFactorizer = require('./base');

const { divide, gcd } = require('../lib');

const MAX_ITERS = 10000;

/**
 * J. M. Pollard's probabilistic factorization method. Fails on cases such as 21.
 */
class PollardsRho extends BaseFactorizer {
    doFactor(number) {
        let xi = 2, x2i = 2;

        for (let i = 0; i <= MAX_ITERS; i++) {
            let xip = xi ** 2 + 1;
            let x2ip = (x2i ** 2 + 1) ** 2 + 1;

            xi = divide(xip, number).remainder;
            x2i = divide(x2ip, number).remainder;

            let s = gcd(xi - x2i, number);

            if (s != 1 && s != number) {
                return [ s, divide(number, s).quotinent ];
            }
        }

        throw new Error(`Maximum number of iterations reached for number ${number}: ${MAX_ITERS}`);
    }
}

module.exports = PollardsRho;
