// __________ start code - show box form error __________ //

/* 
	.$inputs: alamacena cada uno de los elementos html
	.definidos con la tag-input
*/
let $inputs = document.querySelectorAll('input');

/* 
    .errorName: alamacena el elemento html definido con 
    .ID error-name

    .errorEmail: alamacena el elemento html definido con 
    .ID error-email  
*/
let $errorName = document.querySelector('#error-name'),
    $errorEmail = document.querySelector('#error-email');

/*
    .almacenamos expresiones regulares en variables que usaremos
    .para validar los campos del formulario
*/
let expName = /^[a-zA-Z\s]{4,16}$/,
    expEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/;

/* 
    hacemos un recorrido forEach en $inputs, este recibe un 
    parametro y definimos una funcion
*/
$inputs.forEach(input => {
    /* 
        generamos un evento KEYUP al parametro (input) y declaramos 
        una funcion a la que pasamos un event(e) como parametro
    */
    input.addEventListener('keyup', function(e) {
        /* 
            .formInputsValue: almacena los datos ingresados por el usuario en los 
            .campos input
        */
        let formInputsValue = e.target.value;

        /* 
            switch: recibe el atributo name definido en los inputs, 
            definimos casos para mostrar los diferentes tipos de errores 
            de acuerdo al campo seleccionado por el usuario
        */
        switch (e.target.name) {
            /* 
                TEST() recibe como parametro a formInputsValue y compara los valores
                ingresados con las expresiones regulares, luego el condicional mostrara 
                la clase js_show_error definida en 'src/sass/layout/contactos.scss'
            */
            case 'name': {
                (!expName.test(formInputsValue)) ? $errorName.classList.add('js_show_error'):$errorName.classList.remove('js_show_error'); 
            }; break;
    
            case 'email': {
                (!expEmail.test(formInputsValue)) ? $errorEmail.classList.add('js_show_error'):$errorEmail.classList.remove('js_show_error'); 
            }; break;
        };
    });
});


/* 
	.$textArea: alamacena el elemento html definido
	.con la tag-textarea
*/
let $textArea = document.querySelector('textarea');

/*
    .errorPost: alamacena el elemento html definido con 
    .ID error-post
*/
let $errorPost = document.querySelector('#error-post');

/*
    .almacenamos expresiones regulares en variables que usaremos
    .para validar los campos del formulario
*/
let expPost = /^[a-zA-Z0-9_.+-À-ÿ\s]{10,100}$/;


/* 
    generamos un evento KEYUP al parametro (input) y declaramos 
    una funcion a la que pasamos un event(e) como parametro
*/
$textArea.addEventListener('keyup', function(e) {
    /* 
        .formTextareaValue: almacena los datos ingresados por el usuario en el 
        .campo textarea
    */
    let formTextareaValue = e.target.value;

    /* 
        definimos un condicional que recibe el atributo name definido en el 
        textarea, y nos aseguramos que este sea igual a post
    */
    if(e.target.name === 'post') {
        /* 
            TEST() recibe como parametro a formTextareaValue y compara los valores
            ingresados con la expresion regular, luego el condicional mostrara 
            la clase js_show_error definida en 'src/sass/layout/contactos.scss'
        */
        !expPost.test(formTextareaValue) ? $errorPost.classList.add('js_show_error'):$errorPost.classList.remove('js_show_error');
    }	
})

// __________ end code - show box form error __________ //


// __________ start code - show socials media __________ //

/*  
    .$btnSocialMedia: almacena el elemento html con ID btn-socials-media
*/
let $btnSocialMedia = document.querySelector('#btn-socials-media');

/* 
    generamos un evento click en $btnSocialMedia y definimos 
    una funcion a la que pasamos un event(e) como parametro
*/
$btnSocialMedia.addEventListener('click', function(e) {
    /* 
        prevenimos el comportamiento del button
    */
    e.preventDefault();

    /* 
        añadimos o removemos de $btnSocialMedia la clase js_show_socials_media 
        definida en 'src/sass/layout/contactos.scss'
    */
    this.classList.toggle('js_show_socials_media');
})

// __________ end code - show socials media __________ //


// __________ start code - submit form data __________ //

/*  
    .api: almacena la url de la api creada con node js
    .$form: almacena el elemento html con ID formulario
    .$loaderComponent: almacena el elemento html con ID laoder-component
*/
let api = "http://localhost:3000/contacts/message",
    $form = document.querySelector('#formulario'),
    $loaderComponent = document.querySelector('#loader-component');

/* 
    generamos un evento submit en $form y definimos una funcion
    a la que pasamos un event(e) como parametro
*/
$form.addEventListener('submit', function(e){
    /* 
        prevenimos el comportamiento del button tipo submit
    */
    e.preventDefault();

    /* 
        añadimos a $loaderComponent la clase js_show_loader definida
        en 'src/sass/layout/laoder.scss' 
    */
    $loaderComponent.classList.add('js_show_loader');

    /*
        .definimos un OBJETO y pasamos como clave el nombre de los campos 
        .declarados en form y en la api node js, estas almacenaran la 
        .informacion ingresada por el usuario en cada input
    */
    let formFields = {
        name: e.target.name.value,
        email: e.target.email.value,
        post: e.target.post.value
    };

    /* 
        FETCH: recibe como parametro la variable api, luego definimos un OBJETO
        y pasamos el METHOD, un HEADERS y en BODY utilizamos JSON.STRINGFY que 
        recibe como parametro el objeto formFields

        JSON.stringify nos ayuda a pasar los datos de tipo OBJETO a tipo STRING
    */
    fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formFields)
    })
    /*  
        FETCH retorna una promesa por ende hacemos uso de .THEN y .CATCH
        para mostrar alertas al usuario dependiedo del estado del formulario
    */
    .then (res => {
        /* 
            añadimos la funcion setTimeout() para retrazar la respuesta del
            servidor y con esto darle espacio al loader
        */
        setTimeout(() => {
            /* 
                añadimos a $loaderComponent la clase js_show_loader definida
                en 'src/sass/layout/laoder.scss' 
            */
            $loaderComponent.classList.remove('js_show_loader');

            /* 
                definimos un condicional el cual si el status de la respuesta
                es 400 muestra una alerta de error
            */
            if(res.status === 400) {
                Swal.fire({
                    icon: 'error',
                    title: 'verifica que los campos sean correctos',
                    position: 'center',
                    showConfirmButton: false,
                    padding: '0 0 3em',
                    timer: 4000 
                });
            };

            /* 
                definimos un condicional el cual si el status de la respuesta
                es 200 muestra una alerta de exito
            */
            if(res.status === 200) {
                Swal.fire({ 
                    icon: 'success',
                    title: 'el mensaje fue enviado correctamente',
                    position: 'center',
                    showConfirmButton: false,
                    padding: '0 0 3em',
                    timer: 4000      
                });

                /* 
                    finalmente borramos los valores de los campos del
                    formulario
                */
                $form.reset();
            };
        }, 3000);
    })
    .catch(err => {
        /* 
            añadimos a $loaderComponent la clase js_show_loader definida
            en 'src/sass/layout/laoder.scss' 
        */
        $loaderComponent.classList.remove('js_show_loader');

        Swal.fire({
            icon: 'error',
            title: 'parece que no hay conexion con la api',
            position: 'center',
            showConfirmButton: false,
            padding: '0 0 3em',
            timer: 4000 
        });
    })
});

// __________ end code - submit form data __________ //