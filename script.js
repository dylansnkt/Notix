document.getElementById('subscribe-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe
  
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');
  
    // Simulación de envío (puedes reemplazar esto con una llamada a un backend real)
    setTimeout(() => {
      message.textContent = `¡Gracias por suscribirte, ${email}! Te mantendremos informado.`;
      document.getElementById('email').value = ''; // Limpia el campo de correo
    }, 1000);
  });
  