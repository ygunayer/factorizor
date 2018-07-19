const primeCheckers = require('./prime-checkers');

/**
 * Divides a number by a divisor, returning both the quotinent and the remainder
 */
function divide(dividend, divisor) {
    if (divisor == 0) {
        return { quotinent: Infinity, remainder: 0 };
    }

    const isNegativeDividend = dividend < 0;
    const isNegativeDivisor = divisor < 0;

    const isNegativeQuotinent = isNegativeDividend ^ isNegativeDivisor;
    const isNegativeRemainder = isNegativeQuotinent ^ isNegativeDivisor;

    const absoluteDividend = dividend = Math.abs(dividend);
    const absoluteDivisor = divisor = Math.abs(divisor);

    let quotinent = 0;

    while (dividend >= divisor) {
        quotinent++;
        dividend -= divisor;
    }

    let remainder = absoluteDividend - quotinent * absoluteDivisor;

    if (isNegativeQuotinent) {
        quotinent *= -1;
    }

    if (isNegativeRemainder && remainder != 0) {
        remainder *= -1;
    }

    return {
        quotinent,
        remainder
    };
}

/**
 * Returns whether or not the provided number is a square
 */
function isSquare(x) {
    if (x < 0) {
        return false;
    }
    
    if (x == 1) {
        return true;
    }

    const squared = Math.sqrt(x);
    const rounded = Math.round(squared);
    return x == rounded * rounded;
}

/**
 * Returns the greatest common divisor of two numbers
 */
function gcd(a, b) {
    if (a == 0 || b == 0) {
        return 1;
    }

    let x = Math.abs(a);
    let y = Math.abs(b);
    while (y) {
        let t = y;
        y = divide(x, y).remainder;
        x = t;
    }
    return x;
}

module.exports = {
    divide,
    gcd,
    isPrime: number => primeCheckers.eratosthenes.isPrime(number),
    isSquare
};
