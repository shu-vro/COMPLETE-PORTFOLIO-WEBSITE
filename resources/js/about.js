let about_nav_btn = document.querySelectorAll(".about_nav a");
const about_container = document.querySelector(".about_container");
const myImage = document.querySelector(".layer2 .wrapper .face2");

function collapse2() {
    about_nav_btn.forEach((link) => {
        link.classList.remove("active");
    });
    about_container.classList.remove("one");
    about_container.classList.remove("two");
    about_container.classList.remove("three");
}

function slider1(selector, text) {
    selector.addEventListener("click", () => {
        collapse2();
        selector.classList.add("active");
        about_container.classList.add(text);
    });
}

slider1(about_nav_btn[0], about_nav_btn[0].dataset.text);
slider1(about_nav_btn[1], about_nav_btn[1].dataset.text);
slider1(about_nav_btn[2], about_nav_btn[2].dataset.text);
