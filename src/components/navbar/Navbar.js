import React, { Fragment } from 'react'
import {NavLink} from 'react-router-dom'
import cookie from 'js-cookie'
import './navbar.css'
import { useSelector } from 'react-redux'

function Navbar() {

    const login = useSelector(state => state.login);
    const {userInfo} = login;
    console.log(userInfo)

    const logout = () => {
        cookie.remove('userInfo');
        cookie.remove('cartItems');
        window.location.reload()
    }

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light c-bg-dark p-2">
                <div className="d-flex justify-content-between w-100 p-3 border-bottom">
                    <div>
                        <NavLink activeClassName="c-text-warning" 
                                to="/" className="c-text-muted c-font-2 p-2 m-2 text-decoration-none" 
                                href="anime español">AnimeEspañol</NavLink>
                    </div>
                    <div>
                        {userInfo ? <Fragment>
                                    <NavLink to={userInfo.isAdmin ? '/panel' : ''}>
                                        <i className={
                                            userInfo.isAdmin ? 
                                                "fa fa-user-cog" 
                                                : "fa fa-user"
                                            }>
                                        </i> 
                                        {userInfo.name}
                                    </NavLink>
                                    <a 
                                        href='' 
                                        style={{cursor:'pointer'}} 
                                        onClick={logout}>
                                        <i className="fas fa-sign-out-alt"></i>
                                        Logout
                                    </a>
                                    </Fragment>
                                  : <NavLink 
                                        activeClassName="c-text-warning" 
                                        to="/login" 
                                        className="c-text-muted c-font-2 text-decoration-none" 
                                        href="Iniciar sesion">
                                        Login
                                    </NavLink>

                        }                        
                        <button className="navbar-toggler ml-4" 
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" 
                                aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink activeClassName="c-text-warning" 
                                to="/categorias" 
                                className="d-block c-font-2 text-center border-bottom c-text-muted p-2 text-decoration-none"
                                 href="Categorias">Categorias</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="c-text-warning" exact
                                to="/tendencias" className="d-block c-font-2 text-center border-bottom c-text-muted p-2 text-decoration-none" 
                                href="Tendencias">Tendencias</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="c-text-warning" 
                                to="/recientes" className="d-block c-font-2 text-center border-bottom c-text-muted p-2 text-decoration-none" 
                                href="Recientes">Recientes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="c-text-warning" 
                                to="/favoritos" className="d-block c-font-2 text-center border-bottom c-text-muted p-2 text-decoration-none" 
                                href="Favoritos">Favoritos</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
