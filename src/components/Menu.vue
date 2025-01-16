<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
        <nav class="menu pc">
            <div class="logo">
                <img src="/img/ellaphant-logo.svg" alt="Ellaphant Logo" onclick="window.location.href='/'">
            </div>
            <ul>
                <li><a href="/nosotros">Nosotros</a></li>
                
                <li class="servicios">
                    <a href="servicios">Servicios</a>
                    <ul class="submenu">
                        <li><a href="/redes-sociales">Redes</a></li>
                        <li><a href="/desarrollo-web">Desarrollo Web</a></li>
                        <li><a href="/branding">Branding</a></li>
                        <li><a href="/packaging">Packaging</a></li>
                    </ul>
                </li>
                <li><a href="/portafolio">Portafolio</a></li>
                <li class="contacto"><a href="/contacto">Contacto</a></li>
            </ul>
        </nav>
            <nav class="menu-mobile">
                <figure>
                    <img src="/img/ellaphant-logo.svg" alt="Ellaphant Logo" onclick="window.location.href='/'">
                </figure>
                <div class="menu-toggle" @click="toggleMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <ul :class="{ 'open': isMenuOpen }">
                  <li><a href="/">Inicio</a></li>
                  <li><a href="/servicios">Servicios</a></li>
                  <li><a href="/desarrollo-web">Desarrollo Web</a></li>
                  <li><a href="/branding">Branding</a></li>
                  <li><a href="/redes-sociales">Redes</a></li>
                    <li><a href="/packaging">Packaging</a></li>
                  <li><a href="/portafolio">Portafolio</a></li>
                  <li><a href="/nosotros">Nosotros</a></li>
                  <li class="contacto"><a href="/contacto">Contacto</a></li>
                </ul>
              </nav>
</template>

<style scoped>
.menu-mobile{
    display: none;
}

.menu {
    z-index: 100;
    transform: translateX(150px);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    position: absolute;
    border-radius: 50px;
    top: 20px;
    padding: 0 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--seashell);
    width: 80%;
}
.menu ul li {
    padding: 5px 10px;
    position: relative;
}
.menu ul li a{
    color: var(--blue);
}
.menu ul .contacto a{
    color: #fff;
} 
.menu ul li .submenu li {
    margin: 0.5rem 0;
  }
  
  /* Enlaces dentro del submenú */
.menu ul li .submenu li a {
    text-decoration: none;
    font-family: var(--sec-font);
}
  
  /* Mostrar el submenú al hacer hover en "Servicios" */
.menu ul li.servicios:hover .submenu {
    display: flex;
}
.menu ul li .submenu {
    gap: 0;
    display: none;
    flex-direction: column;
    position: absolute; 
    top: 100%;
    left: 0; 
    background-color: var(--seashell);
    list-style: none;
    padding: 20px 1rem;
    margin: 0;
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}
.logo img {
    transform: translateY(5px);
}
.menu ul a {
    text-decoration: none;
    font-family: var(--sec-font);
}
.menu ul a:hover:not(.contacto a) {
    color: var(--brown);
    transition: background-color ease 0.8s;
}
.menu ul {    
    font-size: 1.2rem;
    display: flex;
    gap: 2rem;
    list-style: none;
    padding: 0.8rem 0;
}
.contacto{
    background-color: var(--blue);
    border-radius: 10px;
}
.contacto a{
    color: #fff;
}

.contacto:hover{
    background-color: var(--brown);
    transition: background-color ease 0.8s;
}
.logo:hover{
    cursor: pointer;
}

@media screen and (max-width: 768px) {
  .pc{
    display: none;
  }
  nav.menu-mobile {
    top: 10px;
    border-radius: 30px;
    transform: translateX(10px);
    position: absolute;
    margin: 1vh auto;
    background: var(--seashell);
    display: flex;
    align-items: center;
    font-weight: 500;
    width: 95vw;
    justify-content: space-around;
  }

  .menu-mobile ul {
    flex-direction: column;
    gap: 1vh;
  }

  .menu-mobile figure img{
    width: 120px;
  }

  nav ul .contacto {
    margin-top: 1vh;
  }

  .main-header {
    width: 90vw;
    margin: 5vh auto;
  }

  .main-header h1 {
    font-size: 2rem;
    line-height: 120%;
  }

  .main-header p {
    font-size: 0.95rem;
  }

  .main-header a {
    font-size: 0.95rem;
    max-width: 20rem;
    text-align: center;
  }

.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: var(--blue);
  margin-bottom: 5px;
  transition: 0.4s;
}

  nav.menu-mobile {
    justify-content: space-between;
    padding: 5px 10px;
  }

  .menu-toggle {
    display: flex;
  }

  .menu-mobile ul {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: var(--blue);
    flex-direction: column;
    padding: 20px 0;
  }

  .menu-mobile ul.open {
    display: flex;
    transform: translateY(-25px);
    border-end-end-radius: 30px;
    border-bottom-left-radius: 30px;
    text-align: center;
    width: 100%;
  }

  .menu-mobile ul li {
    margin: 10px 0;
  }
  .menu-mobile ul li a {
    color: #fff;
  }

  nav ul .contacto {
    border: none;
    box-shadow: none;
    background-color: transparent;
    margin-top: 10px;
  }
}
</style>