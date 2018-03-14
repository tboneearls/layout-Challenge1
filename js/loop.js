// LOOP 1

for (i = 0; i <=20; i++) {
	if (i%2===0) {
		console.log(i + " is an even number.");
	} else {
		console.log(i + " is an odd number.");
	}
};

// LOOP 2

for (i = 1; i <=100; i++) {
	if (i%15===0){
		console.log("FizzBuzz");
	} else if (i%5===0){
		console.log("Buzz");
	} else if (i%3===0){
		console.log("Fizz");
	} else {
		console.log(i);
	}
};

// LOOP 3
let x = "x";

for (i=1; i<=5; i++){
	console.log(x);
	x = x + "x";
}

// LOOP 4

for (i=99; i>0; i--){
	if (i === 1){
		console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
	} //Because I'm a grammar nazi:
	else if (i === 2){
		console.log(i +" bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around, " + (i-1) + " bottle of beer on the wall.");
	}
	else {
		console.log(i +" bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around, " + (i-1) + " bottles of beer on the wall.");
	}
};