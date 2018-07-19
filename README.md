# factorizor
Factorize integers using various algorithms.

## Factorization Algorithms
The algorithms used in this library are based on Connell Barnes's 2004 public-domain paper ["Factorization Algorithms" (Department of Physics, Oregon University)](http://connellybarnes.com/documents/factoring.pdf).

- `cheat`: Trial Division (†)
- `fermat`: Fermat Factorization
- `pollard-rho`: Pollard rho Factorization (†)
- `brents`: Brent's Factorization Method (†)
- `pollard-p1`: Pollard p-1 Factorization (†)

**†**: Uses the custom `divide` method to calculate the quotinents and/or remainders

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

## License
MIT
