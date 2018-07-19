const BaseFactorizer = require('./base');

const { divide, gcd } = require('../lib');

const MAX_ITERS = 10000;

/**
 * R. Brent's improved version of Pollard's Rho.
 */
class BrentsFactorizationMethod extends BaseFactorizer {
    integralPowerOf2(z) {
        let pow2 = 1;
        while (pow2 <= z) {
            if (pow2 == z) {
                return true;
            }

            pow2 = pow2 * 2;
        }
        return false;
    }

    doFactor(number) {
        let xi = 2, xm = 2;

        for (let i = 0; i <= MAX_ITERS; i++) {
            xi = divide(xi ** 2 + 1, number).remainder;

            let s = gcd(xi - xm, number);

            if (s != 1 && s != number) {
                return [ s, divide(number, s).quotinent ];
            }

            if (this.integralPowerOf2(i)) {
                xm = xi;
            }
        }

        throw new Error(`Maximum number of iterations reached for number ${number}: ${MAX_ITERS}`);
    }
}

module.exports = BrentsFactorizationMethod;
