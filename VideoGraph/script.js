document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const animationType = entry.target.getAttribute("data-animation");

                    if (animationType === "slideDown") {
                        entry.target.classList.add("animate-slide-down");
                    } else if (animationType === "slideLeft") {
                        entry.target.classList.add("animate-slide-left");
                    } else if (animationType === "slideRight") {
                        entry.target.classList.add("animate-slide-right");
                    } else if (animationType === "slideUp") {
                        entry.target.classList.add("animate-slide-up");
                    } else if (animationType === "fadeIn") {
                        entry.target.classList.add("animate-fade-in");
                    }
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });
});

const heroBoxes = document.querySelectorAll(".hero .flex .box");
const heroActions = document.querySelectorAll(".hero .flex .control .action");
let heroCurrentIndex = 0;


const updateHeroState = () => {
    heroBoxes.forEach((box) => box.classList.remove("active"));
    heroActions.forEach((action) => action.classList.remove("active"));

    heroBoxes[heroCurrentIndex].classList.add("active");
    heroActions[heroCurrentIndex].classList.add("active");
};

const changeHeroState = (index) => {
    heroCurrentIndex = index;
    updateHeroState();
}

heroActions.forEach((action, id) =>
    action.addEventListener("click", () => changeHeroState(id))
);
updateHeroState();


const menuBtn = document.getElementById("menu");
const navMenuContent = document.getElementById("navMenuContent");

menuBtn.addEventListener("click", () => {
    navMenuContent.classList.toggle("active");
});