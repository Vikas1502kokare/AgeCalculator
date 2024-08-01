let lastdiv = document.querySelector(".last-div");
let bts = document.querySelector(".kokare");
let button22 = document.querySelector(".btn");

let p12;

let userInput = document.querySelector(".input");
userInput.max = new Date().toISOString().split("T")[0];

function Agecalsi() {
  vkas();
  di();
  let birthdate = new Date(userInput.value);

  let d1 = birthdate.getDay();
  let m1 = birthdate.getMonth() + 1;
  let y1 = birthdate.getFullYear();

  let Today = new Date();

  let d2 = Today.getDay();
  let m2 = Today.getMonth() + 1;
  let y2 = Today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  p12 = document.createElement("h1");
  p12.innerHTML = lastdiv;
  lastdiv.appendChild(p12);
  p12.classList.add("vk");
  p12.textContent = `you are ${y3} years ${m3} months and ${d3} days`;
  p12.classList.add('highlight');
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

const clearAll = () => {
  userInput.value = " ";
  document.querySelector(".btn").disabled = false;

  let class1 = document.getElementsByClassName('highlight')
  console.log(class1);

  if (class1.length > 0) {
    class1[0].remove();
  }

}


let vkas = () => {
  let val = userInput.value;
  if (val === '') {
    alert("Please enter a date")

    let element = document.getElementsByClassName('highlight')
    console.log(class1);

    if (!element) {
      element.classList.add('highlight');
    } else {
      element.remove();
    }
  }
}

function di() {
  let val12 = userInput.value;
  if (userInput.value === val12) {
    document.querySelector(".btn").disabled = true;
  }
}