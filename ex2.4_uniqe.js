
function findUniq(arr) {
    let x = arr.sort((a, b) => a - b).slice();
    x.shift();
    if (Math.max(...x) == Math.min(...x)) {
        return arr[0]
    } else { return arr[arr.length - 1] }

}

function findUniq1(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }

function findUniq2(arr) {
    return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq1([ 0, 0, 0.55, 0, 0 ]));
console.log(findUniq2([ 1, 1, 1, 2, 1, 1 ]));
