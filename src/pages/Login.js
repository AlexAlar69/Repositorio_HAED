import React, { useState,useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
import "../estilos/Login.css";
import "../estilos/Pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LOGIN_URL = '/login';

function Login()  {
    const { setAuth } = useAuth();
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    //const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email,password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email:email, password:password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: false
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            
            setAuth({email:email , password:password, token:accessToken });
            setEmail('');
            setPassword('');
            navigate("/Descubre");
        } catch (err){
            if(!err?.response)
            {
                setErrMsg('Sin respuesta del servidor')
            }
            else if(err.response?.status === 400 )
            {
                setErrMsg('Email o contraseña son incorrectos');
            }
            else if (err.response?.status === 401)
            {
                setErrMsg('No autorizado')
            }
            else
            {
                setErrMsg('Error en el inicio de sesión')
            }
            errRef.current.focus();
        }
    }



    /*const handlerSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post(LOGIN_URL,
                JSON.stringify(email,password),
                {
                    headers:{'Content-Type':'application/json'},
                    withCredentials: false
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accesToken = response?.data?.accesToken;
            setAuth({email, password, accesToken})
            setEmail('');
            setPassword('');
            setSuccess(true);
        }
        catch (err){
            if(!err?.response)
            {
                setErrMsg('Sin respuesta del servidor')
            }
            else if(err.response?.status === 400 )
            {
                setErrMsg('Email o contraseña son incorrectos');
            }
            else if (err.response?.status === 401)
            {
                setErrMsg('No autorizado')
            }
            else
            {
                setErrMsg('Error en el inicio de sesión')
            }
            errRef.current.focus();
        }
        
    }
    */


    const [ojos,setOjos]=useState(faEye)
    const SeePassword=()=>{
        let pass = document.getElementById("myPassword");
        if(pass.type==="password"){
            pass.type="text";
            setOjos(faEyeSlash);        
        }
        else if(pass.type==="text"){
            pass.type="password";
            setOjos(faEye);
        }
        
    }
    return(        
    //?succes : 
    <>
    
        <div class="bar">
                        <div class="container">
                            <h1>Iniciar Sesión</h1>
                        </div>
                    </div><div class="container" id="log_sign">
                            <div class="row">
                                <div class="col-sm-12 col-md-6 sign">
                                    <h2>¿No tienes una cuenta?</h2>
                                    <p>Para poder contestar la Autoevaluación es necesario tener una cuenta de usuario, si aún no la tiene, de clic en el botón de Crear cuenta.</p>
                                    <button>CREAR CUENTA</button>
                                </div>
                                <div class="col-sm-12 col-md-6 login">

                                    <h2>Bienvenido</h2>
                                    <h3>Iniciar sesión ahora</h3>
                                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg} </p>
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            type={"text"}
                                            required
                                            placeholder="Ingrese su Correo Electrónico"
                                            ref={userRef}
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email} />
                                        <br />
                                        <input
                                            id="myPassword"
                                            required
                                            type={"password"}
                                            placeholder="Ingrese su contraseña"
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password} />
                                      
                                        <button id="ingresar">INGRESAR</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                           
                        </>
     
    )
}

export default Login

