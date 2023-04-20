var fruits = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
console.log(vegetables);

fruits.shift();
console.log(fruits);

var orangeIndex = fruits.indexOf("orange");
console.log(orangeIndex);

fruits.push(orangeIndex);
console.log(fruits);

console.log(vegetables.length);

vegetables.push(vegetables.length);
console.log(vegetables);

var food = fruits.concat(vegetables);
console.log(food);

food.splice(4, 2);
console.log(food);

food.reverse();
console.log(food);

console.log("")

var joinedFood = food.join();
console.log(joinedFood);