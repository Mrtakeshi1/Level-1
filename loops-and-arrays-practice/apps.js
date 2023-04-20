var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
 let count = 0;
  for ( i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        count += 1;
        console.log(count + " computer")
    }
 }

console.log("")

var people = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  people.map((personA) => {
    if (personA.age < 18) {
        console.log(personA.name + 's not old enough to see Mad Max');
    } else if (personA.age > 18) {
        console.log(personA.name + 's old enough to see Mad Max');
    }
  }
  );

console.log("")

  people.map((personG) => {
    if (personG.age < 18 && personG.gender === "male") {
        console.log(personG.name + " is not old enought to see Mad Max Fury Road, dont let HIM in.");
    } else if (personG.age > 18 && personG.gender === "male") {
        console.log(personG.name + " is old enough. HIS good to see Mad Max Fury Road");
    } else if (personG.age < 18 && personG.gender === "female") {
        console.log(personG.name + " is not old enough to see Mad Max Fury Road, dont let HER in.");
    } else if (personG.age > 18 && personG.gender === "female") {
        console.log(personG.name + " is old enough. SHE'S good to see Mad Max Fury Road.");
    } 
  }

  );
