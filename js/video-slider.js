let tinySliderVideo = () => {
	let slider = tns({
		container: ".video-journey__videos",
		slideBy: 1,
		items: 3,
		speed: 500,
		mouseDrag: true,
		preventActionWhenRunning: true,
		gutter: 42,
		navAsThumbnails: true,
		controlsContainer: ".video-journey__pagination",
		prevButton: ".video-journey__prev-button",
		nextButton: ".video-journey__next-button",
		navContainer: ".video-journey__list-items",
	});
};
tinySliderVideo();
