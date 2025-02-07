<template>
    <Menu/>
    <div class="header-container">
        <span>Bienvenido a nuestro<br></span>
        <h1><img class="atras" src="/img/carpeta-atras.svg" alt="icono-portafolio"> Portafolio <img class="frente" src="/img/carpeta-frente.svg" alt="icono-portafolio"></h1>
    </div>
    <div class="trabajos">
        <span>Servicios</span>
        <h2>Algunos de<br>Nuestros trabajos</h2>
        <div class="line">
        </div>
        
    </div>
</template>

<script setup>
import Menu from './Menu.vue'


</script>

<style scoped>

.header-container{
    width: 70vw;
    margin: 150px auto;
    text-align: center;
    color: var(--blue);
}
.header-container span{
    font-size: 2.3rem;
    font-family: var(--sec-font);
}
.header-container h1{
    z-index: 10;
    font-size: 8.5rem;
    position: relative;
}
.header-container .atras{
    position: absolute;
    top: 80px;
    right: 40%;
    z-index: -1;
    width: 200px;
}
.header-container .frente{
    position: absolute;
    top: 110px;
    right: 40%;
    z-index: 100;
    width: 200px;
}
.trabajos{
    width: 80vw;
    margin: 200px auto;
    color: var(--blue);
}
.trabajos span{
    font-size: 1.5rem;
    font-family: var(--sec-font);
}
.trabajos h2{
    font-size: 2.5rem;
    margin-top: 10px;
    text-transform: uppercase;
    font-weight: 700;
    font-family: var(--main-font);
}
.line{
    width: 100%;
    height: 1px;
    background-color: #ccc;
    margin-top: 50px;
}


</style>