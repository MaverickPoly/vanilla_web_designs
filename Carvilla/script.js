// console.table([[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]])

let currentCarIndex = 0;

const carContents = document.querySelectorAll(".latest .content");
const carDots = document.querySelectorAll(".latest .dot");

// Navbar
const navbar = document.querySelector("nav");

updateLatestCar();
let indervalId = setInterval(handleInterval, 4000);

function updateLatestCar() {
    carContents.forEach((el) => {
        el.classList.remove("active");
    })
    
    carDots.forEach((el) => {
        el.classList.remove("active");
    })
    carContents[currentCarIndex].classList.add("active");
    carDots[currentCarIndex].classList.add("active");
}

function onLatestClicked(index) {
    currentCarIndex = index;
    updateLatestCar()
}

function handleInterval() {
    currentCarIndex = (currentCarIndex + 1) % 3;
    updateLatestCar()
}


// Navbar activeness
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
})
