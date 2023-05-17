import React from "react";
import "../../estilos/Pages.css"
import "../../estilos/CanalYoutube.css";
import CanalYT2 from "./CanalYoutube_2";
import CanalYT3 from "./CanalYoutube_3";
import { Link } from "react-router-dom";

function CanalYT_Start(){
    return(
        <>
            <div class="bar">
                <div class="container">
                    <h1>Canal de YouTube</h1>
                </div>
            </div>
            <div className="container content">
                <div className="row">
                    <div className="col-sm-12 col-md-4 order-2 order-sm-2 order-md-1">
                        <div className="Ratio Ratio-16x9">
                            <iframe  allowfullscreen="true" src="https://www.youtube.com/embed/imPgvFvxW0U" title="Diferencia entre capacitación, actualización y formación docente" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 order-3 order-sm-3 order-md-2">
                        <h2>Diferencia entre capacitación, actualización y formación docente</h2>
                        <h3>Centro FORINDO * 2019-02-14</h3>
                        <p>Comprendamos que el estudio prospectivo y el análisis del quehacer en la práctica educativa es necesaria, pero para ello se requiere tener una reestructuración teórica y práctica de las situaciones de aprendizaje, de la coexistencia social académica y de los procesos de integración epistémica necesarios para la incorporación de nuevos conocimientos y una transición hacía los niveles escolares superiores, así como crear conciencia sobre las necesidades del mercado laboral y a las expectativas de la globalización económica a los que se enfrentan los estudiantes en general..</p>
                    </div>
                    <div className="col-sm-12 col-md-4 order-1 order-sm-1 order-md-3">
                        <div className="searchBox">
                            <h1>Buscar Video</h1>
                            <input type="text" id="inputSearch" placeholer="Nombre del video"></input>
                            <button id="search">Buscar</button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-8">
                        <hr/>
                        <br/>
                        <div class="row">
                            <div class="col-sm-12 col-md">
                                <div className="Ratio Ratio-16x9">
                                    <iframe  allowfullscreen="true" src="https://www.youtube.com/embed/f-uDasHc2WQ" title="¿Qué es la Formación Docente? | Pedagogía MX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                </div>                               
                            </div>
                            <div class="col-sm-12 col-md">
                                <h2>¿Qué es la Formación Docente? | Pedagogía MX</h2>
                                <h3>Pedagogía MX * 2020-09-06</h3>
                                <p>Formación docente..</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-8">
                        <hr/>
                        <br/>
                        <div class="row">
                            <div class="col-sm-12 col-md">
                                <div class="Ratio Ratio-16x9">
                                    <iframe  allowfullscreen="true" src="https://www.youtube.com/embed/QGwVOD-MXTw" title="Elementos para la mejora de la práctica docente" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md">
                                <h2>Elementos para la mejora de la práctica docente</h2>
                                <h3>Mary Paz Barron, Rocío Sereno, <br/> Eloisa Yañez y Socorro González </h3>
                                <p>Videoconferencia como herramienta educativa para la mejora del proceso de enseñanza y aprendizaje para la práctica docente..</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-8">
                        <hr/>
                        <br/>
                        <div class="row">
                        <div class="col-sm-12 col-md">
                                <div class="Ratio Ratio-16x9">
                                    <iframe  allowfullscreen="true" src="https://www.youtube.com/embed/oDRkYcJZTtY" title="Elementos para la mejora de la práctica docente" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md">
                                <h2>AUTOEVALUACIÓN DOCENTE | Alma Montessori</h2>
                                <h3>Alma Montessori * 2020-07-08 </h3>
                                <p>El fin del curso hace que todos los profesores y maestros tengan que sentarse en sus sillas para evaluar a su alumnado. Pero, ¿tú te realizas cada curso tu propia autoevaluación docente? Es necesario evaluar a los niños para ver los progresos que hacen desde el inicio del año hasta el fin del curso escolar. Pero también es súper importante hacernos una autoevaluación docente, para ver cómo hemos evolucionado durante el curso escolar, tanto a nivel personal como profesional..</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-8">
                        <hr/>
                        <br/>
                        <div class="row">
                        <div class="col-sm-12 col-md">
                                <div class="Ratio Ratio-16x9">
                                    <iframe  allowfullscreen="true" src="https://www.youtube.com/embed/IHknCfkMht0" title="Elementos para la mejora de la práctica docente" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md">
                                <h2>Dimensiones de la práctica Docente - Cecilia Fierro</h2>
                                <h3>Benemérita Escuela Nacional de Maestros * 2014-08-26</h3>
                                <p>Cortometraje que explica brevemente la importancia de las dimensiones de la práctica docente, de manera entretenida y basada en un sustento teórico. Filmado y dirigido por alumnos de la Benemérita Escuela Nacional de Maestros. Esperamos sea de su agrado y aporte a su investigación..</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-8">
                        <hr/>
                        <br/>
                    </div>
                </div>
                


                <div>                
                    <Link id="siguiente" to="/CanalYoutube/2">Siguiente</Link><br/><br/>
                </div>


            </div>    
            
        </>
    );
}
export default CanalYT_Start