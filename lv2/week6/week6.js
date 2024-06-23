const myImg1 = document.getElementById("myImg1");
const myImg2 = document.getElementById("myImg2");
const myImg3 = document.getElementById("myImg3");

const dogButton = document.getElementById("dogButton");
const catButton = document.getElementById("catButton");
const oriButton = document.getElementById("oriButton");

dogButton.addEventListener("click", () => {
  myImg1.src = "dog.png";
  myImg2.src = "dog.png";
  myImg3.src = "dog.png";
  console.log("dog button pressed");
});

catButton.addEventListener("click", () => {
  myImg1.src = "cat.png";
  myImg2.src = "cat.png";
  myImg3.src = "cat.png";
  console.log("cat button pressed");
});

oriButton.addEventListener("click", () => {
  myImg1.src = "FRIEREN.jpeg";
  myImg2.src = "FRIEREN.jpeg";
  myImg3.src = "FRIEREN.jpeg";
  console.log("ori button pressed");
});


// const link = document.querySelector('main, a, div'); //return the 1st element it found
// //const link = document.querySelector("main a");
// //querySelectorAll =

// console.log(link)

// //getElementByID()
// //getElementByClassName
// //getElementByTagName()
// //querySelector
