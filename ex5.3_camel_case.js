str="THIS-is_camel-case"
let str1 ="" 
if (str.includes('_'))
    str=str.split('_');

for(let i=1 ; i<str.length;i++){
    str[i]= str[i][0].toUpperCase() + str[i].substr(1);
}
str=str.join("");
if (str.includes('-'))
    str1 = str.split('-');
for(let i=1 ; i<str1.length;i++){
    str1[i]= str1[i][0].toUpperCase() + str1[i].substr(1);  
}  
str1=str1.join('');

console.log(str1)