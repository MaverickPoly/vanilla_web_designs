const navbar = document.querySelector("nav");

const scrollThreshold = 150;

function handleScroll() {
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
}

window.addEventListener("scroll", handleScroll)


// Scroll to top btn
const scrollBtn = document.getElementById("scrollBtn");
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
