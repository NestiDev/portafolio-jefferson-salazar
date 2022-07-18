// __________ start code - show icon go-top __________ //

/* 
	.$iconGotop: alamacena el elemento html con el ID icon-gotop
*/
let $iconGotop = document.querySelector('#footer-icon-gotop');

/* 
    generamos un evento scroll en el objeto windows y definimos
    una funcion
*/
window.addEventListener('scroll', function() {
    /* 
        si el scrollY es mayor a 100 añadimos a $iconGotop la 
        clase js_show_gotop definida en la hoja de estilos 
        'src\sass\layout\_footer.scss'
    */
    if(this.scrollY > 100) {
        $iconGotop.classList.add('js_show_gotop');
    } else {
        /* 
			de lo contrario removemos de $iconGotop la clase 
            js_show_gotop
		*/
        $iconGotop.classList.remove('js_show_gotop');
    };
});
    
// __________ end code - show icon go-top __________ //


// __________ start code - scrollToTop __________ //

/*  
    .topWindow: esta almacena como valor 0, cual indica la
    .posicion inicial del header en la pagina
*/
let topWindow = 0;

/* 
    ejecutamos la funcion definida en el setInterval
*/
function scrollStep() {
   /* 
        si window.scrollY es igual a 0, clearInterval se encarga
        de limpiar el valor que tenga topWindow
    */
    if (window.scrollY === 0) {
        clearInterval(topWindow);
    } else {
        /* 
            de lo contrario pasamos a window el metodo croll
            que recibe como primer parametro top: 0 y el
            segundo window.pageYOffset - 15 que nos permite
            definir la velocidad en que regresa a la posicion 0
        */
        window.scroll(0, window.pageYOffset - 15);
    }
};

/*
    declaramos una funcion
*/
function scrollToTop() {
    /* 
        pasamos a topWindow el metodo setInterval que recibe
        como parametro una funcion y la velocidad de ejecucion 
    */
    topWindow = setInterval(scrollStep, 0);
};

/* 
    generamos un evento click en $iconGotop y pasamos la
    funcion scrollToTop anteriormente definida
*/
$iconGotop.addEventListener('click', scrollToTop);

// __________ end code - scrollToTop __________ //


// __________ start code change languages __________ //

/* 
	$textToChange: alamacena todos los elementos html con
	atributo [data-section]
*/
let $textToChange = document.querySelectorAll("[data-section]");

/* 
	guardamos en una constante una funcion asincrona, y pasamos un parametro
	(selectedLanguage)
*/
const changeLanguage = async (selectedLanguage) => {
	/* 
		hacemos uso de await y con fetch buscamos la carpeta donde tenemos
		nuestros archivos JSON, a esto pasamos el parametro selectedLanguage
		definido en la funcion, finalmente almacenamos en una variable 
	*/
	let requireLanguages = await fetch(`./assets/languages/${selectedLanguage}.json`);

	/* 
		hacemos uso de await y pasamos la variable requireLanguage para 
		convertir el valor almacenado en esta haciendo uso de .json() 
		finalmente almacenamos esto en una nueva variable
	*/
	let compilerLanguage = await requireLanguages.json();

	/* 
		hacemos un recorrido forEach en $textToChange, pasamos
        un paraemtro y definimos una funcion
	*/
	$textToChange.forEach(text => {
		/* 
			ingresamos a cada elemento html y por medio de
			dataset buscamos su atributo data-section, 
			finalmente almacenamos en una variable
		*/
		let $section = text.dataset.section;

		/* 
			ingresamos a cada elemento html y por medio de
			dataset buscamos su atributo data-value, 
			finalmente almacenamos en una variable
		*/
		let $value = text.dataset.value;

		/* 
			haciendo uso de innerHTML pasamos a cada elemento html 
			la variable compilerLanguage a la cual pasamos las
			variables $section y $value esto realiza el cambio de
			lenguage
		*/
		text.innerHTML = compilerLanguage[$section][$value];
	})
}

/* 
	$languagesFlags: alamacena todos los elementos html con clase
	js_languages_flags
*/
let $languagesFlags = document.querySelectorAll('.js_languages_flags');

/* 
	hacemos un recorrido forEach en la variable $languagesFlags
*/
$languagesFlags.forEach(flag => {
	/* 
		añadimos a cada elemento html un evento click
	*/
	flag.addEventListener('click', (e) => {
		/* 
			finalmente pasamos la funcion changeLanguage anteriomente
			definida esta nos solicita un parametro por lo que pasamos
			e.target.parentElement.dataset.language
		*/
		changeLanguage(e.target.parentElement.dataset.language);
	})
});

// __________ start code change languages __________ //


// __________ start code - currentYear __________ //

/* 
	$footerYear: alamacena el elemento html con el ID
	footer-year
*/
let $footerYear = document.querySelector('#footer-year');

/* 
	currentYear: alamacena el año actual gracias al uso del
    objeto new Date().getFullYear()
*/
let currentYear = new Date().getFullYear();

/* 
	haciendo uso de la propiedad innerHtml almacenamos en la variable
	$footerYear el año actual que almacena currentYear
*/
$footerYear.innerHTML = `© Creado y Diseñado por Jefferson Salazar ${currentYear}`;

// __________ end code - currentYear __________ //