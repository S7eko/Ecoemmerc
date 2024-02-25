// *Script for navigation bar
const bar = document.getElementById('bar')
const nav = document.getElementById('navbar');
const close = document.getElementById('close')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')

    })
}

// var MainImg=document.getElementById('main-img');

// var Smallimg=document.getElementsByClassName('small-img');

// Smallimg[0].onklick = function(){
//     MainImg.src = Smallimg[0].src;
// }

// Smallimg[1].onklick = function(){
//     MainImg.src = Smallimg[1].src;
// }

// Smallimg[2].onklick = function(){
//     MainImg.src = Smallimg[2].src;
// }

// Smallimg[3].onklick = function(){
//     MainImg.src = Smallimg[3].src;
// }


const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

