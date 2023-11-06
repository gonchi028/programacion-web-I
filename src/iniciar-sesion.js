$(document).ready(function () {
  $('#login-form').submit(function (e) {
    e.preventDefault();
    window.location.replace('./index.html');
    alert('Inicio de sesión exitoso!');
  });
});
