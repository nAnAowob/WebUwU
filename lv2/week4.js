
function sayHello() {
  for (let i = 0; i < 3; i += 1) {
    console.log("Hello", i);
  }
}

//Call function
sayHello();

//parameter, argument
function greeting(userName, age) {
  console.log("Hello", userName);
  console.log("You are", age, "years old.");
}

greeting("Due", 15);

function calculateInterest(principle, interest = 0.03) {
  let totalMoney = principle + principle * interest;
  console.log(totalMoney);
}

calculateInterest((principle = 100));

function listStudents(student1, ...students) {
  console.log(student1);
  for (student of students) {
    console.log(student);
  }
//   console.log(students);
}
listStudents("Tiew", "AnnAnn", "Heal", "Tee");

function calculateInterest2(principle, interest = 0.03) {
    totalMoney = principle + principle * interest;
    return totalMoney;
}
myMoney = calculateInterest2(100, 0.5);
console.log(myMoney);