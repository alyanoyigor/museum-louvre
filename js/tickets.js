let basicDownButton = document.querySelector("#basic-down");
let basicUpButton = document.querySelector("#basic-up");
let seniorDownButton = document.querySelector("#senior-down");
let seniorUpButton = document.querySelector("#senior-up");
let basicNumber = document.querySelector("#basic-number");
let seniorNumber = document.querySelector("#senior-number");
let total = document.querySelector("#total span");
let ticketType = +document.querySelector('input[name="ticket-type"]:checked')
	.dataset.ticketType;

let decreaseCount = (count, i) => {
	let number = Number(total.innerHTML);
	if (count.value === count.min) return;
	count.stepDown();
	number -= ticketType / i;
	total.innerHTML = number;
};
let increaseCount = (count, i) => {
	let number = Number(total.innerHTML);
	if (count.value === count.max) return;
	count.stepUp();
	number += ticketType / i;
	total.innerHTML = number;
};

function changeTicketType() {
	ticketType = +this.dataset.ticketType;
	this.checked = true;
	total.innerHTML =
		basicNumber.value * ticketType + (seniorNumber.value * ticketType) / 2;
}

basicDownButton.addEventListener("click", () => decreaseCount(basicNumber, 1));
basicUpButton.addEventListener("click", () => increaseCount(basicNumber, 1));
seniorDownButton.addEventListener("click", () =>
	decreaseCount(seniorNumber, 2)
);
seniorUpButton.addEventListener("click", () => increaseCount(seniorNumber, 2));
document
	.querySelector("#permanent")
	.addEventListener("click", changeTicketType);
document
	.querySelector("#temporary")
	.addEventListener("click", changeTicketType);
document.querySelector("#combined").addEventListener("click", changeTicketType);
