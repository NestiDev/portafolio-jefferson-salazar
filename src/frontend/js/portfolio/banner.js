// __________ start code - show modal __________ //

/* 
    .$btnOpenModal: almacena el elemento html con ID btn-open-modal
    .$modalComponent: almacena el elemento html con ID modal-component
    .$cardModal: almacena el elemento html con ID modal-card
*/

let $btnOpenModal = document.querySelector('#btn-open-modal'),
    $modalComponent = document.querySelector('#modal-component'),
    $modalCard = document.querySelector('#modal-card');

/* 
    generamos un evento click en $btnOpenModal y declaramos una funcion
*/
$btnOpenModal.addEventListener('click', function(e) {
    /* 
        prevenimos el comportamiento que tiene por defecto los botones
    */
    e.preventDefault(); 
    
    /* 
        añadimos a $modalComponent la clase js_show_modal definida
        en 'src/sass/layout/modal.scss' 
    */
    $modalComponent.classList.add('js_show_modal');

    /* 
        añadimos a $modalCard la clase js_translate_down definida
        en 'src/sass/layout/modal.scss'
    */
    $modalCard.classList.add('js_translate_down');

    /*
        añadimos a body la clase js_hidden_scroll
        definida en 'src/sass/style.scss'  
    */
    document.body.classList.add('js_hidden_scroll');
});
    
// __________ end code - show modal __________ //