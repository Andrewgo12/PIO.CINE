document.addEventListener('DOMContentLoaded', () => {
    // Ingreso de Usuarios
    const loginForm = document.getElementById('loginForm');
    const recuperarPasswordBtn = document.getElementById('recuperarPassword');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const usuario = document.getElementById('loginUsuario').value.trim();
        const password = document.getElementById('loginPassword').value;

        // Validar que los campos no estén vacíos
        if (!usuario || !password) {
            alert("Por favor, ingresa tu usuario y contraseña.");
            return;
        }

        // Obtener los datos del usuario guardado
        const usuarioGuardado = localStorage.getItem(usuario);

        if (!usuarioGuardado) {
            alert("Usuario no encontrado.");
            return;
        }

        const datosUsuario = JSON.parse(usuarioGuardado);

        // Validar contraseña
        if (datosUsuario.password !== password) {
            alert("Contraseña incorrecta.");
            return;
        }

        alert(`Bienvenido, ${datosUsuario.nombres}!`);
        // dirigir a una nueva página o realizar otra acción
    });

    // Recuperar Contraseña
    recuperarPasswordBtn.addEventListener('click', function () {
        const usuario = prompt("Ingresa tu usuario:");

        if (!usuario) {
            alert("Por favor, ingresa un usuario.");
            return;
        }

        const usuarioGuardado = localStorage.getItem(usuario);

        if (!usuarioGuardado) {
            alert("Usuario no encontrado.");
            return;
        }

        const datosUsuario = JSON.parse(usuarioGuardado);
        const emailRecuperacion = datosUsuario.emailRecuperacion;

        alert(`Se ha enviado una solicitud de recuperación al correo: ${emailRecuperacion}.`);
        // correo para recuperar la contraseña.
    });
});