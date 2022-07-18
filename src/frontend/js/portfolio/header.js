// __________ start code - show menu __________ //

/* 
    .$menuIconHeader: almacena el elemento html con ID menu-icon-header
    .$navbarComponent: almacena el elemento html con ID navbar-component
    .$navbarNav: almacena el elemento html con ID navbar-nav
*/
let $menuIconHeader = document.querySelector('#menu-icon-header');
    $navbarComponent = document.querySelector('#navbar-component'),
    $navbarNav = document.querySelector('#navbar-nav'),

/* 
    generamos un evento click en $menuIconHeader y definimos una funcion
*/
$menuIconHeader.addEventListener('click', function() {    
    /*
        añadimos a $navbarComponent la clase js_show_overlay
        definida en 'src/sass/navbar.scss'  
    */
    $navbarComponent.classList.add('js_show_overlay');
        
    /*
        añadimos a $navbarNav la clase js_show_menu_nav
        definida en 'src/sass/navbar.scss'  
    */
    $navbarNav.classList.add('js_show_menu_nav');

    /*
        añadimos a body la clase js_hidden_scroll
        definida en 'src/sass/style.scss'  
    */
    document.body.classList.add('js_hidden_scroll');
});

// __________ end code - show menu __________ //