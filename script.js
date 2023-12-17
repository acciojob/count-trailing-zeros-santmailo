function trailingZeros(n) {
	
	if(n==0){
		return 0;
	}
	
	let fac = String(factorial(n)).split("0");
	let count = 0;


	for(let i=0; i<fac.length; i++){
		if(fac[i]==""){
			count++;
		}
		else if(fac[i]!=""){
			count = 0;
		}
	}
	
	return count;
}

function factorial(n) {
	if(n==1) return n;
	return n*factorial(n-1);
}
const input = prompt("Enter a number");
alert(trailingZeros(input));
