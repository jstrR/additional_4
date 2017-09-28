module.exports = function multiply(first, second) {
  // your solution
	first = first.split("").map(Number).reverse();
	second = second.split("").map(Number).reverse();
	var resultstr = (first.concat(second)).fill(0);
	for (let i = 0; i < first.length; i++ ){
		for (let j = 0; j < second.length; j++ ){
	    	resultstr[i + j] += first[i] * second[j];
	    }
	}
	for (let i = 0; i < resultstr.length-1; i++ ) {
	    resultstr[i + 1] += Math.floor(resultstr[i] / 10);
	    resultstr[i] %= 10;
	}
	resultstr.reverse();
	while (resultstr[0] === 0) resultstr.shift();
	return resultstr.join("");
}

return first * second;
}
