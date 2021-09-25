/***************** Filter *********************/
Array.prototype.myFilter = function(callback, context) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this))
            arr.push(this[i]);
    }
    return arr;
};

let numbers = [1, 20, 30, 80, 2, 9, 3];
let newNum = numbers.myFilter(function(n) {
    return n >= 10;
});
console.log("the filter :")
console.log(newNum); 

/***************** forEACH*********************/

Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++)
        callback(this[i], i, this);
};

let arr = ['biggy smalls', 'bif tannin', 'boo radley', 'hans gruber'];
console.log("the forEach :")
arr.myEach(function(word) {
    console.log(word);
});


/***************** Map *********************/
Array.prototype.myMap = function(callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++)
        arr.push(callback(this[i], i, this));
    return arr;
};

//tests
let arrs = ['dic tanin', 'boo radley', 'hans gruber'];
let numbers2 = [1, 4, 9];

let goodT = arrs.myMap(function(n) {
    return n;
});

let squareRoot = numbers2.myMap(function(num) {
    return Math.sqrt(num);
});

console.log(goodT); // [ 'dic tanin', 'boo radley', 'hans gruber' ]
console.log(squareRoot); // [ 1, 2, 3 ]
