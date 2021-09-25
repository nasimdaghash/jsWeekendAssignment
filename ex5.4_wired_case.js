function wiredcase(str)
{
    let str1="";
    for(let i=0;i< str.length;i++){
        if (i % 2 == 0){
            str1 = str1 + str[i].toUpperCase();
        }
        else{
        str1 = str1 + str[i];
        }
    }
    return(str1);
}


let str="hi how are you today"
console.log(wiredcase(str));