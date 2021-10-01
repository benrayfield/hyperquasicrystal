# hyperquasicrystal

(TODO) A 7 parameter universal function defined as an energy function on stochastic pointers in a hypercomputation directedGraph. A universal function approximator. A way of organizing possibly every or nearly every statement in every math book ever written. An actually callable system of lambdas for massively multiplayer gaming and number crunching on GPU and possibly hypercomputation-capable manifold based hardware.

TODO (in the forward-computing VM, not the VM that runs slower cuz of doing everything as neuralnets, though they both compute in the exact same directedGraph with the same ids) emulate (a simpler form of) these using the universal combinator: http://github.com/benrayfield/listweb so i have a UI to drag and drop a web of bookmarks and notes about specific combinators and to make a code editor and evaler in the textarea, and https://github.com/benrayfield/hypercubewave as a graphics demo that can be built inside the code editor. When the listweb window (containing a bitstring made of church-pairs of -pairs... of -pairs of church-true or church-false lambdas, for every bit in its pixels or at first just the utf8 bits of the text), causes smooth nonlinear curves to appear on the screen (in a html canvas that views a graph node as pixels)... I mean for that to be a node in the graph, so I could then split the program into a multiverse of possible texteditors and possible programs that could be coded in them, including that the multiverse forks can have pointers to multiple multiverse forks (lambdas) and call the lambdas on eachother, and any lambda coded in this web of text editors across the internet (nodes will have 256 bit secure ids)... anything that 2 people code in these text editors, generates the same node in the graph. For example, 2 people both write a fibonacci function, that happens to have the exact same 2-way forest of lambda calls (there are many possible fibonacci functions if you only count the param/return pairs, but if you also count the internal structure of the lambdas which can be measured by lambdas looking at eachothers internals, then those are not forks to be merged but were already part of the constant directedGraph. If you make a lambda in 2 different code editors on 2 different screens, an equals function can say so. There is no fork-edit-merge cycle. Every tiny change, even a single bit, has its own godel-like-numbering.

HYPERCOMPUTATION BASICS:
From each node there are 4 edges: green and blue are the 2 lambda call childs. red edge is 1 hypercomputation level up as it points at basically the return value of the lazy-eval of a lambda call (leaf returnVal) or points at "does not halt" (leaf), both of which are also lambdas/nodes. Theres also a debuggerStep edge thats the counterpart of the red edge, which does a tiny amount of work by you finding out where it goes (in the constant graph shape) and together many steps tell the red edge what to return or be nonhalting. Halting oracles do not exist, so some parts can only be approximated or may never be known. That covers hypercomputation levels 0-1, which you can think of as many icons on screen each with 4 colored arrows to 4 other icons (or statistically a blur of arrows), and at this level you can do anything that a normal computer can. Past that, it gets much harder to approximate, and more things we may not ever know about it, huge holes we wont be able to fill in the graph edges, but theres still some correct graph edges even if we dont know what it is. Hypercomputation levels 1-2 are the same as levels 0-1 except theres opcodes to go along the graph edge from any lower level node, so if it goes along a red edge it can ask does a certain lazy lambda call halt or not, then continue an if/else based on the answer. Hypercomputation levels 2-3 can do the same for all lower levels including using combos of multiple lower levels together (still some things to work out, future research). Theres edge to go to a same node but at a lower cardinality. Any 2 lambdas can be checked for equality in an average of constant time but a worst case of having to lazy-eval all their 256 bit ids, or if computed as neuralnet it doesnt need ids at all cuz there is only 1 automorphism (the least possible) of this graph aka you can always go down the blue and green edges until finding the leaf. All paths lead to a single node that way, and its the only node that has a blue edge to itself.

WHAT CAN YOU DO WITH NTH LEVEL HYPERCOMPUTATION:
This is a kind of math which contains most or all known kinds of math each named by a integer (quodel-number, similar to a godel-number except refers to a node in a quasicrystal), such as the questions "does P equals NP?", "are there an infinite number of twin primes?", "do halting oracles exist?", "what is the bigO of matrix multiply?", "what is the exact kolmogorov-complexity of a given lambda", "how can this system be compiled to a given system description such as GPU.js or javascript eval code string?", "what would a certain musical instrument sound like, and do actually play it in realtime", "if a certain game existed, what pixels would it display if you moved the mouse and keyboard that way from a given game state?" (and actually do play the game), "whats the simplest possible theory which explains these given observations aka compress them?", etc.

This is a sparse nth level hypercomputation based model of computing (still adjusting the opcodes to do that, but am close), which means that even though halting oracles certainly do not exist, the question "does P equal NP" can be written using a few loops inside loops that each cost infinite time and memory. Such loops use the doesItHalt opcode, which can only be called on a lower cardinality than the caller. Each next outer infinite size loop is 1 higher cardinality. Since its turingComplete, it can choose to call doesItHalt or not based on if another call of doesItHalt, such as (ifElse (lazyEvalOfDoesPEqualNP leaf) ifTrue... ifFalse...), where lazyEvalOfDoesPEqualNP is a few doesItHalts inside doesItHalts deep. I'm not saying it would finish evaling that code, but if it had already finished (theres actually no time in the system, its just a constant shape of directed-graph-with-n-edge-types, which includes all possible pasts, presents, and futures already)... if that code had already finished, which means the relevant sparse parts of the graph had been filled in, then it may (for future research) be fast to verify that at least statistically. The system can challenge-response itself about the graph shape in an nth level hypercomputation number of ways, such as even if you can prove P does not equal NP, and separately if you can prove there are an infinite number of twin primes, if you can not ALSO prove that both can be true at once then thats a disproof-by-contradiction of something, but of which thing could be very hard to track down. The system should converge toward more accurate graph edges.

QUODEL (GODEL-LIKE-NUMBERING):
All graph nodes (which include as many hypercomputation levels as there are integers, in the same graph) are sortable. I call the integer of the nth graph node its quodel (like a godel-numbering except fixed by having cardinalities. the qu means (hyper)quasicrystal aka exactly 1 outgoing pointer per edge type from each node). So quodel means node. Quodels can be computed by quodels, similar to lambdas but with extra cardinalities for nth level hypercomputation for up to any finite integer n.

SPARSE STOCHASTIC POINTERS:
In statistical form, a pointer is an infinite mapping of quodel to chance, where all chances in the same pointer sum to 1. In the simplest case, its a pointer to a specific quodel and the chance is 1 and all other chances are of course 0. The n edge types in the graph are n pointers from each quodel, each to 1 specific quodel that is the correct place to point but statistically we often wont know which so use a row of a sparse stochastic matrix instead (map of quodel to chance) as pointer. Pointers also can be at "does not halt" since the "red edge" points at leaf if does not halt else points at (leaf returnVal) if halts on returnVal.






====todo rewrite the below paragraphs, are confusing=====

infinitely threadable godel-like-numbering-secure low latency neuralnet approximation of hypercomputation of the iota combinator in javascript lambdas, such as naming every possible lambda by a 256 bit merkle id

The opcodes are defined in https://github.com/benrayfield/hyperquasicrystal/blob/main/hyperquasicrystal.js and NSAT-constraints-with-pointers which define the relations between the 1 bit per node (is it the leaf/universalfunction/u or not aka leaf-blue->leaf) and a constant depth outward thru the 4 pointers per node (green blue red step) which in theory are an infinite set of NSAT constraints on an infinite number of nodes that describe a stack of evaling lambda called on lambda finds/creates lambda IF the constraints are solved, otherwise can be navigated sparsely. Code does not work yet but is similar to a few other universal functions I made which have working testcases up to (equals equals equals)->true. This lambda interpreter, in hard logic (no neuralnet computing it yet, the hard logic will fill in parts of the quasicrystal to be training data for neuiralnet to fill in more parts).... This incomplete lambda interpreter will soon use its own Pair opcode to navigate its call stack, and have no call stack other than the quasicrystal itself aka many sparse nodes each with 4 outgoing pointers to nodes, that are nullable but each can only point at 1 possible node so they are a cache that can be derived again. hyperquasicrystal.js explains how to use the fn.step pointer to fill in the fn.red pointer which points at either leaf (if not halt) or at (leaf returnVal) if halts on returnVal.

(TODO code this, have math theory so far) Trying to make a pure-lambda programming language (in a tiny js file that derives any needed tools) that exists entirely inside a tensor and can be computed in GPU.js (which Ive seen do a few teraflops in a browser), in manifolds split in optical quantum routers, on automata processors, or just in javascript in a peer to peer network. energyFunc(sparseStochasticMatrix[n]) aka from each node theres n groups of weights to other nodes (the green and blue weights may be incoming, not outgoing, cuz may need to match the amounts of incoming and outgoing flow), and each group sums to 1. A kind of graph-neuralnet, with AIXI-like kolmogorov-complexity based garbage-collection/attention, designed to learn to use lambda functions, by converging to a specific infinite-dimensional shape which contains all possible lambda functions and debugger breakpoints on evaling them. This is an AGI, if can find an energyFunction which computes a universal lambda this way, but it still might be far too slow for practical use. Start by choosing the simplest universal lambda, thats also a pattern-calculus function (such as urbit_nock or wikibinator106 or wikibinator107), I can make this work for, probably 7 params where first param is any 6 param function (La.Lb.Lc.Ld.Lx.Ly.Lz.a(Pair(abcdxy)z)) if its not the leaf/universalLambda, else depending if the next 3 params are leaf vs any non-leaf, choose between 8 opcodes to use on the next 3 params. Those 8 opcodes might be: S=Lx.Ly.Lz.xz(yz), T=Lx.Ly.Lz.y, FI=Lx.Ly.Lz.z, getLeftChild, getRightChild, isLeaf, Pair=Lx.Ly.Lz.zxy, LazyEval=Lx.Ly.Lz.xy. Iota=(Pair S T). Iota is a universal lambda/combinator. Forall x, (getLeftChild x (getRightChild x)) equals x. (getLeftChild leaf)->identityFunc. (getRightChild leaf)->leaf. The infinite shape I want it to learn has a red, green, and blue arrow outward from each node, to other nodes. Green is getLeftChild. Blue is getRightChild. Red from x is, if (x leaf) returns y then (leaf y), and if (x leaf) does not halt, then leaf. The red edge is at 1 higher cardinality than lambdas so can not be computed by lambdas (but in theory, it being a sums-to-one-group should push the "does not halt" weight up if it cant push any of the halts up, and if bayes-rule fits on that and the infinite set of all constraints can be verified in BigO(numberOfNodes) then it should answer P vs NP one way or the other) but in theory can be converged to using energyFunc(sparseStochasticMatrix[n]) if you have infinite time and memory and some parts practically efficiently, so its very theoretical and experimental can a neuralnet learn what will and wont halt (can make mistakes but should converge toward more accurate). In other words, compile https://en.wikipedia.org/wiki/Iota_and_Jot to run on up to an infinite number of threads at once. Possible products that could be improved include increasing the number of simultaneous database connections that can write lock and read lock complex combos (by soft-locking the shared state as a weighted-sum of goal-functions, such as the goal of "the sum of these numbers equals 324532451234" combined with the goal-func of "only prime numbers are included", could both lock a "shared state" at once, and that "shared state" would be a lambda just another node in the quasicrystal)... and after soft-locking on energy gradient can check many possible solutions by hard lambda constraints, if could get past that it would be thousands of times slower than normal code, if 1 million threads try to do locks together all at once, this way might be many times faster than existing databases. Or just see what it can do with existing lambda programming languages, after it understands lambdas. A different quasicrystal (or outerjoin them into 1 quasicrystal) might be to simulate https://en.wikipedia.org/wiki/Delayed-choice_quantum_eraser and a https://en.wikipedia.org/wiki/Ring_laser_gyroscope in realtime, as a 4d block of spacetime, on a html5 canvas, and possibly try to compress images of raw elements along with their place in the periodic table to make a prediction of what elements were not included in the training set. Anything that has alot of dimensions and low kolmogorov-complexity might be a good fit for this possible kind of graph-neuralnet. Its already known that graph-neuralnets are good at computing game physics. There might also be interesting overlap with the wolfram physics project which is graph based. Many possibilities.

To answer https://en.wikipedia.org/wiki/Newcomb%27s_paradox this kind of graph-neuralnet, in general, prefers time-traveller-paradoxes which have less number of "loops around or variants" (kolmogorov-complexity related) needed to make it consistent, such as https://en.wikipedia.org/wiki/Russell%27s_paradox (todo verify thats what i was thinking of) aka "does the barber who shaves exactly everyone who does not shave themself, shave himself?", or "what if you go back in time and kill your grandfather so you dont exist to kill him so he lives so you do exist to kill him", requires 2 times around, similar to in a doubleslit at least 2 of the thing exist, and you must pay energy for that. This kind of graph-neuralnet does not recognize the existence of time, except maybe as a local approximation, so has no need to form a consistent theory of events being before or after eachother like in newcombs paradox. Time-symmetry-breaking, baryogenesis, etc, should in theory be explained by some kind of timeless infinite-dimensional shape which does not change over time, is just a thing that tends to remain forever during heat-death even after the last particle decays, and that we are currently in heat-death and entropy is not created or destroyed. Heat is some kind of very high frequency (or otherwise very chaotic) whitenoise, and the simplest kind of whitenoise has been proven unitary aka fractionalFourier(x)^4==x and fractionalFourier^dt where dt sums to 4 also == x, and same for -dt or -4 etc. For example. Not saying the "simplest kind of whitenoise" covers everything that happens, but after infinite time any simple sine wave has not decayed into heatdeath, and I blame the whole concept of heatdeath on the unproven idea that there are more possible futures than possible pasts. If so, pigeonhole for me this, which past did you come from, which you just flipped a coin and then saw it land heads, and show me the physics of where its in the air then lands tails and that should somehow have happened differently than "this lightcone", unless equally often these things ALL happen. To those who ask "where is the multiverse", I say theres more than 1 electron and its right in front of you. https://en.wikipedia.org/wiki/One-electron_universe IF there is only 1 electron, then the otherwise intractably-chaotic movements of a plasma or bose-condensate of many electrons should be easier to simulate than if they were statistically independent. Whether that, and a rabbit-hole of possible combos of possible-questions and possible-answers, I leave between all of you and whatever maybe true or false or wordsalad. BTW I use trinary logic, all possible statements are true, false, or wordsalad, such as "the barber who shaves exactly everyone who does not shave themself" is wordsalad yet still refers to a mobius, of longer path length to go around it, than "the barber who shaves exactly everyone who shaves themself" (which has 2 solutions, being everyone_whoIsShaved or everyone_except_that_barber_whoIsShaved, in both cases leading to some extra shaves if they also shave themself, unless they only shave themself when they dont go to the barber)... I'm kind of confused by this web of possible lambdas... but as far as this system works out it wil provide 256 bit secure ids of every unique lambda function involved so peer review can sort that out, and permlinks such as papers can refer to specifiic quasicrystal node ids in the space of all possible mathematical quasicrystals of a certain set of opcodes. These ids are a hash of godel-like numbering of them. The neuralnet will verify theory matches those 256 bit ids (so at large cost you could code a DHT based getById('...') set (not viewed as a lambda but as recognizer function of possible params/returns, TODO possible new RAID levels trading compute time for memory), but may be optimized to compute the ids using the CPU or other ways.

TODO make the neuralnet try to do this https://github.com/benrayfield/hypercubewave (see pics of hypercube whose corners are each each -1 or 1, displayed at many dimensional rotations, looks like subset-sum waves (blur would be by a small number of edges that together can sum to 0 or 1 or few other numbers unlikely to be observed, so by (at least approximating?...) all paths on that can make pascals triangle's lower binary digit ( https://en.wikipedia.org/wiki/Elementary_cellular_automaton#Rule_60 (aka xor of the 2 bits upleft and up) says "Rule 60
The sequence generated is 1, 3, 5, 15, 17, 51, 85, 255, ...(sequence A001317 in the OEIS). This can be obtained by taking successive rows of Pascal's triangle modulo 2 and interpreting them as integers in binary, which can be graphically represented by a Sierpinski triangle." ), which approximates a bellcurve and an n-sphere at every constant density but different radius of nsphere at adjacent density)... so basically you just copy any picture moved and over itself, negated, for n directions/distances/dx/dy, and nomatter what order you do that it makes the same pic. That might be a good demo, of there being factorial(n) ways to call a specific n lambdas on eachother that all return the same lambda, controlled by the mouse and keyboard like in that working demo.
