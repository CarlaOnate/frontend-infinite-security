import React , {useContext, useState} from "react";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import '../Estilos/IniciarSesion.css'
import {login} from '../services/axios/user.js'
import {UserContext} from '../context/userContext'
import { Button, Input } from "antd";

const IniciarSesion = () => {

    const [inputs, setInputs] = useState();
    const { setUser } = useContext(UserContext);
    const navigates = useNavigate()

    const handelInputs = (e, tipo) => {
        const {target} = e
        setInputs(prep => ({
            ...prep,
            [tipo]:target.value
        }))
    }

    const onClickLogin = () =>{
        const loginbody = {
            "email":inputs[1],
            "password":inputs[2]
        }

        login(loginbody).then(data => {
            setUser(prev =>({
                ...prev,
                id: data.user,
                rol: data.rol
            }))
            navigates('/');
        }).catch()
    }

    const navigate = useLocation()

    const paths = {
        Registrarse: navigate.pathname === '/Registrarse',
        RecuperarContra: navigate.pathname === '/RecuperarContra'
    }

    return(
        <div className="InicioSesionGeneral">
            
            <div className="Imagen">
                <img src="../Imagenes/InicioSesion.png" alt="Imagen Inicio Sesion"/>
            </div>

            <div className="CajasTexto">
                <div className="ContenedoresGenerales">

                    <div className="TitulosInicioSesion">
                        
                        <div className="TituloIniciarSesion">Inicia Sesión</div>

                        <div>
                            <NavLink to="/Registrarse" className={paths.Registrarse}> Registrarse </NavLink>
                        </div>

                    </div>
                    
                    <div className="CajasTextoInicioSesion">
                        <p>Correo: </p>
                        <Input onChange={(e) => handelInputs(e,1)} placeholder="Correo"/>
                        <p>Contraseña: </p>
                        <Input onChange={(e) => handelInputs(e,2)} placeholder="Contraseña" />
                    </div>

                    <div className="BotonLinkfinal">
                       <Button onClick={onClickLogin} className="CodigoPeque">Iniciar sesión</Button>
                        <div className="LinkContraseña">
                            <NavLink to="/RecuperarContra" className={paths.RecuperarContra}> Recuperar Contraseña </NavLink>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default IniciarSesion