<template>
    <Menu/>
      <div class="desarrollo-container">
          <section class="hero-section">
              <div class="hero-content">
                  <p class="hero-subtitle">Estamos comprometidos con el</p>
                  <h2 class="hero-title">
                      Crecimiento de <br/>tu negocio</h2>
                      <p class="hero-description">Transformamos ideas en productos.</p>
                      <button class="cta-button">SOLICITAR PRESUPUESTO</button>
                </div>
</section>
<section class="features">
    <div class="features-text">
        <h2>Desarrollo Web Profesional <b>que convierte</b></h2>
        <span>Creamos páginas web estratégicas</span>
    </div>
    <div class="features-cards">
        <div class="feature-card">
            <span>Generan clientes</span>
            <img src="/img/generan-clientes.svg" alt="Personas haciendo tomándose de la mano">
        </div>
        <div class="feature-card">
            <span>Venden productos</span>
            <img src="/img/venden-productos.svg" alt="Mujer mostrando un producto en su web">
        </div>
        <div class="feature-card">
            <span>Cuentan la historia de tu marca</span>
            <img src="/img/cuenta-historia.svg" alt="Personas hablando">
        </div>
    </div>
    <span class="enfoque">Nuestro enfoque combina diseño creativo con desarrollo técnico para crear sitios web que <b>impulsan tu presencia online</b> y <b>resultados de negocio.</b>
    </span>
</section>

<div class="servicios-clave-container">
    <div class="servicios-clave">
        <h2>Servicios Clave</h2>
        <div class="servicios-tarjetas">
            <div class="tarjeta-servicio">
                <img src="/img/icono-personalizado.svg" alt="Diseño Web Personalizado Icon">
                <span>Diseño web personalizado</span>
            </div>
            <div class="tarjeta-servicio">
                <img src="/img/icono-seo.svg" alt="Optimización SEO Icon">
                <span>Optimización SEO</span>
            </div>
                <div class="tarjeta-servicio">
                    <img src="/img/icono-responsive.svg" alt="Diseño Responsivo Icon">
                    <span>Diseño Responsivo</span>
                </div>
                <div class="tarjeta-servicio">
                    <img src="/img/icono-conversion.svg" alt="Enfocado en Convertir Icon">
                    <span>Enfocado en Convertir</span>
                </div>
                <div class="tarjeta-servicio">
                    <img src="/img/icono-identidad.svg" alt="Identidad Digital Única Icon">
                    <span>Identidad Digital Única</span>
                </div>
            </div>
            <span>Transformamos tu visión digital en una herramienta de crecimiento empresarial efectiva.</span>
    </div>
</div>
</div>
</template>

<style scoped>
.desarrollo-container{
    padding: 0.1px;
    background: radial-gradient(
        circle at 0% 0%, 
        rgba(232, 168, 124, 0.7),
        rgba(178, 210, 255, 0) 25%
      ),
      radial-gradient(
        circle at 100% 40%, 
        rgba(100, 149, 237, 0.7),
        rgba(255, 217, 193, 0) 20%
      );
}
/* Hero section */
.hero-section {
    color: var(--blue);
    margin: 10vh 0;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 70vh;
    text-align: center;
    padding: 2rem;
  }
  
  /* Contenido del hero */
  .hero-content {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    color: var(--light-blue); 
  }
  
  .hero-title {
    font-size: 4.5rem;
    line-height: 1; 
    margin: 0.5rem 0;
  }
  
  .hero-title span {
    text-decoration: underline;
  }
  
  .hero-description {
    color: var(--light-blue);
    margin: 1rem 0 2rem 0;
    font-size: 1.5rem;
  }
  
  /* Botón CTA */
  .cta-button {
    background-color: #f8b693;  /* Tono durazno */
    color: #fff;
    border: none;
    border-radius: 25px;
    padding: 1rem 2rem;
    cursor: pointer;
    font-weight: 700;
    font-size: 1rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.2s;
  }
  
  .cta-button:hover {
    transform: translateY(-2px);
  }

  .features{
    color: var(--blue);
    width: 80vw;
    margin: 10vh auto;
    flex-direction: column;
  }
  .features-text{
    padding: 1rem;
    text-align: center;
    background: var(--yellow);
    height: 40vh;
    font-size: 1.3rem;
    border-radius: 30px;
  }
  .features-text h2{
    font-size: 2.5rem;
    padding: 7px 0;
    margin-bottom: 0.8rem;
  }
  .features-text h2 b{
    font-family: var(--main-font);
    color: #fff;
    padding: 0 1rem;
    background: var(--blue);
    font-weight: 400;
  }
  .features-cards{
    display: flex;
    justify-content: center;
    gap: 3vw;
    transform: translateY(-20vh);
  }

  .feature-card{
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 30px;
    padding: 1rem 20px 0 20px;
    text-align: center;
    width: 320px;
    height: 400px;
    background: var(--seashell);
  }
  .feature-card span{
    margin: 20px 0;
    font-weight: 500;
  }
  .feature-card img{
    width: 17rem;
    height: 20rem;
  }
  .features-cards div:nth-child(2) img, .features-cards div:nth-child(3) img{
    transform: translateY(30px);
  }
   .features span.enfoque{
    display: block;
    width: 600px;
    margin: auto;
    text-align: center;
    transform: translateY(-10vh);
  }
  .servicios-clave-container{
      width: 100%;
      padding: 3rem 0;
      margin-bottom: 5vh;
      background-color: var(--brown);
  }
  .servicios-clave{
    padding: 3rem 0;
    border-radius: 30px;
    background: var(--seashell);
    width: 70vw;
    text-align: center;
    align-items: center;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .servicios-clave h2{
    font-size: 3rem;
    text-transform: uppercase;
    font-family: var(--main-font);
    width: 800;
    background: linear-gradient(
        to right,
        var(--light-blue),
        var(--blue),
        var(--brown),
        var(--blue),
        var(--blue)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
  }
  .servicios-tarjetas{
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-around;
  }
  .tarjeta-servicio{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-weight: 600;
    width: 150px;
    align-items: center;
    color: var(--blue);
    text-align: center;
  }
  .tarjeta-servicio img{
    width: 4rem;
  }
  .servicios-clave span:nth-child(3){
    color: var(--blue);
    font-weight: 300;
    font-size: 1.2rem;
    width: 400px;
  }
</style>

<script setup>
import Menu from './Menu.vue'


</script>
