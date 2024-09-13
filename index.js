// console.log (document.querySelector('.message')
// .textContent);
// document.querySelector('.message').textContent = 'Correct number'
let life = 20;
let points = 1;
let high = 1;

let number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = number;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  // no one
  !guess
    ? (document.querySelector(".message").textContent = "No Number")
    : //if user wins
    guess === number
    ? ((document.querySelector(".message").textContent = "Correct Number"),
      (document.querySelector(".score").textContent = points ++) ,
      (document.querySelector(".number").textContent = number),
      (document.querySelector("body").style.backgroundColor = "#60b347"),
      (document.querySelector(".highscore").textContent = high++),
      (number = Math.trunc(Math.random() * 20) + 1),
      (document.querySelector(".number").textContent = "?"))
    : // if it is greater
    life >= 1 && guess > number
    ? ((document.querySelector(".message").textContent = "It is greater "),
      life--,
      (document.querySelector(".Life").textContent = life),(
        (document.querySelector("body").style.backgroundColor = "#222")
      ))
    : // if it is lower
    life >= 1 && guess < number
    ? ((document.querySelector(".message").textContent = "It is lower"),
      (life = life - 1),
      (document.querySelector(".life").textContent = life),        
       (document.querySelector("body").style.backgroundColor = "#222"))
    : // else
      (document.querySelector(".message").textContent = "GameOver");
});

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  // hi = Math.max()
  document.querySelector(".number").textContent = '?';
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".life").textContent = "20";
  document.querySelector(".score").textContent = "0";
});
