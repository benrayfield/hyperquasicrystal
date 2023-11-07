

const agien = {
	license: 'same as wikibinator203 license: Wikibinator203 license: The whole turing-complete and hypercomputing space derived from this universal combinator/lambda or forks of it and other software (prototype by Ben F Rayfield Y2023), including every lambda of this kind called on a lambda to find/create a lambda or which never halts (which the author of is defined as the universal combinator since these are tiny shared math objects), is offered to everyone under opensource GNU AGPL 3 license, plus these extra permissions: * Classpath/linking exception. Hook it to whatever you want, but within the space (no proprietary lambdas) is AGPL. * License is instantly unterminated when you start obeying it. * Free speech absolutism in the evilbit=true namespace in which all possible lambdas are allowed, even viruses etc.',
	description: 'AGI potential ENergy function, similar to wikibinator but much simpler. The simplest test case of this would be to emulate the iota combinator aka (Pair S T) aka ((λa.λb.λc.cab)(λd.λe.λf.df(ef))(λg.λh.g)).',

	//This is a positive integer and a primaryKey. It exceeds a googolplex at a few hundred deep.
	//There is a 1 to 1 mapping between the positive integers and all possible binary forest shapes
	//that is approx 1.5^(2^h) for the set of all those up to height h.
	//Repeat x => x*x+1 h times, is the exact form, see wikibinator203 documents.
	//R of u/leaf is u/leaf (itself). L of u/leaf is (f0 u/leaf) aka the normed form of identityFunc.
	//normedNohalt is (s0 (f0 u) (f0 u) (s0 (f0 u) (f0 u))). L of normedNohalt is normedNohalt. R of normedNohalt is normedNohalt.
	//Forall id x, (L x (R x)) equals x. u is the integer 1. (u u) is integer 2.
	//(u (u u)) is integer 3, and so on for all possible binary forest shapes.
	//Foreach positiveInteger x (id x maps 1 to 1 with the positiveIntegers) there is exactly 1 L pointer,
	//exactly 1 R pointer, and exactly 1 EvalsTo pointer, so from each positiveInteger there are 3 edges (1 of each type)
	//to positiveInteger.
	Id: function(l,r){
		this.l = l;
		this.r = r;
	},

	//number of possible nodeColors.
	//Colors include: s0 s1 s2 pair0 pair1 pair2 t0 t1 f0 f1 l0 r0 isleaf0 e1
	//u0 nonnormedNohalt(aka anything except(S I I (S I I))) normedNohalt(aka (S I I (S I I)))
	//funcOf5Params, and maybe a few others.
	numColors: 20,

	Node: function(id){
		this.id = id;
		this.colors = new Float32Array(agien.numColors); //must sum to 1, and each float must range 0 to 1.
		this.colors.fill(1/this.colors.length); //sum to 1
		//TODO map of Node to number, where those numbers sum to 1. include an anyOtherNode node for sparsity?
		//(TODO continued...) Or, instead of such a map, parent of 2 nodes could contain a
		//chance float var (and maybe a confidence too?) of the chance that its 2 childs EvalsTo the same Id/Node/positiveInteger?
		this.chance_myChildsEvalToSame = .5; //like chance and confidence in OpenCog TruthValue?
		this.confidence_myChildsEvalToSame = 1; //like chance and confidence in OpenCog TruthValue?
		//If chance_myChildsEvalToSame is 0 where r is normedNohalt then it means certainly halts.
		//For each id there is exactly 1 correct color and exactly 1 correct chance (0 or 1),
		//but to know which it is often requires a hypercomputer of the first hypercompute level above lambdas
		//so its more of a best-effort converging system than a proof system,
		//but there is for sure exactly 1 correct solution.
	},

};
//returns true or false. See wikibinator203 opcode
//GodelLessThan (vm.ops.GodelLessThan) which is often used in vm.ops.Treemap and vm.ops.EmptyTreemap.
//BigO is tree height, so to compare 2 Ids randomly selected from 0 to a googolplex has a bigO of a few hundred.
//This has been tested by brute force in such treemaps for all possible orders of adding to treemap of some constant 4 arbitrary ids
//and a few arbitrary tests of bigger treemaps.
agien.Id.prototype.godelLessThan = function(otherId){
	throw 'TODO';
};
//callPair, just find the parent node of these 2.
agien.Node.prototype.cp = function(r){
	throw 'TODO';
};
agien.Node.prototype.l = function(){
	throw 'TODO';
};
agien.Node.prototype.r = function(){
	throw 'TODO';
};
agien.Node.prototype.en = function(){ //how much add to potentialEnergy by violation of turing-complete constraints as viewed from here
	throw 'TODO';
};

console.log('agien=',agien);