import React from "react";
import  "bootstrap/dist/css/bootstrap.min.css";
import "../estilos/Footer.css"
import { Link } from "react-router-dom";

function Year(){
    let year = new Date().getFullYear();
    return year
}
let _year = Year()
function Footer(){
    return(
        <>
            <footer>

                <div class="container section-bg mt-5">
                    <div class="row d-flex justify-content-between">
                        <div class="col-xl-3 col-lg-4 col-md-5 col-sm-8">
                            <p class="info1">
                               “Proporcionar Educación Superior Tecnológica a través de programas intensivos de estudio, pertinentes e integrales, acordes a los avances científicos y tecnológicos para formar profesionistas competitivos con sentido humano, que fortalezcan los procesos de los sectores productivo y de servicios a nivel regional y nacional que coadyuven al desarrollo social.”
                            </p>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                            <div class="footer-tittle">
                               <h4>Páginas</h4>
                                <ul>
                                    <li><Link to="/">Inicio</Link></li>
                                    <li><Link to="/Descubre">Descubre</Link></li>
                                    <li><Link to="/Autoevaluacion">Autoevaluación</Link></li>
                                    <li><Link to="/CanalYoutube">Canal de Youtube</Link></li>
                                    <li><Link to="Contacto">Contacto</Link></li>
                                </ul>
                            </div>
                        </div>
                            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-5">
                                <h4>Explorar</h4>
                                <ul>
                                    <li><a href="">Cookies</a></li>
                                    <li><a href="">Politicas de privacidad</a></li>
                                </ul>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-8">
                                <h4>Nosotros</h4>
                                <p>Comunícate con los cuerpos académicos encargados para resolver alguna situación.</p>
                                <h4><span id="correos">Correos</span> <span id="electronicos">electrónicos</span></h4>
                                <p>cuestionario@utpuebla.edu.mx<br/>
                                   cuerpoacademico1@utpuebla.edu.mx<br/>
                                   cuerpoacademico2@utpuebla.edu.mx
                                </p>
                            </div>
                    </div>
                    <hr></hr>
                    <div id="footer-bottom">
                        <div class="row d-flex justify-content-between align-items-center">
                            <div class="col-xl-9 col-lg-8">
                                <p>        
                                    Universidad Tecnológica de Puebla &copy;  {_year } Todos los derechos reservados | <a href="creditos.html">Créditos</a> &nbsp;
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                </p>
                            </div>
                            <div class="col-xl-3 col-lg-4">
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fas fa-globe"></i>
                                    </a>
                                    <a href="#">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;