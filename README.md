# hyperquasicrystal

UPDATE: just 1 cardinality above the lambdas, as in https://github.com/benrayfield/hyperquasicrystal/blob/main/lambdaGameTree12EdgeTypesHypercomputing_theNewDesign2022-1-28%2B.txt

Big changes in that, compared to the only similar design below.

The ids will look like λDY8pvwNhj5DtiJBdyzN5H5kS1Hrc3286zZ8mKKnmkPHj similar to #hashtag . Thats a 256 bit number. Nobody can change its relations to other numbers. Hopefully people will use these like hashtags, and as javascript lambdas like plus = λDY8pvwNhj5DtiJBdyzN5H5kS1Hrc3286zZ8mKKnmkPHj; seven = plus(5)(2); addFive = plus(5); seven==addFive(2) is true, and plus(2)(5)==plus(5)(2) is true. These are all lambdas, and I have lambda equality working in earlier versions. ''+plus(5) would give another such id, and so would ''+plus(2)(5) and ''+plus(5)(2) which would give the same id, even though ''+plus(2) and ''+plus(5) are different ids. ''+identityFunc(5) would give the id of 5, since 5 is not a lambda you have to give it as a param to something before it becomes one.

There is no data outside the 256 bit ids (which there can safely be up to 2^80 (about a trillion trillion) of at once (excluding those garbage collected), or unsafely about up to 2^191 of) in theory). Other than the possibility that 256 bits may be made up (randomly or intentionally), which could eventually be detected by those who shared idXyz not being able to share the 2 child ids of idXyz which a deterministic function takes 512 bits and generates those 256 bits. But to at least have a "sanity check" built in, maybe it should be shared as 3 ids at once, a parent and its 2 childs, though just 1 is enough. Also, 99.6% of random 256 bits fit in a 256 bit id, and 100% of 256 bit fit in either that or a parent and its 2 childs so 3 of 256 bit ids, of 128 literal bits in the 2 childs. So considering internal tree nodes, thats about 49% (or less, for hashing, database, or other file or memory organizing) storage efficency in ids alone, unless you for example share 1kB or 16kB blobs with the exact same 256 bit id derivable from those bits, in which case it will limit to 100%-epsilon storage efficiency. Also, all possible id generator functions are alreedy included by default and have exactly 0 hash collisions in total due to being the space of all possible lambda functions, but we've got to be practical and use some specific few functions at some specific moments of here and now, even though the system is entirely timeless and would maybe be most efficiently run on some kind of time-crystal-computer (in which case you only need to store 1 or maybe 7 bits per node, and 3 outgoing edges per node (2 of which are trivially known, and 1 of which is a row of stochastic matrix (if viewed as a puzzle in direction of reverse computing, but otherwise is fast enough to memory mapped blit the screen in some cases) in theory), which actually is all derivable from 0 bits). Also, by design, 100% of utf8 strings of 0-31 bytes (or 32 bytes if you assume the length) fit in a 256 bit id, at least the bits themselves, TODO consider the typeval opcode.

Λ is prefix of wikibinator202 ids. 
λ is prefix of hyperquasicrystal ids, whether they are in standalone hyperquasicrystal or mounted in a wikibinator202 opcode its the same id.
Hyperquasicrystal will be 1 of the opcodes in wikibinator202 which is a less strict more optimizable universal function.

While there are details to work out, the topology of hyperquasicrystal is an actual quasicrystal and is turing-complete, and that includes that it will compute its own ids and can opensource-fork-edit in realtime at gaming-low-lag replace or add new kinds of ids (just another lambda that makes ids of lambdas)... Any id generator which can not generate the id of itself, and of a few random other lambdas (some of which are the other id generators) without knowing that its parameter happens to be itself, or if it can not (and this might be taking it to extremes that are not that often verified but if security is tightened...) generate the same id as n random variants of emulator of itself generates given the same m random params, including some few random emulations of emulations of randomly selected pieces of those randomly generated emulators, is automatically invalid. It can in theory pass pointers between x which is an emulator of y while y is an emulator of x, as it has no time nor obligation to obey an "order of events". It is by design a subset of the "facts of math" and has no state at all to get tangled up in what happened before or after what else. There is 0 entropy change.

While I speculate and hope that this might lead to something bigger, the main usecase of it as of now (2022-1) is that if wikibinator202 is attacked that it may retreat to a stronger position of being wrapped inside hyperquasicrystal, as may any other data and turing-complete patterns, that whoever wants to may so wrap (even those who, in this theoretical example, may have attacked wikibinator202 andOr hyperquasicrystal, as a strong math based defense in theory does not depend on others not knowing it), and share among those who choose to receive it, and not among those who dont want to receive, with ultra high protection of data integrity, redundancy/mirroring, automatic load-balancing, and turing-complete-challenge-response (in theory someday maybe).

---

(TODO) A 7 (UPDATE: 8) parameter universal function defined as an energy function on stochastic pointers in a hypercomputation directedGraph. A universal function approximator. A way of organizing possibly every or nearly every statement in every math book ever written. An actually callable system of lambdas for massively multiplayer gaming and number crunching on GPU and possibly hypercomputation-capable manifold based hardware.


TODO (in the forward-computing VM, not the VM that runs slower cuz of doing everything as neuralnets, though they both compute in the exact same directedGraph with the same ids) emulate (a simpler form of) these using the universal combinator: http://github.com/benrayfield/listweb so i have a UI to drag and drop a web of bookmarks and notes about specific combinators and to make a code editor and evaler in the textarea, and https://github.com/benrayfield/hypercubewave as a graphics demo that can be built inside the code editor. When the listweb window (containing a bitstring made of church-pairs of -pairs... of -pairs of church-true or church-false lambdas, for every bit in its pixels or at first just the utf8 bits of the text), causes smooth nonlinear curves to appear on the screen (in a html canvas that views a graph node as pixels)... I mean for that to be a node in the graph, so I could then split the program into a multiverse of possible texteditors and possible programs that could be coded in them, including that the multiverse forks can have pointers to multiple multiverse forks (lambdas) and call the lambdas on eachother, and any lambda coded in this web of text editors across the internet (nodes will have 256 bit secure ids)... anything that 2 people code in these text editors, generates the same node in the graph. For example, 2 people both write a fibonacci function, that happens to have the exact same 2-way forest of lambda calls (there are many possible fibonacci functions if you only count the param/return pairs, but if you also count the internal structure of the lambdas which can be measured by lambdas looking at eachothers internals, then those are not forks to be merged but were already part of the constant directedGraph. If you make a lambda in 2 different code editors on 2 different screens, an equals function can say so. There is no fork-edit-merge cycle. Every tiny change, even a single bit, has its own godel-like-numbering.

In this system, you casn have a lazyEvalOfDoesPEqualNP and a lazyEvalOfAreThereAnInfiniteNumberOfTwinPrimes and can call (ifElse (and lazyEvalOfDoesPEqualNP lazyEvalOfAreThereAnInfiniteNumberOfTwinPrimes) ifTrue... ifFalse...), though there may be a few more lambdas inside of that to handle literal vals vs lazy vals etc. You can of course make an eval(codeString) function for any syntax you like. That doesnt mean it will be able to run the code, but with the help of neuralnet it will be able to try to run it and converge toward more accurate directedGraph edges in the hyperquasicrystal, where each node has 1 outgoing edge of each edgetype, and there might be 4 edgetypes (maybe a few more, still working out details). see hyperquasicrystal.js for theory on 3-way-calls of <cardinality func param> in lazyevals avoids nodes having cardinality but can still do cardinality "on the stack", and the stack only exists in combos of lazyevals, and lazyevals only have l/green/func and r/blue/param childs and do not have cardinality child. so an equals function will be derived (like it has been in wikibinator106, a different universal function without cardinality), where any 2 nodes can be checked for equality and that call is guaranteed to halt, including (equals equals equals)->true.
	
https://arbital.com/p/hypercomputer/ 2021-10-7 QUOTE Hypercomputer
A "hypercomputer" is an imaginary artifact required to answer some crisp question that can't be answered in the limit of arbitrarily large finite computers. For example, if you have a question that depends on a general solution to the Halting Problem, then we say that to solve this problem requires a "hypercomputer", and in particular, a level-1 halting oracle. (If you need to determine whether programs on level-1 halting oracles halt, you need a level-2 halting oracle, which we would also call a "hypercomputer".)
UNQUOTE.
I would not call that a halting-oracle since that implies it can be called at same level/cardinality which can be disproven by creating a lambda that calls a halting-oracle on the lambda recursively to ask what the lambda would do in that case that is happening right now, then the lambda by design does the opposite, disproving-by-contradiction halting-oracles. I instead call it doesItHaltAtLowerCardinalityThanCaller.

	
New complete list of opcodes 2021-10-7+[
	...TODO...
	
	TODO If 8 params, then call them a b c d w x y z.
	TODO If 7 params, then call them a b c d x y z. Try to fit the opcodes in 7. If too many, use 8.
	u means the universal function, the leaf where all l/r paths lead. i means (f u) aka identityFunc.
	(l u) equals (f u) aka identityFunc. (r u) equals u. ((l u)(r u)) equals u, compatible with "forall j ((l j)(r j)) equals j".
	
	o8 is a cache of the binary forst (l/green and r/blue childs) shape to a constant depth.
	In neuralnet or optical computer or just plain javascript, its expected o8 will be directly stored.
	For example, in an optical computer, o8 would be some kind of 1 wavelength offset to shift by 1 bit
	and somehow also put a 0 or 1 where shifted to get a "ones digit place" and to shift out the 7th digit
	in case it goes too far. nothing should ever have 8 or more params aka "too far" so that would have
	to be fixed by energy function already tending to fix that kind of thing. Its probably best
	to not try to remove the high 7th digit so theres just not room to make that error.
	
	o8 is an integer from 1 (aka 00000001) to 255 (aka 11111111) and can be any bitstring of 0-7 bits.
	o8 can be derived from the other operators.
	(o8 u) is 1.
	(o8 (u u)) is 2.
	(o8 (u (u u))) is 3.
	(o8 (u u u)) is 4.
	(o8 (u u (u u))) is 5.
	(o8 (u (u u) u)) is 6.
	(o8 (u (u u) (u u))) is 7.
	(o8 (u s l)) is 7.
	(o8 (u anything_except_u anything_but_u)) is 7. In general, the first 7 params being u vs anything_except_u, each param is a bit in o8. And a high 1 bit.
	and so on up to 255, by binheap indexing. (o8 j) equals ((o8 (l j))<<1)|((o8 (r j))==1 ? 1 : 0) except o8 of u is 1.
	u is identified by its the only node j where (r j) equals j, aka (r u) equals u. TODO update "((o8 (l j))<<1)|((o8 (r j))==1 ? 1 : 0)" to include that.
		aka copy o8 from left child, shift up by 1 bit, and put a 1 in ones digit if right child is u, else leave the 0 in ones digit.
	o8 of 0 (aka 00000000) is not a valid o8 that any lambda call can see, but in neuralnets it might be a useful way to say "dont know o8",
		and I'm going to write 00000000 beside each opcode below and fill them in later, after I decide exactly which set of opcodes...
	
	The universal function takes 8 params, so (u a b c d w x y z)->returnVal or does not halt or caller does not have enough cardinality.
		All the opcodes are lambdas of 8 params, so they are overlapping, and which of them happens depends on o8.
	
	00000000
	h //λa.λb.λc.λd.λw.λx.λy.λz.(((s i) i) ((s i) i)) //a semantic for red edge to say "halted on y". (s i i (s i i)) is an infinite loop.
	
	00000000
	TODO_op_for_semantic_of_red_edge_goes_here_to_mean_does_not_halt
	
	00000000
	TODO_op_for_semantic_of_could_not_use_red_edge_cuz_caller_doesnt_have_enuf_cardinality_to_get_that_answer
	
	00000000
	g //λa.λb.λc.λd.λw.λx.λy.λz.(((s i) i) ((s i) i)) //linkedlist of cardinality as unary number, used with (tii (g (g (g (g u)))) aFunc aParam) or ttt etc.
	
	00000000
	e //<getCardinality at this part of "the stack". Lambda calls take 3 params: cardinality, func, param.
	//Only func and param exist in halted lambdas.
	//All lambdas are halted, and cardinality only exists inside the l/func and r/param childs of lazyeval* ops.
	//A lazyeval is a lambda that waits on 1 more param to trigger lazyeval,
	//but that param never actually comes as the compute steps are instead done as more lazyevals.
	//Thats how its a constant directedGraph.
	
	00000000
	s //λa.λb.λc.λd.λw.λx.λy.λz.((x z)(y z)) //aka the s lambda of https://en.wikipedia.org/wiki/SKI_combinator_calculus
	
	00000000
	t //λa.λb.λc.λd.λw.λx.λy.λz.y //aka the church-true lambda //aka the k lambda of https://en.wikipedia.org/wiki/SKI_combinator_calculus
	
	00000000
	f //λa.λb.λc.λd.λw.λx.λy.λz.z //aka the church-false lambda
	
	00000000
	l //λa.λb.λc.λd.λw.λx.λy.λz.<left/green child of z, where forall j ((l j)(r j)) equals j>
	
	00000000
	r //λa.λb.λc.λd.λw.λx.λy.λz.<right/blue child of z, where forall j ((l j)(r j)) equals j>
	
	00000000
	v //λa.λb.λc.λd.λw.λx.λy.λz.<<(r z) equals z> ? t : f> //aka returns t or f depending if z is u. forall j if (r j) equals j then j equals u.
	
	00000000
	p //λa.λb.λc.λd.λw.λx.λy.λz.((z x) y) //aka church-pair lambda. forall j forall k (p j k t) equals j. forall j forall k (p j k f) equals k.
	
	00000000 //if first param is anything_except_leaf this happens.
	n //λa.λb.λc.λd.λw.λx.λy.λz.(a(p(uabcdwxy)z)) //how most human-readable functions are made.
		//aka a is funcBody, called on datastruct that includes all the λa.λb.λc.λd.λw.λx.λy.λz params. can recurse a.
	
	00000000
	wiki λa.λb.λc.λd.λw.λx.λy.λz.<whatever map of node->node the "wiki" is (all nondeterminism goes here only in dirty lambdas), return (thatFunc z)>
	
	00000000
	isClean λa.λb.λc.λd.λw.λx.λy.λz.<<is z a clean (instead of dirty) lambda> ? t : f>.
	There are 2 universal functions, cleanLeaf and dirtyLeaf.
	cleanLeaf can only ever generate clean nodes,
		and its the only one that can intheory run in manifold based kinds of hardware (in theory, if it can ever do that at all).
		Dirty can have clean childs andOr dirty childs. But clean can only touch clean. So dirty is a layer above the clean layer,
		that clean is not affected by since clean is completely deterministic. All nondeterminism goes in dirty lambdas. Dirty is
		basically a mirror of clean thats nonstrict,
		allows many computers and people to converge to a shared state of some "wiki" function, or of parts of it (is an infinite
		size turing-complete space)
		such as "temp calculations" using a stateful optimization with "salt" to create variations of lambdas so can call them again
		like if there wasnt enough compute time or memory to get it done the first n times you tried, you can still try again
		In the clean lambdas, if you give up early on a lambda call, cuz its taking too long or too much memory,
		then the other lambdas wont know about that giving up. They dont remember that it failed,
		because its a kind of math where every calculation succeeds, but you can still choose not to explore deeper into any part you dont want to.
	
	00000000
	truncateToClean
	FIXME should it just infloop if clean is called on dirty, or should it call truncateToClean?
	
	FIXME do I need a red opcode or a doesItHaltAtLowerCardinalityThanCaller opcode or both? red is 1 higher cardinality than doesItHalt, cuz you can only know if something will halt if its at least 1 lower cardinality than you. (g u) is the lowest cardinality. (g (g u)) is the next up. (g (g (g u))) is the next up from that, and so on.
	Red edge is at 1 higher cardinality than self since it knows if self will halt if self is called on u
	(TODO red edge is mostly useful from lazyeval/iii/itt/iit/iti objects, so its not exactly "if self will halt".
	Its if will halt at a cardinality, and the lazyeval has 3 things in it the cardinality, func, and param, and the red edge is about that 3-way-call,
	and red edge is never to TODO_op_for_semantic_of_could_not_use_red_edge_cuz_caller_doesnt_have_enuf_cardinality_to_get_that_answer
	but red edge can be to (h returnVal) or to TODO_op_for_semantic_of_red_edge_goes_here_to_mean_does_not_halt.
	doesItHaltAtLowerCardinalityThanCaller deterministicly returns TODO_op_for_semantic_of_could_not_use_red_edge_cuz_caller_doesnt_have_enuf_cardinality_to_get_that_answer in some cases.
	00000000
	red //related to doesItHaltAtLowerCardinalityThanCaller
	//λa.λb.λc.λd.λw.λx.λy.λz.<If <at cardinality (nextLowerCardinality (getCardinality u))> does (z u) halt, and if so return (h (z u)) else return one of
	//	TODO_op_for_semantic_of_red_edge_goes_here_to_mean_does_not_halt or
	//	TODO_op_for_semantic_of_could_not_use_red_edge_cuz_caller_doesnt_have_enuf_cardinality_to_get_that_answer>
	
	//see comments around "red" opcode. I'm unsure if should have red, doesItHaltAtLowerCardinalityThanCaller, or both.
	//Must be at least 1 of those 2, cuz its the only thing cardinality is useful for in this system.
	doesItHaltAtLowerCardinalityThanCaller
	00000000
	
	//8 kinds of lazyeval (could have been 1 kind but would be harder for people to read the i's and t's inside them,
	//and would be and less efficient, without the 8), that choose for 3 childs to be lazyevals vs literals:
	
	//WHY THE names iii iit iti itt tii tit tti ttt:
	//Example: iti does λa.λb.λc.λd.λw.λx.λy.λz.<with cardinality (x u), return (y (z u))>
	//aka <with cardinality (i x u), return ((t y u) (i z u))>. aka <with cardinality (i x u), return (t y u (i z u))>.
	//Use "i" with lazyeval inside lazyeval. Use "t" to quote a literal lambda inside a lazyeval.
	//Each lazyeval is a 3-way call of cardinality, func, and param,
	//where for each of those 3 it can be another lazyeval (call on u to trigger lazyeval) or a literal value.
	
	
	FIXME push all these x y z back to w x y, and ignore z as its how lazyeval is triggered.
	That takes more opcode space.
	Must do one of these things:
	* change to 9 param universal func, or
	* reduce to 4 kinds of lazyeval and always use cardinality or (t cardinality) so cardinality can still be literal or lazy (remove tii tit tti ttt), or
	* reduce to 1 kind of lazyeval and all 3 of them do the i or t.
	Probably 4 kinds is ok, and you can just reuse a lazyeval that already has a cardinality,
	since all lambdas are reusable with already having more or less curries. Its mostly the func and param (not cardinality) that varies anyways.
	
	
	"FIXME push x y z back to w x y, and z is ignored but triggers lazyeval"
	00000000
	iii //λa.λb.λc.λd.λw.λx.λy.λz.<with cardinality (x u), return ((y u) (z u))>  //lazyEval identityFunc identityFunc identityFunc of 3-way call. (i j u) uses j as a lazyEval. (t j u) uses j as a quoted literal.
		//red edge would return (h ((y u) (z u))) if halted, or 1 of these 2 (todo finish defining those) ops (might just be 2 constants, or take 1 param each as some kind of "message"?):
			//TODO_op_for_semantic_of_red_edge_goes_here_to_mean_does_not_halt
			//TODO_op_for_semantic_of_could_not_use_red_edge_cuz_caller_doesnt_have_enuf_cardinality_to_get_that_answer
	
	"FIXME push x y z back to w x y, and z is ignored but triggers lazyeval"
	00000000
	iit //λa.λb.λc.λd.λw.λx.λy.λz.<with cardinality (x u), return ((y u) z)> //lazyEval identityFunc identityFunc true of 3-way call. (i j u) uses j as a lazyEval. (t j u) uses j as a quoted literal.
	
	"FIXME push x y z back to w x y, and z is ignored but triggers lazyeval"
	00000000
	iti //λa.λb.λc.λd.λw.λx.λy.λz.<with cardinality (x u), return (y (z u))> //lazyEval identityFunc true identityFunc of 3-way call. (i j u) uses j as a lazyEval. (t j u) uses j as a quoted literal.
	
	"FIXME push x y z back to w x y, and z is ignored but triggers lazyeval"
	00000000
	itt //λa.λb.λc.λd.λw.λx.λy.λz.<with cardinality (x u), return (y z)> //lazyEval identityFunc true true of 3-way call. (i j u) uses j as a lazyEval. (t j u) uses j as a quoted literal.
	
	/*
	00000000
	tii //λa.λb.λc.λd.λw.λx.λy.λz.<with cardinality x, return ((y u) (z u))> //lazyEval true identityFunc identityFunc of 3-way call. (i j u) uses j as a lazyEval. (t j u) uses j as a quoted literal.
	
	00000000
	tit //λa.λb.λc.λd.λw.λx.λy.λz.<with cardinality x, return ((y u) z)> //lazyEval true identityFunc true of 3-way call. (i j u) uses j as a lazyEval. (t j u) uses j as a quoted literal.
	
	00000000
	tti //λa.λb.λc.λd.λw.λx.λy.λz.<with cardinality x, return (y (z u))> //lazyEval true true identityFunc of 3-way call. (i j u) uses j as a lazyEval. (t j u) uses j as a quoted literal.
	
	00000000
	ttt //λa.λb.λc.λd.λw.λx.λy.λz.<with cardinality x, return (y z)> //lazyEval true true true of 3-way call. (i j u) uses j as a lazyEval. (t j u) uses j as a quoted literal.
	*/
	
	
	
	todo_ops_for_isclean_wikiAsFuncOfIntegerToIntegerToBeLearnedByExampleAndFitByConstraintsEtcButWhereIscleanWikiCalledOnAnythingEvalsTo(sii(sii))
	
	
	
	Edgetypes (every node in a hyperquasicrystal has exactly 1 outgoing edge of each type):
	x--green-->(l x)
	x--blue-->(r x)
	x--red--> <if (x u) halts on returnVal then (h returnVal), else todo TODO_op_for_semantic_of_red_edge_goes_here_to_mean_does_not_halt else todo TODO_op_for_semantic_of_could_not_use_red_edge_cuz_caller_doesnt_have_enuf_cardinality_to_get_that_answer>
	x--step--> <debugger step, see "step_edge" farther below. This is where all the opcodes are implemented. but there are only 3 steps from anything, for a 3-way-call by iii itt ... ttt etc, and the steps inside those are their 3-way call, and so on. This is something I havent fully worked out, but its similar to callquad datastruct in occamsfuncer, and similar to the planned debugStepOver and debugStepInto ops in wikibinator106 and wikibinator107, and you might need to make more datastructs out of pairs/p etc to navigate "the stack"... I'll figure out these details and make testcases.>
	
	TODO start filling in green, blue, red, and step edges in the CONSTANT directedGraph. These will be facts of math, not a place to store mutable data.
	
]


    
    

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
	
[
	TODO maybe after that...

	I suspect theres virtual-positrons, aka a curved pbrane sticking in the antimatter direction,
	somewhere between the electrons, and that it might be a way to store antimatter more efficiently (a passive component / unpowered)
	than the usual vacuum magnetic bottle way, like a tetraquark can have both matter and antimatter
	parts touching eachother but it doesnt explode as expected.

	https://en.wikipedia.org/wiki/Wigner_crystal

	https://en.wikipedia.org/wiki/Positron

	https://en.wikipedia.org/wiki/Tetraquark
]

To answer https://en.wikipedia.org/wiki/Newcomb%27s_paradox this kind of graph-neuralnet, in general, prefers time-traveller-paradoxes which have less number of "loops around or variants" (kolmogorov-complexity related) needed to make it consistent, such as https://en.wikipedia.org/wiki/Russell%27s_paradox (todo verify thats what i was thinking of) aka "does the barber who shaves exactly everyone who does not shave themself, shave himself?", or "what if you go back in time and kill your grandfather so you dont exist to kill him so he lives so you do exist to kill him", requires 2 times around, similar to in a doubleslit at least 2 of the thing exist, and you must pay energy for that. This kind of graph-neuralnet does not recognize the existence of time, except maybe as a local approximation, so has no need to form a consistent theory of events being before or after eachother like in newcombs paradox. Time-symmetry-breaking, baryogenesis, etc, should in theory be explained by some kind of timeless infinite-dimensional shape which does not change over time, is just a thing that tends to remain forever during heat-death even after the last particle decays, and that we are currently in heat-death and entropy is not created or destroyed. Heat is some kind of very high frequency (or otherwise very chaotic) whitenoise, and the simplest kind of whitenoise has been proven unitary aka fractionalFourier(x)^4==x and fractionalFourier^dt where dt sums to 4 also == x, and same for -dt or -4 etc. For example. Not saying the "simplest kind of whitenoise" covers everything that happens, but after infinite time any simple sine wave has not decayed into heatdeath, and I blame the whole concept of heatdeath on the unproven idea that there are more possible futures than possible pasts. If so, pigeonhole for me this, which past did you come from, which you just flipped a coin and then saw it land heads, and show me the physics of where its in the air then lands tails and that should somehow have happened differently than "this lightcone", unless equally often these things ALL happen. To those who ask "where is the multiverse", I say theres more than 1 electron and its right in front of you. https://en.wikipedia.org/wiki/One-electron_universe IF there is only 1 electron, then the otherwise intractably-chaotic movements of a plasma or bose-condensate of many electrons should be easier to simulate than if they were statistically independent. Whether that, and a rabbit-hole of possible combos of possible-questions and possible-answers, I leave between all of you and whatever maybe true or false or wordsalad. BTW I use trinary logic, all possible statements are true, false, or wordsalad, such as "the barber who shaves exactly everyone who does not shave themself" is wordsalad yet still refers to a mobius, of longer path length to go around it, than "the barber who shaves exactly everyone who shaves themself" (which has 2 solutions, being everyone_whoIsShaved or everyone_except_that_barber_whoIsShaved, in both cases leading to some extra shaves if they also shave themself, unless they only shave themself when they dont go to the barber)... I'm kind of confused by this web of possible lambdas... but as far as this system works out it wil provide 256 bit secure ids of every unique lambda function involved so peer review can sort that out, and permlinks such as papers can refer to specifiic quasicrystal node ids in the space of all possible mathematical quasicrystals of a certain set of opcodes. These ids are a hash of godel-like numbering of them. The neuralnet will verify theory matches those 256 bit ids (so at large cost you could code a DHT based getById('...') set (not viewed as a lambda but as recognizer function of possible params/returns, TODO possible new RAID levels trading compute time for memory), but may be optimized to compute the ids using the CPU or other ways.

TODO make the neuralnet try to do this https://github.com/benrayfield/hypercubewave (see pics of hypercube whose corners are each each -1 or 1, displayed at many dimensional rotations, looks like subset-sum waves (blur would be by a small number of edges that together can sum to 0 or 1 or few other numbers unlikely to be observed, so by (at least approximating?...) all paths on that can make pascals triangle's lower binary digit ( https://en.wikipedia.org/wiki/Elementary_cellular_automaton#Rule_60 (aka xor of the 2 bits upleft and up) says "Rule 60
The sequence generated is 1, 3, 5, 15, 17, 51, 85, 255, ...(sequence A001317 in the OEIS). This can be obtained by taking successive rows of Pascal's triangle modulo 2 and interpreting them as integers in binary, which can be graphically represented by a Sierpinski triangle." ), which approximates a bellcurve and an n-sphere at every constant density but different radius of nsphere at adjacent density)... so basically you just copy any picture moved and over itself, negated, for n directions/distances/dx/dy, and nomatter what order you do that it makes the same pic. That might be a good demo, of there being factorial(n) ways to call a specific n lambdas on eachother that all return the same lambda, controlled by the mouse and keyboard like in that working demo.
