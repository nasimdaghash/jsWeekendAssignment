/*
function nb_year(numbers) {
	var p0 = parseInt(numbers[0]);
	var percent = parseInt(numbers[1]);
	var aug = parseInt(numbers[2]);
	var p = parseInt(numbers[3]);
	
	for (var y = 0; p0 < p; y++) {
    p0 += ((p0 * (percent / 100)) + aug);
  }
  
  return y + " years";
}
*/

function nb_year(p0, percent, aug, p) {
    const percentage = percent / 100;
    let result = p0;
    let years = 0;
  
    while (result < p) {
      result += result * percentage + aug;
      years++;
    }
  
    return years;
  }

console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));
