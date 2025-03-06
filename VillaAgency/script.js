

let currentHeroIndex = 0;

const heroOverlays = document.querySelectorAll(".hero .overlay-img");
const heroInfos = document.querySelectorAll(".hero .info");
const heroControls = document.querySelectorAll(".hero .controls .control");

updateHero();


function updateHero() {

    heroOverlays.forEach((el) => {
        el.classList.remove("active");
    })
    heroInfos.forEach((el) => {
        el.classList.remove("active");
    })
    heroControls.forEach((el) => {
        el.classList.remove("active");
    })
    heroOverlays[currentHeroIndex].classList.add("active");
    heroInfos[currentHeroIndex].classList.add("active");
    heroControls[currentHeroIndex].classList.add("active");
}


function updateHeroIndex(index) {
    currentHeroIndex = index;
    updateHero();
}


