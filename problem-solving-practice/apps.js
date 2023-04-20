const numbers = [6, 250, 3]


function largestNumber(x){
    let largest = 0
    for (let i = 0; i < x.length; i++){
    if (largest < x[i]){
        largest = x[i]

    }
    }
    
console.log(largest)
}

largestNumber(numbers)

largestNumber([3, 5, 2, 8, 1,])
largestNumber([-13, 40, 3, 0, 19, 22])



const result = []

function lettersWithStrings (a , b){
    for (let i = 0; i < a.length; i ++){
        if( a[i].includes(b)){
        console.log(a[i])
    }
}
}

lettersWithStrings(["$hello!", "%%^%%", "test!"], "!")
lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"] , "!")
lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h")

function isDivisible( a, b ){
    if (a % b === 0){
        console.log(true)
    } else console.log(false)
}

isDivisible(4, 2)
isDivisible(9, 3)
isDivisible(15, 4)
