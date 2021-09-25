
function convert_mane(str){
    let str1 ="" ;
    str=str.split(' ');
    str1 = str[0][0].toUpperCase() +"."+str[1][0].toUpperCase();
    return(str1);
}

let str="nasim daghash";
console.log(convert_mane(str));
