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
		
		//left child. If this is leaf,
		//then left child is identityFunc (FI leaf), see FI opcode.
		this.green = green;
		
		//right child. If this is leaf, then right child is leaf.
		this.blue = blue;
		
		//if this called on leaf halts (returns y),
		//then red is (leaf y), else does not halt and red is leaf.
		//The red edge is at 1 higher cardinality than lambdas
		//so cant always be computed exactly by lambdas,
		//but maybe can be approximated by neuralnets etc,
		//getting more accurate over time
		//especially if you have infinite time and infinite memory.
		this.red = red;
		
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
		//That maps all possible halted lambdas 1-and-1 with the integers.
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
		return this.blue==this;
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
	
	const cpp = function(green, blue){
	
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
	const Z = op6; //Lx.Ly.Lz.xy aka LazyEval. (LazyEval x y).red==(leaf (x y)) if (x y) halts else == leaf.
	const S = op7; //Lx.Ly.Lz.xz(yz) aka the S lambda
	
	const callParamOnItself = cp(S,I,I);
	const funcThatInfiniteLoopsForAllPossibleParams = cp(Z,callParamOnItself,callParamOnItself);
	
	//red edge from [a lazyeval of x y] to leaf means (x y) does not halt.
	//Similarly, anything which calls (x y) can also be marked as nonhalting,
	//and theres many possible ways in finite time and memory to prove a lambda call does not halt,
	//but in many cases it would cost infinite time andOr memory. This time its easy to know.
	//(LazyEval (S I I) (S I I)).red==leaf.
	funcThatInfiniteLoopsForAllPossibleParams.red = leaf;
	
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
		this.fromIsLeaf = false; //from.blue==from aka from.isLeaf()
		this.greenIsLeaf = false;
		this.blueIsLeaf = false;
		this.redIsLeaf = false;
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