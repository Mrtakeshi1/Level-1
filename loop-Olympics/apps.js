for (var i = 0; i <= 9; i++) {
    console.log(i);
}

console.log("")

for (var i = 9; i >= 0; i--) {
    console.log(i);
}

console.log("")

const fruit = ["banana", "orange", "apple", "kiwi"];
for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

console.log("")

var nums = [];
for (let i = 0; i <= 9; i++) {
    nums.push(i);
}
console.log(nums);

console.log("")

for (var i = 0; i <= 100; i++) {
    console.log(i)
}

console.log("")

var fruit2 = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach'];
var fruit3 = [];
for (let i = 0; i <= 5; i++) {
  if (i % 2 === 0) {
    fruit3.push(fruit2[i]);
  }
}
console.log(fruit3);

var fruit4 = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach'];
var fruit5 = [];
for (let i = 0; i <= 5; i++) {
  if (i % 2 != 0) {
    fruit5.push(fruit4[i]);
  }
}
console.log(fruit5)

console.log("")   

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
    for (let i = 0; i < peopleArray.length; i++) {
        console.log(peopleArray[i].name)
    }

console.log("")

var namesArray = []
var occupationArray = []
for (i = 0; i < peopleArray.length; i++) {
    namesArray.push(peopleArray[i].name)
    occupationArray.push(peopleArray[i].occupation)
}
console.log(namesArray)
console.log(occupationArray)

console.log("")

var everyOtherName = []
var everyOtherOccupation = []

for (i = 0; i < namesArray.length; i+=2) {
    everyOtherName.push(peopleArray[i].name)
}

for (i = 1; i < namesArray.length; i+=2) {
    everyOtherOccupation.push(peopleArray[i].occupation)
}
console.log(everyOtherName)
console.log(everyOtherOccupation)