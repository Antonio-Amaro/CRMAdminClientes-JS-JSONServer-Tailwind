import { showAlert, validateForm } from "./funciones.js";
import { newClient } from "./API.js";

(function () {

    const form = document.querySelector('#formulario');
    form.addEventListener('submit', validateClient);

    function validateClient(e) {
        
        e.preventDefault();

        const name = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const tel = document.querySelector('#telefono').value;
        const company = document.querySelector('#empresa').value;

        const client = {
            name,
            email,
            tel,
            company
        }

        if( validateForm(client) ) {
            // Mostrar mensaje
            showAlert('Todos los campos son obligatorios')
            return;
        }

        newClient(client);
        
    }

}) ();