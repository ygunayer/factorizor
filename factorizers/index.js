const TrialDivisionFactorizer = require('./trial-division');
const FermatsFactorizationMethod = require('./fermat');
const PollardsRho = require('./pollards-rho');
const BrentsFactorizationMethod = require('./brent');

/**
 * Some factorization algorithms based on http://connellybarnes.com/documents/factoring.pdf
 */
module.exports = {
    trialDivision: new TrialDivisionFactorizer(),
    fermat: new FermatsFactorizationMethod(),
    pollardsRho: new PollardsRho(),
    brent: new BrentsFactorizationMethod()
};
