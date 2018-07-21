# factorizor
Factorize integers using various algorithms.

## Factorization Algorithms
There are plenty of algorithms for finding the prime factors of a given number, but the algorithms used in this library are based on Connell Barnes's 2004 public-domain paper ["Factorization Algorithms" (Department of Physics, Oregon University)](http://connellybarnes.com/documents/factoring.pdf).

Deterministic
- `trialDivision`: Trial Division
- `fermat`: Fermat's Factorization Method

Probabilistic
- `pollardsRho`: Pollard rho Factorization
- `brents`: Brent's Factorization Method
- `pollardsP1`: Pollard p-1 Factorization

The probabilistic algorithms listed above have a tendency to fail by entering into infinite loops even for small values like 21, so I opted to leave them out of the library.

**Note:** The initial plan was to implement factorization without division or modulus, but my research yielded in no such results. As such, I "cheated" my way out by not using the said operators, but implementing division and modulus myself.

## Prerequisites
- Node 7+
- NPM or Yarn

## Testing
- Install dependencies
    Using NPM:
    ```bash
    $ npm i
    ```

    Using Yarn:
    ```bash
    $ yarn
    ```

- Run tests
    Using NPM:
    ```bash
    $ npm test
    ```

    Using Yarn:
    ```bash
    $ yarn test
    ```

## Running
To factor a number, run `index.js` with the number to factor as the first argument, and the algorithm as the second (optional, default: `trialDivision`)

Examples:
```bash
$ node index.js 42
```

```bash
$ node index.js 105 pollardRho
```

## License
MIT
