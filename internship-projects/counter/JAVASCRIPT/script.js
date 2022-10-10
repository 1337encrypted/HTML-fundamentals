let count = 0;

const counterDisplayElem = document.getElementById("count");
let counterMinusElem = document.getElementsByClassName('.minus-button');
let counterPlusElem = document.getElementsByClassName('.plus-button');


function increment(){
    document.getElementById("count").innerHTML=count++;
}

function decrement(){
    document.getElementById("count").innerHTML=count--;
}
