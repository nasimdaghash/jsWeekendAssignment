function nthFib(n) {
	if(n <= 2) 
        return n -1;
    return nthFib(n - 2) + nthFib(n - 1);
}


console.log(nthFib(5));

