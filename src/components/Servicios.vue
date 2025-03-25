<script setup>
import Menu from './Menu.vue'

import { ref, computed } from 'vue'

// Ejemplo de datos. Puedes reemplazar icon con un path real:
const slides = ref([
  {
    id: 1,
    tabText: 'Branding',
    title: '/Branding',
    description:
      'Creamos identidades visuales que conectan con tu audiencia y reflejan la esencia de tu negocio.',
    icon: '/img/branding.svg'
  },
  {
    id: 2,
    tabText: 'Desarrollo web',
    title: '/Desarrollo web',
    description:
      'Creamos páginas web que no solo se ven increíbles, sino que impulsan el crecimiento de tu negocio. Diseño responsivo, intuitivo y optimizado para resultados.',
    icon: '/img/desarrollo.svg'
  },
  {
    id: 3,
    tabText: 'Redes',
    title: '/Redes',
    description:
      'Gestionamos y creamos contenido estratégico para redes sociales, potenciando tu presencia en línea y conectando con tu público objetivo.',
    icon: '/img/redes.svg'
  },
  {
    id: 4,
    tabText: 'Packaging',
    title: '/Packaging',
    description:
      'Diseñamos envases y empaques que no solo protegen tu producto, sino que cuentan una historia y generan una experiencia de marca inolvidable.',
    icon: '/img/packaging.svg'
  }
])

const currentSlideIndex = ref(0)

// Computed para obtener el slide actual
const currentSlide = computed(() => slides.value[currentSlideIndex.value])

// Navegación
function nextSlide() {
  currentSlideIndex.value =
    (currentSlideIndex.value + 1) % slides.value.length
}

function prevSlide() {
  currentSlideIndex.value =
    (currentSlideIndex.value - 1 + slides.value.length) % slides.value.length
}

function goToSlide(index) {
  currentSlideIndex.value = index
}
</script>

<template>
  <Menu />

  <main class="header">
    <div class="header-text">
      <h1>Nos <b>dedicamos</b> a ofrecerte <br> una gama completa</h1>
      <p>Desde la construcción de una identidad única hasta la ejecución de campañas deslumbrantes, trabajamos en equipo para convertir tus ideas en realidad.</p>
      <a href="/servicios#servicios">Explora <img src="/img/flecha.svg" alt="Flecha"></a>
    </div>
  </main>

  <section class="service-img">
    <figure>
      <img src="/img/desarrollo.webp" alt="Desarrollo">
      <figcaption>Desarrollo</figcaption>
    </figure>
    <figure>
      <img src="/img/branding.webp" alt="Branding">
      <figcaption>Branding</figcaption>
    </figure>
    <figure>
      <img src="/img/redes.webp" alt="Redes">
      <figcaption>Redes</figcaption>
    </figure>
    <figure>
      <img src="/img/packaging.webp" alt="Packaging">
      <figcaption>Packaging</figcaption>
    </figure>
  </section>

  <section class="servicios-slider" id="servicios">
    <figure>
      <img src="/img/local.webp" alt="Ellaphant Local">
    </figure>
    <div class="slider">
      <div class="slider-tabs">
        <button
          v-for="(slide, index) in slides"
          :key="slide.id"
          :class="['tab-btn', { active: index === currentSlideIndex }]"
          @click="goToSlide(index)"
        >
          {{ slide.tabText }}
        </button>
      </div>
      
      <!-- Contenido del slide actual -->
      <div class="slide-content">
        <div class="slide-icon">
          <img :src="currentSlide.icon" alt="icono" />
        </div>
        <h2>{{ currentSlide.title }}</h2>
        <p class="slide-description">{{ currentSlide.description }}</p>
      
        <!-- Botón de acción (Saber más) -->
        <button class="cta-button">
          Saber más 
          <span>➜</span>
        </button>
      </div>
      
      <!-- Flechas de navegación -->
      <button class="nav-arrow left" @click="prevSlide">‹</button>
      <button class="nav-arrow right" @click="nextSlide">›</button>
      
      <!-- Indicadores/bullets -->
      <div class="slider-bullets">
        <span
          v-for="(slide, index) in slides"
          :key="slide.id"
          :class="['bullet', { 'bullet-active': index === currentSlideIndex }]"
          @click="goToSlide(index)"
        ></span>
      </div> 
    </div>
  </section>
</template>

<style scoped>
.header {
  width: 80vw;
  margin: 15vh auto 0 auto;
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--blue);
}

.header .header-text {
  max-width: 700px;
  font-weight: 300;
  font-size: 1.25rem;
}

.header .header-text h1 {
  font-weight: 300;
  font-size: 3.5rem;
  font-family: var(--main-font);
  margin-bottom: 1rem;
}

.header .header-text h1 b {
  padding: 0 5px;
  border-radius: 30px;
  font-family: var(--sec-font);
  font-weight: 400;
  background-color: var(--light-blue);
  color: #fff;
}

.header-text p {
  margin-bottom: 1.5rem;
  line-height: 130%;
}

.header a {
  display: flex;
  align-items: center;
  margin: auto;
  font-size: 1.5rem;
  justify-content: center;
  padding: 0.7rem 1rem;
  width: 10rem;
  background-color: transparent;
  color: var(--blue);
  border: 1px solid var(--blue);
  text-decoration: none;
  border-radius: 30px;
  transition: background ease-in-out 0.5s, color ease-in-out 0.5s;
}

.header a:hover {
  background-color: var(--blue);
  color: #fff;
}

.header a img {
  width: 2rem;
  padding: 8px;
  background-color: var(--blue);
  border-radius: 100%;
  margin-left: 0.5rem;
}

.service-img {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: self-end;
  margin: 0 auto;
  text-align: center;
  color: #fff;
  width: 80vw;
}
.service-img figure img{
  width: 100%;
}

.service-img figure figcaption {
  font-size: 2rem;
  font-family: var(--sec-font);
  transform: translateY(-90px);
}

.service-img figure:nth-child(2) {
  transform: translateY(70px);
}

.service-img figure:nth-child(4) {
  transform: translateY(-120px);
}

.servicios-slider {
  display: flex;
  justify-content: flex-start;
  margin: 5rem 0;
  width: 100%;
}

.servicios-slider figure {
  width: 40%;
}

.servicios-slider figure img {
  width: 100%;
}

.slider {
  position: relative;
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 2rem 1rem;
  border-radius: 1rem;
}

/* Botones superiores (tabs) */
.slider-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.tab-btn {
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 30px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 300;
  font-size: 1.5rem;
  color: var(--blue);
  transition: background 0.3s;
}

.tab-btn.active {
  background-color: var(--blue);
  color: #fff;
}

/* Contenido */
.slide-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  padding: 1rem 0;
}

.slide-icon {
  background: var(--blue);
  width: 70px;
  height: 70px;
  border-radius: 100%;
}

.slide-icon img {
  width: 100%;
  padding: 10px;
  height: 100%;
  object-fit: contain;
}

.slide-description {
  max-width: 400px;
  color: var(--blue);
  font-size: 1.1rem;
}

.slide-content h2 {
  color: rgb(0, 0, 0, 0.5);
  font-family: var(--main-font);
  font-weight: 300;
  font-size: 2rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  font-size: 1.2rem;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid var(--blue);
  border-radius: 30px;
  cursor: pointer;
  font-weight: 300;
  color: var(--blue);
  transition: all 0.3s;
}

.cta-button:hover {
  background-color: var(--blue);
  color: #fff;
}

/* Flechas de navegación */
.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 3rem;
  cursor: pointer;
  color: var(--blue);
  opacity: 0.7;
  transition: opacity 0.3s;
}

.nav-arrow:hover {
  opacity: 1;
}

.left {
  left: 4rem;
}

.right {
  right: 4rem;
}

/* Bullets */
.slider-bullets {
  margin-top: 1rem;
}

.bullet {
  display: inline-block;
  margin: 0 0.2rem;
  width: 8px;
  height: 8px;
  background: #aaa;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
}

.bullet-active {
  background: var(--blue);
}

/* Media Query para Móviles (hasta 768px) */
@media screen and (max-width: 800px) {
  .header {
    margin: 10vh auto 0 auto;
    width: 90vw;
  }

  .header .header-text h1 {
    font-size: 2.5rem;
  }

  .service-img {
    align-items: center;
    width: 90vw;
    margin: auto;
    row-gap: 1.5vh;
    justify-items: center;
    grid-template-columns: repeat(2, 10rem);
    grid-template-rows: repeat(4, 110px);
  }

  .service-img figure {
    height: 12rem;
    width: 10rem;
  }

  .service-img figure img {
    width: 100%;
  }

  .service-img figure:nth-child(1) {
    grid-row: 1 / 3;
    grid-column: 1;
  }

  .service-img figure:nth-child(2) {
    grid-row: 1 / 3;
    grid-column: 2;
    transform: translateY(0);
  }

  .service-img figure:nth-child(3) {
    transform: translateY(-70px);
    grid-row: 3 / 5;
    grid-column: 2;
  }

  .service-img figure:nth-child(4) {
    transform: translateY(0);
    grid-row: 3 / 5;
    grid-column: 1;
  }

  .service-img figure figcaption {
    font-size: 1.5rem;
    transform: translateY(-50px);
  }

  .servicios-slider {
    margin: 0;
    flex-direction: column;
  }

  .servicios-slider figure {
    display: none;
  }

  .slider {
    width: 100%;
    height: auto;
    padding: 1rem;
  }

  .slider-tabs {
    width: 100%;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .tab-btn {
    font-size: 1.1rem;
    padding: 0.3rem 0.5rem;
  }

  .slide-content h2 {
    font-size: 1.5rem;
  }

  .slide-description {
    font-size: 1rem;
  }

  .left {
    left: 1rem;
  }

  .right {
    right: 1rem;
  }

  .cta-button {
    font-size: 1rem;
    padding: 0.3rem 0.5rem;
  }
}

/* Media Query para Tablets (768px - 1024px) */
@media screen and (min-width: 800px) and (max-width: 1024px) {
  .header {
    width: 85vw;
    margin: 10vh auto 0 auto;
    padding: 50px 0; /* Reducimos el padding vertical */
  }

  .header .header-text {
    max-width: 600px; /* Reducimos el ancho máximo del texto */
    font-size: 1.1rem; /* Reducimos ligeramente el tamaño de fuente */
  }

  .header .header-text h1 {
    font-size: 3rem; /* Reducimos el tamaño del título */
  }

  .header a {
    font-size: 1.3rem; /* Reducimos el tamaño del botón */
    padding: 0.6rem 0.9rem; /* Ajustamos el padding del botón */
    width: 9rem; /* Reducimos el ancho del botón */
  }

  .header a img {
    width: 1.8rem; /* Reducimos el tamaño de la flecha */
    padding: 6px; /* Ajustamos el padding de la flecha */
  }

  .service-img {
    width: 85vw; /* Ajustamos el ancho */
    grid-template-columns: repeat(4, 1fr); /* Mantenemos 4 columnas */
    gap: 1.5rem; /* Reducimos el gap entre figuras */
  }

  .service-img figure figcaption {
    font-size: 1.8rem; /* Reducimos el tamaño del texto */
    transform: translateY(-80px); /* Ajustamos el desplazamiento */
  }

  .service-img figure:nth-child(2) {
    transform: translateY(50px); /* Ajustamos el desplazamiento */
  }

  .service-img figure:nth-child(4) {
    transform: translateY(-100px); /* Ajustamos el desplazamiento */
  }

  .servicios-slider {
    margin: 4rem 0; /* Reducimos el margen */
  }

  .servicios-slider figure {
    width: 35%; /* Reducimos el ancho de la figura */
  }

  .slider {
    width: 65%; /* Ajustamos el ancho del slider */
    padding: 1.5rem 0.8rem; /* Ajustamos el padding */
  }

  .slider-tabs {
    gap: 0.8rem; /* Reducimos el gap entre tabs */
  }

  .tab-btn {
    font-size: 1.3rem; /* Reducimos el tamaño de los tabs */
    padding: 0.4rem 0.8rem; /* Ajustamos el padding de los tabs */
  }

  .slide-icon {
    width: 60px; /* Reducimos el tamaño del icono */
    height: 60px; /* Reducimos el tamaño del icono */
  }

  .slide-content h2 {
    font-size: 1.8rem; /* Reducimos el tamaño del título */
  }

  .slide-description {
    font-size: 1rem; /* Reducimos el tamaño de la descripción */
    max-width: 350px; /* Reducimos el ancho máximo de la descripción */
  }

  .cta-button {
    font-size: 1.1rem; /* Reducimos el tamaño del botón */
    padding: 0.4rem 0.8rem; /* Ajustamos el padding del botón */
  }

  .nav-arrow {
    font-size: 2.5rem; /* Reducimos el tamaño de las flechas */
  }

  .left {
    left: 2rem; /* Ajustamos la posición de la flecha izquierda */
  }

  .right {
    right: 2rem; /* Ajustamos la posición de la flecha derecha */
  }
}
</style>