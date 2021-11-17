import './style.scss'

const Footer = () => {
    return (
        <footer class="text-center text-white">
            <div class="container ft-container mb-4">
                <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="mailto:arthurlacerda206@gmail.com" role="button" data-mdb-ripple-color="dark">
                    <img src="images/o-email.png"></img>
                </a>
                <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/arthurFL0" role="button" data-mdb-ripple-color="dark">
                    <img src="images/giticon.png"></img>
                </a>
                <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.linkedin.com/in/arthur-ferreira-84b763203/" role="button" data-mdb-ripple-color="dark">
                    <img src="images/logotipo-do-linkedin.png"></img>
                </a>
            </div>
            <div class="container ft-container-2 text-muted">
                <p>arthurlacerda206@gmail.com</p>    
            </div>    
        </footer>
    )
}

export default Footer;