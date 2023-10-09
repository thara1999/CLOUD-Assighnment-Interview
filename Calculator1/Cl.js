let val1 = document.getElementById("num1");
let val2 = document.getElementById("num2");

let button1 = document.getElementById("btn-1");
let button2 = document.getElementById("btn-2");
let button3 = document.getElementById("btn-3");
let button4 = document.getElementById("btn-4");

button1.addEventListener("click", getAdd)
function getAdd() {
    let calculate = parseInt(val1.value) + parseInt(val2.value);
    document.getElementById("getdata").innerHTML = "The Addition of two number: " + calculate;
}

button2.addEventListener("click", getsub)
function getsub() {
    let calculate = parseInt(val1.value) - parseInt(val2.value);
    document.getElementById("getdata").innerHTML = "The Subtraction of two number: " + calculate;
}

button3.addEventListener("click", getmul)
function getmul() {
    let calculate = parseInt(val1.value) * parseInt(val2.value);
    document.getElementById("getdata").innerHTML = "The Multiplication of two number: " + calculate;
}

button4.addEventListener("click", getdiv)
function getdiv() {
    let calculate = parseInt(val1.value) / parseInt(val2.value);
    document.getElementById("getdata").innerHTML = "The Division of two number: " + calculate;
}