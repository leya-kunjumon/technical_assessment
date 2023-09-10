function reverseString(string){
    let a = '';
    let splitStr = string.split(' ')
    let splitArr = [];
    for(let i= 0;i<splitStr.length;i++){
        let splitWord = splitStr[i].split('')
        splitArr.push(splitWord.reverse().join(''))
        a = splitArr.join(' ')
    }
    return a;
    
}
s = reverseString("Welcome to this Javascript Guide!")
console.log(s)