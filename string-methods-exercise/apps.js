function editString(string1){
    var upper = string1.toUpperCase()
    var lower = string1.toLowerCase()
    var combineStrings = upper.concat(lower)
    return combineStrings
}
console.log(editString("Hello"))

function roundDown(strg) {
    return Math.floor(strg.length / 2);
}
console.log(roundDown("Hello"))
console.log(roundDown("Hello World")); 
 

function firstHalf(strg2) {
    return strg2.slice(0, 2)        
}
console.log(firstHalf("Hello"))


function firstHalfOfString(strg3){
    return strg3.slice(0, Math.floor(strg3.length/2))
}
console.log(firstHalfOfString("Hello world"))


function combo(string) {
    var halfWay = Math.floor(string.length/2)
    var upperCase = string.toUpperCase().slice(0,halfWay)
    var lowerCase = string.toLowerCase().slice(halfWay)
    return upperCase + lowerCase 
    
}
console.log(combo("Hello"))
console.log(combo("Hello world"))