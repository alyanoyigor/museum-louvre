const pictureInnerContainer = document.querySelector(
	".gallery__picture-inner-container"
);

function createImg(num) {
	const img = document.createElement("img");
	img.classList.add("gallery__picture");
	img.src = `assets/img/gallery/galery${num}.jpg`;
	img.alt = `galery${num}`;
	pictureInnerContainer.append(img);
}

let arrOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}
shuffle(arrOfNum);
for (let i = 0; i < arrOfNum.length; i++) {
	createImg(arrOfNum[i]);
}

// const galleryImages = document.querySelectorAll(".gallery__picture");
// function debounce(func, wait = 20, immediate = true) {
// 	var timeout;
// 	return function () {
// 		var context = this,
// 			args = arguments;
// 		var later = function () {
// 			timeout = null;
// 			if (!immediate) func.apply(context, args);
// 		};
// 		var callNow = immediate && !timeout;
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 		if (callNow) func.apply(context, args);
// 	};
// }

// function checkSlide(e) {
// 	galleryImages.forEach((galleryImage) => {
// 		const slideInAt =
// 			window.scrollY + window.innerHeight - galleryImage.height / 2;
// 		const imageBottom = galleryImage.offsetTop + galleryImage.height;
// 		const isHalfShown = slideInAt > galleryImage.height;
// 		const isNotScrolledPast = window.scrollY < imageBottom;
// 		console.log(isHalfShown && isNotScrolledPast);
// 		if (isHalfShown && isNotScrolledPast) {
// 			galleryImage.classList.add("gallery__picture_active");
// 		} else {
// 			galleryImage.classList.remove("gallery__picture_active");
// 		}
// 	});
// }
// window.addEventListener("scroll", debounce(checkSlide));
