mapboxgl.accessToken =
	"pk.eyJ1IjoiYWx5YW5veWlnb3IiLCJhIjoiY2t1bG43eDBhMWkzaTJ2b3pyNTl5ZHo5ZCJ9.3l8qRwQLyW-eg0dy42n9xw";
let map = new mapboxgl.Map({
	container: "map",
	center: [2.3364, 48.86091],
	style: "mapbox://styles/mapbox/light-v10",
	zoom: 16,
});
const marker1 = new mapboxgl.Marker({
	color: "black",
})
	.setLngLat([2.3364, 48.86091])
	.addTo(map);
const marker2 = new mapboxgl.Marker({
	color: "grey",
})
	.setLngLat([2.3333, 48.8602])
	.addTo(map);
const marker3 = new mapboxgl.Marker({
	color: "grey",
})
	.setLngLat([2.3397, 48.8607])
	.addTo(map);
const marker4 = new mapboxgl.Marker({
	color: "grey",
})
	.setLngLat([2.333, 48.8619])
	.addTo(map);
const marker5 = new mapboxgl.Marker({
	color: "grey",
})
	.setLngLat([2.3365, 48.8625])
	.addTo(map);
map.addControl(new mapboxgl.NavigationControl());
