import React, { useContext } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { UserContext } from './context/userContext'

import Contra from './pages/cambiarContra';
import { Navbar } from './components/navbar/Navbar';
import Pantallaprincipal from './pages/pantallaPrincipal';
import Reservas from './pages/Reserves';
import Registrarse from './pages/Registrarse';
import IniciarSesion from './pages/IniciarSesion';
// import RegistrarseCodigo from './components/RegistrarseCodigo';

import RecoverPasswordImage from './images/recoverPassword.png';

import { Stats } from './pages/statistics/Stats';
import { HistorialReservas } from './pages/reservesHistory/ReservesHistory';
import HacerReservas from './pages/Reservas/hacerReservas'

function Routing(props) {
  const { user } = useContext(UserContext);
  const userLoggedIn = user.id !== null;
  const userIsAdmin = user.rol !== null;
  const showUserRoutes = userLoggedIn && !userIsAdmin;
  const showAuthRoutes = !userLoggedIn;
  const showAdminRoutes = userIsAdmin;

  const authProps = {
    userLoggedIn,
    userIsAdmin
  };

  const renderAuthRoutes = (authProps) => (
    <>
      <Route path='/login' element = {<IniciarSesion {...authProps} />}/>
      <Route  exact path="/recover-password" element={<Contra imagen = {RecoverPasswordImage} mensaje = "Ingrese su correo" {...authProps} />}/>
      <Route exact path="/sing-up" element={<Registrarse {...authProps} />}/>
    </>
  );

  const renderPublicRoutes = (authProps) => (
    <>
      <Route path='/' element={<Pantallaprincipal {...authProps} />}/>
      <Route path='/reserves' element={<Reservas {...authProps} />}/>
    </>
  );

  const renderUserRoutes = (authProps) => {
    return (
      <>
        <Route  exact path="/delete-account" element={<Contra imagen = {RecoverPasswordImage} mensaje = "Ingrese su correo" {...authProps} />}/>
        <Route  exact path="/graph-users" element={<Contra imagen = {RecoverPasswordImage} mensaje = "Ingrese su correo" {...authProps} />}/>
        <Route  exact path="/statistics" element={<Stats {...authProps} />}/>
      </>
    );
  };

  const renderAdminRoutes = (authProps) => (
    <>
      <Route  exact path="/reserves-history" element={<HistorialReservas {...authProps} />}/>
      <Route  exact path="/statistics" element={<Stats {...authProps} />}/>
      <Route  exact path="/hacer-reserva" element={<HacerReservas {...authProps} />}/>

    </>
  );

  return (
    <>
      <BrowserRouter>
        <Navbar {...authProps} />
        <Routes>
          {renderPublicRoutes(authProps)}
          {showUserRoutes && renderUserRoutes(authProps)}
          {showAuthRoutes && renderAuthRoutes(authProps)}
          {showAdminRoutes && renderAdminRoutes(authProps)}
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;