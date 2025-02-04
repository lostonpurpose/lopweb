const home = document.querySelector("#home");
home.addEventListener("click", homeList);

function homeList() {
    const menu = document.querySelectorAll(".main-menu a");
    const allSongs = document.querySelector(".all-songs");
    allSongs.classList.add("hide-songs");
    const allVideo = document.querySelector(".all-video");
    allVideo.classList.add("hide-video");

    // menu.forEach((span, index) => {
    //     switch(index) {
    //         case 1:
    //             span.innerHTML = "music";
    //             break;
    //         case 2:
    //             span.textContent = "video";
    //             break;
    //         case 3:
    //             span.innerHTML = "spotify";
    //             break;
    //         case 4:
    //             span.innerHTML = "contact";
    //             break;
    //     }
    // });
};

const songs = document.querySelector("#songs");
songs.addEventListener("click", songList);

function songList() {
    const menu = document.querySelectorAll(".main-menu a");
    const allSongs = document.querySelector(".all-songs");
    allSongs.classList.remove("hide-songs");
    const allVideo = document.querySelector(".all-video");
    allVideo.classList.add("hide-video")
    // menu.forEach((span, index) => {
    //     switch(index) {
    //         case 1:
    //             span.innerHTML = "poop"
    //             break;
    //         case 2:
    //             span.innerHTML = "head"
    //             break;
    //         case 3:
    //             span.innerHTML = "mr"
    //             break;
    //         case 4:
    //             span.innerHTML = "fart"
    //             break;
    //         case 5:
    //             span.innerHTML = "fart"
    //             break;
    //     }
    };

const video = document.querySelector("#video");
video.addEventListener("click", videoList);

function videoList() {
    const allVideo = document.querySelector(".all-video");
    allVideo.classList.remove("hide-video");
    const allSongs = document.querySelector(".all-songs");
    allSongs.classList.add("hide-songs");
};

const contact = document.querySelector("#contact");
contact.addEventListener("click", contactForm);