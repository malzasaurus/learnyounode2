function babySteps(parameters){
	var total=0;
	for(var i=2; i<parameters.length;i++){
		total+=Number(parameters[i]);
	}
	return total;
}
console.log(babySteps(process.argv));