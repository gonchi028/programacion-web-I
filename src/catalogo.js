// Animations with jquery
$('.favorites').hover(
  function () {
    $(this).animate(
      {
        scale: '1.3',
      },
      200
    );
  },
  function () {
    $(this).animate(
      {
        scale: '1',
      },
      200
    );
  }
);

// Logic

let i = 1;

function seleccionar(element) {
  element.classList.toggle('table-warning');
}

function eliminarTodos() {
  $('tbody').html('');
  i = 0;
  $('#total').text(i);
}

function eliminarSeleccionados() {
  $('.table-warning').remove();
  i = 1;
  $('tbody tr th').each(function (index) {
    $(this).html(i);
    i++;
  });
  $('#total').text(i - 1);
}

const products = [
  {
    id: 1,
    image: './assets/clothes-1.avif',
    name: 'Chamarra',
    price: 300,
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Reloj',
    price: 299,
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Auriculares',
    price: 499,
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1549482199-bc1ca6f58502?q=80&w=2608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Reloj',
    price: 259,
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Mouse',
    price: 499,
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Tenis',
    price: 399,
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Zapatos deportivos',
    price: 299,
  },
  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1571689936114-b16146c9570a?q=80&w=2841&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Mochila',
    price: 199,
  },
  {
    id: 9,
    image:
      'https://images.unsplash.com/photo-1616680450981-fc471a4b681c?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Smart Watch',
    price: 699,
  },
];

function addToFavorites(id) {
  const product = products.find((prod) => prod.id == id);
  i++;
  $('tbody').append(`
    <tr onclick="seleccionar(this)">
      <th>${i}</th>
      <td>
        <img
          class="table-image"
          src="${product.image}"
          alt="${product.name}"
        />
      </td>
      <td>${product.name}</td>
      <td>${product.price} Bs.</td>
    </tr>
  `);
  $('#total').text(i);
}

$('.clothes-gallery').html('');
products.forEach(({ id, image, name, price }) => {
  $('.clothes-gallery').append(`
    <div class="card">
      <div class="overflow-hidden">
        <img
          src="${image}"
          alt="..."
        />
      </div>
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="text-black-50">
          <small>${price} Bs.</small>
        </p>
        <p class="card-text fs-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quaerat totam eius pariatur saepe dolor unde iste explicabo.
        </p>
        <div class="d-flex justify-content-between">
          <div>
            <button class="btn btn-outline-primary" onclick="addToFavorites(${id})">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-heart"
              >
                <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                />
              </svg>
            </button>
          </div>
          <a href="#" class="btn btn-secondary">Ver producto</a>
        </div>
      </div>
    </div>
  `);
});
