<template>
  <div class="slider-container">
    <button class="nav-button" @click="prev">
      ←
    </button>

    <div class="slider-wrapper">
      <transition-group name="slide" tag="div" class="slide-track">
        <div
          v-for="(item, index) in visibleItems"
          :key="item.id"
          class="slide"
          :class="{ 'active': index === 0, 'preview': index === 1 }"
        >
          <img :src="item.src" :alt="item.alt" class="slide-image" />
          <div v-if="index === 0" class="brand-logo" v-html="item.brand"></div>
        </div>
      </transition-group>
    </div>

    <button class="nav-button" @click="next">
      →
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Datos de las imágenes (ajusta las rutas y contenido según tus necesidades)
const items = [
  {
    id: 1,
    src: '/img/Renotex-logo.webp',
    alt: 'Marca Luxe Renotex',
    brand: ''
  },
  {
    id: 2,
    src: '/img/Renotex-mockup.webp',
    alt: 'Packaging con etiqueta',
    brand: ''
  },
  {
    id: 3,
    src: '/img/Luxeglow-logo.webp',
    alt: 'Luxeglow logo',
    brand: ''
  },
  {
    id: 4,
    src: '/img/Leonidas-logo.webp',
    alt: 'Leonidas logo',
    brand: ''
  },
  {
    id: 5,
    src: '/img/Leonidas-mockup.webp',
    alt: 'Leonidas mockup',
    brand: ''
  },
  {
    id: 6,
    src: '/img/Ecopack-logo.webp',
    alt: 'Ecopack logo',
    brand: ''
  },
  {
    id: 7,
    src: '/img/Ecopack-mockup.webp',
    alt: 'Ecopack mockup',
    brand: ''
  },
  {
    id: 8,
    src: '/img/Ecohoney-logo.webp',
    alt: 'Ecohoney logo',
    brand: ''
  },
  {
    id: 9,
    src: '/img/Ecohoney-mockup.webp',
    alt: 'Ecohoney mockup',
    brand: ''
  }
];

const currentIndex = ref(0);

// Elementos visibles: muestra 2 imágenes a la vez (una activa, otra como previsualización)
const visibleItems = computed(() => {
  const result = [];
  for (let i = 0; i < 2; i++) {
    const index = (currentIndex.value + i) % items.length;
    result.push(items[index]);
  }
  return result;
});

// Navegar a la siguiente imagen (infinito)
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % items.length;
};

// Navegar a la imagen anterior (infinito)
const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + items.length) % items.length;
};
</script>

<style scoped>
/* Estilos por defecto (desktop) */
.slider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
}

.nav-button {
  background: #ccc;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 1.5em;
  margin: 0 10px;
  transition: background 0.3s;
  z-index: 20;
}

.nav-button:hover {
  background: #999;
}

.slider-wrapper {
  width: 100%;
  max-width: 900px;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.slide-track {
  display: flex;
  width: 100%;
}

.slide {
  flex: 0 0 50%;
  transition: transform 0.5s ease, opacity 0.5s ease;
  position: relative;
}

.slide-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.brand-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
}

.active {
  transform: scale(1);
  opacity: 1;
}

.preview {
  transform: scale(0.8);
  opacity: 0.7;
  filter: blur(2px);
}

/* Transiciones para el slide */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-move {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

/* Media Query para Móviles (hasta 767px) */
@media screen and (max-width: 767px) {
  .slider-container {
    padding: 10px;
  }

  .nav-button {
    width: 30px;
    height: 30px;
    font-size: 1.2em;
    margin: 0 5px;
  }

  .slider-wrapper {
    max-width: 90vw;
  }

  .slide {
    flex: 0 0 50%;
  }

  .slide-image {
    border-radius: 4px;
  }

  .active {
    transform: scale(1);
  }

  .preview {
    transform: scale(0.7);
    opacity: 0.6;
  }
}
</style>