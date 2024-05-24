document.addEventListener('DOMContentLoaded', function () {
    // limita la seleccion a 3 elecciones
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            if (checkedCheckboxes.length > 3) {
                alert('Puedes seleccionar un máximo de 3 habilidades.');
                this.checked = false;
            }
        });
    });

    // Valida el formulario para enviarlo
    const postulacionForm = document.getElementById('postulacionForm');
    if (postulacionForm) {
        postulacionForm.addEventListener('submit', function (event) {
            if (!validarFormulario()) {
                event.preventDefault();
            }
        });
    }
});

function cargarAreaDesarrollo(area) {
    fetch(`areas/${area}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el contenido del área de desarrollo.');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function validarFormulario() {
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkedCheckboxes.length > 3) {
        alert('Puedes seleccionar un máximo de 3 habilidades.');
        return false;
    }
    return true;
}

function previsualizar() {
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const profesion = document.getElementById('profesion').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const habilidadesSelect = document.getElementById('habilidades');
    const habilidades = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value).join(', ');
    
    // Coloca los valores en la tarjeta de previsualización
    document.getElementById('prevNombre').innerText = nombre;
    document.getElementById('prevProfesion').innerText = profesion;
    document.getElementById('prevTelefono').innerText = telefono;
    document.getElementById('prevEmail').innerText = email;
    document.getElementById('prevLinkedin').innerText = linkedin;
    document.getElementById('prevHabilidades').innerText = habilidades;
}

