import { getClient, editClient } from "./API.js";
import { validateForm } from "./funciones.js";

(function() {

    // Campos del formulario
    const nameInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const companyInput = document.querySelector('#empresa');
    const telInput = document.querySelector('#telefono');
    const idInput = document.querySelector('#id');
    
    document.addEventListener('DOMContentLoaded', async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const idClient = urlParams.get('id');

        const client = await getClient(idClient);

        showClient(client);

        const form = document.querySelector('#formulario');
        form.addEventListener('submit', validateClient);
    })

    function showClient(client) {
        const { name, company, email, tel, id } = client;

        nameInput.value = name;
        emailInput.value = email;
        companyInput.value = company;
        telInput.value = tel;
        idInput.value = id;
    }

    function validateClient(e) {
        e.preventDefault();

        const client = {
            name: nameInput.value,
            email: emailInput.value,
            tel: telInput.value,
            company: companyInput.value,
            id: idInput.value
        }

        if( validateForm(client) ) {
            // Mostrar mensaje
            showAlert('Todos los campos son obligatorios')
            return;
        }

        // Reescribir registro (Actualizar cliente)
        editClient(client);
    }

})();