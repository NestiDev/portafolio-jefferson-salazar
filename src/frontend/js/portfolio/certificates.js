// __________ start code - show certificates accordion __________ //

/* 
	.$certificatesSection: alamacena cada uno de los elementos html
	.que tienen la clase certificates_section.
*/
let $certificatesSection = document.querySelectorAll('.certificates_section');

/* 
	realizamos un recorrido forEach en $certificatesSection, pasamos un 
    parametro y definimos una funcion
*/
$certificatesSection.forEach(certificateOne => {
    /* 
		agregamos al parametro certificateOne un evento click y 
        definimos una funcion
	*/
    certificateOne.addEventListener('click', () => {
        /* 
			si el recorrido hecho a cada elemento tiene la clase
			js_show_certificates definida en 'src\sass\layout\_certificates.scss',
			la removemos...
		*/
        if(certificateOne.classList.contains('js_show_certificates')) {
            certificateOne.classList.remove('js_show_certificates');
        } else {
            /* 
				de lo contrario hacemos un segundo recorrido forEach 
				en $certificatesSection, pasamos un parametro y definimos
                una funcion a cada elemento para remover de este la clase 
				js_show_certificates 
			*/
			$certificatesSection.forEach((certificateTwo) => certificateTwo.classList.remove('js_show_certificates'));

            /*
                finalmente haciendo uso del primer recorrido
				añadimos a este la clase js_show_certificates definida 
                en 'src\sass\layout\_certificates.scss' 
            */
			certificateOne.classList.add('js_show_certificates');
        }
    })
    
});

// __________ end code - show certificates accordion __________ //
