<template>
    <Menu />
    <div class="header-container">
      <span>Bienvenido a nuestro<br></span>
      <h1><img class="atras" src="/img/carpeta-atras.svg" alt="icono-portafolio"> Portafolio <img class="frente" src="/img/carpeta-frente.svg" alt="icono-portafolio"></h1>
    </div>
    <div class="trabajos">
      <span>Servicios</span>
      <h2>Algunos de<br>Nuestros trabajos</h2>
      <div class="line"></div>
      <h3>Redes Sociales</h3>
      <div class="redes-sociales">
        <div class="slider">
          <div class="slider-container">
            <div class="slider-item prev" @click="goToPrev">
              <img :src="prevImage" alt="Imagen anterior" />
            </div>
            <div class="slider-item current">
              <img :src="currentImage" alt="Imagen actual" />
            </div>
            <div class="slider-item next" @click="goToNext">
              <img :src="nextImage" alt="Imagen siguiente" />
            </div>
          </div>
          <button @click="prev" class="slider-button prev">‹</button>
          <button @click="next" class="slider-button next">›</button>
        </div>
      </div>
      <div class="line"></div>
      <h3>Branding</h3>
      <Slider2></Slider2>
    </div>
  </template>
  
  <script setup>
  import Menu from './Menu.vue'
  import Slider2 from './Slider2.vue';
  
  import { ref, computed } from 'vue';
  
  // Array de imágenes (puedes reemplazar con tus propias imágenes)
  const images = ref([
    '/img/karanday1.webp',
    '/img/karanday2.webp',
    '/img/karanday3.webp',
    '/img/ravello1.webp',
    '/img/ravello2.webp',
    '/img/nubetec1.webp',
    '/img/nubetec2.webp',
    '/img/bf1.webp',
    '/img/bf2.webp',
    '/img/ellaphant1.webp',
    '/img/ellaphant2.webp',
    '/img/dr_rafael1.webp',
    '/img/dr_rafael2.webp',
    '/img/alliotec1.webp',
    '/img/alliotec2.webp',
  ]);
  
  // Índice de la imagen central
  const currentIndex = ref(0);
  
  // Computadas para los índices y las imágenes
  const prevIndex = computed(() => (currentIndex.value - 1 + images.value.length) % images.value.length);
  const nextIndex = computed(() => (currentIndex.value + 1) % images.value.length);
  const prevImage = computed(() => images.value[prevIndex.value]);
  const currentImage = computed(() => images.value[currentIndex.value]);
  const nextImage = computed(() => images.value[nextIndex.value]);
  
  // Funciones de navegación
  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  };
  
  const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
  };
  
  // Funciones para navegar haciendo clic en las vistas previas
  const goToPrev = () => prev();
  const goToNext = () => next();
  </script>
  
  <style scoped>
  /* Estilos por defecto (desktop) */
  .header-container {
    width: 70vw;
    margin: 150px auto;
    text-align: center;
    color: var(--blue);
  }
  
  .header-container span {
    font-size: 2.3rem;
    font-family: var(--sec-font);
  }
  
  .header-container h1 {
    z-index: 10;
    font-size: 8.5rem;
    position: relative;
  }
  
  .header-container .atras {
    position: absolute;
    top: 80px;
    right: 40%;
    z-index: -1;
    width: 200px;
  }
  
  .header-container .frente {
    position: absolute;
    top: 110px;
    right: 40%;
    z-index: 100;
    width: 200px;
  }
  
  .trabajos {
    width: 80vw;
    margin: 200px auto;
    color: var(--blue);
  }
  
  .trabajos span {
    font-size: 1.5rem;
    font-family: var(--sec-font);
  }
  
  .trabajos h2 {
    font-size: 2.5rem;
    margin-top: 10px;
    text-transform: uppercase;
    font-weight: 700;
    font-family: var(--main-font);
  }
  
  .trabajos h3 {
    position: relative;
    margin: 5vh 2vw;
    font-family: var(--main-font);
    font-size: 2.4rem;
  }
  
  .trabajos h3::before {
    content: '';
    position: absolute;
    width: 10px;
    top: 50%;
    left: -30px;
    transform: translateY(-50%);
    height: 10px;
    border-radius: 100%;
    background: var(--blue);
  }
  
  .line {
    width: 100%;
    height: 1px;
    background-color: #ccc;
    margin-top: 50px;
  }
  
  .slider {
    position: relative;
    width: 100%;
    max-width: 70vw;
    margin: 5vh auto;
    overflow: hidden;
  }
  
  .slider-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  
  .slider-item {
    transition: all 0.8s ease;
  }
  
  .slider-item img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .slider-item.prev,
  .slider-item.next {
    width: 100%;
    opacity: 0.7;
    cursor: pointer;
  }
  
  .slider-item.current {
    width: 150%;
    opacity: 1;
  }
  
  .slider-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    width: 40px;
    line-height: 0.5;
    height: 40px;
    cursor: pointer;
    font-size: 32px;
    border-radius: 100%;
  }
  
  .slider-button.prev {
    left: 10px;
  }
  
  .slider-button.next {
    right: 10px;
  }
  
  /* Media Query para Tablets (768px - 1024px) */
  @media screen and (max-width: 1024px) {
    .header-container {
      width: 85vw;
      margin: 100px auto;
    }
  
    .header-container span {
      font-size: 1.8rem;
    }
  
    .header-container h1 {
      font-size: 6rem;
    }
  
    .header-container .atras,
    .header-container .frente {
      width: 150px;
      top: 60px;
      right: 42%;
    }
  
    .trabajos {
      width: 90vw;
      margin: 150px auto;
    }
  
    .trabajos span {
      font-size: 1.2rem;
    }
  
    .trabajos h2 {
      font-size: 2rem;
    }
  
    .trabajos h3 {
      font-size: 2rem;
      margin: 4vh 2vw;
    }
  
    .trabajos h3::before {
      width: 8px;
      height: 8px;
      left: -25px;
    }
  
    .slider {
      max-width: 85vw;
      margin: 4vh auto;
    }
  
    .slider-item.current {
      width: 130%; /* Reducimos el tamaño del panel central en tablets */
    }
  
    .slider-button {
      width: 30px;
      height: 30px;
      font-size: 24px;
      padding: 8px;
    }
  }
  
  /* Media Query para Móviles (hasta 767px) */
  @media screen and (max-width: 767px) {
    .header-container {
      width: 90vw;
      margin: 80px auto;
    }
  
    .header-container span {
      font-size: 1.5rem;
    }
  
    .header-container h1 {
      font-size: 4rem;
    }
  
    .header-container .atras,
    .header-container .frente {
      display: none; /* Ocultamos las imágenes de carpetas en móvil para simplificar */
    }
  
    .trabajos {
      width: 92vw;
      margin: 100px auto;
    }
  
    .trabajos span {
      font-size: 1rem;
    }
  
    .trabajos h2 {
      font-size: 1.8rem;
    }
  
    .trabajos h3 {
      font-size: 1.6rem;
      margin: 3vh 2vw;
    }
  
    .trabajos h3::before {
      width: 6px;
      height: 6px;
      left: -20px;
    }
  
    .line {
      margin-top: 30px;
    }
  
    .slider {
      max-width: 90vw;
      margin: 3vh auto;
    }
  
    .slider-container {
      gap: 5px;
    }
  
    .slider-item.prev,
    .slider-item.next {
      width: 80%; /* Reducimos el tamaño de las vistas previas en móvil */
    }
  
    .slider-item.current {
      width: 110%; /* Reducimos aún más el tamaño del panel central en móvil */
    }
  
    .slider-button {
      width: 25px;
      height: 25px;
      font-size: 20px;
      padding: 6px;
    }
  }
  </style>