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

/* ================= _includes =================

fetch("./assets/_includes/description.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("base").innerHTML = data;
    });

fetch("./assets/_includes/header.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector(".header").innerHTML = data;
    }); 

fetch("./assets/_includes/music.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector(".music").innerHTML = data;
    });

fetch("./assets/_includes/contact.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector(".con").innerHTML = data;
    });

fetch("./assets/_includes/dont-open.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector(".dont-open").innerHTML = data;
    });

*/
