document.addEventListener('DOMContentLoaded', () => {
    // Registro de Usuarios
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtener los datos del formulario
        const nombres = document.getElementById('nombres').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const usuario = document.getElementById('usuario').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const password = document.getElementById('password').value;
        const edad = document.getElementById('edad').value.trim();
        const sexo = document.getElementById('sexo').value;
        const emailRecuperacion = document.getElementById('emailRecuperacion').value.trim();

        // Validar que no haya campos vacíos
        if (!nombres || !apellidos || !usuario || !email || !telefono || !password || !edad || !sexo || !emailRecuperacion) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Validar el formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) || !emailRegex.test(emailRecuperacion)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        // Validar que el usuario no esté ya registrado
        if (localStorage.getItem(usuario)) {
            alert("Este usuario ya está registrado. Por favor, elige otro.");
            return;
        }

        // Guardar el usuario en localStorage
        const nuevoUsuario = {
            nombres,
            apellidos,
            usuario,
            email,
            telefono,
            password,
            edad,
            sexo,
            emailRecuperacion
        };

        localStorage.setItem(usuario, JSON.stringify(nuevoUsuario));

        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        // Resetear el formulario
        registerForm.reset();
    });
});