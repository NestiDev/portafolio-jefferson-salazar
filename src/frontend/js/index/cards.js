// __________ start code - swiper slider __________ //

/* 
  swiper: alamacena el elemento html con la clase mySwiper
*/
let swiper = new Swiper('.mySwiper', {
  /*
		breakpoints: con esta propiedad definimos las medidas
		responsivel de slider a slider
	*/
  breakpoints: {
    728: {
      slidesPerView: 1
    },
    729: {
      slidesPerView: 2
    }
  },

  /*
		spaceBetween: con esta propiedad definimos la
		separacion de slider a slider
	*/
  spaceBetween: 30,

  /* 
    pagination: con esta propiedad defimos guias circulares
    para el desplazamiento del slider
  */
  pagination: {
    el: '.swiper-pagination',
    /*
      dynamicBullets: determina la animacion que va a tener
      la guia circular
    */
    dynamicBullets: true,

    /*
      dynamicBullets: determina si el slider puede ser
      cambiado desde la guia circular
    */
    clickable: true
  },

  /* 
    loop: esta propiedad nos permite repetir el slider de 
    manera infinita
  */
  loop: false,
});

// __________ end code - swiper slider __________ //