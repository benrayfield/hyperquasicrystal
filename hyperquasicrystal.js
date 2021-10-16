There is incomplete javascript code farther below.

TODO is it ok to not lazyeval cx or cardinality but do lazyeval func and param?

TODO the lazyeval ops will use this order: cx cardinality func param, cuz if !isCallsAre4ParamsVs3 then its just the last 3,
and dont want to interfere with the optimization of those 3 in the simplest case of clean, no ax constraints, and 3-way-calls,
which is the only one that specialized hardware might eventually be built for. it will be just javascript etc til then.
But it might be near equally fast as [cardinality cx func param] for that? and that one might be more intuitive for people.

TODO should 


TODO how do these 8 kinds of lambdas (powerset of isclean, isAllowAxa, and isCallsAre4ParamsVs3) interact?
truncateToClean? truncateToCardinality? TruncateToCantAxConstraint?
For each, you can go down, but you cant go up. similar to cardinality except thats more than a bit.
Should these go in cardinality?
SHOULD THESE GO "ON THE STACK"? Clean has to be part of the node, but isAllowAxa, and isCallsAre4ParamsVs3 could go on "stack".
Maybe clean and !isCallsAre4ParamsVs3 should go together?

from below QUOTE
FIXME withCx probably has to go in the lazyeval ops, which makes them too big for a universal func of 8 params???
	unless put cx in with cardinality since both of those are things that only exist on "the stack".
	If limit cx to never be u, and cardinality is never u (cuz lowest is (g u)???),
	then could get extra opcode space by putting the things that cant be u in the earlier params,
	since o8 is the 0-7 bits of are the first 7 params u or anything_except_u. So theres space.
	Maybe let cx be u, and just take the space of cardinality never being u? Or do I want the 8 kinds of lazyeval back?
UNQUOTE.
	

The tryRed op fixes the multiple cardinalities at once problem.
..
FIXME Still need to choose between the (g (g (g u))) model of cardinality
and the more flexible (g (g (infiniteCardinality (infiniteCardinality u)))) etc,
where infiniteCardinality is a cardinality above all integer number of g's cardinality
which means it can cross all those red edges,
and at infiniteCardinality you can write the statement
"at all integer cardinalities, forall x (equals (l x (r x)) x)",
which is a statement I actually want to write in the system.
But it has the same problem of it cant fully describe itself.
No cardinality level I know of can.
Maybe it should be a linkedlist or tree of cardinality,
something that would allow me to refer to an infinite depth of
(infiniteCardinality (infiniteCardinality (infiniteCardinality u))) etc,
and an infinite depth of those, and so on.
Any cardinality the system has a node for,
I want it to be able to define
an infinite depth of infinite cardinalities above that one as a specific integer,
Somewhere in there is the specific cardinality mr godel was working at,
and I want a node for every statement godel ever wrote and a node that
if evaled (its of course a lazyeval) disproves the consistency of his math axioms.
I want a node for the nth bit in a 3body simulation computed continuously,
and similarly any differential equation such as chuasCircuit
or 3body or a circuit of capacitors inductors resistors etc,
though I'm skeptical I'll be able to define that exactly since I only know how to
bound it in an ever smaller possible n dimensional range
(of where the x y x y x y positions and velocities could be at time t)
and the problem is that at rare places
those numbers have an infinite number of 0s
so it would require bounding it in an infinitely small possible range
to get a finite nth digit.
The nth digit of pi or e can be done with just normal lambdas,
but differential equations computed exactly and continuously for t time,
thats something much harder and I'm not sure if the recursions of infinite cardinality I mentioned are enough.
Some things maybe the system doesnt need to be able to do, they're just too hard.
So TODO choose a data structure for (getCardinality u) to return,
then get back to coding the javascript.

TODO?[
	1 isAllowAxa //2 halfs of the system where (axa anything) either works as usual vs always infloops.
	1 isCleanAkaIsAllowWiki //2 halfs of the system. the clean half cant see the dirty half. the dirty half can see dirty and clean.
	1 isCallsAre3ParamsVs2 [update 4 instead of 3?] //2 half of the system. in one half, the cx param is always leaf. In the
]

TODO plan vararg syntax. in wikibinator it would be a func called on a growinglist,
	but in hyperquasicrystal, since it has only 8 params, it would use pairs as a linkedlist.

/* This software is opensource MIT licensed by Ben F Rayfield, and of course
nobody owns the facts of math, even if theres a godel-like-number for such a fact.
This is a constant directedGraph with 4 (might be a few more, todo)
edge types. Its a specific math structure. This is also an incomplete
javascript implementation, and separate incomplete neuralnet
implementation, of a subset of that directedGraph, a subset enough
to call the universal function on itself to create any lambda
function (will work in both implementations), but outside that
subset, the space of hypercomputation can only be estimated and in
many parts will be too hard to estimate, but I do plan to manually
fill in parts of it for some common math statements involving combos
of Exists and ForAll of lambdas, especially the 2 examples of
"does P equal NP or not" and
"are there an infinite number of twin primes" since those will be
2 specific hyperlambdas you can derive from the universal function.
You will be able to derive them without evaling them (as lazyeval),
so the nodes are just "math questions", and the hypercomputation
part only exists when trying to eval/answer them.
*/

New complete list of opcodes 2021-10-8+[
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
		
		
	//00000000 //opcode
	//opName(log2 of how much opcode space it takes, total 128)
	
	00000000
	l(1 param) //λa.λb.λc.λd.λw.λx.λy.λz.<left/green child of z, where forall j ((l j)(r j)) equals j>
	
	00000000
	r(1) //λa.λb.λc.λd.λw.λx.λy.λz.<right/blue child of z, where forall j ((l j)(r j)) equals j>
	
	00000000
	tryRed(1) //λa.λb.λc.λd.λw.λx.λy.λz.<If (getCardinality u) is enough, (red z),
		//else TODO_op_for_semantic_of_could_not_use_red_edge_cuz_caller_doesnt_have_enuf_cardinality_to_get_that_answer>
		//Forall z (red z) returns (h some_return_val) or TODO_op_for_semantic_of_red_edge_goes_here_to_mean_does_not_halt.
		//(getCardinality u) returns the cardinality param of the "current" 3-way-call,
		//but since everything is done as lazyEvals, and never actually "is evaling" anything,
		//instead only growing the directedGraph that is the hyperquasicrystal,
		//there technically is no "current" 3-way-call, only lazy-evals of them.
		//Some of those lazy-evals would be of (tryRed z) for some z.
		//If z is another lazy-eval, then the current cardinality is checked against
		//the requested cardinality of z (its the first 4 params of a lazy-eval such)
		//to choose between giving where the red edge points at
		//vs saying theres not enuf cardinality.
	
	/*
	00000000
	lr(1) //λa.λb.λc.λd.λw.λx.λy.λz.(r (l z)) //an optimization useful for storing bitstrings as (pair (pair t t) (pair f t)) etc.
	
	00000000
	containsT(1) //λa.λb.λc.λd.λw.λx.λy.λz.(t or f, for does z recursively contain t). //optimization for sparse matrix etc.
	
	00000000
	isBits(1) //λa.λb.λc.λd.λw.λx.λy.λz.(t or f, for is z (pair (pair t t) (pair f t)) etc, to any depth such as 2^40 bits.
	
	00000000
	containsAxConstraint(1) //λa.λb.λc.λd.λw.λx.λy.λz.(t or f, for does z recursively contain (axa anything)). always f if not isAllowAxa.
	*/
	
	TODO
	isAllowAxa(1) //2 halfs of the system where (axa anything) either works as usual vs always infloops.
	isCleanAkaIsAllowWiki(1) //2 halfs of the system. the clean half cant see the dirty half. the dirty half can see dirty and clean.
	?? isCallsAre4ParamsVs3(1) //2 half of the system. in one half, the cx param is always leaf. In the other, it can be anything (of compatible cardinality).
	
	00000000
	ax(2) //λa.λb.λc.λd.λw.λx.λy is halted if (y u) halts or if !isAllowAxa. λa.λb.λc.λd.λw.λx.λy.λz.(y (t z)) regardless of isAllowAxa.
	//This op has a strange cardinality, that it can be computed at current cardinality, but it takes 1 higher cardinality to verify,
	//which is why theres a !isAllowAxa section to not have to deal with that.
	//This also makes quodel (godel-like-numbering) different or I'm not sure it can even be computed in the isAllowAxa section,
	//but it can be in the !isAllowAxa section and you can do everything there if you want.
	
	
	00000000
	h(2 params) //λa.λb.λc.λd.λw.λx.λy.λz.(((s i) i) ((s i) i)) //a semantic for red edge to say "halted on y". (s i i (s i i)) is an infinite loop.
	
	00000000
	TODO_op_for_semantic_of_red_edge_goes_here_to_mean_does_not_halt(1)
	
	00000000
	TODO_op_for_semantic_of_could_not_use_red_edge_cuz_caller_doesnt_have_enuf_cardinality_to_get_that_answer(2)
	
	00000000
	g(2) //λa.λb.λc.λd.λw.λx.λy.λz.(((s i) i) ((s i) i)) //linkedlist of cardinality as unary number, used with (tii (g (g (g (g u)))) aFunc aParam) or ttt etc.
	
	TODO if 4way calls (cardinality cx func param) instead of 3way (cardinality func param),
	then need an op to put in the cx and to get cx (from "stack").
	This would infloop (by design) if its not in the isCallsAre4ParamsVs3
	lambdas. isclean, isAllowAxa, and isCallsAre4ParamsVs3 are like a few options or sections of the system,
	that make it easier for people to use, but I'm not sure if all of those cost more than they're worth.
	//
	withCx(2) //λa.λb.λc.λd.λw.λx.λy.λz.<with cx of y, return (z u)>.
	//
	getCx(1) //λa.λb.λc.λd.λw.λx.λy.λz.<get the cx param in highest withCx on "the stack", or u if not isCallsAre4ParamsVs3>.
	FIXME withCx probably has to go in the lazyeval ops, which makes them too big for a universal func of 8 params???
	unless put cx in with cardinality since both of those are things that only exist on "the stack".
	If limit cx to never be u, and cardinality is never u (cuz lowest is (g u)???),
	then could get extra opcode space by putting the things that cant be u in the earlier params,
	since o8 is the 0-7 bits of are the first 7 params u or anything_except_u. So theres space.
	Maybe let cx be u, and just take the space of cardinality never being u? Or do I want the 8 kinds of lazyeval back?
	
	00000000
	e(1) //<getCardinality at this part of "the stack". Lambda calls take 3 params: cardinality, func, param.
	//Only func and param exist in halted lambdas.
	//All lambdas are halted, and cardinality only exists inside the l/func and r/param childs of lazyeval* ops.
	//A lazyeval is a lambda that waits on 1 more param to trigger lazyeval,
	//but that param never actually comes as the compute steps are instead done as more lazyevals.
	//Thats how its a constant directedGraph.
	
	00000000
	s(3) //λa.λb.λc.λd.λw.λx.λy.λz.((x z)(y z)) //aka the s lambda of https://en.wikipedia.org/wiki/SKI_combinator_calculus
	
	00000000
	t(2) //λa.λb.λc.λd.λw.λx.λy.λz.y //aka the church-true lambda //aka the k lambda of https://en.wikipedia.org/wiki/SKI_combinator_calculus
	
	00000000
	f(2) //λa.λb.λc.λd.λw.λx.λy.λz.z //aka the church-false lambda
	
	00000000
	v(1) //λa.λb.λc.λd.λw.λx.λy.λz.<<(r z) equals z> ? t : f> //aka returns t or f depending if z is u. forall j if (r j) equals j then j equals u.
	
	00000000
	p(3) //λa.λb.λc.λd.λw.λx.λy.λz.((z x) y) //aka church-pair lambda. forall j forall k (p j k t) equals j. forall j forall k (p j k f) equals k.
	
	00000000 //if first param is anything_except_leaf this happens.
	n(6) //λa.λb.λc.λd.λw.λx.λy.λz.(a(p(uabcdwxy)z)) //how most human-readable functions are made.
		//aka a is funcBody, called on datastruct that includes all the λa.λb.λc.λd.λw.λx.λy.λz params. can recurse a.
	
	00000000
	wiki(1) λa.λb.λc.λd.λw.λx.λy.λz.<whatever map of node->node the "wiki" is (all nondeterminism goes here only in dirty lambdas), return (thatFunc z)>
	
	00000000
	isClean(1) λa.λb.λc.λd.λw.λx.λy.λz.<<is z a clean (instead of dirty) lambda> ? t : f>.
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
	truncateToClean(1)
	FIXME should it just infloop if clean is called on dirty, or should it call truncateToClean?
	
	00000000
	truncateToCardinality(1)
	
	/* red and doesItHaltAtLowerCardinalityThanCaller
	will instead be computed by the tryRed opcode, so commentedOut this.
	..
	..
	..
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
	..
	//see comments around "red" opcode. I'm unsure if should have red, doesItHaltAtLowerCardinalityThanCaller, or both.
	//Must be at least 1 of those 2, cuz its the only thing cardinality is useful for in this system.
	doesItHaltAtLowerCardinalityThanCaller
	00000000
	*/
	
	
	
	
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
	"FIXME also put cx in, and since u is not a cardinality, use only half as much opcode space, but twice as much to put cx in, so same, but cx is always u where !isCallsAre4ParamsVs3"
	00000000
	iii //λa.λb.λc.λd.λw.λx.λy.λz.<with cardinality (x u), return ((y u) (z u))>  //lazyEval identityFunc identityFunc identityFunc of 3-way call. (i j u) uses j as a lazyEval. (t j u) uses j as a quoted literal.
		//red edge would return (h ((y u) (z u))) if halted, or 1 of these 2 (todo finish defining those) ops (might just be 2 constants, or take 1 param each as some kind of "message"?):
			//TODO_op_for_semantic_of_red_edge_goes_here_to_mean_does_not_halt
			//TODO_op_for_semantic_of_could_not_use_red_edge_cuz_caller_doesnt_have_enuf_cardinality_to_get_that_answer
	
	"FIXME push x y z back to w x y, and z is ignored but triggers lazyeval"
	"FIXME also put cx in, and since u is not a cardinality, use only half as much opcode space, but twice as much to put cx in, so same, but cx is always u where !isCallsAre4ParamsVs3"
	00000000
	iit //λa.λb.λc.λd.λw.λx.λy.λz.<with cardinality (x u), return ((y u) z)> //lazyEval identityFunc identityFunc true of 3-way call. (i j u) uses j as a lazyEval. (t j u) uses j as a quoted literal.
	
	"FIXME push x y z back to w x y, and z is ignored but triggers lazyeval"
	"FIXME also put cx in, and since u is not a cardinality, use only half as much opcode space, but twice as much to put cx in, so same, but cx is always u where !isCallsAre4ParamsVs3"
	00000000
	iti //λa.λb.λc.λd.λw.λx.λy.λz.<with cardinality (x u), return (y (z u))> //lazyEval identityFunc true identityFunc of 3-way call. (i j u) uses j as a lazyEval. (t j u) uses j as a quoted literal.
	
	"FIXME push x y z back to w x y, and z is ignored but triggers lazyeval"
	"FIXME also put cx in, and since u is not a cardinality, use only half as much opcode space, but twice as much to put cx in, so same, but cx is always u where !isCallsAre4ParamsVs3"
	00000000
	itt //λa.λb.λc.λd.λw.λx.λy.λz.<with cardinality (x u), return (y z)> //lazyEval identityFunc true true of 3-way call. (i j u) uses j as a lazyEval. (t j u) uses j as a quoted literal.
	
	/*
	"FIXME push x y z back to w x y, and z is ignored but triggers lazyeval"
	00000000
	tii //λa.λb.λc.λd.λw.λx.λy.λz.<with cardinality x, return ((y u) (z u))> //lazyEval true identityFunc identityFunc of 3-way call. (i j u) uses j as a lazyEval. (t j u) uses j as a quoted literal.
	
	"FIXME push x y z back to w x y, and z is ignored but triggers lazyeval"
	00000000
	tit //λa.λb.λc.λd.λw.λx.λy.λz.<with cardinality x, return ((y u) z)> //lazyEval true identityFunc true of 3-way call. (i j u) uses j as a lazyEval. (t j u) uses j as a quoted literal.
	
	"FIXME push x y z back to w x y, and z is ignored but triggers lazyeval"
	00000000
	tti //λa.λb.λc.λd.λw.λx.λy.λz.<with cardinality x, return (y (z u))> //lazyEval true true identityFunc of 3-way call. (i j u) uses j as a lazyEval. (t j u) uses j as a quoted literal.
	
	"FIXME push x y z back to w x y, and z is ignored but triggers lazyeval"
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





SOLUTION??? 4 edgetypes: green blue red, and if you try to look across red when you dont have enough cardinality you instead get a specific response saying you dont have enough cardinality. Every edge can be proven, and every wrong edge can be disproven, in the hyperquasicrystal of 3 edge types between an infinite number of nodes. Nodes dont have cardinality. An equals function can be derived that measures equality between any 2 nodes, including itself.
FIXME??? Everything is 3-way-calls <hylevInteger func param>, but can only see the green and blue edges, and there is some 3way lambda call that generates any specific red edge, that could be done programmatically, and every node can be used with every node, but for every lambda call there is some red edge which is at a higher cardinality (on stack, not in the nodes themselves which only have debuggersteps/lazyevals/etc of that) which if the lower cardinality 3-way-call asked about it, would get the response "caller is not high enough cardinality to get this answer".
Equals function works on any 2 nodes, regardless of hylev/cardinality/etc. Nodes dont have cardinality. Only 3-way-calls do, and 3-way-calls dont exists except as lazyevals.
..
TODO create an opGetNameOfThisUniversalFunction, which might return "hyperquasicrystal_simplest" or "hyperquasicrystal_withWikiAndAxConstraints" or "someOtherSystemXYZversion5.32.1", etc. Different systems dont touch eachother that way, but makes it easier to organize opensource forks, and any 2 hyperquasicrystals can be outerjoined  by creating more edgetypes and possibly other databaselike ops.
...
TODO do I want opWiki, getCx, isClean, etc? Wiki should be thought of as a choice between all possible (including nonunitary) mappings of integer->integer, but we dont know which mapping it is yet as its something that grows sparsely in a p2p network, and it makes things harder to sync since people and computers can disagree on which integer->integer it is, which is why the isClean area uses wiki as integer->nonhaltingOrSomeConstant as if there is no opWiki at all.
..
in this system, you casn have a lazyEvalOfDoesPEqualNP and a lazyEvalOfAreThereAnInfiniteNumberOfTwinPrimes and can call (ifElse (and lazyEvalOfDoesPEqualNP lazyEvalOfAreThereAnInfiniteNumberOfTwinPrimes) ifTrue... ifFalse...), though there may be a few more lambdas inside of that to handle literal vals vs lazy vals etc. You can of course make an eval(codeString) function for any syntax you like.
..
put in an opWiki, and opIsClean, and all the other "complicated stuff" optionally goes in opWiki, or if opIsClean, then all that stuff is trivially nonhalting so is pure deterministic.
...
TODO compile the 3-edgetype directedgraph to a 1-edgetype undirectegraph (entirely timeless and directionless) and compile it to run on opticalcomputers, quantumcomputers, or possibly new or other kinds of computers.








SOLUTION?
use (Pair hylevInteger aLazyEval)--red-->someNode, and red would just point at leaf if its not such a datastruct.
..
Lambda calls would need a way to cross the red edge programmatically. It could only do so if such lambda call was at hylevInteger+1 or more, else the red edge would go to leaf (does not halt) OR maybe the red edge should tell between ["did not halt", "caller didnt have enough cardinality", or "halted by this returnVal"], so that way lambda calls could check if something had enough cardinality.
..
Also I still want opLazyEval to have cx, so (opLazyEval requestedHylevInteger cx func param ignore), which has to be 3-way-called as <actualHylevInteger func param>, and actualHylevInteger may differ from requestedHylevInteger and either can be bigger. What it must return (if you have enuf compute resources to explore the directedGraph) is well defined (todo) either way.
..
Also I want an op for making hylevintegers that doesnt require the surrounding pair, so (hylev5 aLazyEval)--red-->something, and hylev5 is (opHylev hylev4), and so on, and opHylev takes 2 params so its trivially halted at 1 param, or maybe it should be part of opLazyEval. These are details easy to work out.
..
Maybe the 3 ways of returning something from red edge ["did not halt", "caller didnt have enough cardinality", or "halted by this returnVal"] should be 3 ops.
..
Is it back to only 3 edgetypes (green blue red)?
...






Maybe to fix that, think of quasicrystal nodes as a 2d grid (1d horizontal grid lists every node, as usual, vertical direction is cardinality, and from each (integer,integer) point in the 2d grid it points at an integer. so (integer,integer)->integer would be the red edges, and integer->integer for green and blue edges. Do I want that? Could use (Pair hylevInteger aLazyEval)--red-->someNode, and red would just point at leaf if its not such a datastruct.
WAIT, FIXME, you need 1 red edge per cardinality, even though opLazyEval may choose to lower cardinality.
THOUGHT WAS SOLUTION[
I can easily move the hylev number to a param of a doesItHalt op, and make everything be 3-way (or 4-way if also want cx) lambda calls, where nonneginteger cardinality (as unary linkedlist) is 1 of the 3 things called together: <hylevInteger cx func param>. That way, there are no cardinalities in halted lambdas but it can still exactly represent isPEqualNP (which returns t or f) if its called with a high enough cardinality. If its called at a lower cardinality, it doesnt halt.
YES, DO THAT. AND KEEP THE RED EDGES.
..
Keep it as 4-way-calls: <hylevUnaryInteger,cx,func,param>. A call is never stored, since everything is halted. So opLazyEval would store those as 4 curries which each have a L/green and R/blue edge but do not have a hylevUnaryInteger or cx edge. Its still a binary forest, which the merkle ids are made of.
There will still be getCardinality op, which defines a relation between debuggersteps/lazyevals/etc, but theres actually no cardinality except "on the stack", and the stack exists only in halted lambdas that define lazyevals.
]



TODO very important, can all those hylevs (hypercomputation levels, and those above infinite hylev etc)... can all that be emulated in the first 2 hylevs? That question should have the same answer as, is there a isPEqualNP node at hylev1-2 which emulates higher hylevs by building emulators that call emulators (as a request that the next higher hylev may choose to do), but never more than 1 emulator deep at a time?
..
isPEqualNP is basically a triple-loop (each of infinite size) over triples <whichP,possibleNPSolver,possibleNPQuestion>, and it checks in finite time does (possibleNPSolver possibleNPQuestion) get the right answer within (exponent (sizeof possibleNPQuestion) whichP) cycles. So basically view it as a 3d grid of bits, where its a 1 if (possibleNPSolver possibleNPQuestion) does that within whichP time, else its a 0. It looks for a constant possibleNPSolver and a constant possibleNPSolver and an infinite size row of all 1s in the possibleNPQuestion dimension. I can write that using hyperquasicrystal nodes even without merging all the hylevs into just 2 hylevs, but I want to merge them cuz it would make it much simpler to use, easier for people and neuralnets to understand.
..
Lets start with something simpler. Given a func x of 2 integers y z to t/f, so (x y z), make a node that answers t or f meaning does there exist any constant y where all (x y z)->t? This seems to need hylev2-3 cuz its a double-loop with doesItHalt/redEdge called inside a doesItHalt/redEdge. Can it be done at hylev1-2?
Given x and y, hylev1-2 can answer does all (thatConstantX thatConstantY z)->t. It can do that using a red edge at hylev0-1, a red edge that halts if it finds any (thatConstantX thatConstantY z)->f.
We need to halt when find something that doesnt halt. hylev1-2 can easily do that, but if there is no such nonhalter then hylev1-2 would not halt.
Maybe hylev2-3 could emulate everything, since it can copy things between the 2 hylevs below it (but if so, need a harder test cuz it would have to emulate at least hylev3-4)?
Lets use the kind of statement (for b forall c exists d forall e exists g forall h exists j, where (b c d e g h)->u, or where (b [c d e g h])->u where [...] is a linkedlist syntax, which are 2 different problems but the linkedlist kind seems easier.
Is there any hylev3-4 node for that? Each hylev up can trivially solve 1 linkedlist size bigger, of that kind of lambda call. But can hylev3-4 solve all linkedlist sizes?
You can convert between forall and exists using something that seems similar to https://en.wikipedia.org/wiki/De_Morgan%27s_laws but for infinite things. Given a func of integer to bit that always halts, forall being 0, or forall being 1, you can just halt if you find the opposite, the thing claimed doesnt exist. Exists, you halt when find the thing. So for the cost of 1 hylev up, you can do a forall or exists of any function call thats guaranteed to halt on all those params the forall/exists "loops over".
A single hylev can loop over any n dimensional tensor where each cell contents is such a func (that always halts) called on the n dimensional position in the tensor, and it returns t or f (or even a float64, as long as its deterministic) based on that nd index. The lambdas are mapped 1 to 1 with the integers and can compute their own integer, so nd index can be any n lambdas, even though thats not an efficient way to compute it, the quasicrystal edges are an efficient way, so sparse pointers and quodels (godel-like-numbering of lambdas including hyper-lambdas) as interchangible.
<forall b exists c forall d> is not the same as <forall b forall d exists c>.
But if convert them all to foralls, or convert them all to exists, then could do them with fewer hylevs. That doesnt mean everything can be done with fewer hylevs, but that one kind of thing can.
<forall b forall derivedFromC forall d> allows reordering to <forall b forall d forall derivedFromC> or any of the 6 possible orders of 3 things. It can also be converted to <forall [b c d]>, and as I wrote earlier, a single forall costs only hylev1-2. So in that case, the use of hylev3-4 for 3 infinitesizeloops/doesItHalts inside eachother, was correct but also wasteful.
..
Next, try to write the pseudocode (and later actual code, that neuralnet may be able to approximate), for isPEqualNP at hylev1-2.
..
"isPEqualNP is basically a triple-loop (each of infinite size) over triples <whichP,possibleNPSolver,possibleNPQuestion>".
..
<exists whichP exists possibleNPSolver forall possibleNPQuestion (someFunc [whichP possibleNPSolver possibleNPQuestion])->t>.
..
Do I want to change it to 3 exists, or change it to 3 foralls?
..
I'd like to create 2 lambda calls, one that if it halts it proves PNotEqualNP, and the other if it halts it proves PEqualsNP, and guarantee that at least 1 of them halts (cuz P either equals NP or it doesnt), then make a lambda that runs 1 compute step on each, then the next compute step on each, and so on, and whichever halts (guaranteed to happen), it will return t or f for does p equal np or not. In other words, at hylev0 (no red edge needed), a lambda, or I could write it as code in any normal language, evaling this (which may take any huge time but is guaranteed to give an answer, aka this lambda call is guaranteed to halt and to answer p equals? np)... Write this lambda. I'm not sure but it seems that it could be done, unless I missed something in the steps to get here. There is among experts no known lambda which answers p vs np, cuz its a few hypercomputation levels up from lambdas.
TODO write that lambda.
..
Or maybe it can only be solved at hylev1-2? Just write it and find out.
..
Merge whichP and possibleNPSolver into a single dimennsion, so its an infinite 2d grid of y=[whichP and possibleNPSolver] and x=possibleNPQuestion and bitVal=(someFunc [[whichP possibleNPSolver] possibleNPQuestion]).
(someFunc [[whichP possibleNPSolver] possibleNPQuestion]) always halts, so all bits in the 2d grid are specific bit vals.
..
isPEqualNP = <exists y forall x (bitAt [y x])>
..
<exists y not exists variantOfX (bitAt [y variantOfX])>... something like that. I want all bits in the y row to be only where its proven not to be such a fast solver, and after finding the first "forspecific y exists variantOfX" it moves on to the next forspecific y.
Whichever is the last y it ever gets to, proves P equals NP and that y is a [whichP possibleNPSolver].
On the other hand, if there is no "last y", then P does not equal NP (which is far more likely).
Its nonhalting either way.
..
What if all the bits, in the 2d grid, after a "last y" (if that exists), check all the earlier bits (careful not to infloop, not sure that could be done), and if p equals np (which it probably doesnt) then these bits mark that it should halt right away.
..
If I could only try to prove one, p equals np vs p does not equal np, I'd rather have it be faster to try to prove p not equals np.
..
What if dovetail the ys, looping over the 2d y x grid of bits from a corner expanding a triangle so its guaranteed to reach all squares infinitely in x and infinitely in y. It would eventually mark every y thats NOT a fastNPSolver (as not being a fastNPSolver), and whichever y remains after an infinite number of steps, is a fastNPSolver. But hyperquasicrystal can only --red-->leaf if it doesnt halt, and --red-->(leaf returnVal) if it does halt. Theres not an edgetype for returning from something that doesnt halt, but some combo of hylevs could probably do it.
..
Lets get back to, can hylev2-3 emulate higher hylevs?
..
I know how to represent isPEqualNP at hylev2-3 by merging the whichP and possibleNPSolver into 1 thing, so thats down 1 hylev from I thought it was at hylev3-4. But it doesnt answer the question of can a constant hylev level emulate higher levels.
..
I can easily move the hylev number to a param of a doesItHalt op, and make everything be 3-way (or 4-way if also want cx) lambda calls, where nonneginteger cardinality (as unary linkedlist) is 1 of the 3 things called together: <hylevInteger cx func param>. That way, there are no cardinalities in halted lambdas but it can still exactly represent isPEqualNP (which returns t or f) if its called with a high enough cardinality. If its called at a lower cardinality, it doesnt halt.
YES, DO THAT. AND KEEP THE RED EDGES. [[[WAIT, FIXME, you need 1 red edge per cardinality, even though opLazyEval may choose to lower cardinality.]]]
..
Keep it as 4-way-calls: <hylevUnaryInteger,cx,func,param>. A call is never stored, since everything is halted. So opLazyEval would store those as 4 curries which each have a L/green and R/blue edge but do not have a hylevUnaryInteger or cx edge. Its still a binary forest, which the merkle ids are made of.
There will still be getCardinality op, which defines a relation between debuggersteps/lazyevals/etc, but theres actually no cardinality except "on the stack", and the stack exists only in halted lambdas that define lazyevals.
...
[[[WAIT, FIXME, you need 1 red edge per cardinality, even though opLazyEval may choose to lower cardinality.]]]
..




---old...---

TODO...

universal func of 8 params... OR, I COULD PUT EDGES ALL IN 1 OP, OR COULD MERGE SOME THINGS. BUT WITH 8, HAVE ROOM FOR TYPEVAL ETC.
seems its going to need 8 params instead of 7 cuz is a little too many ops for 7. so the first param is now any func of 7 params,
instead of 6. and theres o8 cache instead of o7, cuz theres never actually 8 params cuz ONLY halted things are nodes. That will
give room for exploring a few more kinds of edges, if needed. there are some multiple kinds of cardinality to explore.
(num params, op name) Opcodes I'm planning (todo still adjusting these a little)[
3 S
//FIXME 4? is that allowed? 4 Lazyeval //might just implement this as S called on leaf? cuz LazyEval does the same thing as S when called on leaf, but might help prove things that it does the same thing regardless of what its called on.
	//(Lazyeval cx func param ignore) -> same as fpc.
4 lazyCfp //used if isCallsAre3ParamsVs2. (fpc func param context)-> what that 3 way call returns.
	//(lazyCfp cx func param ignore)-> what the 3-way-call <cx func param> returns. If not isCallsAre3ParamsVs2 then cx is always leaf (or this calls with leaf anyways?).
3 Pair
3 Typeval //just a semantic, for things like (typeval "image/jpeg" <bytesofjpg>). As a lambda, its the same as Pair.
2 T
2 F
2 Ax
//2 (crossEdge edgeType fromNode). fromNode must be at a lower cardinality than caller, else do_isItTruncateToCardinalityOrIsItInfloop)
	//FIXME move all the edge types to 1 param ops? they'd still be hyperquasicrystal edges, but a simpler lambda call would cross them.
1 getCx //If inside a 3-way-call (such as by lazyCfp) where cx is 1 of those 3, gets the cx. cx exists only "higher in the stack",
	//but since there is no stack in a quasicrystal except other parts of the quasicrystal,
	//the cx is in calls of lazyCfp that dont have enuf params to eval yet. nothing ever has enuf params to eval. its all lazy.
1 Wiki //all nondeterminism goes here but in the clean half of the system there is pure determinism.
1 L/green
1 R/blue
1 red
1 upCardinalityA
//1 upCardinalityB
1 downCardinality
1 getCardinality //returns a unary number like (leaf (leaf (leaf leaf))). leaf is lowest cardinality.
	//FIXME theres cardinalities above infinite cardinality. hylev[0-1][allInfinityCardinalities] etc. Can they be emulated by lower cardinalities? Else include some here?
	//FIXME remove getCardinality op cuz that should be just 1 of the edgeTypes?
	//FIXME dont have upCardinality op cuz that should be just 1 of the edgeTypes, that the call only works for if caller is higher cardinality?
1 Isleaf
1 isAllowAxa //2 halfs of the system where (axa anything) either works as usual vs always infloops.
1 isCleanAkaIsAllowWiki //2 halfs of the system. the clean half cant see the dirty half. the dirty half can see dirty and clean.
1 isCallsAre3ParamsVs2 //2 half of the system. in one half, the cx param is always leaf. In the other, it can be anything (of compatible cardinality).
TODO every edgeType should be a 1 param op.
TODO put all the edges in the last half of ops, and all the funcs of 2 or more params in first half.
]
..
FIXME do_isItTruncateToCardinalityOrIsItInfloop, and similar for is it truncateToClean or infloop when clean is called on dirty?
FIXME theres too many kinds of cardinality involved, but I feel that I need the kind that can call doesItHalt to infinite depth, i wrote about hylev[0-1][allInfinityCardinalities] and hylev[1-2][allInfinityCardinalities] etc. Maybe that can be emulated using just the first few hylevs emulating combos of the lower levels together? In any case, I need to get my ideas about cardinality more organized before choosing the final set of opcodes for hyperquasicrystal.
FIXME do I want the third (pair salt treemap)_or_just_salt param like in wikibinator107?
	If so, need cfp (or should it be fpc?) op, and getC op, and lazyeval would take 3 params like fpc.
FIXME how to get around the annoying problem of needing a different equals function etc for each cardinality? you can still upCardinality a single equals function, and that would work, but is there a more automatic way?





//Ben F Rayfield offers this software as opensource MIT license.
//a 7 parameter universal lambda, combinator, and pattern-calculus function,
//designed to be computed as energyFunction(sparseStochasticMatrix[n]) approximating
//a specific constant (so no mutable vars, except in the optimizations)
//infinite directedGraph which has only 1 automorphism (the least possible)
//with n edge types (at least the red green and blue edges
//are constant and are the API for how normal programs can call the lambdas on eachother),
///including the red, green, and blue edge types in this javascript implementation
//of the universal function, so n is at least 3, and n will be maybe 5-20
//so the neuralnet has more ways to figure out how to pattern-match the red, green, and blue edges.
//You only need red, green, and blue edges to compute the lambdas. All else is optimizations.
//No data is ever added to or removed from the network or changed.
//Instead many people and computers together can navigate the space of possible functions
//which can have forexample 256 bit ids generated from their lambda call pair forest shape,
//useable like hashtags with a random-appearing number that names the function,
//so you could call a #hashtagw4353q4534534 on a #hashtag9845734252348234 and it returns a #hashtagw435356456343234
//which could be replaced by human readable names or be an interactive program window
//whose graphics are generated per bit in a pixel by lambdas and sounds per wave amplitude bit...
//depending on which kind of optimizations the various hyperquasicrystal VMs
//(such as theres many java VMs that all run java, or multiple browsers that run the same webpages,
//some hyperquasicrystal VMs may optimize for GPU, some optimize for neuralnet hypercomputation
//(just 1 level up in hypercomputation and only approximation of it), some optimize for
//forest of (double,double)->double calculations like you can run any musical instrument or visual fractal on,
//or other hardware, it could in theory form a model of any existing hardware and be an operating system,
//though such uses would probably be very slow for a long time while new kinds of optimizations are possibly discovered.
//Javascript with compiling to GPU.js and to js eval, seem to be a good place to start,
//something with interactive graphics like emulating github.com/benrayfield/hypercubewave across a multiplayer game.
const hyperquasicrystal = (function(){
	
	//doesnt work yet. TODO...
	
	
	let nextId = 0;
	const newId = function(){
		return nextId++;
	};
	
	//which garbage collection cycle. can increase by 1 each time any tiny thing happens or in larger blocks.
	let garbTime = 0;
	
	//a halted lambda function.
	//This is how to generate correct training data
	//for the hyperquasicrystal neuralnet to learn to fill in
	//the other red green and blue edges that are
	//missing (or even if some are wrong it may ins ome caes still
	//pattern match to fix them, in theory.
	const fn = function(green, blue, red){
		
		//Starts as another fn, except during boot.
		//In neuralnet, this would be a stochastic matrix row, size 1, with a chance of 1, aka a hard pointer.
		//
		//left child. If this is leaf,
		//then left child is identityFunc (FI leaf), see FI opcode.
		this.green = green;
		
		//Starts as another fn, except during boot.
		//In neuralnet, this would be a stochastic matrix row, size 1, with a chance of 1, aka a hard pointer.
		//
		//right child. If this is leaf, then right child is leaf.
		this.blue = blue;
		
		//Normally starts undefined (todo should that be null or is undefined ok?).
		//In neuralnet, this would start as a random stochastic matrix row to random fns then converge if needed.
		//
		//If this called on leaf halts (returns y),
		//then red is (leaf y), else does not halt and red is leaf.
		//The red edge is at 1 higher cardinality than lambdas
		//so cant always be computed exactly by lambdas,
		//but maybe can be approximated by neuralnets etc,
		//getting more accurate over time
		//especially if you have infinite time and infinite memory.
		this.red = red;
		
		//OLD comment of this.o8 before it became this.o7...
		//
		//integer from 1 to 255 that means a bitstring of 0-7 bits, for the params each being u vs anything_except_u,
		//or 0 to mean error or hasnt been filled in yet or unknown cuz neuralnet might have accidentally
		//made it longer than the max allowed of 6 params. Its a 7 param universal function but never has more than 6
		//params when observed cuz only halted lambdas are stored, and instead would view those others as LazyEvals,
		//where Z/LazyEval is one of the opcodes.
		//
		//FIXME is it actually o7, number from 1 to 127, since only 0-6 params (of 7) are supposed to ever be stored?
		//
		//u.o8==1 aka the leaf has no params yet, is waiting on 7 params before it evals.
		//x.o8 == x.green.o8*2+(x.blue.o8==1 ? 1 : 0); //slide earlier params up and put the next bit in the ones place.
		//this.o8 = 0;
		//
		//
		
		//This is a cache of the forest shape, including only green and blue edges.
		//
		//integer from 1 to 127 that means a bitstring of 0-6 bits, for the params each being u vs anything_except_u,
		//or 0 to mean error or hasnt been filled in yet or unknown cuz neuralnet might have accidentally
		//made it longer than the max allowed of 6 params. Its a 7 param universal function but never has more than 6
		//params when observed cuz only halted lambdas are stored, and instead would view those others as LazyEvals,
		//where Z/LazyEval is one of the opcodes.
		//
		//Leaf is 1. (leaf leaf) is 10. (leaf <nonleaf>) is 11. (leaf leaf leaf) is 100. (leaf leaf <nonleaf>) is 101...
		//aka https://en.wikipedia.org/wiki/Binary_heap indexing.
		//
		//If (green===undefined || green==null) then this is the leaf so this.o7 gets set to 1,
		//else append a bit in the ones place.
		//u.o7==1 aka the leaf has no params yet, is waiting on 7 params before it evals.
		//x.o7 == x.green.o7*2+(x.blue.o7==1 ? 1 : 0); //slide earlier params up and put the next bit in the ones place.
		//
		this.o7 = (green ? ((this.green.o7<<1)|((this.blue.o7==1) ? 1 : 0)) : 1);
		//
		//
		//About https://en.wikipedia.org/wiki/Binary_heap indexing and urbit_nock (an alternative universal function).
		//A transfinite turing complete quasicrystal could be made for urbit_nock the same way its made for
		//this 7 param universal function.
		//The only requirement is a universal function be a universal lambda, combinator, and pattern-calculus function.
		//
		//BTW urbit_nock uses that kind of indexing for pointer math in its binary forest.
		//This universal function could emulate urbit_nock, but urbit_nock could not emulate this,
		//cuz this is at 1 higher cardinality than lambdas and also contains the cardinality of lambdas.
		//Both are deterministic.
		//Urbit could emulate at least the parts of this
		//which exclude red edges that point at u/leaf (lazy call would not halt)
		//and some of the nonhalting depending if it were combined with some kind of axioms to prove things about halting and nonhalting,
		//but if it didnt have such axioms built in, just allowed any lambda to be an axiom (which it could easily do)
		//then urbit_nock would be able to prove true equals false but you could limit which lambdas you call
		//on which lambdas to avoid that but you might not have chosen flexible enough axioms
		//so some red edges would still be unproveable.
		//In this transfinite model of computing, things halting or not is a direct statement
		//that can flow up and down "the stack" (which may be made of lambdas, on "the heap") which may occurs
		//after an infinite number of compute cycles and infinite amount of memory or may occur near instantly.
		
		
		//
		//
		/*
		if(green && blue){ //normal
			this.o8 = (this.green.o8<<1)|((this.blue.o8==1) ? 1 : 0);
		}else{
			//hasnt booted yet, so this is u or IdentityFunc or that one cycle between them.
			//Will fill in o8 of those during boot.
			this.o8 = 0;
		}*/
		
		
		//like a debuggerBreakpoint step, toward filling in this.red. STEP_EDGE.
		//FIXME I'm unsure how many kinds of stepA stepB stepC... edges are needed.
		//Every edge has to be defined for every fn in abstract math
		//(but in practice can leave any of them as nulls except except green and blue).
		//
		//L, R, A/IsLeaf, T, F, and P/Pair dont need a step edge, so just point step to u/leaf in those cases.
		//The other 3 opcodes (sixParamLambda, Z/LazyEval, and S) need a STEP edge (hopefully just 1).
		//
		//(S b c d)->((b d)(c d)), so STEP would be (Z (Z b d) (Z c d)) <--WRONG. FIXME need recursive lazyeval.
		//Something like Lx.Ly.Lz.(x u)(y u), and to put a literal lambda in use (T thatLiteral).
		//STEP would be (Z (Z (T b) (T d)) (Z (T c) (T d))). Notice theres no T around the Z inside Z,
		//cuz outer Z calls (Z leaf) and inner Z calls (T b leaf) aka ((T b) leaf) which evals to b.
		//
		//OLD: const Z = op6; //Lx.Ly.Lz.xy aka LazyEval. (LazyEval x y).red==(leaf (x y)) if (x y) halts else == leaf.
		//NEW: const Z = op6; //Lx.Ly.Lz.(x u)(y u) aka LazyEval. (LazyEval (T x) (T y)).red==(leaf (x y)) if (x y) halts else == leaf.
		//NEW: ((LazyEval (LazyEval (T a) (LazyEval (T b) (T c))) (T d)) u) -> (a(bc)d).
		//
		//
		//FIXME update comments below cuz of that slightly changed lazyeval/Z op.
		//
		//this.step.red may be filled in later or not (could use javascript stack andOr neuralnet to do that,
		//though if its neuralnet then each edge is intead 1 row of a stochasticMatrix
		//aka a sparse map of fn to chance,
		//where chances sum to 1, the chance that the edge of that color is to that node).
		//(Z b d).red and (Z c d).red would be used to compute (Z (Z b d) (Z c d)).red.
		//(Z b d).step would be "higher on the stack".
		//If (Z b d).red==u then (Z (Z b d) (Z c d)).red==u cuz if it doesnt halt higher on stack
		//then it also doesnt halt lower on stack,
		//therefore, in abstract math, this is a transfinite stack which can return "does not halt" aka red==u.
		//(Z (S b c) d).red == (Z (Z b d) (Z c d)).red ??? todo verify ???
		//That seems to handle the STEP_EDGE S.
		//
		//Do the same for sixParamLambda aka (La.Lb.Lc.Ld.Lx.Ly.Lz.a(Pair(uabcdxy)z)) happens when a!=u.
		//Trying to fill in (Z (u a b c d x y) z).red, where a!=u.
		//BTW Z is lazyEval and z is just the last param, TODO rename cuz confusing.
		//P is Pair. Z is LazyEval. A is IsLeaf. u is the leaf.
		//It evals to (u (a (P (u a b c d x y) z))) if (a (P (u a b c d x y) z)) halts, else evals to u,
		//but leave the wrapping in u to the last step of the red edge. Just get the return val for now.
		//Want to compute (a (P (u a b c d x y) z)).
		//(u a b c d x y) is already halted cuz it has less than 7 params (has 6), and so is z, so no need to LazyEval those.
		//u is the universal function that takes 7 params, curried one at a time.
		//(Z a (P (u a b c d x y) z)).red.blue == (u a b c d x y z) if (u a b c d x y z) halts.
		//If it does not halt then that .red.blue is u cuz u.blue is u, but thats not much relevant here.
		//Whats relevant is that .red is u if (u a b c d x y z) does not halt.
		//If a!=u then: (Z (u a b c d x y) z).red == (Z a (P (u a b c d x y) z)).red ??? todo verify ???
		//That seems to handle the STEP_EDGE for sixParamLambda.
		//
		//
		//Do the same for Z/LazyEval...
		//Trying to fill in (Z i j).red.
		//This needs to know the opcode of i,
		//since after the first 4 (of 7) params, opcode always copies from green/leftChild.
		//View the first 4 params, each being u vs anything_except_u, as a 4 bit opcode,
		//or more generally view 0-7 params as an 8 bit opcode that includes a bit for each of 0-7 params
		//then a high 1 bit, so in 8 bits you can store all possible bitstrings of 0-7 bits.
		//0 never occurs in those 8 bits since it lacks a high 1 bit.
		//UPDATE: Its 7 bits, not 8. Its the this.o7 var, which is a cache of the forest shape.
		//Trying to fill in (Z i j).red.
		//i.o7 is an integer 1..1111111 (in binary).
		//o8 would take a bit from j.
		//o8==(i.o7<<1)|((j.o7==1) ? 1 : 0);
		//There is no node which can have an o8 cuz its not halted,
		//but it would be cp(i,j).o8==((i.o7<<1)|((j.o7==1) ? 1 : 0)).
		//4 of those bits tell which of 9 lambdas (of 7 params each) to do,
		//or if it doesnt have enuf params yet, then step just points at u/leaf.
		//Actually, dont need o8 cuz the 4 bits needed are also in o7. The 4 bits needed are in o5.
		//Theres always a high 1 bit, so ignore that one.
		//...
		//this.step can do 10 different things, depending on o7.
		//Theres the first 8 opcodes (S T F L R IsLeaf Pair LazyEval, but not in that order, TODO rewrite this comment line).
		//Theres sixParamLambda.
		//Theres not_enuf_params_so_instantly_trivially_halted, in which case this.step becomes leaf.
		//...
		//That seems to handle the STEP_EDGE for sixParamLambda.
		//
		//That seems to define STEP_EDGE in all possible cases. The transfinite stack appears
		//consistent and to only need 1 STEP edge per node, so GREEN BLUE RED STEP
		//are 4 (instead of 3, thought it was going to be) edge colors.
		//Each STEP does potentially an infinite number of time cycles, infinite amount of memory,
		//then returns, aka transfinite but can also do finite normal lambda calculations.
		//This can be done in any order, as constraints, especially by energyFunc(sparseStochasticMatrix[4+extraEdgeTypesForNeuralnetsInternalCalculations]).
		//...but wont know for sure until it passes testcases.
		//TODO Copy and modify some of the testcases from wikibinator
		//which is a more complex but similar universal function.
		//
		//About this line of code "this.step = ((this.o7>0) && (this.o7<64) && u) ? u : null;":
		//Could just have this.step always start as null, and it would work. This is an optimization:
		//If u exists (is not booting) and is waiting on at least 2 more params
		//(so calling this on u would be trivially instantly halted), then instantly fill
		//in this.step==u, else leave this.step as null to be filled in later if ever.
		//
		this.step = ((this.o7>0) && (this.o7<64) && u) ? u : null;
		
		//javascript optimization.
		//The godel-like-numbering of the lambdas are too big a number to put here,
		//though a 2-way-forest by merkle hashing
		//is a hash of the godel-like-number of the lambda.
		//The actual numbering is if you take all possible binary forest nodes,
		//starting with leaf, but only the nodes x where
		//(x==leaf || x.green==leaf || x.green.green==leaf || x.green.green.green==leaf
		// || x.green.green.green.green==leaf
		// || x.green.green.green.green.green==leaf
		// || x.green.green.green.green.green.green==leaf
		//)
		//aka only nodes which have 0-6 params so far
		//cuz its a universal function of 7 params,
		//and you sort those first by height (leaf is height 0, (leaf leaf) is height 1,
		//(leaf (leaf leaf)) and ((leaf leaf) leaf) and ((leaf leaf)(leaf leaf)) are height 2,
		//and so on... so you first sort ascending by height (leaf is first),
		//then break ties between y and z by how y.green vs z.green is sorted,
		//then break ties by how y.blue vs z.blue is sorted,
		//and if those all sort the same then its the same node.
		//That maps all possible halted lambdas 1-to-1 with the integers.
		//But as a javascript optimization, I'm just going to make up an id.
		//If you want the godel-like-numbering, the lambdas can compute it about eachother.
		this.id = newId();
		
		//Must be <= the recursiveExpireTimes of the green and blue childs.
		//This fn must be uncached/garbcoled/garbageCollected when this.recursiveExpireTime<garbTime.
		//To prevent garbcol of x, increase x.recursiveExpireTime to garbTime+howMuchLongerItShouldBeKept
		//but may have to increase recursiveExpireTime for its childs recursively first.
		//Deleting a fn is the same as uncaching it since they are deterministic
		//and can all be derived again from the universal lambda.
		//There are no mutable vars other than optimizations of that, so nothing is lost.
		this.recursiveExpireTime = garbTime; //TODO start at garbTime or garbTime+1?
		
	};
	
	fn.prototype.isLeaf = function(){
		//return this.blue==this;
		return this.o8==1;
	};
	
	//no 2 fns x and y can exist where (x.green==y.green && x.blue==y.blue).
	const dedupMap = {};
	
	const dedupKey = function(green, blue){
		return green.id+'_'+blue.id;
	};
	
	/*
	//callpair, but while booting, before the only cycle in green and blue edges has been created,
	//which is that leaf.green==identityFunc and leaf.blue==leaf.
	//identityFunc==(FI leaf). FI is an opcode derived from leaf.
	const bootCp = function(green, blue){
		return new fn(green, blue);
	};*/
	
	//u aka leaf aka "the universal lambda/combinator/patternCalculusFunction".
	const u = new fn();
	//fill in u.green after create identityFunc (FI u)
	u.blue = u;
	
	const uu = new fn(u,u);
	const u_u_u = new fn(uu,u);
	const u_u_u_u = new fn(u_u_u,u);
	const u_u_u_u_u = new fn(u_u_u_u,u);
	const FI = new fn(u_u_u_u_u,u); //Ly.Lz.z aka the church-false lambda
	const I = new fn(FI,u); //Lz.z aka identityFunc
	
	u.green = I;
	//The only cycle in green and blue edges has been created,
	//which is that leaf.green==identityFunc and leaf.blue==leaf.
	//Next, put those in dedupMap cuz couldnt do that before the cycle existed.
	//Others will go in dedupMap instantly.
	[u, u_u, u_u_u, u_u_u_u, FI, I].forEach(x=>{
		dedupMap[dedupKey(x)] = x;
	});
	//Now the binary forest system is created, but not yet the logic for
	//how to fill in the red edges aka how to call lambda on lambda to find/create lambda.
	
	//vararg. callpair(s), without checking if its allowed (must have at most 6 params so far
	//cuz the universal function has 7 params and all lambdas are halted), so only call this if so.
	//const cp = function(green, blue){
	const cp = function(){
		if(arguments.length == 0) return I; //nothing to do, so just return identityFunc
		else if(arguments.length == 1) return arguments[0]; //nothing to do, return the 1 fn given.
		else if(arguments.length == 2){
			let k = dedupKey(green,blue);
			if(!dedupMap[k]) dedupMap[k] = new fn(green, blue);
			return dedupMap[k];
		}else{
			let ret = cp(arguments[0],arguments[1]);
			for(let i=2; i<arguments.length; i++) ret = cp(ret,arguments[i]);
			return ret;
		}
	};
	
	//first 4 params each being leaf vs any nonleaf,
	//chooses between 16 opcodes, the last 8 of which all do the same thing so actually 9 opcodes.
	//Those last 8 are to use the first param as a func of 6 params with a way of currying
	//that uses a func of 1 param as a func of 6 params
	//by calling it on (Pair <callBeforeTheLastParam> lastParam),
	//and that func of 1 param can use any of 7 lambdas to get the 7 params from that Pair.
	//The first of those 7 lambdas/params is the 6 param function so it can call itself recursively.
	
	let op0 = cp(u,u,u,u,u);
	let op1 = cp(u,u,u,u,uu);
	let op2 = cp(u,u,u,uu,u);
	let op3 = cp(u,u,u,uu,uu);
	let op4 = cp(u,u,uu,u,u);
	let op5 = cp(u,u,uu,u,uu);
	let op6 = cp(u,u,uu,uu,u);
	let op7 = cp(u,u,uu,uu,uu);
	//op8..op15 are cp(u,funcBody_anythingExceptU,...params...), really just 1 op
	//but 16 ops if viewed as first 4 params are a uint4 that chooses which lambda of 7 params to do.
	
	//FI had to be created during the only green/blue edges cycle, cuz its how to make identityFunc/I.
	
	let shouldBeFI = cp(op0,u);
	if(shouldBeFI != FI) throw 'dedup not working';
	
	//FI = cp(op0,u)
	const F = FI; //its called FI cuz it does False and IdentityFunc.
	const T = cp(op1,u); //Ly.Lz.y aka the church-true lambda aka the K lambda of SKI-Calculus
	const L = cp(op2,u,u);
	const R = cp(op3,u,u);
	const A = cp(op4,u,u); //isLeaf. (isLeaf leaf)->T. (isLeaf anything_except_leaf)->F.
	const P = op5; //Lx.Ly.Lz.zxy aka the church-pair lambda
	//const Z = op6; //Lx.Ly.Lz.xy aka LazyEval. (LazyEval x y).red==(leaf (x y)) if (x y) halts else == leaf.
	const Z = op6; //Lx.Ly.Lz.(x u)(y u) aka LazyEval. (LazyEval (T x) (T y)).red==(leaf (x y)) if (x y) halts else == leaf.
	//((LazyEval (LazyEval (T a) (LazyEval (T b) (T c))) (T d)) u) -> (a(bc)d).
	const S = op7; //Lx.Ly.Lz.xz(yz) aka the S lambda
	
	const callParamOnItself = cp(S,I,I);
	const funcThatInfiniteLoopsForAllPossibleParams = cp(Z,callParamOnItself,callParamOnItself);
	
	const iota = cp(P,S,T); //This universal function https://en.wikipedia.org/wiki/Iota_and_Jot
	//TODO verify (iota iota x)->x, for any randomly chosen lambda x cuz (iota iota) is an identityFunc.
	//(iota iota) and (F u) are both identityFuncs.
	//There can also be multiple equals funcs that do not equal eachother but each equals itself,
	//and they all agree on what equals what.
	//Equality is by the forest shape of green and blue edges.
	//Its a forest other than the cycles that exist if you include the green and blue edges from leaf.
	//Red of course has an infinite variety of cycles but red is derived so does not affect godel-like-numbering.
	
	//red edge from [a lazyeval of x y] to leaf means (x y) does not halt.
	//Similarly, anything which calls (x y) can also be marked as nonhalting,
	//and theres many possible ways in finite time and memory to prove a lambda call does not halt,
	//but in many cases it would cost infinite time andOr memory. This time its easy to know.
	//NEW: (LazyEval (T (S I I)) (T (S I I))).red==leaf.
	//OLD: (LazyEval (S I I) (S I I)).red==leaf.
	funcThatInfiniteLoopsForAllPossibleParams.red = u;
	
	//TODO other than garbcol and dedup etc (problems in javascript that wont exist in all implementations
	//such as on GPU, a quantum manifold, automata processors, etc),
	//this model of computing can in theory use an infinite number of threads.
	const thread = function(){
		this.gasTime = 0;
		this.gasMem = 0;
		this.from = null;
		this.green = null; //from.green
		this.blue = null; //from.blue
		this.red = null; //from.red
		
		/*
		//split each isLeaf var into 2 bits so if, while threadOpcode is 0,
		//the fn pointers are copied from another thread, or are left as null,
		//then both can be false to say its unknown if thats leaf or not.
		//FIXME theres probably a far more efficient way to do this, such as this.green==u.
		this.fromIsCertainlyLeaf = false; //from.blue==from aka from.isLeaf()
		this.fromIsCertainlyNotLeaf = false; //from.blue==from aka from.isLeaf()
		this.greenIsCertainlyLeaf = false;
		this.greenIsCertainlyNotLeaf = false;
		this.blueIsCertainlyLeaf = false;
		this.blueIsCertainlyNotLeaf = false;
		this.redIsCertainlyLeaf = false;
		this.redIsCertainlyNotLeaf = false;
		*/
		
		//threadOpcode is idempotent and is a constraint, not something that happens at a time.
		//threadOpcode of 0 means do nothing, so can freely change this.from, this.green, this.blue, and this.red.
		//threadOpcode of 1 reads this.green and this.blue then writes this.from.
		//threadOpcode of 2 reads this.from and writes this.green and writes this.blue.
		//threadOpcode of 3 reads this.from and writes this.green and writes this.blue and writes this.red.
		//Whenever this.from, this.green, this.blue, andOr this.red are written, so are this.*IsLeaf written.
		//Its important those bits are directly known, cuz in some implementations
		this.threadOpcode = 0;
	};
	
	
	
	
	TODO eval
	
})();