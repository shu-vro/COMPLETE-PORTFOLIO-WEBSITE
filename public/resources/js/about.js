const aboutNavButtons = document.querySelectorAll(".about_nav a");
const aboutContainer = document.querySelector(".about_container");

function resetActiveState() {
    aboutNavButtons.forEach((button) => button.classList.remove("active"));
    ["one", "two", "three"].forEach((className) =>
        aboutContainer.classList.remove(className)
    );
}

function handleButtonClick(button) {
    const className = button.dataset.text;

    resetActiveState();

    button.classList.add("active");
    aboutContainer.classList.add(className);
}

aboutNavButtons.forEach((button) => {
    button.addEventListener("click", () => handleButtonClick(button));
});
