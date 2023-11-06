$(document).ready(function () {
  $('#register-form').submit(function (e) {
    e.preventDefault();
    window.location.replace('./index.html');
    alert('Usuario registrado exitosamente');
  });
});
