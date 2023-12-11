const catalogos = [
  {
    id: 1,
    nombre: 'Hilos del Tiempo',
    descripcion:
      'Adéntrate en un paraíso vintage donde las prendas usadas susurran historias de épocas pasadas. Encuentra tesoros atemporales como gabardinas clásicas, delicados vestidos de encaje y denim perfectamente desgastado.',
    imagen_url:
      'https://plus.unsplash.com/premium_photo-1661964205360-b0621b5a9366?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    nombre: 'Hilos Nómadas',
    descripcion:
      'Embárcate en una aventura global con textiles hechos a mano y diseños únicos. Descubre kimonos vibrantes, bufandas tejidas a mano y chaquetas bordadas que cuentan historias de tierras lejanas.',
    imagen_url:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    nombre: 'La Costura Sostenible',
    descripcion:
      'Abraza la moda consciente con telas ecológicas y producción ética. Encuentra vestidos de algodón orgánico, trajes de baño de plástico reciclado y chaquetas de mezclilla reciclada que se ven bien y se sienten bien.',
    imagen_url:
      'https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    nombre: 'La Musa Sastre',
    descripcion:
      'Donde lo bespoke se encuentra con la brillantez, crea una pieza de moda que es única para ti. Sastres expertos elaboran trajes a medida, vestidos exquisitos y chaquetas personalizadas que favorecen tu forma y reflejan tu estilo.',
    imagen_url:
      'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    nombre: 'La Tribu Activa',
    descripcion:
      'Alimenta tu fitness con ropa funcional que se mueve contigo. Encuentra leggings de alto rendimiento, sujetadores deportivos transpirables y camisetas que absorben la humedad para que te sientas tan bien como te ves.',
    imagen_url:
      'https://images.unsplash.com/photo-1567958451986-2de427a4a0be?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    nombre: 'El Mercado de Medianoche',
    descripcion:
      'Da rienda suelta a tu fashionista interior en una extravaganza emergente. Descubre diseñadores independientes, joyas vintage y colecciones de edición limitada, todo bajo las luces parpadeantes y la energía vibrante del mercado nocturno.',
    imagen_url:
      'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

catalogos.forEach(({ id, nombre, descripcion, imagen_url }) => {
  $('#catalogos').append(`
    <div class="col-12 col-lg-6 col-xl-4 p-3">
      <div class="overflow-hidden shadow-sm rounded-4">
        <a href="./catalogo.html">
          <img
            class="img-fluid imagen-catalogo"
            src="${imagen_url}"
            alt="${nombre}"
          />
        </a>
        <div class="p-3">
          <h4 class="my-2">${nombre}</h4>
          <p class="mt-3 text-black-50">
            ${descripcion}
          </p>
          <div class="d-flex justify-content-end ">
            <a class="btn" href="./catalogo.html">Ver Catalogo</a>
          </div>
        </div>
      </div>
    </div>
  `);
})
