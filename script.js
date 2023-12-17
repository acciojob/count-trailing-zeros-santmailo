function trailingZeros(n) {
	let fac = factorial(n);
	console.log(fac);
}

function factorial(n) {
	if(n==1) return n;
	return n*factorial(n-1);
}

// const input = prompt("Enter a number");
// alert(trailingZeros(input));
