var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"



function forception(alphabet, people){
    var newArray = []
    
    for (let i = 0; i <people.length; i++){
        newArray.push(people[i])     
        for (let j = 0; j < alphabet.length; j++){
            newArray.push(alphabet[j])
        }
    }
        return newArray
}

console.log(forception(alphabet, people))