/*
1. Russia
2. Switzerland
3. Pakistan
4. Egypt
*/


let activeCarousel = 0;

const carouselBoxes = document.querySelectorAll(".carousel .box")
const carouselControls = document.querySelectorAll(".controls .control")
const actionEls = document.querySelectorAll(".actions .el");
const nav = document.querySelector("nav");
let lastScrollY = window.scrollY;
updateCarousel()

function updateCarousel() {
    carouselBoxes.forEach((box) => {
        box.classList.remove("active")
    })
    carouselControls.forEach((control) => {
        control.classList.remove("active")
    })
    actionEls.forEach((el) => {
        el.classList.remove("active")
    })
    carouselBoxes[activeCarousel].classList.add("active")
    carouselControls[activeCarousel].classList.add("active")
    actionEls[activeCarousel].classList.add("active")
}

function switchCarousel(index) {
    activeCarousel = index - 1;
    updateCarousel();
}


window.addEventListener("scroll", (e) => {
    const currentScroll = window.scrollY
    console.log(currentScroll)
    console.log("Last" + lastScrollY)
    if (currentScroll > lastScrollY) {
        nav.classList.add("active")
    }
    else {
        nav.classList.remove("active")
    }
    lastScrollY = currentScroll
})