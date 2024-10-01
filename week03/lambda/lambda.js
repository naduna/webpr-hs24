const id = x => x;

const konst = x => y => x;

const kite = x => y => y;

// const T = konst;
// const F = kite;

const T = tc => fc => tc;
const F = tc => fc => fc;

// a (ausgewertet wenn a == true) (ausgewertet wenn a == false)
// heisst wenn a == true, kann es true werden als Ganzes, indem b true ist.
// wenn a == false, kann es als Ganzes nicht mehr true werden, also eh False
// const and = a => b => a(b(T)(F))(b(F)(F)); // verkürzt siehe unten
// const and = a => b => a(b)(F); // a ist hinten eh false, also kann man direkt a zurückgeben
const and = a => b => a(b)(a);

const or = a => b => a(T)(b)

const flip = f => x => y => f(y)(x)

const Pair = fn => ln => fnOrLn => fnOrLn(fn)(ln);
const firstname = konst;
const lastname = kite;

const Left = x => f => g => f(x);
const Right = x => f => g => g(x);
// const either = eitherLeftOrRight => f => g => eitherLeftOrRight(f)(g) // eta reduction leads to below
// const either = eitherLeftOrRight => f => eitherLeftOrRight(f) // eta reduction leads to below
// const either = eitherLeftOrRight => f => eitherLeftOrRight(f) // eta reduction leads to below
// const either = eitherLeftOrRight => eitherLeftOrRight // alpha translation leads to below
// const either = x => x // beta reduction leads to below
const either = id
    
// ----- special -----

const Tuple = n => [
    parmStore (n + 1) ( [] ) (parms => parms.reduce( (accu, it) => accu(it), parms.pop() ) ), // ctor
    ...Array.from( {length:n}, (it, idx) => iOfN (n) (idx) () )                    // selectors
];

const iOfN = n => i => value => // from n curried params, take argument at position i,
    n === 0
    ? value
    : x => iOfN (n-1) (i-1) ( i === 0 ? x : value );


const parmStore = n => args => onDone =>  // n args to come
    n === 0
    ? onDone(args)
    : arg => parmStore(n - 1)([...args, arg]) (onDone); // store parms in array

const Choice = n => [
    ...Array.from( {length:n}, (it, idx) => parmStore(n+1) ([]) (parms => parms[idx+1] (parms[0]) ) ), // ctors
    id
];




