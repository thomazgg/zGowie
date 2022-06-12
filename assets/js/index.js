/* =================

author: Joao Thomaz
email: uthomaz7@gmail.com
website: https://thomazgg.github.io/Portfolio/
  
================= */

/* ================= music function =================*/

function togglePlay() {
    var myAudio = document.getElementById("myAudio");
    var text = document.getElementById("text");
    var btn = document.getElementById("btn");

    myAudio.volume = 0.2;
    return myAudio.paused ? myAudio.play(
        text.innerHTML = "O Som está ligado",
        btn.classList.remove('paused')
    ) : myAudio.pause(
        text.innerHTML = "O Som está desligado",
        btn.classList.add('paused')
    );
};

function buttonClick() {
    var buttonClick = document.getElementById("buttonClick");

    buttonClick.volume = 0.2;
    return buttonClick.paused ? buttonClick.play() : buttonClick.pause();
};

/* ================= _includes =================*/

/* 

fetch("./assets/_includes/description.txt")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("base").innerHTML = data;
    });

fetch("./assets/_includes/header.txt")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector(".header").innerHTML = data;
    }); 

fetch("./assets/_includes/audio.txt")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector(".audio").innerHTML = data;
    });

fetch("./assets/_includes/dont-open.txt")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector(".dont-open").innerHTML = data;
    }); 
    
*/

/* ================= _headerVideo =================*/

let btn = document.getElementById("open");
let video = document.getElementById("main_video");
let closebutton = document.getElementById("close");
let bg = document.getElementById("bg");


btn.onclick = function() {
    btn.classList.add('active')
    video.classList.add('active')
    bg.classList.add('active')
    vid.play();
}

closebutton.onclick = function() {
    btn.classList.remove('active')
    video.classList.remove('active')
    bg.classList.remove('active')
    vid.pause();
}

bg.onclick = function() {
    btn.classList.remove('active')
    video.classList.remove('active')
    bg.classList.remove('active')
    vid.pause();
}