<template>
    <Menu />
    <div class="header-container">
      <h1>Nuestro trabajo</h1>
      <span>Amplifica tus<br> ideas</span>
      <a href="#">Descubre más</a>
      <img src="/img/linea-branding.svg" alt="Línea multicolor">
    </div>
    <div class="branding">
      <figure>
        <img src="/img/img1-branding.webp" alt="Persona haciendo branding">
      </figure>
      <div class="branding-text">
        <h2><b>¿Por qué<br></b>Deberías de tener un branding para tu negocio?</h2>
        <p>En Ellaphant, nos dedicamos a crear soluciones estratégicas y creativas que impulsan el crecimiento y el éxito de tu marca. Nuestro trabajo va más allá de lo convencional, transformando tus ideas en resultados tangibles que hacen que tu negocio destaque.</p>
      </div>
    </div>
    <div class="branding-resultados-container">
      <div class="branding-resultados">
        <h2>Branding Impactante para Resultados Memorables</h2>
        <ul>
          <li>Aumentar el compromiso y la fidelidad de tu público</li>
          <li>Generar visibilidad para tu marca</li>
          <li>Diferenciarte de la competencia</li>
          <li>Reafirmar los valores y la personalidad de tu negocio</li>
        </ul>
      </div>
    </div>
    <div class="branding-beneficios">
      <h2>BENEFICIOS DE TENER UN <br><b>BUEN BRANDING</b></h2>
      <div class="beneficios-cards">
        <div class="beneficio-card">
          <img src="/img/icono-estrategia.svg" alt="Puzzle">
          <span>Identidad y Estrategia</span>
          <p>Creamos marcas únicas alineadas con objetivos comerciales y que conectan emocionalmente.</p>
        </div>
        <div class="beneficio-card">
          <img src="/img/icono-valor.svg" alt="Puzzle">
          <span>Consistencia y Valor</span>
          <p>Aseguramos coherencia visual y posicionamiento profesional para fidelizar clientes.</p>
        </div>
        <div class="beneficio-card">
          <img src="/img/icono-competitividad.svg" alt="Puzzle">
          <span>Crecimiento y Competitividad</span>
          <p>Diseñamos estrategias que impulsan eficiencia, liderazgo y crecimiento.</p>
        </div>
      </div>
    </div>
  
    <div class="branding-cta">
      <h3>¿Te gustaría una identidad de marca <b>hecha a tu medida?</b></h3>
      <a href="#">¡Empecemos!</a>
    </div>
  </template>
  
  <script setup>
  import Menu from './Menu.vue'
  </script>
  
  <style scoped>
  .header-container {
    width: 70vw;
    margin: 200px auto;
  }
  
  .header-container h1 {
    font-size: 4rem;
    color: var(--blue);
    text-transform: uppercase;
    font-family: var(--main-font);
  }
  
  .header-container span {
    margin: 1vh 0;
    display: block;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 4rem;
    background: linear-gradient(
      to right,
      var(--brown),
      var(--blue),
      var(--brown),
      var(--brown),
      var(--blue)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
  
  .header-container a {
    display: inline-block;
    background: var(--brown);
    font-size: 1.5rem;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 1.2rem;
    padding: 15px 20px;
    border-radius: 30px;
  }
  
  .header-container img {
    position: absolute;
    right: 0;
    top: 77px;
  }
  
  .branding {
    margin: 215px 0 0 0;
    width: 100%;
    padding: 10vh 0;
    display: flex;
    background: var(--blue);
    gap: 3vw;
    color: #fff;
    justify-content: center;
    align-items: center;
  }
  
  .branding-text {
    width: 480px;
    font-size: 1.2rem;
  }
  
  .branding-text > * {
    margin: 2vh 0;
  }
  
  .branding h2 {
    text-transform: uppercase;
    font-family: var(--main-font);
    font-size: 2.8rem;
    font-weight: 800;
  }
  
  .branding h2 b {
    text-transform: none;
    font-family: var(--sec-font);
    font-weight: 400;
    line-height: 1.8;
  }
  
  .branding-resultados-container {
    width: 100%;
    padding: 10vh 0;
    background: url('/img/linea-tarjeta1.svg'), linear-gradient(rgb(240, 231, 142), rgb(255, 231, 142)) no-repeat center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .branding-resultados {
    width: 41vw;
    margin: auto;
    border-radius: 30px;
    padding: 60px;
    background: rgba(255, 255, 255, 0.93);
    color: var(--blue);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  }
  
  .branding-resultados h2 {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-family: var(--main-font);
    font-weight: 700;
    line-height: 1.2;
    color: var(--brown);
    margin-bottom: 1.5vh;
  }
  
  .branding-resultados ul > * {
    margin: 1vh 0;
  }
  
  .branding-resultados ul li {
    position: relative;
    margin-left: 24px;
  }
  
  .branding-resultados ul li::before {
    content: '';
    position: absolute;
    transform: translateX(-20px) translateY(4px);
    border-radius: 100%;
    width: 6px;
    height: 6px;
    background: var(--blue);
  }
  
  .branding-beneficios {
    display: flex;
    width: 70vw;
    margin: 10vh auto;
    gap: 7vh;
    color: var(--blue);
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
  
  .branding-beneficios h2 {
    font-size: 2.5rem;
  }
  
  .branding-beneficios h2 b {
    font-weight: 600;
    font-family: var(--sec-font);
  }
  
  .beneficios-cards {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 3vw;
  }
  
  .beneficio-card {
    width: 230px;
    gap: 1.5vh;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
  }
  
  .beneficio-card img {
    width: 100px;
  }
  
  .beneficio-card span {
    font-weight: 800;
    font-size: 1.5rem;
  }
  
  .branding-cta {
    margin: 5vh 0;
    width: 100%;
    text-align: center;
    background: var(--brown);
    color: #fff;
    padding: 40px 0;
  }
  
  .branding-cta h3 {
    font-size: 2.5rem;
    font-family: var(--main-font);
    width: 730px;
    margin: auto;
  }
  
  .branding-cta h3 b {
    font-weight: 400;
    font-family: var(--sec-font);
  }
  
  .branding-cta a {
    color: var(--blue);
    background: #fff;
    font-size: 1.5rem;
    border-radius: 30px;
    padding: 12px 30px;
    display: inline-block;
    margin-top: 2vh;
  }
  
  /* Media Query para Móviles (hasta 765px) */
  @media screen and (max-width: 765px) {
    .header-container {
      width: 90vw;
      margin: 120px auto;
    }
  
    .header-container h1,
    .header-container span {
      font-size: 2.2rem;
    }
  
    .header-container a {
      font-size: 1rem;
      margin-top: 1vh;
    }
  
    .header-container img {
      display: none;
    }
  
    .branding {
      margin: 0;
      flex-direction: column;
    }
  
    .branding-text {
      width: 90vw;
    }
  
    .branding h2 {
      font-size: 1.8rem;
    }
  
    .branding img {
      width: 300px;
      height: 200px;
      object-fit: cover;
      border-radius: 30px;
    }
  
    .branding-resultados {
      width: 90vw;
      padding: 20px;
    }
  
    .branding-resultados h2 {
      font-size: 1.8rem;
    }
  
    .branding-beneficios {
      width: 90vw;
    }
  
    .branding-beneficios h2 {
      font-size: 1.6rem;
    }
  
    .beneficios-cards {
      flex-direction: column;
      align-items: center;
    }
  
    .beneficio-card span {
      font-size: 1.3rem;
    }
  
    .beneficio-card {
      font-size: 1rem;
    }
  
    .branding-cta h3 {
      width: auto;
      font-size: 1.8rem;
    }
  
    .branding-cta a {
      font-size: 1.2rem;
    }
  }
  
  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    .header-container img{
        width: 500px;
        top: 286px;
    }
  }

  /* Media Query para Tablets (768px - 1024px) */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .header-container {
      width: 85vw; /* Ajustamos el ancho */
      margin: 150px auto; /* Reducimos el margen */
    }

    .header-container img{
        width: 500px;
        top: 170px;
    }
  
    .header-container h1 {
      font-size: 3.5rem; /* Reducimos el tamaño del título */
    }
  
    .header-container span {
      font-size: 3.5rem; /* Reducimos el tamaño del span */
    }
  
    .header-container a {
      font-size: 1.3rem; /* Reducimos el tamaño del botón */
      padding: 12px 18px; /* Reducimos el padding */
    }
  
    .branding {
      margin: 180px 0 0 0; /* Reducimos el margen superior */
      padding: 8vh 0; /* Reducimos el padding */
      gap: 2vw; /* Reducimos el gap */
    }
  
    .branding-text {
      width: 400px; /* Reducimos el ancho */
      font-size: 1.1rem; /* Reducimos el tamaño de fuente */
    }
  
    .branding h2 {
      font-size: 2.5rem; /* Reducimos el tamaño del título */
    }
  
    .branding-resultados-container {
      padding: 8vh 0; /* Reducimos el padding */
    }
  
    .branding-resultados {
      width: 50vw; /* Reducimos el ancho */
      padding: 40px; /* Reducimos el padding */
    }
  
    .branding-resultados h2 {
      font-size: 2.2rem; /* Reducimos el tamaño del título */
    }
  
    .branding-beneficios {
      width: 85vw; /* Ajustamos el ancho */
      margin: 8vh auto; /* Reducimos el margen */
      gap: 5vh; /* Reducimos el gap */
    }
  
    .branding-beneficios h2 {
      font-size: 2.2rem; /* Reducimos el tamaño del título */
    }
  
    .beneficios-cards {
      gap: 2vw; /* Reducimos el gap */
    }
  
    .beneficio-card {
      width: 200px; /* Reducimos el ancho */
      font-size: 1.1rem; /* Reducimos el tamaño de fuente */
    }
  
    .beneficio-card span {
      font-size: 1.3rem; /* Reducimos el tamaño del span */
    }
  
    .branding-cta {
      padding: 30px 0; /* Reducimos el padding */
    }
  
    .branding-cta h3 {
      font-size: 2.2rem; /* Reducimos el tamaño del título */
      width: 600px; /* Reducimos el ancho */
    }
  
    .branding-cta a {
      font-size: 1.3rem; /* Reducimos el tamaño del botón */
      padding: 10px 25px; /* Reducimos el padding */
    }
  }
  </style>