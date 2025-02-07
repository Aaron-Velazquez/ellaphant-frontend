
<template>
  <div class="header-background">
    <main class="header-container">
      <figure>
        <img src="/img/principal-index.webp" alt="Servicios de diseño gráfico y desarrollo web">
      </figure>
      <div class="header-text">
        <h1>Somos una manada <br><b>creativa</b></h1>
        <p>Bienvenido a Ellaphant</p>
        <a href="/contacto">Empieza ya</a>
      </div>
    </main>
    <Menu />
    <section class="servicio-index">
      <h2>Enriquece tu marca <br> <b>Con nuestros <strong>servicios</strong></b></h2>
      <div class="servicios-cards">
        <div class="servicio-card" id="webs">
          <div class="dropdown-card">
          <div class="service">
            <span>Webs</span>
            <img src="/img/index-webs.svg" alt="Web icon">
          </div>
        </div>
        <div class="card">
          <p>Páginas web que impulsan el <b>éxito</b> de tu <b>negocio</b></p>
          <span>Desarrollo Web</span>
        </div>
      </div>
      <div class="servicio-card" id="redes">
        <div class="dropdown-card">
          <div class="service">
            <span>Redes</span>
            <img src="/img/index-redes.svg" alt="Redes icon">
          </div>
        </div>
        <div class="card">
          <p>Impulsamos tus redes para llegar a <b>más personas</b></p>
          <span>Redes Sociales</span>
        </div>
      </div>
      <div class="servicio-card" id="branding">
        <div class="dropdown-card">
          <div class="service">
            <span>Branding</span>
            <img src="/img/index-branding.svg" alt="Branding icon">
          </div>
        </div>
        <div class="card">
          <p>Te creamos una identidad de marca <b>perfecta</b> para <b>tu negocio</b></p>
          <span>Branding</span>
        </div>
      </div>
      <div class="servicio-card" id="packaging">
        <div class="dropdown-card">
          <div class="service">
            <span>Packaging</span>
            <img src="/img/index-packaging.svg" alt="Packaging icon">
          </div>
        </div>
        <div class="card">
          <p>Hacemos que tus empaques sean <b>bonitos</b> y <b>funcionales</b></p>
          <span>Packaging</span>
        </div>
      </div>
    </div>
  </section>
</div>
  

  <section class="nosotros">
    <div class="nosotros-title">
      <h2>Sobre nosotros</h2>
      <p>Más que una agencia, somos tu aliado estratégico para el éxito.</p>
    </div>
    <div class="nosotros-cards">
      <div class="nosotros-card light-blue">
        <div class="card-text">
          <h3>Éxito</h3>
          <p>Estamos acá para ayudarte a alcanzar tus metas y potenciar tu marca.</p>
      </div>
        </div>
    <div class="nosotros-card blue">
      <div class="card-text">
        <h3>Colaboración</h3>
        <p>Nos enfocamos en trabajar juntos, construyendo un camino hacia el éxito de manera conjunta.</p>
      </div>
      </div>
    <div class="nosotros-card brown">
      <div class="card-text">
        <h3>Creatividad</h3>
        <p>Damos vida a ideas originales que conectan y generan impacto.</p>
      </div>
      </div>
    <div class="nosotros-card yellow">
      <div class="card-text">
        <h3>Autenticidad</h3>
        <p>Nos guiamos por la honestidad, siendo genuinos en cada paso que damos.</p>
      </div>
      </div>
    <div class="nosotros-card seashell">
      <div class="card-text">
        <h3>Innovación</h3>
        <p>Buscamos soluciones diferentes y avanzadas para destacar en un mercado en constante cambio.</p>
      </div>
    </div>
    <div class="nosotros-card saber-mas">
      <h3>Sigue explorando más sobre nosotros</h3>
    </div>
  </div>
  </section>
  <section class="clientes">
    <div class="clientes-text">
      <h2>Algunos de nuestros clientes</h2>
      <p>De la estrategia a los resultados.<br> Estas empresas ya están destacando en el mundo digital.</p>
    </div>

      <figure>
        <img src="/img/index-bf.svg" alt="Clientes de Ellaphant">
        <img src="/img/index-dr-rafael.svg" alt="Clientes de Ellaphant">
        <img src="/img/index-karanday.svg" alt="Clientes de Ellaphant">
        <img src="/img/index-nubetec.svg" alt="Clientes de Ellaphant">
      </figure>
  </section>

  <section class="index-cta">
    <h2>Empoderamos tu marca</h2>
    <p>Contactá con nosotros, te asesoramos en tu crecimiento y te presupuestamos los servicios esenciales para vos</p>
    <a href="/contacto">CONTACTANOS</a>
    <img src="/img/index-flecha.svg" alt="flecha">
  </section>
  </template>
  
  <script setup>
  import Menu from './Menu.vue'

  </script>
  
  <style scoped>
  main{
    padding: 0.1px;
  }
  .header-background{
    background: radial-gradient(
      circle at 0% 45%, 
      rgba(232, 168, 124, 0.5),
      rgba(178, 210, 255, 0) 30%
    ),
    radial-gradient(
      circle at 100% 0%, 
      rgba(240, 230, 140, 0.5),
      rgba(255, 217, 193, 0) 30%
    );
  /* Ajusta si deseas un fondo fijo al hacer scroll */
  background-attachment:initial;
  background-repeat: no-repeat;
  background-size: cover;
}
  .header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5vw;
  }
  .header-container figure{
    width: 30rem;
  }
  .header-container figure img{
    width: 100%;
  }
  .header-text{
    transform: translateY(-5vh);
    color: var(--blue);
    font-size: 1.5rem;
    width: 28rem;
  }
  .header-text p{
    transform: translateY(-5px);
  }
  .header-text > *{
    margin: 3vh 0;
  }
  .header-text h1{
    color: var(--blue);
    line-height: 85%;
    font-family: var(--main-font);
    font-size: 5rem;
  }
  .header-text h1 b{
   font-family: var(--sec-font);
   font-weight: 400;
  }
  .header-text a {
    font-size: 1.5rem;
    text-decoration: none;
    color: #333;
    padding: 0.5rem 30px;
    border-radius: 30px;
    color: #fff;
    background-color: var(--blue);
    transition: background-color 0.3s;
  }
  .header-text a:hover {
    background-color: var(--brown);
  }

  .servicio-index {
    display: flex;
    width: 70vw;
    margin: 5vh  auto;
    flex-direction: column;
    gap: 5vh;
    padding: 5vh 0;
  }
  .servicio-index h2{
    font-size: 2.5rem;
    line-height: 110%;
    color: var(--blue); 
   }
   .servicios-cards{
     display: flex;
     gap: 3vw;
     justify-content: center;
   }
   .servicio-card{
    width: 17rem;
    border-radius: 30px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
   }
   .servicio-card:hover{
    transform: scale(1.05);
    transition: transform 0.7s;
   }
  .dropdown-card .service{
     border-top-left-radius: 30px;
     border-top-right-radius: 30px;
     display: flex;
     padding: 10px;
     width: 100%;
     justify-content: space-between;
     align-items: center;
     background: var(--light-blue);
     color: #fff;
    }
    .service span{
      padding: 10px 20px;
      border: #fff 1px solid;
      border-radius: 30px;
    }
    .card{
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 200px;
      color: #fff;
      background-color: var(--seashell);
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
    }
    .card span{
      font-family: var(--sec-font);
      font-size: 1.2rem;
    }
    .servicios-cards :nth-child(1) .card{
      background-color: var(--blue);
    }
    .servicios-cards :nth-child(2) .card{
      background-color: var(--yellow);
      color: var(--blue);
    }
    .servicios-cards :nth-child(3) .card{
      background-color: var(--brown);
    }
    .servicios-cards :nth-child(4) .card{
      background-color: var(--seashell);
      color: var(--blue);
    }
    .servicios-cards :nth-child(1) .card:hover{
      cursor: pointer;
      transform: translateY(15vh);
      transition: transform 0.7s;
    }

    /*nosotros*/
    .nosotros {
      width: 70vw;
      margin: 5vh auto;
      display: flex;
      flex-direction: column;
      align-items: center;
     }
     
     .nosotros h2 {
      color: var(--blue);
      font-size: 2.5rem;
      text-shadow: 1px 1px var(--blue);
      margin-bottom: 1vh;
     }
     
     .nosotros .nosotros-title p {
      font-size: 1.3rem;
      font-family: var(--sec-font);
      color: var(--blue);
      margin-bottom: 3rem;
     }
     .nosotros-title{
      width: 100%;
     }
     .nosotros-cards {
      width: 870px;
      display: grid;
      grid-template-columns: repeat(4, 100px);
      grid-template-rows: repeat(2, 150px);
      gap: 2rem;
     }
     
     .nosotros-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      font-size: 1.1rem;
      border-radius: 1.5rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
     }
     
     .nosotros-card h3 {
      font-size: 2rem;
      margin-bottom: 1vh;
     }
     /* Colores específicos para cada tarjeta */
     .nosotros-card.light-blue {
      background-color: var(--light-blue);
      color: white;
      grid-column: 1 / 4;
      grid-row: 1 / 2;
     }
     
     .nosotros-card.blue {
      background-color: var(--blue);
      color: white;

      grid-column: 4 / 8;
     }
     
     .nosotros-card.brown {
      background-color: var(--brown);
      color: white;
      grid-column: 1 / 3;
     }
     
     .nosotros-card.yellow {
      background-color: var(--yellow);
      color: var(--blue);
      grid-column: 3 / 5;
     }
     
     .nosotros-card.seashell {
      background-color: var(--seashell);
      color: var(--blue);
      grid-column: 1 / 5;
     }
     
     .nosotros-card.saber-mas {
      background: url('/img/caja-sobrenosotros.png') no-repeat center center;
      color: white;
      grid-column: 5 / 8;
      grid-row: 2 / 4;
      position: relative;
      overflow: hidden;
     }

     .clientes {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 7vw;
      width: 80vw;
      margin: 15vh auto;
     }

     .clientes-text {
      font-size: 1.3rem;
      width: 32rem;
      color: var(--blue);
      padding: 1rem;
     }
     .clientes-text p {
      font-family: var(--sec-font);
      margin-bottom: 1.5vh;
     }
     .clientes-text h2 {
      font-size: 2.3rem;
      text-shadow: 
        -1px 0 0px var(--blue),
        0 1px 0px var(--blue), 
        0 0 0px var(--blue), 
        0 0 0px var(--blue); 
      margin-bottom: 1.5vh;
     }
     .clientes figure{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
     }
      .clientes img {
        width: 10rem;
      }

      .index-cta {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.3rem;
        gap: 1.5rem;
        width: 100%;
        margin: 5vh auto;
        padding: 2rem;
        background-color: var(--seashell);
        color: var(--blue);
        border-radius: 30px;
        text-align: center;
      }

      .index-cta h2 {
        font-size: 3rem;
        text-shadow: 
          -1px 0 0px var(--blue),
          0 1px 0px var(--blue), 
          0 0 0px var(--blue), 
          0 0 0px var(--blue); 
       }
       .index-cta a {
        font-size: 1.4rem;
        text-decoration: none;
        color: #fff;
        padding: 0.5rem 1rem;
        border-radius: 12px;
        color: #fff;
        background-color: var(--blue);
        transition: background-color 0.3s;
      }
      .index-cta p {
        width: 50%;
      }
      .index-cta img{
        position: absolute;
        transform: translateX(180px) translateY(110px);
      }
      .index-cta a:hover {
        background-color: var(--brown);
      }
     
     /* Responsive */
     @media (max-width: 768px) {

      .header-container {
        margin-top: 10vh;
      }
      .header-container figure{
        display: none;
      }

      .header-text{
        text-align: center;
        transform: translateY(0);
        font-size: 1rem;
        width: 100%;
      }
      .header-text h1{
        font-size: 3rem;
      }

      .header-text a {
        font-size: 1.2rem;
      }
      
      .servicio-index{
        width: 90vw;
      }
      .servicio-index h2 {
        font-size: 2rem;
      }

      .servicios-cards {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }

      .nosotros {
        width: 90vw;
      }

      .nosotros h2 {
        font-size: 2rem;
        text-shadow: 
        -1px 0 0px var(--blue),
        0 1px 0px var(--blue), 
        0 0 0px var(--blue), 
        0 0 0px var(--blue); 
      }

      .nosotros .nosotros-title p {
        font-size: 1rem;
        margin-bottom: 1.5rem;
       }

      .nosotros-cards {
        width: 95vw;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, 1fr);
      }

      .nosotros-card.saber-mas{
        grid-row: 6 / 8;
        height: 300px;
      }
      
      .nosotros-card {
        grid-column: 1 / 2 !important;
      }
      .clientes {
        width: 90vw;
        margin: 10vh auto;
        flex-direction: column;
        gap: 5vh;
      }
      .clientes-text{
        width: 100%;
        padding: 1rem 0;
        font-size: 1rem;
      }
      .clientes-text h2{
        font-size: 2rem;
      }
      .clientes figure{
        grid-template-columns: 1fr;
        gap: 60px;
      }
      .clientes img{
        width: 7rem;
      }

      .index-cta {
        width: 100%;
        font-size: 1rem;
        border-radius: 0;
        padding: 1rem;
      }
      .index-cta h2 {
        font-size: 2rem;
      }
      .index-cta p {
        width: 90%;
      }
      .index-cta a{
        font-size: 1.2rem;
      }
      .index-cta img{
        transform: translateX(150px) translateY(120px);
      }
     }
  </style>