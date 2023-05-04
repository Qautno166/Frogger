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
let currentIndex = 76;
// let currentCarRightIndex = 52;
// let currentCarLeftIndex = 54;
//Movement of user

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      console.log(currentIndex);
      squares[currentIndex].classList.remove("frog");
      if (currentIndex >= 9) currentIndex -= 9;
      squares[currentIndex].classList.add("frog");
  }
  switch (e.key) {
    case "ArrowDown":
      console.log(currentIndex);
      squares[currentIndex].classList.remove("frog");
      if (currentIndex < 63) currentIndex += 9;
      squares[currentIndex].classList.add("frog");
  }
  switch (e.key) {
    case "ArrowLeft":
      squares[currentIndex].classList.remove("frog");
      if (currentIndex % width !== 0) currentIndex -= 1;
      squares[currentIndex].classList.add("frog");
  }
  switch (e.key) {
    case "ArrowRight":
      squares[currentIndex].classList.remove("frog");

      if ((currentIndex + 1) % width !== 0) currentIndex += 1;

      squares[currentIndex].classList.add("frog");
  }
});
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
  logLeft.forEach((moveLeft) => movingLogLeft(moveLeft));
  logRight.forEach((moveRight) => movingLogRight(moveRight));
  carLeft.forEach((moveLeft) => movingCarLeft(moveLeft));
  carRight.forEach((moveRight) => movingCarRight(moveRight));
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
setInterval(autoMoveLog, 1000);

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
