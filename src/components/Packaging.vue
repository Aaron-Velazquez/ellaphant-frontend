<template>
    <Menu />
    <div class="packaging-header">
      <div class="header-text">
        <h1>Packaging</h1>
        <span>Que cuenta la historia de tu marca</span>
      </div>
      <figure>
        <img src="/img/img-principal-packaging.webp" alt="Packaging Ellaphant">
      </figure>
      <div class="blue-box">
      </div>
    </div>
    <div class="first-sight">
      <div class="sight-text">
        <h2>Diseño que Impacta desde el Primer Vistazo</h2>
        <p>En Ellaphant, creemos que el empaque es mucho más que protección para tu producto; es una herramienta poderosa para transmitir el valor y la esencia de tu marca.</p>
        <p>Creamos diseños de packaging personalizados que elevan la experiencia del cliente y fortalecen la fidelidad hacia tu negocio.</p>
      </div>
      <figure>
        <img src="/img/2da-img-packaging.webp" alt="Packaging de Ellaphant">
      </figure>
    </div>
    <div class="que-incluye">
      <h2>¿Qué incluye nuestro servicio?</h2>
      <div class="includes-cards">
        <div class="include-card">
          <figure>
            <img src="/img/icono-etiquetas.svg" alt="Etiquetas ícono">
          </figure>
          <div class="card-text">
            <span>Etiquetas y Sellos Creativos</span>
            <p>Totalmente alineados con tu identidad visual.</p>
          </div>
        </div>
        <div class="include-card">
          <figure>
            <img src="/img/icono-cajaspersonalizadas.svg" alt="Cajas ícono">
          </figure>
          <div class="card-text">
            <span>Cajas personalizadas</span>
            <p>Diseños únicos y funcionales</p>
          </div>
        </div>
        <div class="include-card">
          <figure>
            <img src="/img/icono-disenoestrategico.svg" alt="Diseño ícono">
          </figure>
          <div class="card-text">
            <span>Diseño estratégico</span>
            <p>Opcional para producción con proveedores.</p>
          </div>
        </div>
      </div>
    </div>
  
    <div class="packaging-cta">
      <h3>Haz clic en el botón y solicita una cotización personalizada. Transformemos juntos tus ideas en empaques que enamoran.</h3>
      <a href="/contacto">Contactanos Ahora</a>
    </div>
  </template>
  
  <script setup>
  import Menu from './Menu.vue'
  </script>
  
  <style scoped>
  /* Estilos generales del contenedor */
  .packaging-header {
    padding: 2rem 0;
    min-height: 500px;
    position: relative;
    width: 70vw;
    margin: 10vh auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
  }
  
  .packaging-header .header-text {
    background-color: var(--light-blue);
    color: #FFFFFF;
    padding: 2rem 1.5rem;
    transform: translateY(55px);
    position: relative;
    z-index: 100;
    max-width: 400px;
  }
  
  .packaging-header .header-text h1 {
    font-size: 3rem;
  }
  
  .packaging-header figure {
    transform: translateX(-150px);
  }
  
  .packaging-header .header-text span {
    display: block;
    margin-top: 0.5rem;
    font-size: 1.5rem;
  }
  
  /* Figura e imagen */
  .packaging-header figure {
    margin: auto;
    position: relative;
    z-index: 2;
    max-width: 500px;
  }
  
  .packaging-header figure img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  /* El recuadro azul de fondo que se ve detrás de la imagen (blue-box) */
  .packaging-header .blue-box {
    position: absolute;
    top: 0;
    right: 0;
    width: 350px;
    height: 600px;
    background-color: var(--light-blue);
    z-index: 1;
  }
  
  .first-sight {
    width: 80vw;
    margin: auto;
    display: flex;
    gap: 5vw;
    justify-content: center;
    align-items: center;
    color: var(--blue);
  }
  
  .sight-text {
    width: 400px;
    font-weight: 300;
    font-size: 1.2rem;
  }
  
  .sight-text > * {
    margin: 3vh 0;
  }
  
  .sight-text h2 {
    font-size: 2.5rem;
    font-family: var(--main-font);
    font-weight: 700;
  }
  
  .first-sight figure {
    width: 40%;
  }
  
  .first-sight figure img {
    width: 100%;
  }
  
  .sight-text p:last-child {
    font-weight: 400;
  }
  
  .que-incluye {
    margin: 10vh 0;
  }
  
  .que-incluye h2 {
    width: 100%;
    padding: 20px 0;
    font-size: 2.2rem;
    color: #FFFFFF;
    text-align: center;
    background-color: var(--blue);
    font-family: var(--main-font);
  }
  
  .includes-cards {
    width: 70vw;
    display: flex;
    margin: 10vh auto;
    gap: 5vw;
    justify-content: center;
  }
  
  .include-card {
    display: flex;
    gap: 1vw;
    color: var(--blue);
    align-items: center;
  }
  
  .include-card figure img {
    width: 80px;
  }
  
  .card-text > * {
    margin: 1vh 0;
  }
  
  .card-text span {
    font-weight: 600;
    font-size: 1.3rem;
  }
  
  .packaging-cta {
    width: 90vw;
    margin: 5vh auto;
    border-radius: 30px;
    padding: 40px 0;
    color: #FFFFFF;
    background-color: var(--brown);
    text-align: center;
  }
  
  .packaging-cta h3 {
    margin: auto;
    font-size: 2rem;
    font-family: var(--main-font);
    max-width: 1000px;
  }
  
  .packaging-cta a {
    display: inline-block;
    padding: 15px 30px;
    background-color: #FFFFFF;
    color: var(--brown);
    font-size: 1.5rem;
    margin-top: 2vh;
    border-radius: 30px;
    text-transform: uppercase;
    transition: background-color ease-out 0.5s, transform 0.1s;
  }
  
  .packaging-cta a:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  
  /* Media Query para Móviles (hasta 765px) */
  @media screen and (max-width: 765px) {
    .packaging-header {
      width: 100%;
      transform: translateY(70px);
      height: fit-content;
    }
  
    .packaging-header .header-text {
      padding: 1.5rem;
      transform: translateY(200px) translateX(-50px);
      width: 220px;
    }
  
    .packaging-header .header-text h1 {
      font-size: 2rem;
    }
  
    .packaging-header .header-text span {
      font-size: 1.1rem;
    }
  
    .packaging-header figure {
      width: 250px;
      transform: translateX(40px) translateY(-180px);
    }
  
    .packaging-header .blue-box {
      width: 200px;
      height: 350px;
      transform: translateY(-30px);
    }
  
    .first-sight {
      transform: translateY(-40px);
      margin: 0 auto;
    }
  
    .first-sight figure {
      display: none;
    }
  
    .sight-text {
      font-size: 1.1rem;
    }
  
    .sight-text h2 {
      font-size: 2rem;
    }
  
    .sight-text > * {
      margin: 2vh;
    }
  
    .que-incluye h2 {
      font-size: 2rem;
    }
  
    .includes-cards {
      flex-direction: column;
    }
  
    .include-card {
      gap: 3vw;
    }
  
    .include-card figure img {
      width: 50px;
    }
  
    .card-text span {
      font-size: 1.1rem;
    }
  
    .packaging-cta {
      padding: 20px 0;
    }
  
    .packaging-cta h3 {
      font-size: 1.3rem;
      width: 90%;
    }
  
    .packaging-cta a {
      font-size: 1.1rem;
      padding: 10px 20px;
    }
  }
  
  @media (min-width: 470px) and (max-width: 765px) {
    .packaging-header {
      transform: translateX(-40px) translateY(70px);
    }
  
    .packaging-header .header-text {
      transform: translateY(-200px) translateX(45%);
    }
  
    .packaging-header figure {
      transform: translateX(10px) translateY(-180px);
    }
  }
  
  /* Media Query para Tablets (768px - 1024px) */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .packaging-header {
      width: 85vw; /* Ajustamos el ancho */
      margin: 8vh auto; /* Reducimos el margen */
      min-height: 450px; /* Reducimos la altura mínima */
    }
  
    .packaging-header .header-text {
      padding: 1.8rem 1.3rem; /* Reducimos el padding */
      transform: translateY(45px); /* Ajustamos el desplazamiento */
      max-width: 350px; /* Reducimos el ancho máximo */
    }
  
    .packaging-header .header-text h1 {
      font-size: 2.5rem; /* Reducimos el tamaño del título */
    }
  
    .packaging-header .header-text span {
      font-size: 1.3rem; /* Reducimos el tamaño del span */
    }
  
    .packaging-header figure {
      transform: translateX(-120px); /* Ajustamos el desplazamiento */
      max-width: 450px; /* Reducimos el ancho máximo */
    }
  
    .packaging-header .blue-box {
      width: 300px; /* Reducimos el ancho */
      height: 550px; /* Reducimos la altura */
    }
  
    .first-sight {
      width: 85vw; /* Ajustamos el ancho */
      gap: 3vw; /* Reducimos el gap */
    }
  
    .sight-text {
      width: 350px; /* Reducimos el ancho */
      font-size: 1.1rem; /* Reducimos el tamaño de fuente */
    }
  
    .sight-text h2 {
      font-size: 2.2rem; /* Reducimos el tamaño del título */
    }
  
    .sight-text > * {
      margin: 2vh 0; /* Reducimos el margen */
    }
  
    .first-sight figure {
      width: 35%; /* Reducimos el ancho de la figura */
    }
  
    .que-incluye {
      margin: 8vh 0; /* Reducimos el margen */
    }
  
    .que-incluye h2 {
      font-size: 2rem; /* Reducimos el tamaño del título */
      padding: 15px 0; /* Reducimos el padding */
    }
  
    .includes-cards {
      width: 85vw; /* Ajustamos el ancho */
      gap: 3vw; /* Reducimos el gap */
      margin: 8vh auto; /* Reducimos el margen */
    }
  
    .include-card figure img {
      width: 70px; /* Reducimos el tamaño de las imágenes */
    }
  
    .card-text span {
      font-size: 1.2rem; /* Reducimos el tamaño del span */
    }
  
    .packaging-cta {
      width: 90vw; /* Mantenemos el ancho */
      padding: 30px 0; /* Reducimos el padding */
    }
  
    .packaging-cta h3 {
      font-size: 1.8rem; /* Reducimos el tamaño del título */
      max-width: 800px; /* Reducimos el ancho máximo */
    }
  
    .packaging-cta a {
      font-size: 1.3rem; /* Reducimos el tamaño del botón */
      padding: 12px 25px; /* Reducimos el padding del botón */
    }
  }
  </style>