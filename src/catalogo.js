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
    shortDescription:
      'Una chamarra de cuero es una prenda de vestir que está hecha de cuero',
    longDescription:
      'Una chamarra de cuero es una prenda de vestir que está hecha de cuero. Es una prenda versátil que se puede usar en diferentes ocasiones, desde el día a la noche. Las chamarras de cuero pueden ser de diferentes colores, estilos y tamaños.',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Reloj',
    price: 299,
    shortDescription:
      'Un reloj de mano es un dispositivo portátil que se lleva en la muñeca para indicar la hora.',
    longDescription:
      'Un reloj de mano es un dispositivo portátil que se lleva en la muñeca para indicar la hora. Está formado por una caja, una carátula y una correa. La caja protege el movimiento del reloj, que es el mecanismo que lo hace funcionar. La carátula es la parte del reloj en la que se indican la hora, los minutos y los segundos. La correa es la parte del reloj que se utiliza para sujetarlo a la muñeca.',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Auriculares',
    price: 499,
    shortDescription:
      'Los auriculares son dispositivos electrónicos que se colocan en los oídos para escuchar música, hablar por teléfono, jugar videojuegos, etc.',
    longDescription:
      'Los auriculares son dispositivos electrónicos que se colocan en los oídos para escuchar música, hablar por teléfono, jugar videojuegos, etc. Están formados por dos partes: los auriculares propiamente dichos, que se introducen en los oídos, y el cable o la conexión inalámbrica que los conecta a un dispositivo de audio.',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1549482199-bc1ca6f58502?q=80&w=2608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Reloj',
    price: 259,
    shortDescription:
      'Este reloj de mano negro es un accesorio elegante y atemporal que se adapta a cualquier ocasión.',
    longDescription:
      'Este reloj de mano negro es un accesorio elegante y atemporal que se adapta a cualquier ocasión. Está hecho de acero inoxidable de alta calidad y tiene una carátula negra con números arábigos. La correa de piel negra es cómoda y duradera.',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Mouse',
    price: 499,
    shortDescription:
      'El mouse inalámbrico Logitech MX Master 3 es el mouse perfecto para usuarios exigentes que buscan un rendimiento y una precisión excepcionales.',
    longDescription:
      'El mouse inalámbrico Logitech MX Master 3 es el mouse perfecto para usuarios exigentes que buscan un rendimiento y una precisión excepcionales. Con su diseño ergonómico y su sensor óptico de alta precisión, el MX Master 3 ofrece una experiencia de uso cómoda y fluida.',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Tenis Nike Air Max 97',
    price: 399,
    shortDescription:
      'Los tenis Nike Air Max 97 son un clásico de la marca que se ha mantenido vigente durante décadas. Estos tenis cuentan con un diseño elegante y moderno que los hace perfectos para cualquier ocasión.',
    longDescription:
      'Los tenis Nike Air Max 97 son un clásico de la marca que se ha mantenido vigente durante décadas. Estos tenis cuentan con un diseño elegante y moderno que los hace perfectos para cualquier ocasión. La parte superior de los tenis está hecha de nylon, un material duradero y transpirable. La suela de goma proporciona una tracción excelente y una amortiguación cómoda. La tecnología Air Max proporciona una amortiguación adicional que absorbe los impactos y reduce la fatiga.',
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Tenis Nike Air Max 90',
    price: 299,
    shortDescription:
      'Los tenis Nike Air Max 90 son un clásico de la marca que combinan un diseño elegante con una gran comodidad.',
    longDescription:
      'Los tenis Nike Air Max 90 son un clásico de la marca que combinan un diseño elegante con una gran comodidad. Están fabricados con una malla transpirable y una suela de goma que proporciona una buena amortiguación.',
  },
  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1571689936114-b16146c9570a?q=80&w=2841&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Mochila',
    price: 199,
    shortDescription:
      'Esta mochila escolar es perfecta para estudiantes de todas las edades. Está hecha de materiales resistentes que la hacen duradera y fácil de limpiar.',
    longDescription:
      'Esta mochila escolar es perfecta para estudiantes de todas las edades. Está hecha de materiales resistentes que la hacen duradera y fácil de limpiar. Las correas acolchadas y ajustables proporcionan un ajuste cómodo, incluso cuando se lleva una carga pesada. La mochila cuenta con un compartimento principal espacioso, dos bolsillos laterales y un bolsillo frontal para guardar todo lo necesario para el día escolar.',
  },
  {
    id: 9,
    image:
      'https://images.unsplash.com/photo-1616680450981-fc471a4b681c?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Samsung Galaxy Watch 4',
    price: 699,
    shortDescription:
      'El reloj inteligente Samsung Galaxy Watch 4 es el compañero perfecto para tu vida moderna. Con un diseño elegante y una amplia gama de funciones, este reloj te ayudará a estar conectado, informado y en forma.',
    longDescription:
      'El reloj inteligente Samsung Galaxy Watch 4 es un dispositivo versátil que puede ayudarte a mejorar tu vida de muchas maneras. Con un diseño elegante y un rendimiento potente, este reloj es una excelente opción para cualquier persona que quiera mantenerse conectado, informado y en forma. Monitoreo de salud avanzado: El Galaxy Watch 4 rastrea tu frecuencia cardíaca, tu sueño, tu estrés y más para ayudarte a mantenerte saludable. Con el sensor Samsung BioActive, el Galaxy Watch 4 puede medir tu frecuencia cardíaca, tu ECG y tu nivel de oxígeno en sangre. Esto te permite controlar tu salud de una manera más completa. Pago sin contacto: Paga por tus compras con el Galaxy Watch 4 usando Samsung Pay. Con Samsung Pay, puedes pagar por tus compras con solo deslizar el Galaxy Watch 4 cerca de un lector de tarjetas sin contacto. Esto es una manera rápida y conveniente de pagar por tus compras sin tener que sacar tu cartera.',
  },
];

const mainProduct = {};

function addToFavorites(id) {
  $(`#fav-${id}`).toggleClass('btn-outline-primary');
  $(`#fav-${id}`).toggleClass('btn-primary');

  if ($(`#fav-${id}`).hasClass('btn-outline-primary')) {
    $(`#row-${id}`).remove();
    i = 1;
    $('tbody tr th').each(function (index) {
      $(this).html(i);
      i++;
    });
    $('#total').text(i - 1);
    return;
  }

  const product = products.find((prod) => prod.id == id);
  i++;
  $('tbody').append(`
    <tr id="row-${id}" onclick="seleccionar(this)">
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
  i = 1;
  $('tbody tr th').each(function (index) {
    $(this).html(i);
    i++;
  });
  $('#total').text(i - 1);
}

const changeMainProduct = (productId) => {
  const { id, image, name, price, longDescription } = products.find(
    (product) => product.id == productId
  );

  $('#main-product').html('');

  $('#main-product').append(`
    <div class="col-12 col-lg-6 p-4">
      <img class="img-thumbnail" src="${image}" alt="${name}" />
    </div>
    <div class="col-12 col-lg-6 p-4">
      <h2 class="text-center">${name}</h2>
      <p class="text-black-50 text-center">${price} Bs.</p>
      <p class="my-5 text-black-50">
        ${longDescription}
      </p>
    </div>
  `);
};

changeMainProduct(1);

$('.clothes-gallery').html('');
products.forEach(({ id, image, name, price, shortDescription }) => {
  $('.clothes-gallery').append(`
    <div class="card">
      <div class="overflow-hidden">
        <a href="#" onclick="changeMainProduct(${id})">
          <img
          src="${image}"
          alt="${name}"
          />
        </a>
      </div>
      <div class="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 class="card-title">${name}</h5>
          <p class="text-black-50">
          <small>${price} Bs.</small>
          </p>
          <p class="card-text fs-6">
          ${shortDescription}
          </p>
        </div>
        <div class="mt-4 d-flex justify-content-between">
          <div>
            <button id="fav-${id}" class="btn btn-outline-primary" onclick="addToFavorites(${id})">
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
          <a href="#" class="btn btn-secondary" onclick="changeMainProduct(${id})">Ver producto</a>
        </div>
      </div>
    </div>
  `);
});
