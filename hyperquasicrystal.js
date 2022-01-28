
let lastId = 1000;


//This is a game-tree that contains all possible game-trees including the chess game-tree, the Go game-tree, every possible AI, neuralnet,
//musical instrument, pic, video, text, and every possible lambda function... That means it contains every possible physics simulation up to lambda cardinality,
//even though physics might be higher cardinality (probably is the highest possible cardinality). Its purpose is to have a constant branching-factor (12)
//that sparsely navigates the space of all possible lambdas, and that every node can reach every other node. You could, for example, do pagerank on the lambdas, or variants of it.
//
//a map of every positive integer to 12 specific positive integers, that defines hypercomputing of all possible lambdas (the cardinality just above the cardinality of the lambdas)
//and can actually be used to compute things, though some edges wont be able to be filled in without actually doing hypercomputing so thats just a math abstraction at least for now,
//but maybe some kind of quantum-like or other strange kind of computer could
//
//Its a universal lambda of 7 params but max of 6 params exist in nodes since its done by lazyEval.
//
//In the abstract math, every node is a unique integer and all 12 edges are filled in and consistent.
//
//the sparse "turing tape" is 2 linkedlists made of churchPairs. The first thing in one list is registerA. The first thing in the other list is registerB.
//The turing tape is a pair of those 2 linkedlists.
//registerA and registerB are used in some of the tape* ops.
//If a node is not a pair of 2 nonempty linkedlists, then those ops/edges to to u (the universal lambda).
//
//The universal lambda is a function of 7 params. The first 4 params choose between 9 opcodes, depending if they are each u or anything except u.
//If the first param is NOT u, then the first param is a lambda of 6 params: (u funcBody a b c d e f)->(funcBody (pair (u funcBody a b c d e) f)).
//If the first param is u, then it chooses from the other 8 opcodes which are: s t f l r isleaf pair typeval, which each use the last 3 params.
//s is Lx.Ly.Lz.xz(yz), the last 3 params. aka the s lambda of SKICalculus.
//t is Ly.Lz.y, the last 2 params. aka churchTrue. aka the k lambda of SKICalculus.
//f is Lz.z, or view it as Ly.Lz.z, the last 1 param. aka churchFalse if you use the last 2 params, as it ignores everything except the last param.
//l is get left/func child, the node.func edge.
//r is get right/param child, the node.param edge.
//isleaf tells if its param is the universal lambda, which has cacheOpcode of 1, and which can be identified by graph topology as its the only node whose param is itself. u.param==u.
//	also, u.func==identityFunc, which is (f u) in the 2 param view of f.
//pair is the churchPair lambda Lx.Ly.Lz.zxy, and can be used with t and f to get the 2 things in the pair.
//	(pair a b t)->a. (pair a b f)->b. (pair a b) is halted. (pair a) is halted. pair is halted.
//typeval is the same as pair but is a semantic for things like (typeval "image/jpeg" [bytes of jpg file]).
//	bitstrings are pairs of pairs of pairs... of t and f, complete binary trees of bits, and can be stored in arrays as optimization in some cases,
//	and can put some literal bits in 256 bit merkle ids, and the last 1 bit is just past end of the bitstring (bize means index of last 1 bit and is 0 if its not a bitstring),
//	though you dont have to generate global id256s as they are lazyEvaled and are just a lambda called on a lambda to return such 256 bits.
//	TODO put Int32Array and an int from int toExclusive range (powOf2 aligned) in node, after get the basics working.
//
let Node = function(isLeaf,func,param){
	
	prepay(1,1);
	
	this.localId = ++lastId;
	
	//a bit
	//this.isLeaf = isLeaf;
	
	//an integer from 1 to 127. leaf is 1. see "opbit" in wikibinator and hyperquasicrystal and occamsfuncer for what this number does.
	//this.cacheOpcode = TODO;
	//
	//append 0 if param is leaf. append 1 if param is not leaf. o7 is like a bitstring of 0-6 bits, but as an integer 1-127.
	this.o7 = isLeaf ? 1 : ((param.o7==1) ? (func.o7<<1) : ((func.o7<<1)|1));
	
	
	
	
	
	
	//left child in binary forest. forall x, (func x (param x)) equals x. (func u) is identityFunc. (param u) is u. u is a universal lambda function, the root of this system.
	this.func = func;
	
	//right child in binary forest. forall x, (func x (param x)) equals x. (func u) is identityFunc. (param u) is u. u is a universal lambda function, the root of this system.
	this.param = param;
	
	//This is how to call a lambda on a lambda and get the return value (this edge points at: (u returnVal)),
	//or get the statement that it doesnt halt (this edge points at: u). You might never see this return u since
	//it can take infinite time and memory in many cases and even when it doesnt its often hard to prove, so in that cases you'd just give up early on knowing what node this edge points at.
	//All edges point at nodes that are a binary forest that leads to u on all paths thru node.func and node.param. The other 10 edges are just caches and can be derived and deduped.
	//
	//If the lambda call (this.func.param this.param.param) returns ret, then this edge points at (u ret).
	//If the lambda call (this.func.param this.param.param) does not halt, then this edge points at u.
	//(or you might not ever be able to compute what this edge points at, even though the math is completely consistent).
	//
	//tapeLazyReturn and lazyReturn are the only edges/ops that are at hypercomputing cardinality (the cardinality just above the lambdas). halting oracles are not possible, but with cardinalities its still consistent.
	this.lazyReturn = null;
	
	
	
	
	
	//replaces registerA with registerA.func
	//
	//
	//If a node is not a pair of 2 nonempty linkedlists, then those ops/edges to to u (the universal lambda).
	this.tapeFunc = null;
	
	//replaces registerA with registerA.param
	//
	//
	//If a node is not a pair of 2 nonempty linkedlists, then those ops/edges to to u (the universal lambda).
	this.tapeParam = null;
	
	//replaces registerA with registerA.lazyReturn.
	//
	//tapeLazyReturn and lazyReturn are the only edges/ops that are at hypercomputing cardinality (the cardinality just above the lambdas). halting oracles are not possible, but with cardinalities its still consistent.//
	//
	//If a node is not a pair of 2 nonempty linkedlists, then those ops/edges to to u (the universal lambda).
	this.tapeLazyReturn = null;
	
	
	//Keeps the top 2 things in the linkedlist (registerA and registerB) and pops from the left linkedlist and pushes that onto the right linkedlist
	//(then puts registerA and registerB back and makes a pair of it, that becomes the next "turing tape state" (thats an immutable/stateless lambda)
	//This is like a turing head moving left.
	//
	//If a node is not a pair of 2 nonempty linkedlists, then those ops/edges to to u (the universal lambda).
	this.tapeLeft = null;
	
	//Keeps the top 2 things in the linkedlist (registerA and registerB) and pops from the right linkedlist and pushes that onto the left linkedlist
	//(then puts registerA and registerB back and makes a pair of it, that becomes the next "turing tape state" (thats an immutable/stateless lambda).
	//This is like a turing head moving right.
	//
	//If a node is not a pair of 2 nonempty linkedlists, then those ops/edges to to u (the universal lambda).
	this.tapeRight = null;
	
	//replaces registerA with registerB
	//
	//If a node is not a pair of 2 nonempty linkedlists, then those ops/edges to to u (the universal lambda).
	this.tapeCopy = null;
	
	//replaces registerB with registerA
	//
	//If a node is not a pair of 2 nonempty linkedlists, then those ops/edges to to u (the universal lambda).
	this.tapePaste = null;
	
	
	TODO the tape is infinite and just contains u past whats defined. So there is no such thing as
	"If a node is not a pair of 2 nonempty linkedlists, then those ops/edges to to u (the universal lambda)."
	FIXME update comments about that.
	
	
	//Replaces registerA with (u registerA (u registerB)) aka ((u registerA) (u registerB)).
	//
	//If a node is not a pair of 2 nonempty linkedlists, then those ops/edges to to u (the universal lambda).
	this.tapeMakeLazy = null;
	
	//
	//
	//If a node is not a pair of 2 nonempty linkedlists, then those ops/edges to to u (the universal lambda).
	this.theUniversalTape = null; //so every node can reach a certain node thats a sparse "turing tape" that can reach all possible nodes. this makes it 12 way. this is a constant.
	
	//same as theUniversalTape except registerA is the node that the theUniversalTapeOfMe edge is from.useful for compression,
	//kolmogorovComplexity by path length, turing-complete-challenge-response, neuralnets choosing what lambda to call on what lambda next, etc.
	this.theUniversalTapeOfMe = null; //so every node can reach a certain node thats a sparse "turing tape" that can reach all possible nodes. this makes it 12 way. this is a constant.
	
	this.theUniversalTapeOfMe = null; //so every node can reach a certain node thats a sparse "turing tape" that can reach all possible nodes. this makes it 12 way. this is a constant.

};

let o7OfIdentityFunc = TODO;

let idOfU = TODO;

//TODO faster localIds instead of strings in map. use an Int32Array and a [], or something like that, for faster hashtable specialized in Nodes.
let dedupMap = {};
TODO put u in dedupMap

//TODO faster localIds instead of strings in map. use an Int32Array and a [], or something like that, for faster hashtable specialized in nodes.
let funcallCacheMap = {};

let dedupKeyOfNode = (isLeaf,func,param)=>{
	prepay(1,3); //FIXME?
	return isLeaf+"_"+func.localId+"_"+param.localId;
}

let dedupKeyOfFuncallCache = (func,param)=>{
	return "cache_"+func.localId+"_"+param.localId;
};


//increases every time any FuncallCache is used, so can garbcol old funcallcaches.
let touchCounter = 0;

//TODO use Node.lazyReturn, as a different way of funcall caching, but this way with the touch uses less memory and is a little faster.
//but as a demo of the math, make both ways work. it can be done without this kind of FuncallCache at all.
let FuncallCache = function(func,param){
	this.func = func;
	this.param = param;
	this.ret = null; //different than Node.
	this.touch = ++touchCounter; //for garbcol of old funcallcaches
};

let funcallCache = (func,param)=>{
	let key = funcallCacheMap(false,func,param);
	return funcallCacheMap[key] || (funcallCacheMap[key] = new FuncallCache(func,param)));
};

//(func,param) or more params to curry...
//FIXME vararg might be slow. use separate func for vararg cp
let cp = function(){
	switch(arguments.length){
		case 0: return identityFunc;
		case 1: return arguments[0];
		case 2:
			let func = arguments[0];
			let param = arguments[1];
			if(param.o7==1 && func.o7 == o7OfIdentityFunc){
				prepay(1,0);
				return u; //the only node whose o7 is 1, but I'm making a point by implementing it without using == on nodes, just on bytes.
			}else{
				//TODO use faster kind of localIds and dedup than string. but for now i just want to get it working asap. GPU optimize, js code eval optimize, webasm optimize, etc later.
				let key = dedupKeyOfNode(false,func,param);
				return dedupMap[key] || (dedupMap[key] = new Node(false,func,param)));
			}
			break;
		default:
			let ret = arguments[0];
			for(let i=1; i<arguments.length; i++) ret = cp(ret,arguments[i]);
			return ret;
		}
	}
};

let t = TODO;

let f = TODO;

let gasTime = 1000000; //fill these back up before starting another call at bottom of stack, to avoid running out, but not until the stack becomes empty.
let gasMem = 1000000;

const gasErr = 'gasErr';

let prepay = (time,mem)=>{
	let newTime = gasTime-time;
	let newMem = gasMem-mem;
	if(newTime <= 0 || newMem <= 0) throw gasErr;
	gasTime = newTime;
	gasMem = newMem;
	return undefined; //so you can || it with things for shorter lines of code
};

//eval, call lambda on lambda. TODO gasTime gasFastMem.
Node.prototype.e = function(z){
	
	TODO evaler, so can put various optimizations per node. chain of evalers with evaler.on defining which in the chain is used.
	use the first aNode.evaler where aNode.evaler.on such as aNode.evaler.prev.prev.on.
	
	prepay(1,0);
	if(this.o7 < 64) return cp(this,z); //less than 7 params. u is a universal lambda of 7 params. at most 6 ever occur in nodes cuz of lazyeval.
	//z is last param
	let y = this.param; //second last param
	let x = this.func.param; //third last param
	switch((this.o7>>3)&15){ //ignore last 3 bits. just use the first 4 (of 7) params being u (opbit 0) vs anything except u (opbit 1).
		case 0: //f/identityFunc. identityFunc is (u u u u u u u).
			return z;
		case 1: //t
			return y;
		case 2: //l/getfunc
			return z.func;
		case 3: //r/getparam
			return z.param;
		case 4: //isleaf
			return ((z.o7==1) ? t : f);
		case 5: //s
			return x(z)(y(z));
		case 6: case 7: //pair (6) or typeval (7)
			return z(x)(y);
		case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15: //first of 7 params is a lambda of 6 params.
			//(u funcBody b c d x y z) -> (funcBody (pair (u funcBody b c d x y) z)).
			let funcBody = this.func.func.func.func.func.param; //this is (u funcBody b c d x y).
			//this.func.func.func.func.func.func==u
			return funcBody(pair(this,z));
		default: throw ('If this ever happens theres a bug in the VM. o7='+this.o7);
	}
};

let lambdize node=>{
	let NODE = node;
	//let lambda = function(param){
	return function(param){
		if(param === undefined) return NODE; //aLambda() returns the node it wraps.
		return NODE.e(param); //eval lambda call, else throw if not enuf gasTime or gasMem aka prepay(number,number)
	};
	//lambda = lambda.bind(this);
	//node.lam = lambda;
};

let u = lambdize(new Node(true,null,null));
//let op0000001 = u;
u.param = u;

let uu = cp(u,u);

/*let op0000010 = cp(op0000001,u);
if(uu != op0000010) throw 'dedup not working';
let u_uu = cp(u,uu);
let u_uu = cp(u,uu);
*/

//examples of the ops. but not the only 
let op = [ignoreParam=>{throw 'There is no op0'}, u]; //fill in op0 and op1.
for(let o7=2; o7<128; o7++) op[o7] = cp(op[o7>>1], ((o7&1) ? uu : u)); //fill in op2..op127. but only those up to 31 are used.

let f = cp(u, u,u,u,u, u);

let t = cp(u, u,u,u,uu, u);

let l = cp(u, u,u,uu,u, u,u);

let r = cp(u, u,u,uu,uu, u,u);

let isLeaf = cp(u, u,uu,u,u, u,u);

let s = cp(u, u,uu,u,uu );

let pair = cp(u, u,uu,uu,u );

let typeval = cp(u, u,uu,uu,uu );

let identityFunc = cp(f,u);


u.func = identityFunc;

let theUniversalTape = pair(u)(u);

let isAPair = TODO;

//is it the datastruct of a sparse turing tape
let isTape = TODO;

//getParam1 to getParam7 are for the (pair (u funcBody b c d x y) z) datastruct in:
//(u funcBody b c d x y z) -> (funcBody (pair (u funcBody b c d x y) z)).

let getParam7 = r;

//gets the (u funcBody b c d x y) from (pair (u funcBody b c d x y) z)
let recur6 = s(t(r))(t(l));

//gets the (u funcBody b c d x) from (pair (u funcBody b c d x y) z)
let recur5 = s(t(l))(recur6);

let recur4 = s(t(l))(recur5);

let recur3 = s(t(l))(recur4);

let recur2 = s(t(l))(recur3);

let recur1 = s(t(l))(recur2);

let recur0 = u;

let getParam6 = s(t(r))(recur6);

let getParam5 = s(t(r))(recur5);

let getParam4 = s(t(r))(recur4);

let getParam3 = s(t(r))(recur3);

let getParam2 = s(t(r))(recur2);

let getParam1 = s(t(r))(recur1);

let getParam0 = t(u); //its always u, the universal lambda thats the root of the system.

//(u funcBody b c d x y z) -> (funcBody (pair (u funcBody b c d x y) z)).
//(u A B C D X Y Z)
let A = getParam1;
let B = getParam2;
let C = getParam3;
let D = getParam4;
let X = getParam5;
let Y = getParam6;
let Z = getParam7;

//and = Ly.Lz.yzy
//https://en.wikipedia.org/wiki/Church_encoding
let and = u(s(s(Y)(Z))(Y))(u)(u)(u)(u);

//or = Ly.Lz.yyz
//https://en.wikipedia.org/wiki/Church_encoding
let or = u(s(s(Y)(Y))(Z))(u)(u)(u)(u);

let not = pair(f)(t);

//xor = Ly.Lz.y(not z)z
//https://en.wikipedia.org/wiki/Church_encoding
let xor = = u(s(s(Y)(s(t(not))(Z)))(Z))(u)(u)(u)(u);

throw 'TODO test these lambdas and or not xor etc. copy testcases and some of the lambdas from occamsfuncer, wikibinator, etc.';

//equals = TODO

//ATODO let registerA = 

TODO make funcs for all the 12 edge types, except Node.lazyReturn wont ever return u that way, will only return (u returnVal).
Other ways of proving things could still prove its u in some cases, such as s(identityFunc)(identityFunc)(s(identityFunc)(identityFunc)) certainly never halts.