import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { faContactCard} from '@fortawesome/free-solid-svg-icons';


import "../estilos/Contacto.css";

export default function Contacto() {
    return (
      <>
      <div class="slider-area2">
                <div class="slider-height2 hero-overly2 d-flex align-items-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="hero-cap hero-cap2 text-center">
                                    <h2>Contáctanos</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="section contact-info mt-5 mb-5 pb-0">
                <div class="container">
                     <div class="row">
                        <div class="col-lg-4 col-sm-6 col-md-6">
                            <div class="contact-block mb-4 mb-lg-0">
                            <FontAwesomeIcon icon={faUserCircle} style={{color: "#104141",}} id="telefono"/>
                                <h5>Teléfono</h5>
                                 +52-222-598-9854
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-md-6">
                            <div class="contact-block mb-4 mb-lg-0">
                            <FontAwesomeIcon icon={faContactCard} style={{color: "#104141",}} id="correo"/>
                                <h5>Email</h5>
                                cuestionario@utpuebla.edu.mx<br/>
                                cuerpoacademico1@utpuebla.edu.mx<br/>
                                cuerpoacademico2@utpuebla.edu.mx
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-md-6">
                            <div class="contact-block mb-4 mb-lg-0">
                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#104141",}}
                            id="ubicacion" />
                                <h5>Ubicación</h5>
                                Antiguo Camino a La Resurrección 1002 - A, Zona Industrial, 72300 Puebla, Pue.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="contact-form-wrap section">
                <div class="container">
                    <div class="row justify-content-center">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <form id="formContacto" class="contact__form " method="post">
            
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input name="nombreContacto" id="nombreContacto" required="" type="text" class="form-control" placeholder="Ingrese su nombre completo"/>
                                        </div>
                                    </div>
            
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input name="emailContacto" id="emailContacto" required="" type="email" class="form-control" placeholder="Ingrese su correo electrónico"/>
                                        </div>
                                    </div>
                                     <div class="col-lg-6">
                                        <div class="form-group">
                                            <input name="asuntoContacto" id="asuntoContacto" required="" type="text" class="form-control" placeholder="Ingrese el asunto a tratar"/>
                                        </div>
                                    </div>
                                     <div class="col-lg-6">
                                        <div class="form-group">
                                            <input name="telefonoContacto" id="telefonoContacto" required="" type="text" class="form-control" placeholder="Ingrese su número de teléfono"/>
                                        </div>
                                    </div>
                                </div>
            
                                <div class="form-group-2 mb-4">
                                    <textarea name="mensajeContacto" id="mensajeContacto" required="" class="form-control" rows="8" placeholder="Ingrese su mensaje"></textarea>
                                </div>
            
                                <div class="text-center">
                                    <input class=" btn-main btn-round-full" type="submit" value="Enviar mensaje"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="google-map mt-5">
                <div id="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!4v1627029075873!6m8!1m7!1sCAoSLEFGMVFpcE95V1hkb2U0N2N6R0RmS0ZEUENUX24wd2J2T2R2b2Zzb1ZHc2RF!2m2!1d19.05823776731109!2d-98.15246838088497!3f5.527456949759525!4f-6.876625275937911!5f0.7820865974627469"></iframe>
                </div>
            </div>

            
      </>
    )
}