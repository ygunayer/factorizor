require('mocha');

const { expect } = require('chai');

const { isPrime, divide, isSquare } = require('../lib');

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

    describe('isSquare', () => {
        it('should return true for 1', () => expect(isSquare(1)).to.be.true);
        it('should return true for 9', () => expect(isSquare(9)).to.be.true);
        it('should return false for 1000', () => expect(isSquare(1000)).to.be.false);
        it('should return false for -16', () => expect(isSquare(-16)).to.be.false);
    });

    describe('isPrime', () => {
        it('should return true for 1', () => expect(isPrime(1)).to.be.true);
        it('should return true for 2', () => expect(isPrime(1)).to.be.true);
        it('should return true for 3', () => expect(isPrime(1)).to.be.true);
        it('should return false for 9', () => expect(isPrime(9)).to.be.false);
        it('should return true for 99901', () => expect(isPrime(1)).to.be.true);
        it('should return false for 1000', () => expect(isPrime(1000)).to.be.false);
        it('should return false for -16', () => expect(isPrime(-16)).to.be.false);
    });
});
