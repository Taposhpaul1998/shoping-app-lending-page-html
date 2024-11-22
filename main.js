
// menu bar 
const mobileMenu = function () {
    const barsIcon = document.getElementById("bars");
    const menuBar = document.querySelector(".menu-ber");

    barsIcon.addEventListener("click", () => {
        menuBar.classList.toggle("active");

    });
}
mobileMenu();

// scroll-up btn 
const srcollUp = function () {
    const scrollUpBtn = document.getElementById("scrollUp");

    // scroll upBtn hide and show 
    const ScrollBtn = function () {
        window.scrollY > window.innerHeight ? scrollUpBtn.classList.add("show") : scrollUpBtn.classList.remove("show");
    }
    window.addEventListener("scroll", ScrollBtn);
    // scroll up function
    scrollUpBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
};
srcollUp();