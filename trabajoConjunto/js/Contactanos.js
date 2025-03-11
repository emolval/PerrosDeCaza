window.addEventListener('load', function(event) {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let errorMessages = document.getElementById('errorMessages');
        errorMessages.innerHTML = '';

        let isValid = true;
        let missingFields = [];

        let nombre = document.getElementById('nombre');
        let email = document.getElementById('email');
        let telefono = document.getElementById('telefono');
        let mensaje = document.getElementById('mensaje');
        let terminos = document.getElementById('terminos');

        if (!nombre.value.trim()) {
            isValid = false;
            missingFields.push('Nombre');
            nombre.style.border = '2px solid red';
        } else {
            nombre.style.border = '';
        }

        if (!email.value.trim()) {
            isValid = false;
            missingFields.push('Email');
            email.style.border = '2px solid red';
        } else {
            email.style.border = '';
        }

        if (!telefono.value.trim()) {
            isValid = false;
            missingFields.push('Teléfono');
            telefono.style.border = '2px solid red';
        } else {
            telefono.style.border = '';
        }

        if (!mensaje.value.trim()) {
            isValid = false;
            missingFields.push('Mensaje');
            mensaje.style.border = '2px solid red';
        } else {
            mensaje.style.border = '';
        }
        /*
        if (!terminos.value.checked) {
            isValid = false;
            missingFields.push('Términos');
            terminos.style.border = '2px solid red';
        } else {
            terminos.style.border = '';
        }
        */

        let contactoEmail = document.getElementById('contacto_email');
        let contactoTelefono = document.getElementById('contacto_telefono');

        if (!contactoEmail.checked && !contactoTelefono.checked) {
            isValid = false;
            missingFields.push('Preferencia de contacto');
        }

        if (!isValid) {
            errorMessages.innerHTML = 'Por favor, completa los siguientes campos:<br>' + missingFields.join('<br>');
            errorMessages.style.color = 'red';
        } else {
            errorMessages.innerHTML = 'Formulario enviado correctamente.';
            errorMessages.style.color = 'green';
        }
    })
});
