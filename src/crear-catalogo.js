let i = 2;

$(document).ready(function () {
  $('#newProductForm').submit(function (e) {
    e.preventDefault();
    const image = $('#productImage').val();
    const id = $('#productId').val();
    const name = $('#productName').val();
    const description = $('#productDescription').val();
    const price = $('#productPrice').val();

    $('#table-body').append(`
      <tr>
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
    i++;
  });
});
