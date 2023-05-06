"use strict";
const time = document.querySelector("#time-left");
const button = document.querySelector(".button");
const result = document.querySelector("#result");
const squares = document.querySelectorAll(".grid div");
const user = document.querySelector(".user");
const logLeft = document.querySelectorAll(".log-left");
const logRight = document.querySelectorAll(".log-right");
const carLeft = document.querySelectorAll(".car-left");
const carRight = document.querySelectorAll(".car-right");
const width = 9;
const hight = 9;
let timeLeft = 60;
let currentIndex = 76;
let timer = null;
let left = 0;
let outComeId = null;
// let currentCarRightIndex = 52;
// let currentCarLeftIndex = 54;

//STOP START GAME BUTTON

button.addEventListener("click", () => {
  if (timer) {
    clearInterval(timer);
    clearInterval(left);
    timer = null;
    document.removeEventListener("keydown", moveUser);
  } else {
    document.addEventListener("keydown", moveUser);
    timer = setInterval(autoMoveLog, 1000);
    left = setInterval(timePassing, 1000);
    outComeId = setInterval(checkOutcomes, 50);
  }
});

//Movement of user
stopGame();
function moveUser(e) {
  switch (e.key) {
    case "ArrowUp":
      console.log(currentIndex);
      squares[currentIndex].classList.remove("frog");
      if (currentIndex >= 9) currentIndex -= 9;
      squares[currentIndex].classList.add("frog");
      break;

    case "ArrowDown":
      console.log(currentIndex);
      squares[currentIndex].classList.remove("frog");
      if (currentIndex < 63) currentIndex += 9;
      squares[currentIndex].classList.add("frog");
      break;

    case "ArrowLeft":
      squares[currentIndex].classList.remove("frog");
      if (currentIndex % width !== 0) currentIndex -= 1;
      squares[currentIndex].classList.add("frog");
      break;

    case "ArrowRight":
      squares[currentIndex].classList.remove("frog");
      if ((currentIndex + 1) % width !== 0) currentIndex += 1;
      squares[currentIndex].classList.add("frog");
      break;
  }
}
//Creating Cat

//Moving of car --- Wrog code - there is no option to make more than 1 car per row
// function moveCar() {
//   squares[currentCarRightIndex].classList.remove("car");
//   if (currentCarRightIndex >= 62) {
//     console.log(currentCarRightIndex);
//     currentCarRightIndex = 52;
//   } else {
//     currentCarRightIndex += 1;
//     squares[currentCarRightIndex].classList.add("car");
//   }
//   squares[currentCarLeftIndex].classList.remove("car");
//   if (currentCarLeftIndex <= 45) {
//     console.log(currentCarLeftIndex);
//     currentCarLeftIndex = 54;
//   } else {
//     currentCarLeftIndex -= 1;
//     squares[currentCarLeftIndex].classList.add("car");
//   }
//   // console.log(currentCarRightIndex);
// }

console.log(logLeft);
//Moving Log Left ( )

function autoMoveLog() {
  win();
  stopGame();
  logLeft.forEach((moveLeft) => movingLogLeft(moveLeft));
  logRight.forEach((moveRight) => movingLogRight(moveRight));
  carLeft.forEach((moveLeft) => movingCarLeft(moveLeft));
  carRight.forEach((moveRight) => movingCarRight(moveRight));
  stopGame();
}

function movingLogLeft(move) {
  switch (true) {
    case move.classList.contains("l1"):
      move.classList.remove("l1");
      move.classList.add("l2");
      break;
    case move.classList.contains("l2"):
      move.classList.remove("l2");
      move.classList.add("l3");
      break;
    case move.classList.contains("l3"):
      move.classList.remove("l3");
      move.classList.add("l4");
      break;
    case move.classList.contains("l4"):
      move.classList.remove("l4");
      move.classList.add("l5");
      break;
    case move.classList.contains("l5"):
      move.classList.remove("l5");
      move.classList.add("l1");
      break;
  }
}
function movingLogRight(move) {
  switch (true) {
    case move.classList.contains("r1"):
      move.classList.remove("r1");
      move.classList.add("r5");
      break;
    case move.classList.contains("r5"):
      move.classList.remove("r5");
      move.classList.add("r4");
      break;
    case move.classList.contains("r4"):
      move.classList.remove("r4");
      move.classList.add("r3");
      break;
    case move.classList.contains("r3"):
      move.classList.remove("r3");
      move.classList.add("r2");
      break;
    case move.classList.contains("r2"):
      move.classList.remove("r2");
      move.classList.add("r1");
      break;
  }
}

function movingCarLeft(moveCar) {
  switch (true) {
    case moveCar.classList.contains("c1"):
      moveCar.classList.remove("c1");
      moveCar.classList.add("c2");
      break;
    case moveCar.classList.contains("c2"):
      moveCar.classList.remove("c2");
      moveCar.classList.add("c3");
      break;
    case moveCar.classList.contains("c3"):
      moveCar.classList.remove("c3");
      moveCar.classList.add("c1");
      break;
  }
}
function movingCarRight(moveCar) {
  switch (true) {
    case moveCar.classList.contains("c1"):
      moveCar.classList.remove("c1");
      moveCar.classList.add("c3");
      break;
    case moveCar.classList.contains("c3"):
      moveCar.classList.remove("c3");
      moveCar.classList.add("c2");
      break;
    case moveCar.classList.contains("c2"):
      moveCar.classList.remove("c2");
      moveCar.classList.add("c1");
      break;
  }
}

//Stop the game --
function stopGame() {
  if (
    timeLeft <= 0 ||
    squares[currentIndex].classList.contains("c1") ||
    squares[currentIndex].classList.contains("r4") ||
    squares[currentIndex].classList.contains("r5") ||
    squares[currentIndex].classList.contains("l4") ||
    squares[currentIndex].classList.contains("l5")
  ) {
    clearInterval(timer);
    document.removeEventListener("keydown", moveUser);
    clearInterval(timer);
    result.innerHTML = "You loose";
    clearInterval(left);
  }
}
function win() {
  if (squares[currentIndex].classList.contains("winer")) {
    clearInterval(timer);
    document.removeEventListener("keydown", moveUser);
    clearInterval(timer);
    result.innerHTML = "You win";
    clearInterval(left);
  }
}
time.innerHTML = timeLeft;
//Szybsze sprawdzanie // Anti-cheating
function checkOutcomes() {
  stopGame();
  win();
}
//Time passing
function timePassing() {
  if (timeLeft > 0) {
    timeLeft -= 1;
    console.log(timeLeft);
    time.innerHTML = timeLeft;
  }
}

//Start od Pause Game
// let start = true;

// function startStop() {
//   button.addEventListener("click", true);
// }
