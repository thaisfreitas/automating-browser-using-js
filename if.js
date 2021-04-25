if(true){
	console.log("hello");
}

if(1===1){
	console.log("hello");
}


var doit = true;

if(doit) {
	console.log("done")
}

//how to use if into a for loop
var toggles = document.querySelectorAll('.toggle');
for (togglepos=0; togglepos<toggles.length; togglepos++){
	if(togglepos%2==0){
		toggles[togglepos].click();
	}
}

//another way to use for and if
var toggles = document.querySelectorAll('.toggle');
var toggleit=false;

for (togglepos=0; togglepos<toggles.length; togglepos++){
	if(toggleit){
		toggles[togglepos].click();
	}
	toggleit=!toggleit;
}

