/*
I'm going to use lambdas for AIs evolving and playing and building stuff together and with people,
in the game, but I'm not sure exactly which kind.

This is something I'll make in mindmap or javascript or something, that helps me write a
goalFunc(possibleLambdaDesign), that helps me choose between various conflicting designs such
as does it have ax or not, does it have cx or not, does it have cardinality or not and what
kinds, is it a hyperquasicrystal, is it just for forests of call pairs but not a
hyperquasicrystal, does it store cbts and growinglists with just a single extra node
per combining 2 things vs need to use pair, how will it feel to use vararg (build a pair
based list or growinglist in a curry*), how can it be optimized by EvalerChain in vararg
etc, what kind of hardware (3d quasicrystal fluid, gpu, cpu, optical computer, etc) might
it be optimized by, what systems should I build it in
first (javascript, python, java, gpu.js, etc), what determinism vs nonstrictfloatsetc
are involved, does it have clean vs dirty, does it have gasMem, gasTime,
recursiveExpireTime, and are those per thread/greenthread/etc or per VM, etc?



/*var LambdaDesignTool = function(){
};
*/

/*
FIXME, make this a big bayesNode, of the sparse 3^numberOfBayesVars kind,
so can explore what combos of these things allow vs prevent,
such as canDeriveQuestionDoesPEqualNP cant be used with dirty lambdas,
but dirty lambdas can call combos of dirty and clean lambdas,
and the pure clean lambdas (subsets of that) can have canDeriveQuestionDoesPEqualNP==true.
hasClean: true,
hasDirty: false,

Maybe write it as an energyFunc, where min energy is 0 (maybe min is higher?),
and each constraint just says a combo of things that cant be true together,
such as (1-isClean)*canDeriveQuestionDoesPEqualNP is 1 if [!isClean & canDeriveQuestionDoesPEqualNP],
a combo that cant happen,
but [!isClean & !canDeriveQuestionDoesPEqualNP] can call [isClean & canDeriveQuestionDoesPEqualNP].
I'm not sure how to describe a universal function if it can be multiple of those things at once in different parts of it.
*/

var iotaMeta = {
	leafsAreVarSize: false,
	isPatternCalculusFunc: false,
	canAlwaysDetectLambdaEquality: false,
	canDeriveQuestionDoesPEqualNP: false,
	hasClean: true,
	hasDirty: false,
	bitstringsAndGrowinglistsAreMostlyVarargInsteadOfNeedingPair: false,
	hasConstantMaxCurries: true,
	canDeriveANodeWhoseExistenceClaimsACertainLambdaCallHaltsAkaAxConstraint: false,
	hasCxParam: false,
	hasCardinalityParam: false,
	canBeComputedAsATimelessEnergyFunc: false,
};

var urbitNockMeta = {
	leafsAreVarSize: true,
	isPatternCalculusFunc: true,
	canAlwaysDetectLambdaEquality: true,
	canDeriveQuestionDoesPEqualNP: false,
	hasClean: true,
	hasDirty: false,
	bitstringsAndGrowinglistsAreMostlyVarargInsteadOfNeedingPair: true,
	//hasConstantMaxCurries: ?,
	canDeriveANodeWhoseExistenceClaimsACertainLambdaCallHaltsAkaAxConstraint: false,
	hasCxParam: false,
	hasCardinalityParam: false,
	canBeComputedAsATimelessEnergyFunc: false,
};

var hyperquasicrystalMeta = {
	leafsAreVarSize: false,
	isPatternCalculusFunc: true,
	canAlwaysDetectLambdaEquality: true,
	canDeriveQuestionDoesPEqualNP: true,
	hasClean: true,
	hasDirty: false,
	bitstringsAndGrowinglistsAreMostlyVarargInsteadOfNeedingPair: false,
	hasConstantMaxCurries: true,
	canDeriveANodeWhoseExistenceClaimsACertainLambdaCallHaltsAkaAxConstraint: true, //but cant use this with some other parts like mapping the nodes 1 to 1 with integers in finite time each
	//hasCxParam: ? allow both ?,
	hasCardinalityParam: true,
	canBeComputedAsATimelessEnergyFunc: true,
};

var wikibinator106Meta = {
	leafsAreVarSize: false,
	hasVariableSizeNodes: false,
	isPatternCalculusFunc: true,
	canAlwaysDetectLambdaEquality: true,
	canDeriveQuestionDoesPEqualNP: false,
	bitstringsAndGrowinglistsAreMostlyVarargInsteadOfNeedingPair: true,
	hasConstantMaxCurries: true,
	canDeriveANodeWhoseExistenceClaimsACertainLambdaCallHaltsAkaAxConstraint: true,
	hasCxParam: false,
	hasCardinalityParam: false,
	canBeComputedAsATimelessEnergyFunc: false,
};

var wikibinator107Meta = {
	leafsAreVarSize: false,
	isPatternCalculusFunc: true,
	canAlwaysDetectLambdaEquality: true,
	canDeriveQuestionDoesPEqualNP: false,
	bitstringsAndGrowinglistsAreMostlyVarargInsteadOfNeedingPair: true,
	hasConstantMaxCurries: true,
	canDeriveANodeWhoseExistenceClaimsACertainLambdaCallHaltsAkaAxConstraint: true,
	hasCxParam: true,
	hasCardinalityParam: false,
	canBeComputedAsATimelessEnergyFunc: false,
};

/*
var rule110Meta = {
	
};

var occamsfuncerMeta = {
};
*/