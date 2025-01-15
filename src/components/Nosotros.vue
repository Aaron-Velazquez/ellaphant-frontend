<template>
    <Menu/>
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
          <div class="mision-card">
            <figure class="icono">
              <img src="/img/icono-creatividad.svg" alt="Exito">
            </figure>
            <h3>Exito</h3>
            <figure class="card-img">
              <img src="/img/creatividad-img.webp" alt="Mano sosteniendo un foco amarillo">
            </figure>
          </div>
          <div class="mision-card">
            <figure class="icono">
              <img src="/img/icono-autenticidad.svg" alt="Una mano haciendo un gesto">
            </figure>
            <h3>Exito</h3>
            <figure class="card-img">
              <img src="/img/autenticidad-img.webp" alt="Instagram con notificaciones resaltadas">
            </figure>
          </div>
          <div class="mision-card">
            <h3>Sigue explorando más sobre nosotros</h3>
          </div>
        </div>
      </div>
</template>

<script setup>
import Menu from './Menu.vue'


</script>

<style scoped>

.main-container{
    padding: 0.1px;
    width: 100%;
      /* Radial gradient con dos puntos de color, 
     uno azulado a la izquierda y uno durazno a la derecha */
  background: radial-gradient(
    circle at 25% 50%, 
    rgba(100, 149, 237, 0.7),  /* azul claro */
    rgba(178, 210, 255, 0) 80%
  ),
  radial-gradient(
    circle at 70% 50%, 
    rgba(232, 168, 124, 0.7),  /* durazno claro */
    rgba(255, 217, 193, 0) 40%
  );
/* Ajusta si deseas un fondo fijo al hacer scroll */
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
.header{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.header figure{
    width: 25rem;
    transform: translateY(40px) translateX(30px);
}
.header figure img{
    width: 100%;
}
.header-text{
    display: flex;
    flex-direction: column;
    gap: 3vh;
    font-size: 1.1rem;
    width: 25rem;
    line-height: 130%;
}
.header h1{
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
    /* Aquí especificas la duración, la velocidad y el tipo de movimiento */
    animation: marquee 7s linear infinite;
  }
  
  /* Espaciado y estilo de cada servicio */
  .marquee span {
    padding: 0.7rem 0;
    font-size: 1.5rem;
    font-family: var(--sec-font);
    margin-right: 1rem;  /* Ajusta el espacio entre cada servicio */
    color: #fff;
}
.marquee img{
    transform: translateY(7px);
    width: 30px;
    margin-right: 12px;
  }
  
  /* Definición de la animación */
  @keyframes marquee {
    0% {
      transform: translateX(0);       /* Empieza en su posición original */
    }
    100% {
      transform: translateX(-33.333%);   /* Termina desplazado hacia la izquierda */
    }
  }

.mision-cards-container{
  width: 80vw;
  margin: 10vh auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
}
.mision-cards-container h2{
  font-size: 3rem;
  color: var(--blue);
}
.mision-cards{
  justify-items: center;
  max-width: 1200px;
  row-gap: 1rem;
  display: grid;
  grid-column: repeat(4, 150px);
  grid-template-rows: 520px 350px;
}
.mision-card{
  gap: 1rem;
  padding: 1rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  border-radius: 30px;
  color: #fff;
  box-shadow: 1px 1px 5px rgba(0 ,0 ,0 ,0.1);
}
.mision-cards div:nth-child(3), .mision-cards div:nth-child(4), .mision-cards div:nth-child(5){
  gap: 1vh;
}
.mision-card h3{
  font-size: 2rem;
}
.mision-card .icono{
  background: #fff;
  width: 40px;
  height: 40px;
  border-radius: 100%;
}
.mision-card .icono img{
  width: 100%;
  padding: 5px;
}
.mision-card .card-img img{
  width: 100%;
  display: block;
}
.mision-cards div:nth-child(1){
  background: var(--blue);
  width: 400px;
  color: #fff;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
.mision-cards div:nth-child(1) .card-img{
  width: 350px;
  height: 400px;
}
.mision-cards div:nth-child(1) .card-img img{
  height: 100%;
  object-fit: contain;
  transform: translateY(11px);
}
.mision-cards div:nth-child(2){
  color: var(--blue);
  width: 400px;
  background: var(--seashell);
  grid-column: 3 / 4;
  grid-row: 1 / 2;
}
.mision-cards div:nth-child(2) .icono{
  margin-top: 1vh;
  background: var(--blue);
}
.mision-cards div:nth-child(2) .card-img{
  width: 340px;
  height: 500px;
}
.mision-cards div:nth-child(2) .card-img img{
  height: 100%;
  object-fit: contain;
  transform: translateY(11px) translateX(10px);
}
.mision-cards div:nth-child(3){
  background: var(--light-blue);
  grid-row: 2 / 2 ;
  grid-column: 1 / 2;
  width: 300px;
  transform: translateX(50px);
}
.mision-cards div:nth-child(3) .card-img{
  width: 250px;
  height: 230px;
}
.mision-cards div:nth-child(3) .card-img img{
  height: 100%;
  object-fit: contain;
  transform: translateX(-58px);
}
.mision-cards div:nth-child(4){
  background: var(--yellow);
  grid-row: 2 / 2;
  grid-column: 2 / 3;
  width: 300px;
  transform: translateX(75px);
}
.mision-cards div:nth-child(4) .card-img{
  width: 250px;
  height: 230px;
}
.mision-cards div:nth-child(4) .card-img img{
  height: 100%;
  object-fit: contain;
  transform: translateX(63px);
}
.mision-cards div:nth-child(5){
  justify-content: center;
  background: url('/img/sigue-explorando.webp') no-repeat center center;
  grid-row: 2 / 2;
  grid-column: 3 / 4;
  width: 300px;
  transform: translateX(50px);
}
</style>