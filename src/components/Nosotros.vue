<template>
  <Menu />
  <div class="main-container">
    <main class="header-container">
      <section class="header">
        <div class="header-text">
          <h1>Sobre<br>Nosotros</h1>
          <p>Inspirados en la sabiduría y la fuerza de los elefantes, creemos en el poder de una manada creativa.</p>
        </div>
        <figure>
          <img src="/img/img-principal-nosotros.webp" alt="Mano sosteniendo un celular">
        </figure>
      </section>
    </main>
  </div>
  <div class="marquee-container">
    <div class="marquee">
      <span>Branding</span>
      <img src="/img/brillo-icono.svg" alt="Billito">
      <span>Redes Sociales</span>
      <img src="/img/brillo-icono.svg" alt="Billito">
      <span>ADS</span>
      <img src="/img/brillo-icono.svg" alt="Billito">
      <span>Desarrollo Web</span>
      <img src="/img/brillo-icono.svg" alt="Billito">
      <span>Packaging</span>
      <img src="/img/brillo-icono.svg" alt="Billito">
      <span>Campañas</span>
      <img src="/img/brillo-icono.svg" alt="Billito">
      <span>Branding</span>
      <img src="/img/brillo-icono.svg" alt="Billito">
      <span>Redes Sociales</span>
      <img src="/img/brillo-icono.svg" alt="Billito">
      <span>ADS</span>
      <img src="/img/brillo-icono.svg" alt="Billito">
      <span>Desarrollo Web</span>
      <img src="/img/brillo-icono.svg" alt="Billito">
      <span>Packaging</span>
      <img src="/img/brillo-icono.svg" alt="Billito">
      <span>Campañas</span>
      <img src="/img/brillo-icono.svg" alt="Billito">
      <span>Branding</span>
      <img src="/img/brillo-icono.svg" alt="Billito">
      <span>Redes Sociales</span>
      <img src="/img/brillo-icono.svg" alt="Billito">
      <span>ADS</span>
      <img src="/img/brillo-icono.svg" alt="Billito">
      <span>Desarrollo Web</span>
      <img src="/img/brillo-icono.svg" alt="Billito">
      <span>Packaging</span>
      <img src="/img/brillo-icono.svg" alt="Billito">
      <span>Campañas</span>
      <img src="/img/brillo-icono.svg" alt="Billito">
    </div>
  </div>
  <div class="mision-cards-container">
    <h2>Nuestra misión</h2>
    <div class="mision-cards">
      <div class="cards-row-up">
        <div class="mision-card">
          <figure class="icono">
            <img src="/img/icono-exito.svg" alt="Exito">
          </figure>
          <h3>Exito</h3>
          <figure class="card-img">
            <img src="/img/tarjeta-exito.webp" alt="Instagram con notificaciones resaltadas">
          </figure>
        </div>
        <div class="mision-card">
          <figure class="icono">
            <img src="/img/icono-colaboracion.svg" alt="Exito">
          </figure>
          <h3>Colaboración</h3>
          <figure class="card-img">
            <img src="/img/colaboracion.webp" alt="Manos juntas de un equipo">
          </figure>
        </div>
      </div>
      <div class="cards-row-down">
        <div class="mision-card">
          <figure class="icono">
            <img src="/img/icono-creatividad.svg" alt="Exito">
          </figure>
          <h3>Creatividad</h3>
          <figure class="card-img">
            <img src="/img/creatividad-img.webp" alt="Mano sosteniendo un foco amarillo">
          </figure>
        </div>
        <div class="mision-card">
          <figure class="icono">
            <img src="/img/icono-autenticidad.svg" alt="Una mano haciendo un gesto">
          </figure>
          <h3>Autenticidad</h3>
          <figure class="card-img">
            <img src="/img/autenticidad-img.webp" alt="Instagram con notificaciones resaltadas">
          </figure>
        </div>
        <div class="mision-card">
          <h3>Sigue explorando más sobre nosotros</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Menu from './Menu.vue'
</script>

<style scoped>
.main-container {
  padding: 0.1px;
  width: 100%;
  background: radial-gradient(
    circle at 25% 50%, 
    rgba(100, 149, 237, 0.7),
    rgba(178, 210, 255, 0) 80%
  ),
  radial-gradient(
    circle at 70% 50%, 
    rgba(232, 168, 124, 0.7),
    rgba(255, 217, 193, 0) 40%
  );
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

.header-container {
  background-color: var(--blue);
  width: 70vw;
  padding: 2rem;
  margin: 17vh auto;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  height: 60vh;
  color: #fff;
}

.header {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.header figure {
  width: 25rem;
  transform: translateY(40px) translateX(30px);
}

.header figure img {
  width: 100%;
}

.header-text {
  display: flex;
  flex-direction: column;
  gap: 3vh;
  font-size: 1.1rem;
  width: 25rem;
  line-height: 130%;
}

.header h1 {
  font-size: 4rem;
  line-height: 90%;
}

.marquee-container {
  width: 100%;
  transform: translateY(-4px);
  overflow: hidden;
  white-space: nowrap;
  background-color: var(--blue);
}

.marquee {
  display: inline-block;
  align-items: center;
  animation: marquee 7s linear infinite;
}

.marquee span {
  padding: 0.7rem 0;
  font-size: 1.5rem;
  font-family: var(--sec-font);
  margin-right: 1rem;
  color: #fff;
}

.marquee img {
  transform: translateY(7px);
  width: 30px;
  margin-right: 12px;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.333%);
  }
}

.mision-cards-container {
  width: 80vw;
  margin: 10vh auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
}

.mision-cards-container h2 {
  font-size: 3rem;
  color: var(--blue);
}

.mision-cards {
  justify-items: center;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cards-row-up {
  display: flex;
  height: 550px;
  gap: 1rem;
  justify-content: center;
}

.cards-row-down {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.cards-row-up .mision-card {
  gap: 1rem;
  padding: 1rem 4rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  border-radius: 30px;
  color: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}

.cards-row-down .mision-card {
  gap: 1rem;
  padding: 1rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  border-radius: 30px;
  color: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}

.mision-card .card-img {
  align-self: center;
}

.mision-card h3 {
  font-size: 2rem;
}

.mision-card .icono {
  background: #fff;
  width: 40px;
  height: 40px;
  border-radius: 100%;
}

.mision-card .icono img {
  width: 100%;
  padding: 5px;
}

.mision-card .card-img img {
  width: 100%;
  display: block;
}

.cards-row-up div:nth-child(1) {
  background: var(--blue);
  width: 450px;
  color: #fff;
}

.cards-row-up div:nth-child(1) .card-img {
  width: 350px;
  height: 400px;
}

.cards-row-up div:nth-child(1) .card-img img {
  height: 100%;
  object-fit: contain;
  transform: translateY(16px);
}

.cards-row-up div:nth-child(2) {
  color: var(--blue);
  width: 450px;
  background: var(--seashell);
}

.cards-row-up div:nth-child(2) .icono {
  margin-top: 1vh;
  background: var(--blue);
}

.cards-row-up div:nth-child(2) .card-img {
  width: 340px;
  height: 500px;
}

.cards-row-up div:nth-child(2) .card-img img {
  height: 100%;
  object-fit: contain;
  transform: translateY(25px) translateX(10px);
}

.cards-row-down div:nth-child(1) {
  background: var(--light-blue);
  width: 300px;
}

.cards-row-down div:nth-child(1) .card-img {
  width: 250px;
  height: 230px;
  transform: translateX(-67px);
}

.cards-row-down div:nth-child(1) .card-img img {
  height: 100%;
  object-fit: contain;
}

.cards-row-down div:nth-child(2) {
  background: var(--yellow);
  color: var(--blue);
  width: 300px;
}

.cards-row-down div:nth-child(2) .card-img {
  width: 250px;
  height: 230px;
}

.cards-row-down div:nth-child(2) .card-img img {
  height: 100%;
  object-fit: contain;
  transform: translateX(63px);
}

.cards-row-down div:nth-child(3) {
  justify-content: center;
  background: url('/img/sigue-explorando.webp') no-repeat center center;
  background-size: cover;
  width: 300px;
}

/* Media Query para Tablets (768px - 1024px) */
@media screen and (min-width: 800px) and (max-width: 1024px) {
  .header-container {
    width: 85vw; /* Ajustamos el ancho */
    margin: 12vh auto; /* Reducimos el margen */
    height: 50vh; /* Reducimos la altura */
    padding: 1.5rem; /* Reducimos el padding */
  }

  .header figure {
    width: 20rem; /* Reducimos el ancho de la imagen */
    transform: translateY(30px) translateX(20px); /* Ajustamos el desplazamiento */
  }

  .header-text {
    width: 20rem; /* Reducimos el ancho del texto */
    font-size: 1rem; /* Reducimos el tamaño de fuente */
    gap: 2vh; /* Reducimos el gap */
  }

  .header h1 {
    font-size: 3rem; /* Reducimos el tamaño del título */
  }

  .marquee span {
    font-size: 1.3rem; /* Reducimos el tamaño de fuente */
    margin-right: 0.8rem; /* Reducimos el margen */
  }

  .marquee img {
    width: 25px; /* Reducimos el tamaño de las imágenes */
    margin-right: 10px; /* Reducimos el margen */
  }

  .mision-cards-container {
    width: 90vw; /* Ajustamos el ancho */
    margin: 8vh auto; /* Reducimos el margen */
  }

  .mision-cards-container h2 {
    font-size: 2.5rem; /* Reducimos el tamaño del título */
  }

  .cards-row-up {
    height: 450px; /* Reducimos la altura */
    gap: 0.8rem; /* Reducimos el gap */
  }

  .cards-row-down {
    gap: 0.8rem; /* Reducimos el gap */
  }

  .cards-row-up .mision-card {
    padding: 1rem 2rem; /* Reducimos el padding */
  }

  .cards-row-down .mision-card {
    padding: 0.8rem; /* Reducimos el padding */
  }

  .mision-card h3 {
    font-size: 1.7rem; /* Reducimos el tamaño del título */
  }

  .mision-card .icono {
    width: 35px; /* Reducimos el tamaño del ícono */
    height: 35px; /* Reducimos el tamaño del ícono */
  }

  .cards-row-up div:nth-child(1) {
    width: 350px; /* Reducimos el ancho */
  }

  .cards-row-up div:nth-child(1) .card-img {
    width: 300px; /* Reducimos el ancho */
    height: 350px; /* Reducimos la altura */
  }

  .cards-row-up div:nth-child(2) {
    width: 350px; /* Reducimos el ancho */
  }

  .cards-row-up div:nth-child(2) .card-img {
    width: 290px; /* Reducimos el ancho */
    height: 450px; /* Reducimos la altura */
  }

  .cards-row-down div:nth-child(1) {
    width: 250px; /* Reducimos el ancho */
  }

  .cards-row-down div:nth-child(1) .card-img {
    width: 200px; /* Reducimos el ancho */
    height: 200px; /* Reducimos la altura */
    transform: translateX(-53px) translateY(14px); /* Ajustamos el desplazamiento */
  }

  .cards-row-down div:nth-child(2) {
    width: 250px; /* Reducimos el ancho */
  }

  .cards-row-down div:nth-child(2) .card-img {
    width: 200px; /* Reducimos el ancho */
    height: 200px; /* Reducimos la altura */
    transform: translateX(-22px) translateY(12px); /* Ajustamos el desplazamiento */
  }

  .cards-row-down div:nth-child(3) {
    width: 250px; /* Reducimos el ancho */
  }
}

/* Media Query para Móviles (hasta 767px) */
@media screen and (max-width: 800px) {
  .header-container {
    width: 90vw; /* Ajustamos el ancho */
    margin: 15vh auto 5vh auto; /* Reducimos el margen */
    height: auto; /* Ajustamos la altura automáticamente */
    padding: 1rem; /* Reducimos el padding */
  }

  .header {
    flex-direction: column; /* Cambiamos a columna */
    align-items: center;
    text-align: center;
    gap: 2vh; /* Añadimos un gap para espaciar los elementos */
  }

  .header figure {
    display: none; /* Ocultamos la imagen en móviles */
  }

  .header-text {
    width: 90%; /* Ajustamos al ancho del contenedor */
    font-size: 0.9rem; /* Reducimos el tamaño de fuente */
    gap: 1.5vh; /* Reducimos el gap */
  }

  .header h1 {
    font-size: 2.2rem; /* Reducimos el tamaño del título */
  }

  .marquee span {
    font-size: 1rem; /* Reducimos el tamaño de fuente */
    margin-right: 0.5rem; /* Reducimos el margen */
  }

  .marquee img {
    width: 20px; /* Reducimos el tamaño de las imágenes */
    margin-right: 8px; /* Reducimos el margen */
  }

  .mision-cards-container {
    width: 95vw; /* Ajustamos el ancho */
    margin: 5vh auto; /* Reducimos el margen */
  }

  .mision-cards-container h2 {
    font-size: 2rem; /* Reducimos el tamaño del título */
  }

  .mision-cards {
    gap: 2vh; /* Reducimos el gap entre filas */
  }

  .cards-row-up,
  .cards-row-down {
    flex-direction: column; /* Cambiamos a columna */
    height: auto; /* Ajustamos la altura automáticamente */
    gap: 2vh; /* Aumentamos el gap entre tarjetas */
    align-items: center; /* Centramos las tarjetas */
  }

  .cards-row-up .mision-card,
  .cards-row-down .mision-card {
    width: 90%; /* Ajustamos al ancho del contenedor */
    padding: 1rem; /* Ajustamos el padding */
    align-items: center; /* Centramos los elementos */
    text-align: center;
  }

  .mision-card h3 {
    font-size: 1.8rem; /* Reducimos el tamaño del título */
  }

  .mision-card .icono {
    width: 30px; /* Reducimos el tamaño del ícono */
    height: 30px; /* Reducimos el tamaño del ícono */
  }
  .cards-row-up div:nth-child(1), .cards-row-up div:nth-child(2), .cards-row-up div:nth-child(3), .cards-row-down div:nth-child(1), .cards-row-down div:nth-child(2), .cards-row-down div:nth-child(3) {
    width: 350px;
  }

  .cards-row-up div:nth-child(1) .card-img {
    width: 100%; /* Ajustamos al ancho del contenedor */
    height: 250px; /* Reducimos la altura */
  }

  .cards-row-up div:nth-child(1) .card-img img {
    height: 100%;
    object-fit: contain; /* Cambiamos a cover para ajustar mejor */
    transform: translateY(16px); /* Eliminamos desplazamiento */
  }

  .cards-row-up div:nth-child(2) .card-img {
    width: 100%; /* Ajustamos al ancho del contenedor */
    height: 300px; /* Reducimos la altura */
  }

  .cards-row-up div:nth-child(2) .card-img img {
    height: 100%;
    object-fit: contain; /* Cambiamos a cover para ajustar mejor */
    transform: translateY(15px) translateX(0); /* Eliminamos desplazamiento */
  }

  .cards-row-down div:nth-child(1) .card-img {
    width: 100%; /* Ajustamos al ancho del contenedor */
    height: 200px; /* Reducimos la altura */
    transform: translateX(-103px) translateY(16px); /* Eliminamos desplazamiento */
  }

  .cards-row-down div:nth-child(1) .card-img img {
    height: 100%;
    object-fit: contain; /* Cambiamos a cover para ajustar mejor */
  }

  .cards-row-down div:nth-child(2) .card-img {
    width: 100%; /* Ajustamos al ancho del contenedor */
    height: 200px; /* Reducimos la altura */
  }
  
  .cards-row-down div:nth-child(2) .card-img img {
    height: 100%;
    object-fit: contain; /* Cambiamos a cover para ajustar mejor */
    transform: translateX(90px) translateY(15px); /* Eliminamos desplazamiento */
  }

  .cards-row-down div:nth-child(3) {
    width: 100%; /* Ajustamos al ancho del contenedor */
    height: 200px; /* Ajustamos la altura */
  }
}
</style>