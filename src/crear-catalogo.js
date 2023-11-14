let i = 2;

function resaltar(element) {
  element.classList.toggle('table-secondary');
}

function eliminar() {
  $('.table-secondary').remove();
  i = 1;
  $('tbody tr th').each(function (index) {
    $(this).html(i);
    i++;
  });
  $('#total').text(i - 1);
}

function eliminarTodo() {
  $('#table-body').html('');
  i = 0;
  $('#total').text(i);
}

$(document).ready(function () {
  $('#newProductForm').submit(function (e) {
    e.preventDefault();
    const image = $('#productImage').val();
    const id = $('#productId').val();
    const name = $('#productName').val();
    const description = $('#productDescription').val();
    const price = $('#productPrice').val();

    $('#table-body').append(`
      <tr onclick="resaltar(this)">
        <th scope="row">${i}</th>
        <td>
          <img
            class="table-image"
            src="${image}"
            alt="ropa"
          />
        </td>
        <td>${id}</td>
        <td>${name}</td>
        <td>${description}</td>
        <td>${price} Bs.</td>
      </tr>
    `);
    $('#total').html(i);
    i++;
  });
});
