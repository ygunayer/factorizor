const { divide, isPrime } = require('../lib');

/**
 * The abstract interface for a factorizer
 */
class BaseFactorizer {
    factorize(number) {
        if (isPrime(number)) {
            return [ number ];
        }

        if (number < 0) {
            return [ -1 ].concat(this.factorize(number * -1));
        }

        const { quotinent, remainder } = divide(number, 2);
        
        if (remainder == 0) {
            return [ 2 ].concat(this.factorize(quotinent));
        }

        return [].concat(this.doFactor(number)).reduce((factors, n) => {
            if (isPrime(n)) {
                return factors.concat(n);
            } else {
                return factors.concat(this.factorize(n));
            }
        }, []).sort((a, b) => a - b);
    }

    doFactor(number) {
        throw new Error('Abstract method call: doFactor');
    }
}

module.exports = BaseFactorizer;
