
var randonInterval = setInterval(function(){
	var theFunctions = [];

	for (var prop in rando) {
		if(typeof rando[prop]=='function'){
			theFunctions.push(prop);
		}
	}

	var randomFunctionIndex = Math.floor(Math.random()*theFunctions.length);
	rando[theFunctions[randomFunctionIndex]]()

},1000 )
