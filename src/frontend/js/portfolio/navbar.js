// __________ start code - close menu __________ //

/* 
    .$menuIconNavbar: almacena el elemento html con ID menu-icon-navbar
*/
$menuIconNavbar = document.querySelector('#menu-icon-navbar');

/* 
    generamos un evento click en menuIconNavbar y definimos una funcion
*/
$menuIconNavbar.addEventListener('click', function() { 
    /*
        removemos de $navbarComponent la clase js_show_overlay
        definida en 'src/sass/navbar.scss'  
    */
        $navbarComponent.classList.remove('js_show_overlay');
            
    /*
        removemos de $navbarNav la clase js_show_menu_nav
        definida en 'src/sass/navbar.scss'  
    */
    $navbarNav.classList.remove('js_show_menu_nav');

    /*
        removemos de body la clase js_hidden_scroll
        definida en 'src/sass/style.scss'  
    */
    document.body.classList.remove('js_hidden_scroll');
});

// __________ end code - close menu __________ //


// __________ start code - active link __________ //

/* 
   .$navbarActiveLinks: almacena todos los elementos html tag-li con clase
   .js_active_link que estan dentro de ul_navbar 
*/
let $navbarActiveLinks = document.querySelectorAll('ul_navbar, li, .js_active_link');

/* 
    declaracion de la funcion activeLink
*/
function activeItem() {
    /* 
        hacemos un recorrido forEach en $links para remover de cada elemento
        la clase js_active_item definida en 'src/sass/layout/navbar.scss' 
    */
    $navbarActiveLinks.forEach(items => items.classList.remove('js_active_item'));

    /* 
        añadimos la clase js_active_item definida en 'src/sass/layout/navbar.scss' 
        al elemento seleccionado
    */
    this.classList.add('js_active_item');
};  

/* 
    realizamos un recorrido forEach en $links, pasamos un parametro
    (link) y definimos una funcion. generamos un evento CLICK
    al parametro (link) y pasamos la funcion previamente definida
*/
$navbarActiveLinks.forEach(items => items.addEventListener('click', activeItem));

// __________ end code - active link __________ //


// __________ start code - smoot link __________ //

/* 
   .$navLinks: almacena todos los elementos html tag-a que
   .estan dentro de una tag-li que a su vez esta dentro de ul_navbar 
*/
let $navLinks = document.querySelectorAll("ul_navbar, li a");

/* 
    hacemos un recorrido forOf de $navLinks para almacenar en una
    constante links cada uno de los enlaces
*/
for (const links of $navLinks) {
    /*
        pasamos a cada links un evento click que ejecuta una funcion
        definida como redirectLink
    */
    links.addEventListener("click", redirectLink);
}

/*
    definimos la funcion redirectLink
*/
function redirectLink(e) {
    /*
        con e.preventDefault() nos encargamos de prevenir el comportamiento
        que tienen por defecto las tag-a
    */
    e.preventDefault();
    
    /*
        hrefLinks: almacena el atributo href del enlace en el que hacemos click
    */
    const hrefLinks = this.getAttribute("href");

    /* 
        offsetTop: almacena el enlace seleccionado al cual finalmente pasamos
        la propiedad offsetTop que se encarga de transformar en un valor numerico
        la posicion en la que se encuentra la seccion a la que vamos a ser 
        redirigidos
    */
    const offsetTop = document.querySelector(hrefLinks).offsetTop;
    
    /*
        scroll: este metodo recibe 2 propiedades
    */
    scroll({
        /*
            top: recibe como parametro el valor numerico almacenado en offsetTop
        */
        top: offsetTop,

        /*
            behavior: este se encarga de la suavidad del redireccionamiento
        */
        behavior: "smooth"
    });
}

// __________ end code - smoot link __________ //


// __________ start code - background color generator __________ //

/* 
   .$navbarSkinBtn: almacena el elemento html con ID navbar-skin-btn
   .$navbarNav: almacena el elemento html con ID navbar-nav
   .$btnBannerHdv: almacena el elemento html con ID btn-banner-hdv
*/
let $navbarSkinBtn = document.querySelector("#navbar-skin-btn");
    $navbarNav = document.querySelector("#navbar-nav"),
    $btnBannerHdv = document.querySelector("#btn-banner-hdv");

/* 
   .$backgroundChange: almacena todos los elementos html que tengan
   .la clase js_background_change

   .$colorChange: almacena todos los elementos html que tengan
   .la clase js_color_change

   .$imgBorderChange: almacena todos los elementos html que tengan
   .la clase js_img_border_color_change

   .$iconColorChange: almacena todos los elementos html que tengan
   .la clase js_icon_color_change

   .$borderChange: almacena todos los elementos html que tengan
   .la clase js_color_border_change
*/
let $backgroundChange = document.querySelectorAll(".js_background_change"),
    $colorChange = document.querySelectorAll(".js_color_change"),
    $imgBorderChange = document.querySelectorAll(".js_img_border_color_change"),
    $iconColorChange = document.querySelectorAll(".js_icon_color_change"),
    $borderChange = document.querySelectorAll(".js_color_border_change");

/* 
    definimos un evento click en $navbarBtn y definimos una funcion
*/
$navbarSkinBtn.addEventListener("click", function(e) {
    /* 
        prevenimos el comportamiento que tiene por defecto los botones
    */
    e.preventDefault(); 

    /*
        haciendo uso de la propiedad (Match.random() * 256),
        generamos numeros aleatorios que posteriormente con
        la propiedad (Match.floor()) redondeamos un numero 
        decimal a su entero descendiente mas cercano. 
        finalmente almacenamos los numeros generados
    */
    const   r = Math.floor(Math.random() * 256),
            g = Math.floor(Math.random() * 256),
            b = Math.floor(Math.random() * 256);

    /* 
        newColor: alamacena los numeros generados para ser
        utilizados como colores rgb
    */
    const newColor = `rgb(${r},${g},${b})`;

    /* 
        $navbarNav.style.backgroundColor recibe como valor
        la costante newColor
    */
    $navbarNav.style.backgroundColor = newColor;

    /* 
        $btnBannerHdv.style.border recibe como valor
        la costante newColor
    */
    $btnBannerHdv.style.border = `2px solid ${newColor}`;
    
    /* 
        hacemos un recorrido forEach, pasamos un parametro y definimos
        una funcion. a esteoarametro pasamos un estilo css que recibe
        como valor la constante newColor
    */
    $backgroundChange.forEach(background => {
        background.style.backgroundColor = newColor
    });

    $colorChange.forEach(color => {
        color.style.color = newColor
    });

    $imgBorderChange.forEach(imgBorder => {
        imgBorder.style.border = `5px solid ${newColor}`
    });

    $iconColorChange.forEach(icon => {
        icon.style.fill = newColor;
    });

    $borderChange.forEach(border => {
        border.style.border = `3px solid ${newColor}`;
    });
});

// __________ end code - background color generator __________ //