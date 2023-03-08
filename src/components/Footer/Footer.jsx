import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'


function Footer() {
    return (

        <footer className="bg-dark text-center text-white min-vh-15" id='footer'>
            <div className="container p-6 pb-1">
                <section>
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-4">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                                Acerca del proyecto
                            </h6>
                            <p className='ft'>
                                Proyecto de practica realizado en React,Bootstrap,llamando a la API con Axios The Movie Data Base -https://www.themoviedb.org/-
                                ruteado con React-Router-Dom
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-4">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Otros Proyectos</h6>
                            <p className='fm'>
                                <a>CatitoStore</a>
                            </p>
                            <p className='fm'>
                                <a>MockUp Mercado Libre</a>
                            </p>
                            <p className='fm'>
                                <a>GameStore</a>
                            </p>
                            <p className='fm'>
                                <a>Portfolio Completo</a>
                            </p>
                        </div>
                        <hr className="w-100 clearfix d-md-none" />
                        <hr className="w-100 clearfix d-md-none" />


                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-4">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
                            <p className='ft'><a className='fm' href="mailto:ivan.palachuk@outlook.com?Subject=Me%20gustaria%20ponerme%20en%20contacto%20contigo">Contactar por E-mail</a></p>
                            <p className='ft'><i className="fas fa-phone mr-3"></i>+54 9 2235251836 <a className="btn btn-outline-light btn-floating m-1" href="https://api.whatsapp.com/send?phone=5492235251836" role="button" target="_blank">
                                <FontAwesomeIcon icon={faWhatsapp} /></a></p>
                            <p className='ft'><i className="fas fa-home mr-3"></i> Mar del plata, 7600, Argentina</p>
                            
                        </div>



                        <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-4">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Seguime!</h6>

                            <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/ivan.palachuk/" role="button" target="_blank">
                                <FontAwesomeIcon icon={faFacebook} /></a>

                            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} /></a>

                            <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/ivanpalachuk/" role="button" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} /></a>


                            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/ivan-palachuk-frontend/" role="button" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} /></a>


                            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/ivanpalachuk" role="button" target="_blank">
                                <FontAwesomeIcon icon={faGithub} /></a>
                            <p><i className="fas fa-home mr-3"></i><a href="https://drive.google.com/file/d/1T3bdU2kJAMnyra3hF6Bihw-H_J5f-fK5/view?usp=share_link" download target="_blank">
                                <button className='btn btn-outline-light btn-floating m-1'>Descargar CV</button>
                            </a></p>

                        </div>
                    </div>
                </section>


                <div className="text-center p-3 mt-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2023 Copyright:
                    <a className="text-white" href="https://github.com/ivanpalachuk">  Zarseven</a>
                </div>

            </div>


        </footer>

    );
}

export default Footer;



<div className="container p-4 pb-0">
    <section className="mb-4">








    </section>
</div>
