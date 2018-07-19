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
 * Some factorization algorithms based on http://connellybarnes.com/documents/factoring.pdf
 */
const factorizers = {
    /**
     * Trial Division Factorization
     */
    cheat: number => {
        throw new Error('Not implemented yet');
    },

    /**
     * Fermat Factorization
     */
    fermat: number => {
        throw new Error('Not implemented yet');
    }
};

function factorize(number, algorithm = 'fermat') {
    if (!factorizers[algorithm]) {
        throw new Error(`Unknown factorization algorithm: ${algorithm}`);
    }

    return factorizers[algorithm](number);
}

module.exports = {
    factorize,
    divide,
    factorizers
};
