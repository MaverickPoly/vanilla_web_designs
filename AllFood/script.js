const navbar = document.querySelector("nav");

// Navbar Stickiness
window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        navbar.classList.remove("active");
    } else {
        navbar.classList.add("active");
    }
});


// Menu Section Selection
const chips = document.querySelectorAll(".menu .actions .chip");
const menuContainers = document.querySelectorAll(".menu .bottom .container");
let chipActiveIndex = 0;
updateChips()

function updateChips() {
    chips.forEach((chip) => {
        chip.classList.remove("active");
    })
    menuContainers.forEach((container) => {
        container.classList.remove("active");
    })
    chips[chipActiveIndex].classList.add("active")
    menuContainers[chipActiveIndex].classList.add("active")
}

function changeChipIndex(newIndex) {
    chipActiveIndex = newIndex;
    updateChips();
}


// Scroll to top button
const scrollBtn = document.querySelector(".scrollBtn");

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})

