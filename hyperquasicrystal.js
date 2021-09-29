//Ben F Rayfield offers this software as opensource MIT license.
//a 7 parameter universal lambda, combinator, and pattern-calculus function,
//designed to be computed as energyFunction(sparseStochasticMatrix[n]) approximating
//an infinite directedGraph with n edge types,
///including the red, green, and blue edge types in this javascript implementation
//of the universal function, so n is at least 3, and n will be maybe 5-20
//so the neuralnet has more ways to figure out how to pattern-match the red, green, and blue edges.
//You only need red, green, and blue edges to compute the lambdas. All else is optimizations.
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
	//(LazyEval (S I I) (S I I)).red==leaf.
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