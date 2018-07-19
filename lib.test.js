require('mocha');

const { expect } = require('chai');

const { divide, factorize, factorizers } = require('./lib');

describe('lib', () => {
    describe('divide', () => {
        const cases = [
            { dividend: 10, divisor: 5, expected: { quotinent: 2, remainder: 0 } },
            { dividend: 20, divisor: 3, expected: { quotinent: 6, remainder: 2 } },
            { dividend: 1000, divisor: 21, expected: { quotinent: 47, remainder: 13 } },

            { dividend: -10, divisor: 5, expected: { quotinent: -2, remainder: 0 } },
            { dividend: 20, divisor: -3, expected: { quotinent: -6, remainder: 2 } },
            { dividend: -1000, divisor: 21, expected: { quotinent: -47, remainder: -13 } }
        ];

        it('should return Infinity when dividing by zero', () => {
            const expected = { quotinent: Infinity, remainder: 0 };
            const actual = divide(10, 0);
            expect(actual).to.deep.equal(expected);
        });

        cases.forEach(({ dividend, divisor, expected }) => {
            it(`should properly divide ${dividend} by ${divisor} to find ${expected.quotinent} (with remainder ${expected.remainder})`, () => {
                const actual = divide(dividend, divisor);
                expect(actual).to.deep.equal(expected);
            });
        });
    });

    const doTestAlgorithm = algorithm => {
        describe(`factorize using ${algorithm} algorithm`, () => {
            const fnFactorize = factorizers[algorithm];

            const cases = [
                { number: 10, expected: { 2: 1, 5: 1 } },
                { number: 20, expected: { 2: 2, 5: 1 } },
                { number: 917, expected: { 7: 1, 131: 1 } },

                { number: 0, expected: { } },
                { number: 2, expected: { } },
                { number: 17, expected: { } },

                { number: -18, expected: { '-1': 1, 3: 1, 6: 1 } },
                { number: -42, expected: { '-1': 1, 2: 2, 13: 1 } }
            ];

            cases.forEach(({ number, expected }) => {
                it(`should factor ${number} into ${JSON.stringify(expected, null, 0)}`, () => {
                    const actual = fnFactorize(number);

                    expect(actual).to.deep.equal(expected);
                })
            });
        });
    };

    Object.keys(factorizers).forEach(doTestAlgorithm);
});
