<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="mail">
                <h3>¿Querés saber más?<br>Déjanos tu email</h3>
                <form action="">
                    <input type="email" placeholder="Ingresa tu correo electrónico">
                    <button type="submit"><img src="/img/flecha.svg" alt="Flecha"></button>
                </form>
            </div>
            <div class="enlaces">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Portafolio</a></li>
                    <li><a href="#">Nosotros</a></li>
                </ul>
                <div class="contacto">
                    <span>Email</span>
                    <a href="mailto:contacto@ellaphantpy.com">contacto@ellaphantpy.com</a>
                    <span>Teléfono</span>
                    <a href="tel:+595974500835">+595974500835</a>
                </div>
                <div class="redes">
                    <img src="/img/facebook.svg" alt="Facebook Ellaphant">
                    <img src="/img/tiktok.svg" alt="Tiktok Ellaphant">
                    <img src="/img/instagram.svg" alt="Instagram Ellaphant">
                    <img src="/img/whatsapp.svg" alt="Whatsapp Ellaphant">
                </div>
            </div>
            <img src="/img/elefante.svg" alt="Ellaphant Isologo">
        </div>
    </footer>
    <div class="developer">
        <p>Desarrollado por <a href="https://conversa.com.py" target="_blank">conversa.com.py</a></p>
    </div>

</template>

<script>

</script>

<style scoped>

footer {
    background-color: var(--blue);
    color: #fff;
}

footer a{
    color: #fff;
    text-decoration: none;
}

.footer-container {
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
    max-width: 1200px;
    margin: 0 auto;
}
.mail{
   display: flex;
   flex-direction: column;
    gap: 50px;
    font-size: 1.6rem;
    text-transform: uppercase;
}
.mail h3{
    font-family: var(--main-font);
}
.mail form{
    display: flex;
    gap: 10px;
}
.mail form input{
    padding: 10px;
    font-size: 1.2rem;
    width: 100%;
    border: none;
    background-color: transparent;
    color: #fff;
    border-bottom: #fff 2px solid;
}
.mail form button{
    background-color: transparent;
    border: none;
    cursor: pointer;
}
.mail form input::placeholder{
    color: #eee;
    border: none;
}
.mail form input:focus{
    outline: none;
}
.enlaces{
    display: grid;
    font-size: 1.2rem;
    grid-template-columns: repeat(2, 200px);
    gap: 50px;
}
.enlaces ul{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.enlaces .contacto{
    display: flex;
    gap: 10px;
    flex-direction: column;
}
.enlaces .contacto a{
    font-weight: 300;
}
.redes{
    display: flex;
    gap: 10px;
}
.redes img{
    width: 60px;
}
.redes img:hover{
    transform: scale(1.1);
    cursor: pointer;
}
.footer-container img:last-child:not(.redes img, .mail img){
    width: 120px;
    transform: translateY(30px);
}
.developer{
    background-color: var(--seashell);
    color: var(--blue);
    text-align: center;
    padding: 10px 0;
}
.developer a{
    color: var(--blue);
    text-decoration: none;
}
.developer a:hover{
    text-decoration: underline;
}
@media screen and (max-width: 768px) {
    .footer-container {
        flex-direction: column;
        gap: 50px;
    }
    .enlaces{
        grid-template-columns: 1fr;
    }
    .enlaces ul{
        gap: 20px;
    }
    .mail{
        font-size: 1.4rem;
        align-items: center;
        text-align: center;
    }
    .mail form{
        gap: 20px;
    }
    .mail form input{
        width: 230px;
    }
    .mail form input::placeholder{
        font-size: 1rem;
    }
    .enlaces{
        font-size: 1.1rem;
        text-align: center;
    }
    .redes{
        justify-content: center;
    }
    .redes img{
        width: 50px;
    }
    .footer-container img:last-child:not(.redes img, .mail img){
        width: 80px;
        margin: auto;
        transform: translateY(0);
    }
}
</style>