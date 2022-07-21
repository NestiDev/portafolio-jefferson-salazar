# PORTAFOLIO WEB

1. ESTRUCTURA DEL PROYECTO {
    <carpeta src>
        <carpeta backend>
            <carpeta database>
                message.json: en este archivo almacenamos los mensajes
                enviados por el usuario a traves del formulario
            </carpeta database>

            <carpeta routes>
                <carpeta api>
                    message.js: en este definimos el endpoint que recibe 
                    el mensaje enviado por el usuario a traves del formulario
                </carpeta api>

                <carpeta views>
                    pages.js: en este definimos los endpoints que muestran
                    al usuario las diferentes vistas del portafolio
                </carpeta views>
            </carpeta routes>
        </carpeta backend>

        <carpeta frontend>
            <carpeta assets>
                <carpeta docs>
                    contiene todo lo relacionado a los archivos que pueden
                    ser descragados desde el portafolio
                </carpeta docs> 

                <carpeta fonts>
                    contiene todo lo relacionado a las fuentes externas 
                    implementadas en el portafolio
                </carpeta fonts> 

                <carpeta images>
                    contiene todo lo relacionado a las imagenes implementadas
                    en el portafolio
                </carpeta images> 

                <carpeta languages>
                    contiene los archivos JSON .es y .en encargados de realizar
                    el cambio de lenguaje del proyecto
                </carpeta languages> 
            </carpeta assets> 

            <carpeta js>
                <carpeta index>
                    contiene todos los archivos javascript utilizados por
                    index.ejs, estos se nombran de la misma manera que 
                    se nombran los componentes en ejs
                </carpeta index>

                <carpeta portfolio>
                    contiene todos los archivos javascript utilizados por
                    portafolio.ejs, estos se nombran de la misma manera que 
                    se nombran los componentes en ejs
                </carpeta portfolio>

                main.js: archivo javascript principal, en este definimos 
                las librerias externas y las funcionalidades compartidas 
                por los componentes index.ejs y portfolio.ejs
            </carpeta js> 

            <carpeta pages>
                contiene las vistas principales del portafolio
            </carpeta pages>

            <carpeta partials>
                contiene los componentes reutilizables

                <carpeta templates>
                    contiene pequeñas porciones de codigo que son
                    reutilizados por los componentes
                </carpeta templates>
            </carpeta partials>

            <carpeta sass>
                <carpeta layout>
                    <carpeta index>
                        contiene todos los archivos sass utilizados para dar
                        estilos a los componentes definidos en index.ejs, 
                        estos se nombran de la misma manera que se nombran 
                        los componentes en index.ejs
                    </carpeta index>

                    <carpeta portfolio>
                        ccontiene todos los archivos sass utilizados para dar
                        estilos a los componentes definidos en portfolio.ejs, 
                        estos se nombran de la misma manera que se nombran los 
                        componentes en portfolio.ejs
                    </carpeta portfolio>
                    
                    main.scss: contiene las importaciones de las diferentes hojas 
                    de estilos definidas dentro de las carpetas index y portfolio
                </carpeta layout>

                <carpeta shared>
                    _fonts.scss: contiene la definicion de las fuentes externas 
                    implementadas en el portafolio

                    _mixins.scss: contiene la definicion de estilos globales que 
                    pueden ser reutilizados por diferentes componentes

                    _variables.scss: contiene la definicion de variables globales 
                    que pueden ser reutilizadas por diferentes componentes
                </carpeta shared> 

                style.scss: archivo de estilos principal, en este definimos estilos 
                globales que son reutilizados por los diferentes componentes ejs
            </carpeta sass> 
        </carpeta frontend>
    <carpeta src>

    * .gitignore: este contiene los archivos del proyecto que seran ignorados

    * index.js: en este definimos el servidor local que corre el proyecto

    * README.md: en este definimos la guia de como esta estructurado este portafolio

    * vercel.json: en este definimos la configuracion que necesita vercel para
    levantar el servidor creado con node y express
}




2. ESTRUCTURA DE INDEX.EJS {
    <body>  
        //
            header_component: dentro de este definimos el activador del modo oscuro
            y el boton encargado de cambiar el color principal de ciertos componentes, 
            cuando hacemos scroll en la pagina este se fija en la parte superior
        //
        <header class="header_component"></header>        

        //
            main_components_container: definido para contener los diferentes componentes 
            que conforman el cuerpo de index.ejs
        //
        <main class="main_components_container">
                //
                    jumbotron_component: dentro de este definimos la bienvenida
                    al usuario y las recomendaciones
                //
                <section class="jumbotron_component"></section>

                //
                    cards_component: dentro de este definimos una guia de pasos
                    sobre como se definio la estructura del portafolio y cual es
                    la principal funcionalidad de cada componente estas tarjetas
                    pueden ser recorridas por medio de un slider
                //
                <div class="cards_component"></div>
        </main>
    
        //
            footer_component: en este definimos el pie de pagina y eL icon gotop 
            que se encarga de redirigir al usuario al inicio del portafolio. 
            Tambien cuenta con la posibilidad de cambiar el lenguaje entre el 
            idioma español e ingles, finalmente muestra el año actual del portafolio
        //
        <footer class="footer_component"></footer>  
    </body>
}

3. ESTRUCTURA DE PORTFOLIO.EJS { 
    <body>  
        //
            header_component: dentro de este definimos el activador del modo oscuro
            y el icono encargado de abrir el menu de navegacion, cuando hacemos
            scroll en la pagina este se fija en la parte superior
        //
        <header class="header_component"></header>        

        //  
            body_page: definido para contener las dos cajas en las que se divide el 
            cuerpo del portafolio
        //  
        <div class="body_page">
            //
                navbar_component: dentro de este definimos el icono que cierra el menu 
                de navegacion y los enlaces encargados de la redireccion a los diferentes 
                componentes, finalmente cuenta con un boton skins que cambia el color 
                principal de ciertos componentes
            //
            <div class="navbar_component"></div>

            //
                main_components_container: definido para contener los diferentes componentes 
                que conforman el cuerpo de portfolio.ejs
            //
            <main class="main_components_container">
                //
                    banner_component: dentro de este definimos la descripcion personal 
                    acompañada de una imagen, el boton encargado de abrir el modal y un 
                    enlace para descargar la hoja de vida del aspirante, destaquemos que 
                    la imagen desaparece cuando entra en vista de dispositovo movil
                //
                <div class="banner_component"></div>

                //
                    modal_component: dentro de este definimos una imagen y la continuacion 
                    de la descripcion personal, finalmente un icono para cerrar el modal 
                    pero cabe resaltar que este cierre se puede ralizar desde toda la vista 
                    del modal
                //
                <div class="modal_component"></div>

                //
                    skills_component: dentro de este definimos unas tarjetas que hacen 
                    referencia a las tecnologias aprendidas, al pasar el mouse sobre las 
                    mismas aumentan su tamaño generando un efecto de movimiento. para la 
                    creacion de estas se implemento display: grid, finalmente destacamos 
                    que para dispositivos moviles estas se transforma en un slider.
                //
                <section class="skills_component"></section>

                //
                    certificates_component: dentro de este definimos una breve reseña 
                    de los cursos realizados y la opcion de descarga de los mismos, este 
                    conponente funciona a travez de un acordeon el cual rota 360 grados 
                    el icono mientras abre la informacion
                //
                <section class="certificates_component"></section>

                //
                    projects_component: dentro de este definimos los proyectos que hemos 
                    realizado con un enlace de redireccionamiento para visitiar la pagina 
                    oficial, para esta parte del portafolio implementamos la libreria swiper js 
                    para crear los sliders
                //
                <section class="projects_component"></section>

                //
                    contacts_component: dentro de este definimos las opiniones de nuestros clientes
                    representados en dos tarjetas que cuentan con la informacion de los mismos.
                    para la creacion de estas se implemento display: grid que se encarga de ir 
                    ajustando su distribucion en las diferentes medidas responsive
                //
                <section class="customers_component"></section>

                //
                    contacts_component: dentro de este definimos el formulario de contacto el cual
                    cuenta con campos de validacion que se activan dependiendo de los datos 
                    ingresados por el usuario, este envia los datos a una base de datos mongoDB
                    haciendo uso de una api creada con node js que muestra una tarjeta alert 
                    dependiendo de la respuesta del servidor
                //
                <div class="contacts_component"></div>

                //
                    loader_component: dentro de este definimos el loader que se hace visible cuando
                    una vez el usuario realiza el envio del formulario 
                //
                <div class="loader_component"></div>
            </main>
        </div>

        //
            footer_component: en este definimos el pie de pagina y EL icon gotop que se
            encarga de redirigir al usuario al inicio del portafolio. Tambien cuenta con
            la posibilidad de ambiar el lenguaje entre el idioma español e ingles,
            finalmente muestra el año actual en el que se creo el proyecto
        //
        <footer class="footer_component"></footer>  
    </body>
}

4. GUIA ARCHIVOS CSS {
    * estos estan nombrados de la misma manera que se nombraron los 
    componentes en cada archivo ejs

    * al inicio pueden tener definidas variables locales que solo son 
    reutilizados por ese componente

    * al inicio pueden tener definidos mixins locales que solo son 
    reutilizados por ese componente

    * el orden utilizado para aplicar los estilos es el mismo orden con
    el que se estructuro el componente en ejs

    * IMPORTANTE: 
    (js_background_change, js_color_change, js_img_border_color_change, 
    js_icon_color_change y js_color_border_change) son clases exclusivas
    para javascript que solo estan definidas en algunas etiquetas ejs 
}


5. GUIA ARCHIVOS JS

## main.js {
    1. fija el header al hacer scroll

    2. activa el modo oscuro

    3. guarda una clave en localstorage para conservar la 
    configuracion del modo oscuro

    4. añade el scroll reveal a los componentes
## }

## index/header.js {
    1. cambia el color principal de algunos componentes
## }

## portfolio/header.js {
    1. abre el menu de navegacion
## }

## navbar.js {
    1. cierra el menu de navegacion

    2. deja activo el componente seleccionado

    3. realiza la redireccion a los componentes

    4. cambia el color principal de algunos componentes
## }

## banner.js {
    1. abre el modal
## }

## modal.js {
    1. cerrar el modal
## }

## certificates.js {
    1. muestra la informacion del acordeon seleccionado 
    a la vez que oculta la informacion del acordeon que 
    dejo de ser seleccionado
## }

## projects.js {
    1. realiza el despalzamiento cuando se da click en los 
    iconos del slider permitiendo mostrar las demas tarjetas

    2. crear un bucle infinito para repetir las tarjetas 
    cada que estas terminen en su despalzamiento
## }

## contacts.js {
    1. muestra la caja de errores de los campos del formulario

    2. muestra las redes sociales

    3. envia los datos ingresados por el usuario en el formulario 
    a un servidor construido en node js, mientras llega la respuesta 
    del servidor muestra un loader y finalmente muestra una 
    tarjeta alert segun sea el status de la respuesta
## }

## footer.js {
    1. muestra el icon gotop cuando el usuario hace scroll

    2. redirige al usuario al inicio del portafolio al hacer clic en el 
    icon gotop

    3. cambia el idioma del portafolio

    4. determina el año actual del de construccion del portafolio
## }