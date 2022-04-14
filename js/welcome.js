let burgerButton = document.querySelector(
	".burger-menu__button, .burger-menu__lines"
);
let menu = document.querySelector(".menu");
let welcomeBox = document.querySelector(".welcome__box");

burgerButton.addEventListener("click", () => {
	burgerButton.classList.toggle("burger-menu__button_active");
	menu.classList.toggle("burger-menu__menu_active");
	welcomeBox.classList.toggle("hide-element");
});

let tinySliderWelcome = () => {
	let sliderNumbers = document.querySelector(".slider-panel__slide-numbers");
	let slider = tns({
		container: ".my-slider",
		slideBy: "page",
		speed: 500,
		preventActionWhenRunning: true,
		mouseDrag: true,
		controlsContainer: ".slider-panel__arrows",
		prevButton: ".prev",
		nextButton: ".next",
		navContainer: ".slider-panel__pagination",
	});
	slider.events.on("indexChanged", () => {
		let index = slider.getInfo().displayIndex;
		sliderNumbers.innerHTML = `0${index}  |  05`;
	});
};
tinySliderWelcome();
