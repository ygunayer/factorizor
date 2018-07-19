const BaseFactorizer = require('./base');

const { divide } = require('../lib');

/**
 * A basic factorizer that continuously divides the input number
 */
class TrialDivisionFactorization extends BaseFactorizer {
    factorize(number) {
        let factors = [];
        
        if (number < 0) {
            number = -number;
            factors.push(-1);
        }

        if (number < 2) {
            factors.push(number);
            return factors;
        }

        let x = 2;

        while (number >= x) {
            const { quotinent, remainder } = divide(number, x);
            if (remainder == 0) {
                factors.push(x);
                number = quotinent;
            } else {
                x++;
            }
        }

        return factors;
    }
}

module.exports = TrialDivisionFactorization;
