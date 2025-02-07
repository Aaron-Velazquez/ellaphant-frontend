<template>
    <Menu/>
    <div class="redes-container">
        <div class="redes-header">
            <div class="header-text">
                <h1><img src="/img/icono-brillo-redes.svg" alt="Solcito"> Una nueva<br>forma de <img src="/img/flecha-icono1.svg" alt="Ícono de flecha"><br><b>conectar</b></h1>
                <p><b>Con nosotros tienes estrategias efectivas:</b> Llega a tu público objetivo con análisis detallados y con planificación.</p>
                <a href="#">ME INTERESA</a>
            </div>
            <figure>
                <img src="/img/redes-img-principal.webp" alt="Ellaphant mosaico de redes">
            </figure>
        </div>
        <div class="caracteristicas">
            <figure>
                <img src="/img/elefante.svg" alt="Ellaphant logo">
            </figure>
            <h2>Explora las principales características<br>y beneficios</h2>
            <p>Impulsamos tu estrategia en redes sociales</p>
            <div class="redes-cards">
                <div class="redes-card">
                    <img src="/img/tarjeta-creacion-contenido.svg" alt="Ícono creación de contenidos">
                    <span>Creación de contenidos</span>
                    <p>Diseñamos publicaciones creativas que reflejan la esencia de tu marca y conectan con tu público objetivo.</p>
                </div>
                <div class="redes-card">
                    <img src="/img/icono-pautas.svg" alt="Ícono Pautas Digitales Meta Ads">
                    <span>Pautas Digitales Meta Ads</span>
                    <p>Implementamos campañas estratégicas en redes para alcanzar más clientes y generar resultados.</p>
                </div>
                <div class="redes-card">
                    <img src="/img/icono-manejo.svg" alt="Ícono Manejo de Redes">
                    <span>Manejo de redes</span>
                    <p>Administramos tus perfiles con profesionalismo, asegurando contenido constante y de calidad.</p>
                </div>
                <div class="redes-card">
                    <img src="/img/icono-gestion.svg" alt="Ícono estrategia de contenidos">
                    <span>Gestión de comunidad</span>
                    <p>Interactuamos con tu audiencia para construir relaciones sólidas y generar fidelidad hacia tu marca.</p>
                </div>
            </div>
        </div>
</div>
<section class="contenido">
    <h2>Conecta con tu Audiencia a través de Contenido Impactante</h2>
    <p>Transformamos tus ideas en experiencias visuales y narrativas únicas que capturan la atención de tu público objetivo.</p>
    <div class="contenido-cards">
        <div class="contenido-card">
            <figure>
                <img src="/img/icono-fotografo.svg" alt="Cámara fotográfica">
            </figure>
            <div class="card-text">
                <span>Fotografía Profesional</span>
                <p>Fotos únicas para destacar tu marca.</p>
            </div>
        </div>
        <div class="contenido-card">
            <figure>
                <img src="/img/icono-reels.svg" alt="Película de cine">
            </figure>
            <div class="card-text">
                <span>Reels Optimizados</span>
                <p>Reels que capturan y convierten.</p>
            </div>
        </div>
        <div class="contenido-card">
            <figure>
                <img src="/img/icono-disenovisual.svg" alt="Archivo de diseño">
            </figure>
            <div class="card-text">
                <span>Diseño Visual</span>
                <p>Gráficos que cuentan tu historia.</p>
            </div>
        </div>
    </div>
</section>

<section class="ads">
    <figure class="ads-img">
        <img src="/img/img-publicidadconresultados.webp" alt="Equipo de Trabajo">
    </figure>
    <div class="ads-text">
        <h2>Publicidad con Resultados</h2>
        <p>Impulsa tu marca con campañas publicitarias efectivas que conectan con tu audiencia y generan resultados tangibles.</p>
        <div class="ads-cards">
            <div class="ads-card">
                <figure>
                <img src="/img/icono-configuracionprofesional.svg" alt="Configuración Profesional">
            </figure>
            <div class="card-text">
                <span>Configuración Profesional:</span>
                <p>Optimización de cuentas y creación de embudos personalizados.</p>
            </div>
            </div>
            <div class="ads-card">
                <figure>
                    <img src="/img/icono-publico-objetivo.svg" alt="Lupa sobre un objetivo">
                </figure>
                <div class="card-text">
                    <span>Definición de Público Objetivo:</span>
                    <p>Análisis detallado de tu Buyer Persona.</p>
                </div>
            </div>
            <div class="ads-card">
                <figure>
                    <img src="/img/icono-diseño-estrategico.svg" alt="Diseño de estrategia">
                </figure>
                <div class="card-text">
                    <span>Diseño estratégico</span>
                    <p>Textos persuasivos y gráficos impactantes adaptados a tu marca.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="redes-cta-container">
    <div class="redes-cta">
        <div class="redes-text">
            <h3>Creemos <b>la mejor experiencia</b><br> para tu negocio, juntos</h3>
            <a href="#">Habla con nuestro equipo</a>
        </div>
        <figure>
            <img src="/img/elefante.svg" alt="Ellaphant logo">
        </figure>
    </div>
</div>

</template>

<script setup>
import Menu from './Menu.vue'


</script>

<style scoped>
.redes-container{
    width: 100%;
    padding: 0.1px;
    background: radial-gradient(
        circle at 0% 0%, 
        rgba(100, 149, 237, 0.5),  /* azul claro */
        rgba(178, 210, 255, 0) 30%
      ),
      radial-gradient(
        circle at 100% 40%, 
        rgba(100, 149, 237, 0.5),  /* durazno claro */
        rgba(255, 217, 193, 0) 30%
      );
    /* Ajusta si deseas un fondo fijo al hacer scroll */
    background-attachment:initial;
    background-repeat: no-repeat;
    background-size: cover;
}
.redes-header{
    width: 80vw;
    margin: 15vh auto;
    gap: 5vw;
    justify-content: center;
    display: flex;
    align-items: center;
    color: var(--blue);
}
.redes-header figure{
    width: 30%;
}
.redes-header figure img{
    width: 100%;
}
.header-text{
    width: 500px;
}
.header-text h1 img{
    width: 50px;
}
.header-text > *{
    margin: 2vh 0;
}
.header-text h1{
    font-size: 4rem;
    font-family: var(--main-font);
}
.header-text a{
    display: inline-block;
    padding: 10px 15px;
    margin-top: 1vh;
    color: #fff;
    background-color: var(--light-blue);
    border-radius: 30px;
    font-size: 1.3rem;
    transition: opacity 0.3s;
}
.header-text a:hover{
    opacity: 0.9;
    transform: translateY(-1px);
}

.caracteristicas{
    display: flex;
    flex-direction: column;
    gap: 3vh;
    width: 80vw;
    color: var(--blue);
    margin: 10vh auto;
    font-size: 1.2rem;
}
.caracteristicas figure{
    width: 70px;
    height: 70px;
    background-color: var(--brown);
    border-radius: 100%;
}
.caracteristicas figure img{
    width: 100%;
    height: 100%;
}
.caracteristicas h2{
    font-size: 2.5rem;
    font-family: var(--main-font);
    background: linear-gradient(
        to right,
        var(--blue),
        var(--blue),
        var(--brown),
        var(--yellow),
        var(--yellow));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
}
.redes-cards{
    display: flex;
    gap: 10px;
}
.redes-card{
    font-size: 1rem;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 40px;
    box-shadow: 1px 3px 2px rgba(0, 0, 0, 0.2);
    color: var(--blue);
    border-radius: 30px;
    height: 400px;
}
.redes-card span{
    text-align: left;
    margin-top: 3.5rem;
    font-size: 1.2rem;
    font-weight: 700;
}
.redes-card p{
    text-align: left;
    width: 170px;
}
.redes-card img{
    width: 40px;
}
.redes-cards div:nth-child(2){
    color: #fff;
    background-color: var(--blue);
}
.contenido{
    width: 80vw;
    margin: 10vh auto;
    padding: 10vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
    color: var(--blue);
    font-size: 1.2rem;
}
.contenido h2{
    font-size: 2.5rem;
    font-family: var(--main-font);
}
.contenido p{
    width: 70%;
    text-align: center;
}
.contenido-cards{
    display: flex;
    margin-top: 3vh;
    gap: 1vw;
    justify-content: center;
}
.contenido-card{
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 1vw;
    border-radius: 30px;
    padding: 20px;
    background: var(--light-blue);
    color: #fff;
}
.card-text{
    display: flex;
    flex-direction: column;
    gap: 1vh;
}
.card-text p{
    text-align: left;
}
.contenido-card figure img{
    width: 100%;
    height: 100%;
    padding: 7px;
}
.contenido-card figure{
    width: 50px;
    border-radius: 12px;
}
.contenido-cards div:nth-child(1) figure, .contenido-cards div:nth-child(3) figure{
    background-color: var(--brown);
}
.contenido-cards div:nth-child(2) figure{
    background: var(--yellow);   
}

.ads{
    width: 80vw;
    margin: 10vh auto;
    display: flex;
    gap: 2vw;
    color: var(--blue);
    font-size: 1.1rem;
}
.ads .ads-img{
    width: 40%;
}
.ads .ads-img img{
    width: 100%;
}
.ads-text{
    display: flex;
    gap: 1vh;
    flex-direction: column;
}
.ads-text h2{
    font-size: 2rem;
    font-weight: 600;
    font-family: var(--main-font);
}
.ads-card figure{
    width: 70px;
}
.ads-card figure img{
    width: 100%;
}
.ads-cards{
    margin: 3vh 0;
    display: flex;
    flex-direction: column;
    gap: 1vw;
    justify-content: center;
}
.ads-card{
    display: flex;
    gap: 1vw;
    align-items: center;
}
.ads-text span{
    text-align: left;
    font-weight: 600;
    font-size: 1.2rem;
}
.redes-cta-container{
    margin: 5vh 0;
    width: 100%;
    background: var(--brown);
    color: #fff;
    padding: 40px 0;
}
.redes-cta{
    display: flex;
    width: 80vw;
    justify-content: center;
    margin: auto;
}
.redes-text h3{
    font-size: 2.5rem;
    font-family: var(--main-font);
    width: 730px;
}
.redes-text h3 b{
    font-weight: 400;
    font-family: var(--sec-font);
}
.redes-text a{
    display: inline-block;
    padding: 10px 15px;
    margin-top: 2vh;
    color: #fff;
    background-color: var(--blue);
    border-radius: 30px;
    font-size: 1.3rem;
    transition: background-color ease-in-out 0.3s;
}
.redes-text a:hover{
    background-color: var(--light-blue);
    transform: translateY(-1px);
}

@media screen and (max-width: 765px){
    .redes-header{
        flex-direction: column;
        gap: 5vh;
    }
    .header-text{
        width: 100%;
    }
    .header-text h1{
        font-size: 3rem;
    }
    .header-text p{
        font-size: 1rem;
    }
    .header-text a{
        font-size: 1.1rem;
    }
    .redes-header figure{
        display: none;
    }
    .caracteristicas{
        width: 90vw;
    }
    .caracteristicas h2{
        font-size: 2rem;
        background: linear-gradient(
            to right,
            var(--blue),
            var(--blue),
            var(--blue),
            var(--brown),
            var(--yellow));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
    }
    .redes-cards{
        flex-direction: column;
        gap: 5vh;
        align-items: center;
    }
    .redes-card{
        width: 300px;
    }
    .redes-card span{
        margin-top: 2rem;
    }
    .contenido{
        width: 90vw;
    }
    .contenido h2{
        font-size: 2rem;
        text-align: center;
    }
    .contenido p{
        width: 90%;
    }
    .contenido-cards{
        flex-direction: column;
        align-items: center;
        gap: 5vh;
    }
    .contenido-card{
        width: 90%;
    }
    .contenido-card figure{
        width: 60px;
    }
    .contenido-card figure img{
        width: 100%;
    }
    .ads{
        flex-direction: column;
        gap: 5vh;
    }
    .ads .ads-img{
        width: 100%;
    }
    .ads-text h2{
        font-size: 1.8rem;
    }
    .ads-text{
        font-size: 1rem;
    }
    .ads-cards{
        gap: 5vh;
    }
    .ads-card{
        width: 100%;
    }
    .card-text{
        font-size: 1rem;
        width: 90%;
    }
    .ads-card figure{
        width: 60px;
    }
    .redes-cta-container{
        width: 100%;
    }
    .redes-cta{
        flex-direction: column;
        gap: 5vh;
    }
    .redes-cta figure{
        display: none;
    }
    .redes-text h3{
        font-size: 1.8rem;
        width: 90%;
    }
    .redes-text a{
        font-size: 1.1rem;
    }
}

</style>