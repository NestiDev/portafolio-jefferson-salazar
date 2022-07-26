// __________ start code - swiper slider __________ //

/* 
	swiper: alamacena el elemento html con la clase mySwiper
*/
let swiper = new Swiper('.mySwiper', {
	/*
		simulateTouch: con esta propiedad evitamos que
		el cambio de slider se haga con el tactil
	*/
	simulateTouch: false,

	/*
		spaceBetween: con esta propiedad definimos la
		separacion de slider a slider
	*/
	spaceBetween: 20,

	/* 
		navigation: implementa la funcionalidad de ir 
		atras o adelante presionanado los iconos < >
		del slider
	*/
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	/* 
		loop: esta propiedad nos permite repetir el slider de 
		manera infinita
	*/
	loop: false,
});

// __________ end code - swiper slider __________ //