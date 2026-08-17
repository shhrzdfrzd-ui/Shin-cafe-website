const backToTop = document.querySelector(".back-to-top");
const categories = document.querySelector(".menu-categories");

window.addEventListener("scroll", () => {

    if (window.scrollY > categories.offsetTop) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});