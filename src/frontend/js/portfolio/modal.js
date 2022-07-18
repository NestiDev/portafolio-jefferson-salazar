// __________ start code - close modal __________ //

/* 
    nota: las variables implementadas en este archivo, estan declaradas
    en 'src\js\banner.js' 
*/

/* 
    generamos un evento click en $modalComponent y declaramos una funcion
*/
$modalComponent.addEventListener('click', function() {
    /* 
        removemos de $modalComponent la clase js_show_modal definida 
        en 'src/sass/layout/modal.scss'  
    */
    this.classList.remove('js_show_modal');

    /* 
        removemos de $modalCard la clase js_translate_down definida 
        en 'src/sass/layout/modal.scss'
    */
    $modalCard.classList.remove('js_translate_down');

    /*
        removemos de body la clase js_hidden_scroll
        definida en 'src/sass/style.scss'  
    */
    document.body.classList.remove('js_hidden_scroll');
});

// __________ end code - close modal __________ //