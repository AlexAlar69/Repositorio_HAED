import React from "react";
import "../../estilos/Pages.css"
import "../../estilos/CanalYoutube.css";
import { Link } from "react-router-dom";

function CanalYT2(){
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
                            <iframe  allowfullscreen="true" src="https://www.youtube.com/embed/XWdkvW5QPjo" title="Diferencia entre capacitación, actualización y formación docente" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 order-3 order-sm-3 order-md-2">
                        <h2>Dimensiones de la práctica docente</h2>
                        <h3>Jessica Jeanette Guerra Ceballos y Polett Jácome Rivera * 2015-11-11</h3>
                        <p>Este vídeo fue elaboradopor Jessica Jeanette Guerra Ceballos y Polett Jácome Rivera en la Experiencia Educativa
                             "Análisis de la Práctica Docente" el tema abordado son las Dimensiones de la Práctica Docente, el cual explica 
                             las relaciones implicadas con la docencia, estudiando los elementos que se integran con ésta en los diferentes 
                             contextos, describiendo las dimensiones: Personal, Institucional, Interpersonal, Social, Didáctica y Valoral..</p>
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
                                    <iframe  allowfullscreen="true" src="https://www.youtube.com/embed/MeVlba8fw1w" title="¿Qué es la Formación Docente? | Pedagogía MX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                </div>                               
                            </div>
                            <div class="col-sm-12 col-md">
                                <h2>Dimensión social Cecilia Fierro</h2>
                                <h3>Ulises Pano * 2019-11-11</h3>
                                <p>La dimensión social como se desenvuelve y características de un docente en el ámbito educativo para un aprendizaje y enseñanza mas satisfactorio..</p>
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
                                    <iframe  allowfullscreen="true" src="https://www.youtube.com/embed/khz6Qwc2_2I" title="Elementos para la mejora de la práctica docente" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md">
                                <h2>LAS DIMENSIONES DE LA PRÁCTICA DOCENTE</h2>
                                <h3>Karen Molina * 2017-01-03 </h3>
                                <p>La práctica docente trasciende en una conceptción técnica del rol de profesor y su grupos sociales particulares..</p>
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
                                    <iframe  allowfullscreen="true" src="https://www.youtube.com/embed/7juHPDHKV38" title="Elementos para la mejora de la práctica docente" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md">
                                <h2>Dimensiones de la práctica docente</h2>
                                <h3>María Fernanda Fernández del Ángel * 2017-04-09 </h3>
                                <p>La práctica docente.</p>
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
                                <h2>La construcción de una práctica reflexiva</h2>
                                <h3>Facultad de Educación PUCP * 2018-09-13</h3>
                                <p>Dra. Liliana Sanjurjo comenta sobre la importancia de cambiar nuestro enfoque en la formación inicial, y mirarla desde la reflexión de la práctica pedagógica.</p>
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
                <Link id="anterior" to="/CanalYoutube">Anterior</Link>
                <Link id="siguiente" to="/CanalYoutube/3">Siguiente</Link><br/><br/>
                </div>
            
                
            </div>
            
        </>
    );
}
export default CanalYT2











