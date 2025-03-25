<template>
    <Menu />
  
    <div class="header-container">
      <main class="header">
        <h1>Conectemos tu marca con el<br><b>Mundo</b></h1>
        <p>Potenciamos tu visión con estrategias innovadoras<br> que hacen brillar tu marca.</p>
      </main>
  
      <div class="contact-form-container">
        <div class="form-info">
          <div class="contact-info">
            <div class="info-card">
              <img src="/img/email.svg" alt="icono de mail">
              <div class="info-text">
                <span>Hablemos</span>
                <span>Estamos acá para ayudarte<br>contacto@ellaphantpy.com</span>
              </div>
            </div>
            <div class="info-card">
              <img src="/img/ubicacion.svg" alt="icono de ubicación">
              <div class="info-text">
                <span>Hablemos</span>
                <span>Saludanos en nuestra oficina<br>Edificio París, Oficina 5<br>Centro comercial, Paraná Country Club</span>
              </div>
            </div>
            <div class="info-card">
              <img src="/img/llamanos.svg" alt="icono de teléfono">
              <div class="info-text">
                <span>Llamanos</span>
                <span>De lunes a viernes de 8am a 5pm<br>+595 974 500835</span>
              </div>
            </div>
          </div>
          <div class="social">
            <img src="/img/facebook-icono.svg" alt="Icono de Facebook">
            <img src="/img/instagram-icono.svg" alt="Icono de Instragram">
            <img src="/img/tiktok-icono.svg" alt="Icono de TikTok">
            <img src="/img/whatsapp-icono.svg" alt="Icono de Whatsapp">
          </div>
        </div>
        <div class="form-contacto-container">
          <h2>¡Vamos a crear juntos tu historia de éxito!</h2>
          <span>Estamos listos para ser tu aliado estratégico.</span>
          <form action="#">
            <input type="text" placeholder="Nombre">
            <input type="text" placeholder="ejemplo@email.com">
            <textarea name="comentarios" id="textarea" placeholder="Comentarios que tengas"></textarea>
            <div class="checkboxes">
              <span>¿Cómo podemos ayudarte?</span>
              <div class="checkbox">
                <input type="checkbox">
                <label for="Desarrollo Web">Desarrollo Web</label>
              </div>
              <div class="checkbox">
                <input type="checkbox">
                <label for="Branding">Branding</label>
              </div>
              <div class="checkbox">
                <input type="checkbox">
                <label for="Creación de contenido">Creación de Contenido</label>
              </div>
              <div class="checkbox">
                <input type="checkbox">
                <label for="Pautas">Pautas</label>
              </div>
              <div class="checkbox">
                <input type="checkbox">
                <label for="Marketing">Estrategias de Marketing</label>
              </div>
              <div class="checkbox">
                <input type="checkbox">
                <label for="Otro">Otro</label>
              </div>
            </div>
            <input type="submit" value="¡Empecemos!">
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .header-container {
    width: 100%;
    padding: 0.1px;
    background: radial-gradient(
      circle at 0% 0%, 
      rgba(232, 168, 124, 0.7),
      rgba(178, 210, 255, 0) 25%
    ),
    radial-gradient(
      circle at 100% 40%, 
      rgba(240, 230, 170, 0.7),
      rgba(255, 217, 193, 0) 20%
    );
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .header {
    width: 70vw;
    font-size: 1.3rem;
    font-weight: 300;
    text-align: center;
    color: var(--blue);
    margin: 20vh auto;
  }
  
  .header h1 {
    margin-bottom: 1.5rem;
    line-height: 90%;
    font-family: var(--main-font);
    font-size: 3.2rem;
    font-weight: 600;
  }
  
  .header h1 b {
    font-family: var(--sec-font);
    font-weight: 400;
  }
  
  .contact-form-container {
    color: var(--blue);
    width: 80vw;
    margin: 0 auto 10vh auto;
    justify-content: center;
    display: flex;
    gap: 10vw;
  }
  
  .form-info {
    display: flex;
    padding: 2rem 0;
    justify-content: flex-end;
    flex-direction: column;
    gap: 15vh;
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 10vh;
  }
  
  .info-card {
    display: flex;
    gap: 1rem;
  }
  
  .info-card img {
    width: 3rem;
  }
  
  .info-text {
    display: flex;
    line-height: 120%;
    flex-direction: column;
    gap: 1vh;
    font-size: 0.95rem;
  }
  
  .info-text :first-child {
    font-weight: 700;
    font-size: 1.1rem;
  }
  
  .social {
    display: flex;
    gap: 1rem;
  }
  
  .social img {
    width: 3rem;
  }
  
  .social img:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  
  .form-contacto-container {
    display: flex;
    flex-direction: column;
    color: #fff;
    background: var(--blue);
    border-radius: 30px;
    padding: 3rem 4rem;
    width: 600px;
  }
  
  .form-contacto-container h2 {
    font-size: 2.2rem;
    margin-bottom: 0.7rem;
    width: 400px;
  }
  
  .form-contacto-container span {
    font-weight: 400;
    font-family: var(--sec-font);
    margin-bottom: 2rem;
  }
  
  .form-contacto-container form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .form-contacto-container form input[type="text"],
  .form-contacto-container textarea {
    padding: 7px 0;
    font-size: 1.2rem;
    color: #fff;
    background-color: transparent;
    border: none;
    border-bottom: 2px #fff solid;
  }
  
  .form-contacto-container form input[type="text"]::placeholder,
  .form-contacto-container textarea::placeholder {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.2rem;
    border: none;
  }
  
  .form-contacto-container form input[type="text"]:focus,
  .form-contacto-container textarea:focus {
    outline: none;
  }
  
  .checkboxes {
    display: grid;
    column-gap: 1vw;
    row-gap: 1vh;
    grid-template-columns: repeat(2, 200px);
    grid-template-rows: 40px repeat(3, 25px);
  }
  
  .checkboxes span:first-child {
    grid-column: 1 / 3;
  }
  
  .checkbox input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    border-radius: 0.2rem;
    border: 1px solid #fff;
    width: 15px;
    height: 15px;
    margin: 0 8px 0 0;
    background: transparent;
    cursor: pointer;
    position: relative;
  }
  
  .checkbox input[type="checkbox"]:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }
  
  .checkbox input[type="checkbox"]:checked::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 6px;
    width: 3px;
    height: 8px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(45deg) translateX(-2px);
  }
  
  .checkbox label {
    font-family: var(--sec-font);
  }
  
  .checkbox {
    display: flex;
  }
  
  .form-contacto-container input[type="submit"] {
    margin-top: 1rem;
    font-family: var(--sec-font);
    background-color: #fff;
    color: var(--blue);
    border: none;
    border-radius: 1.5rem;
    padding: 0.75rem 2rem;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .form-contacto-container input[type="submit"]:hover {
    opacity: 0.9;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
  
  .form-contacto-container input[type="submit"]:active {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }
  
  /* Media Query para Móviles (hasta 765px) */
  @media screen and (max-width: 765px) {
    .header h1 {
      font-size: 2rem;
    }
  
    .header {
      width: 80vw;
      margin: 15vh auto;
    }
  
    .header p {
      font-size: 1.1rem;
    }
  
    .contact-form-container {
      width: 95vw;
      gap: 5vh;
      align-items: center;
      flex-direction: column;
    }
  
    .form-info {
      order: 2;
      gap: 5vh;
    }
  
    .contact-info {
      gap: 5vh;
    }
  
    .social {
      justify-content: center;
    }
  
    .form-contacto-container {
      width: 100%;
      padding: 2rem;
    }
  
    .form-contacto-container h2 {
      width: 100%;
      font-size: 1.8rem;
    }
  
    .checkboxes {
      grid-template-columns: 300px;
      grid-template-rows: 50px repeat(6, 25px);
    }
  
    .checkboxes span:first-child {
      grid-column: 1;
    }
  }
  
  /* Media Query para Tablets (768px - 1024px) */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .header {
      width: 85vw; /* Ajustamos el ancho */
      margin: 15vh auto; /* Reducimos el margen */
      font-size: 1.2rem; /* Reducimos el tamaño de fuente */
    }
  
    .header h1 {
      font-size: 2.8rem; /* Reducimos el tamaño del título */
    }
  
    .header p {
      font-size: 1.2rem; /* Reducimos el tamaño del párrafo */
    }
  
    .contact-form-container {
      width: 90vw; /* Ajustamos el ancho */
      gap: 5vw; /* Reducimos el gap */
    }
  
    .form-info {
      gap: 10vh; /* Reducimos el gap */
      padding: 1.5rem 0; /* Reducimos el padding */
    }
  
    .contact-info {
      gap: 8vh; /* Reducimos el gap */
    }
  
    .info-card img {
      width: 2.5rem; /* Reducimos el tamaño de los íconos */
    }
  
    .info-text {
      font-size: 0.9rem; /* Reducimos el tamaño de fuente */
    }
  
    .info-text :first-child {
      font-size: 1rem; /* Reducimos el tamaño del título */
    }
  
    .social img {
      width: 2.5rem; /* Reducimos el tamaño de los íconos */
    }
  
    .form-contacto-container {
      width: 500px; /* Reducimos el ancho */
      padding: 2.5rem 3rem; /* Reducimos el padding */
    }
  
    .form-contacto-container h2 {
      font-size: 2rem; /* Reducimos el tamaño del título */
      width: 350px; /* Reducimos el ancho */
    }
  
    .form-contacto-container span {
      margin-bottom: 1.5rem; /* Reducimos el margen */
    }
  
    .form-contacto-container form input[type="text"],
    .form-contacto-container textarea {
      font-size: 1.1rem; /* Reducimos el tamaño de fuente */
    }
  
    .form-contacto-container form input[type="text"]::placeholder,
    .form-contacto-container textarea::placeholder {
      font-size: 1.1rem; /* Reducimos el tamaño de fuente */
    }
  
    .checkboxes {
      grid-template-columns: repeat(2, 180px); /* Reducimos el ancho de las columnas */
    }
  
    .checkbox input[type="checkbox"] {
      width: 14px; /* Reducimos el tamaño de los checkboxes */
      height: 14px; /* Reducimos el tamaño de los checkboxes */
    }
  
    .form-contacto-container input[type="submit"] {
      font-size: 1.1rem; /* Reducimos el tamaño de fuente */
      padding: 0.6rem 1.5rem; /* Reducimos el padding */
    }
  }
  </style>
  
  <script setup>
  import Menu from './Menu.vue'
  </script>