let button = document.querySelector(".booking__button");

button.addEventListener("click", createRipple);

function createRipple(e) {
	if (this.getElementsByClassName("ripple").length > 0) {
		this.removeChild(this.childNodes[1]);
	}

	let circle = document.createElement("div");
	this.appendChild(circle);

	let d = Math.max(this.clientWidth, this.clientHeight);
	circle.style.width = circle.style.height = d + "px";

	circle.style.left = e.clientX - this.offsetLeft - d / 2 - 270 + "px";
	console.log(circle.style.left);
	circle.style.top = e.clientY - this.offsetTop - d / 2 - 70 + "px";
	circle.classList.add("ripple");
}

let booking = document.querySelector(".booking");
let buyTicketsBtn = document.querySelector(".buy-tickets");
buyTicketsBtn.addEventListener("click", () => {
	booking.style.display = "block";
});

let bookingCloseBtn = document.querySelector(".booking__close");
bookingCloseBtn.addEventListener("click", () => {
	booking.style.display = "none";
});
