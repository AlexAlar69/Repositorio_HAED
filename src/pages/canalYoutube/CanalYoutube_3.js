import React from "react";
import "../../estilos/Pages.css"
import "../../estilos/CanalYoutube.css";
import { Link } from "react-router-dom";

function CanalYT3(){
    return(
        <>
            <div class="bar">
                <div class="container">
                    <h1>Canal de YouTube</h1>
                </div>
            </div>
            <div className="container content" id="content1">
                <div className="row">
                    <div className="col-sm-12 col-md-4 order-2 order-sm-2 order-md-1">
                        <div className="Ratio Ratio-16x9">
                            <iframe  allowfullscreen="true" src="https://www.youtube.com/embed/d-z_w_Z9aHI" title="Diferencia entre capacitación, actualización y formación docente" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 order-3 order-sm-3 order-md-2">
                        <h2>La formación docente a través de la práctica reflexiva</h2>
                        <h3>Dalia Rojas * 2020-11-20</h3>
                        <p>La formación para la práctica reflexiva en las prácticas profesionales docentes.</p>
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
                                    <iframe  allowfullscreen="true" src="https://www.youtube.com/embed/1m13aMT4xEI" title="¿Qué es la Formación Docente? | Pedagogía MX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                </div>                               
                            </div>
                            <div class="col-sm-12 col-md">
                                <h2>La reflexión en la práctica docente</h2>
                                <h3>Ojo con la lengua * 2016-06-14</h3>
                                <p>Trabajo basado en el libro REFLEXIONAR LA PRÁCTICA REFLEXIVA EN EL OFICIO DE ENSEÑAR, de Philippe Perrenoud.</p>
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
                                    <iframe  allowfullscreen="true" src="https://www.youtube.com/embed/b8mjVi2Bq-o" title="Elementos para la mejora de la práctica docente" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md">
                                <h2>LOS RASGOS DE UNA PRACTICA REFLEXIVA SEGÚN PERRENOUD</h2>
                                <h3>Rubén Jaramillo * 2012-07-03</h3>
                                <p>Rasgos de una práctica reflexiva.</p>
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
                                    <iframe  allowfullscreen="true" src="https://www.youtube.com/embed/y6TzvbP8ekc" title="Elementos para la mejora de la práctica docente" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md">
                                <h2>Rebeca Anijovich Práctica Reflexiva</h2>
                                <h3>Instituto Nacional de Formación Docente * 2018-10-02</h3>
                                <p>Práctica reflexiva: concepto para profundizar en la formación docente.</p>
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
                                    <iframe  allowfullscreen="true" src="https://www.youtube.com/embed/mI9kSPBl_6Q" title="Elementos para la mejora de la práctica docente" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md">
                                <h2>Pirámide de Miller</h2>
                                <h3>SECISS * 0000-00-00</h3>
                                <p>Importancia de la Prámide de Miller para la estructuración de la evaluación.</p>
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
                    <Link id="anterior" to="/CanalYoutube/2">Anterior</Link><br/><br/>
                </div>
                
            </div>
            
            
        </>
    );
}
export default CanalYT3









