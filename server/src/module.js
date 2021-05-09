import submodule from './submodule.js';

const subcalc = submodule.subcalc;

const calc = (a, b) => {
    return subcalc(a) + subcalc(b);
}

export default {
    calc: calc
};

