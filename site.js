const home = document.querySelector("#home");
home.addEventListener("click", homeList);

function homeList() {
    const menu = document.querySelectorAll(".main-menu a");
    const allSongs = document.querySelector(".all-songs");
    allSongs.classList.add("hide-songs");
    const allVideo = document.querySelector(".all-video");
    allVideo.classList.add("hide-video");
    const showContact = document.querySelector(".contact-form");
    showContact.classList.add("hide-contact");
    document.querySelector(".u1").classList.add("hide-songs");
    document.querySelector(".u2").classList.add("hide-video");
    document.querySelector(".u3").classList.add("hide-contact");
    stopVideos();

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
    // const menu = document.querySelectorAll(".main-menu a");
    const allSongs = document.querySelector(".all-songs");
    allSongs.classList.remove("hide-songs");
    const newIdea = document.querySelector(".u1").classList.remove("hide-songs");
    document.querySelector(".u2").classList.add("hide-video");
    document.querySelector(".u3").classList.add("hide-contact");
    const allVideo = document.querySelector(".all-video");
    allVideo.classList.add("hide-video");
    const showContact = document.querySelector(".contact-form");
    showContact.classList.add("hide-contact");
    
    stopVideos();
    };

const video = document.querySelector("#video");
video.addEventListener("click", videoList);

function videoList() {
    const allVideo = document.querySelector(".all-video");
    allVideo.classList.remove("hide-video");
    const newIdea = document.querySelector(".u2").classList.remove("hide-video");
    document.querySelector(".u1").classList.add("hide-songs");
    document.querySelector(".u3").classList.add("hide-contact");
    const allSongs = document.querySelector(".all-songs");
    allSongs.classList.add("hide-songs");
    const showContact = document.querySelector(".contact-form")
    showContact.classList.add("hide-contact")
    stopVideos();
};

const contact = document.querySelector("#contact");
contact.addEventListener("click", contactForm);

function contactForm() {
    const showContact = document.querySelector(".contact-form");
    showContact.classList.remove("hide-contact");
    const bg = document.querySelector(".bg");
    bg.classList.remove("hide-contact");
    const newIdea = document.querySelector(".u3").classList.remove("hide-contact");
    document.querySelector(".u1").classList.add("hide-songs");
    document.querySelector(".u2").classList.add("hide-video");

    const menu = document.querySelectorAll(".main-menu a");
    const allSongs = document.querySelector(".all-songs");
    allSongs.classList.add("hide-songs");
    const allVideo = document.querySelector(".all-video");
    allVideo.classList.add("hide-video");
    stopVideos();
};

