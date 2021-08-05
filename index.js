function doSomething() {

  let name = document.querySelector(".input1").value;
  let city = document.querySelector(".input2").value;

  document.querySelector("#sec").innerHTML = `<h1>My name is ${name} and I live in ${city}.</h1>`;
}