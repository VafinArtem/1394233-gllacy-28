let siteWrapper = document.querySelector(".site-wrapper")
let sliderItems = document.querySelectorAll(".slider-item")
let sliderButtons = document.querySelectorAll(".slider-toggle")

sliderButtons[0].addEventListener("click", function(evt) {
    evt.preventDefault();
    siteWrapper.classList.remove("site-wrapper-2");
    siteWrapper.classList.remove("site-wrapper-3");
    siteWrapper.classList.add("site-wrapper-1");
    sliderButtons[1].classList.remove("active-toggle");
    sliderButtons[2].classList.remove("active-toggle");
    sliderButtons[0].classList.add("active-toggle");
    sliderItems[0].classList.add("slider-active")
    sliderItems[1].classList.remove("slider-active")
    sliderItems[2].classList.remove("slider-active")
});

sliderButtons[1].addEventListener("click", function(evt) {
    evt.preventDefault();
    siteWrapper.classList.remove("site-wrapper-1");
    siteWrapper.classList.remove("site-wrapper-3");
    siteWrapper.classList.add("site-wrapper-2");
    sliderButtons[0].classList.remove("active-toggle");
    sliderButtons[2].classList.remove("active-toggle");
    sliderButtons[1].classList.add("active-toggle");
    sliderItems[1].classList.add("slider-active")
    sliderItems[0].classList.remove("slider-active")
    sliderItems[2].classList.remove("slider-active")
});

sliderButtons[2].addEventListener("click", function(evt) {
    evt.preventDefault();
    siteWrapper.classList.remove("site-wrapper-1");
    siteWrapper.classList.remove("site-wrapper-2");
    siteWrapper.classList.add("site-wrapper-3");
    sliderButtons[1].classList.remove("active-toggle");
    sliderButtons[0].classList.remove("active-toggle");
    sliderButtons[2].classList.add("active-toggle");
    sliderItems[2].classList.add("slider-active")
    sliderItems[0].classList.remove("slider-active")
    sliderItems[1].classList.remove("slider-active")
});