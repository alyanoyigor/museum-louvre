if (window.innerWidth <= 420) {
	let nav = document.querySelector(".footer-nav");
	let navLists = document.querySelectorAll(".footer-menu__list");
	let ul = document.createElement("ul");
	ul.classList.add("footer-menu__list");
	for (let i = 0; i < 2; i++) ul.prepend(navLists[1].lastElementChild);
	nav.append(ul);
	navLists[1].prepend(navLists[0].lastElementChild);
}
