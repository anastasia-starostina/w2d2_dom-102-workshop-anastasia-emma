let pennies = 1;
const output = document.querySelector("output");

//Task 2
const quote = document.querySelector(".quote");
quote.innerText = "This is a funny quote, honest!"

//Task 3
h1Variable = document.querySelector('h1');
console.log(h1Variable)
h1Variable.style.textDecoration = 'underline';

//Task 4
const tipsList = document.querySelectorAll('#tips-list');
for (i = 0; i < tipsList.length; i++) {
  console.log(tipsList[i]);
  newLi = document.createElement('li');
  newLi.innerText = tipsList[i].innerText;
  tipsList.appendChild(newLi);
  //create a li element
  //set the .innerText of the li element to the current tip 
  //append as child of ul

}

//Task 1
function handleClick() {
  console.log("Im just to prove it's working!");
  pennies = pennies * 2;
  output.innerText = (`${pennies} pennies`)
}

let extraTips = [
  "Keep your pennies is a glass jar",
  "Save money buy not eating!",
  "Don't let your partner know...",
];
