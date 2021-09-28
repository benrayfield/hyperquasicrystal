# hyperquasicrystal
(TODO code this, have math theory so far) Trying to make a pure-lambda programming language (in a tiny js file that derives any needed tools) that exists entirely inside a tensor and can be computed in GPU.js (which Ive seen do a few teraflops in a browser), in manifolds split in optical quantum routers, on automata processors, or just in javascript in a peer to peer network. energyFunc(sparseStochasticMatrix[n]) aka from each node theres n groups of weights to other nodes (the green and blue weights may be incoming, not outgoing, cuz may need to match the amounts of incoming and outgoing flow), and each group sums to 1. A kind of graph-neuralnet, with AIXI-like kolmogorov-complexity based garbage-collection/attention, designed to learn to use lambda functions, by converging to a specific infinite-dimensional shape which contains all possible lambda functions and debugger breakpoints on evaling them. This is an AGI, if can find an energyFunction which computes a universal lambda this way, but it still might be far too slow for practical use. Start by choosing the simplest universal lambda, thats also a pattern-calculus function (such as urbit_nock or wikibinator107), I can make this work for, probably 7 params where first param is any 6 param function (La.Lb.Lc.Ld.Lx.Ly.Lz.a(Pair(abcdxy)z)) if its not the leaf/universalLambda, else depending if the next 3 params are leaf vs any non-leaf, choose between 8 opcodes to use on the next 3 params. Those 8 opcodes might be: S=Lx.Ly.Lz.xz(yz), T=Lx.Ly.Lz.y, FI=Lx.Ly.Lz.z, getLeftChild, getRightChild, isLeaf, Pair=Lx.Ly.Lz.zxy, LazyEval=Lx.Ly.Lz.xy. Iota=(Pair S T). Iota is a universal lambda/combinator. Forall x, (getLeftChild x (getRightChild x)) equals x. (getLeftChild leaf)->identityFunc. (getRightChild leaf)->leaf. The infinite shape I want it to learn has a red, green, and blue arrow outward from each node, to other nodes. Green is getLeftChild. Blue is getRightChild. Red from x is, if (x leaf) returns y then (leaf y), and if (x leaf) does not halt, then leaf. The red edge is at 1 higher cardinality than lambdas so can not be computed by lambdas (but in theory, it being a sums-to-one-group should push the "does not halt" weight up if it cant push any of the halts up, and if bayes-rule fits on that and the infinite set of all constraints can be verified in BigO(numberOfNodes) then it should answer P vs NP one way or the other) but in theory can be converged to using energyFunc(sparseStochasticMatrix[n]) if you have infinite time and memory and some parts practically efficiently, so its very theoretical and experimental can a neuralnet learn what will and wont halt (can make mistakes but should converge toward more accurate). In other words, compile https://en.wikipedia.org/wiki/Iota_and_Jot to run on up to an infinite number of threads at once. Possible products that could be improved include increasing the number of simultaneous database connections that can write lock and read lock complex combos (by soft-locking the shared state as a weighted-sum of goal-functions, such as the goal of "the sum of these numbers equals 324532451234" combined with the goal-func of "only prime numbers are included", could both lock a "shared state" at once, and that "shared state" would be a lambda just another node in the quasicrystal)... and after soft-locking on energy gradient can check many possible solutions by hard lambda constraints, if could get past that it would be thousands of times slower than normal code, if 1 million threads try to do locks together all at once, this way might be many times faster than existing databases. Or just see what it can do with existing lambda programming languages, after it understands lambdas. A different quasicrystal (or outerjoin them into 1 quasicrystal) might be to simulate https://en.wikipedia.org/wiki/Delayed-choice_quantum_eraser and a https://en.wikipedia.org/wiki/Ring_laser_gyroscope in realtime, as a 4d block of spacetime, on a html5 canvas, and possibly try to compress images of raw elements along with their place in the periodic table to make a prediction of what elements were not included in the training set. Anything that has alot of dimensions and low kolmogorov-complexity might be a good fit for this possible kind of graph-neuralnet. Its already known that graph-neuralnets are good at computing game physics. There might also be interesting overlap with the wolfram physics project which is graph based. Many possibilities.

To answer https://en.wikipedia.org/wiki/Newcomb%27s_paradox this kind of graph-neuralnet, in general, prefers time-traveller-paradoxes which have less number of "loops around or variants" (kolmogorov-complexity related) needed to make it consistent, such as https://en.wikipedia.org/wiki/Russell%27s_paradox (todo verify thats what i was thinking of) aka "does the barber who shaves exactly everyone who does not shave themself, shave himself?", or "what if you go back in time and kill your grandfather so you dont exist to kill him so he lives so you do exist to kill him", requires 2 times around, similar to in a doubleslit at least 2 of the thing exist, and you must pay energy for that. This kind of graph-neuralnet does not recognize the existence of time, except maybe as a local approximation, so has no need to form a consistent theory of events being before or after eachother like in newcombs paradox. Time-symmetry-breaking, baryogenesis, etc, should in theory be explained by some kind of timeless infinite-dimensional shape which does not change over time, is just a thing that tends to remain forever during heat-death even after the last particle decays.
