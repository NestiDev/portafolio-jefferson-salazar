// __________ start code - background color generator __________ //

/* 
   .$headerSkinBtn: almacena el elemento html con ID header-skin-btn
*/
let $headerSkinBtn = document.querySelector("#header-skin-btn");

/* 
   .$backgroundChange: almacena todos los elementos html que tengan
   .la clase js_background_change

   .$colorChange: almacena todos los elementos html que tengan
   .la clase js_color_change

   .$iconColorChange: almacena todos los elementos html que tengan
   .la clase js_icon_color_change

   .$borderChange: almacena todos los elementos html que tengan
   .la clase js_color_border_change
*/
let $backgroundChange = document.querySelectorAll(".js_background_change"),
    $colorChange = document.querySelectorAll(".js_color_change"),
    $iconColorChange = document.querySelectorAll(".js_icon_color_change");
    $borderChange = document.querySelectorAll(".js_color_border_change");

/* 
    definimos un evento click en $headerSkinBtn y definimos una funcion
*/
$headerSkinBtn.addEventListener("click", function(e) {
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

    $iconColorChange.forEach(icon => {
        icon.style.fill = newColor;
    });

    $borderChange.forEach(border => {
        border.style.border = `3px solid ${newColor}`;
    });
});


// __________ end code - background color generator __________ //