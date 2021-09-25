function trimStr (str)
{
    console.log(str.substr(1, str.length-2));
    return str
}

str = "hello world"
trimStr (str);