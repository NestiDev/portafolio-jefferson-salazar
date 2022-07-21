// __________ start code - scroll header __________ //

/* 
   .$headerComponent: almacena el elemento html con ID header-component
*/
let $headerComponent = document.querySelector('#header-component');

/* 
    generamos un evento scroll al objeto windows y declaramos una funcion
*/
window.addEventListener('scroll', function() {
    /*  
        definimos un condicional, si window.scrollY es mayor a 70
        añadimos a $headerComponent la clase js_header_scroll,
        definida en 'src\sass\layout\_header.scss'
    */
    if(this.scrollY > 70) {
        $headerComponent.classList.add('js_header_scroll');
    }else {
        /* 
            de lo contrario removemos de $headerComponent la clase
            js_header_scroll
        */
        $headerComponent.classList.remove('js_header_scroll');
    };
}); 
    
// __________ end code - scroll header __________ //


// __________ start code - active dark mode __________ //

/* 
    .$darkMode: almacena el elemento html con ID dark-mode-icon 
*/
let $darkModeIcon = document.querySelector('#dark-mode-icon');

/* 
    generamos un evento click en $darkModeIcon y declaramos una funcion
*/
$darkModeIcon.addEventListener('click', function() {
    /* 
        añadimos o removemos de $darkModeIcon la clase js_active_dark_mode 
        definida en 'src/sass/layout/header.scss
    */
    this.classList.toggle('js_active_dark_mode');

    /* 
        añadimos o removemos del body la clase js_body_dark_mode definida en 
        'src/sass/style.scss' 
    */
    document.body.classList.toggle('js_body_dark_mode');

    /*  
        definimos un condicional, si body contiene la clase js_body_dark_mode 
        almacenamos en localStorage la clave dark_mode con valor: true 
    */
    if (document.body.classList.contains('js_body_dark_mode')) {
        localStorage.setItem('dark_mode','true');
    } else {
        /* 
            de lo contrario almacenamos en localStorage la clave dark_mode 
            con valor: false
        */
        localStorage.setItem('dark_mode','false');
    };
}); 

// __________ end code - active dark mode __________ //


// __________ start code - save dark mode to local storage __________ //

/*
    definimos un condicional, si localStorage tiene la clave dark_mode y su
    valor es igual true
*/
if (localStorage.getItem('dark_mode') === "true") {
    /* 
        añadimos a $darkModeIcon la clase js_active_dark_mode
    */
    $darkModeIcon.classList.add('js_active_dark_mode');

    /* 
        añadimos a body la clase js_body_dark_mode
    */
    document.body.classList.add('js_body_dark_mode');
}

// __________ end code - save dark mode to local storage __________ //


// __________ start code - add scroll reveal __________ //

/* 
	revealElements: alamacena el metodo ScrollReveal() 
*/
let revealElements = ScrollReveal({
    /* 
        duration: esta propiedad me permite defimnir la
        velocidad en que se van revelando los elementos
    */
    duration: 2000,
});

/* 
	pasamos a revealElements el metodo reveal() que recibe
    como parametro el elemento html al cual vamos a aplicar
    scrollReveal 
*/
revealElements.reveal('.jumbotron_component', {
    /* 
        origin: con esta propiedad definimos el modo de 
        revelado del elemento
    */
    origin: "bottom",
})

revealElements.reveal('.box_banner_biografy', {
    origin: "bottom",

    /* 
        distance: esta propiedad me permite definir el
        desplazamiento que tiene tendra el elemento antes
        de ser revelado
    */
    distance: "10px"
});

revealElements.reveal('.box_banner_img', {
    origin: "top",
    distance: "10px"
});

revealElements.reveal('h2', {
    origin: "bottom",
    distance: "20px",
    duration: 1500,
});

revealElements.reveal('.js_customer_left', {
    origin: "bottom",
    distance: "60px"
});

revealElements.reveal('.js_customer_right', {
    origin: "bottom",
    distance: "60px",
    duration: 3500
});

// __________ end code - add scroll reveal __________ //