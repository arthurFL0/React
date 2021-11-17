import './style.scss'

const SectionOne = () => {
    return (
        <>
            <section class="py-5 text-center container-fluid" id="banner-gradiente">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto bannermain-holder">
                        <h3 class="fw-light bmvindo-text">Bem-vindo ao meu portifolio!</h3>
                        <p class="lead">Espero que goste do que você encontrar aqui</p>
                        <a href="#ref-1"><img src="images/arrow.png" class="arrow-img" alt="seta"></img></a>
                    </div>
                </div>
            </section>
            <section class="py-5 section-one" id="ref-1">
                <div class="container">
                    <div class="container-fluid d-flex flex-column section-eu">
                        <h2>Sobre mim</h2>
                        <div class="row one-container">
                            <div class="col row foto-container">
                                <img class="foto" src="images/foto.jpg"></img>
                                <div class="desc-holder col-lg-8">
                                    <p>Olá, meu nome é Arthur, atualmente tenho 19 anos e comecei a aprender a programar lá pela metade de
                                        2021, por meio do curso "Certified Tech Developer", oferecido pela Digital house. Desde então, por meio do curso, eu venho aprendendo sobre um gama de assuntos relacionados ao desenvolvimento web, como HTML, CSS, JS, React, Java e Spring.</p>
                                </div>
                                <div class="col-lg-2 contato-holder">
                                    <a href="https://github.com/arthurFL0"><img src="images/giticon.png" class="link-icon"></img></a>
                                    <a href="https://www.linkedin.com/in/arthur-ferreira-84b763203/"><img src="images/linkedin.png" class="link-icon"></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionOne;



//<div class="col-8 row foto-container">
//    <img class="foto col-4 col-xl-6 col-lg-12" src="images/foto.jpg"></img>
//    <div class="desc-holder col-xl">
//        <p>Olá, meu nome é Arthur, atualmente tenho 19 anos e comecei a aprender a programar lá pela metade de
//            2021, por meio do curso "Certified Tech Developer", oferecido pela Digital house.</p>
//    </div>
//</div>