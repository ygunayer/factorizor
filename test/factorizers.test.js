require('mocha');

const { expect } = require('chai');

require('../lib').isPrime(0); // warm up sieve just in case

const factorizers = require('../factorizers');

describe('factorizers', () => {
    const doTestAlgorithm = algorithm => {
        describe(`${algorithm}`, () => {
            describe(`factorize`, () => {
                const factorizer = factorizers[algorithm];
    
                const cases = [
                    { number: 10, expected: [ 2, 5 ] },
                    { number: 20, expected: [ 2, 2, 5 ] },
                    { number: 105, expected: [ 3, 5, 7 ] },
                    { number: 917, expected: [ 7, 131 ] },
                    { number: 12705, expected: [ 3, 5, 7, 11, 11 ] },
    
                    { number: 0, expected: [ 0 ] },
                    { number: 1, expected: [ 1 ] },
                    { number: 2, expected: [ 2 ] },
                    { number: 17, expected: [ 17 ] },
    
                    { number: -18, expected: [ -1, 2, 3, 3 ] },
                    { number: -42, expected: [ -1, 2, 3, 7 ] }
                ];
    
                cases.forEach(({ number, expected }) => {
                    it(`should factor ${number} into ${JSON.stringify(expected, null, 0)}`, () => {
                        const actual = factorizer.factorize(number);
                        expect(actual).to.deep.equal(expected);
                    })
                });
            });
        });
    };

    Object.keys(factorizers).forEach(doTestAlgorithm);
});
