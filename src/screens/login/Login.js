import React, { useState, useEffect } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { loginAction } from '../../redux/actions/userActions';
import { useSelector, useDispatch } from 'react-redux';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = useSelector(state => state.login);
    const {loading, error} = login

    const dispatch = useDispatch();

    const submit = () => {
        dispatch(loginAction(email, password))
    }

    useEffect(() => {

    },[loading])

    return (
        <div>
            <div className="text-center c-font-5">
                <h1 className="c-font-5 c-text-light c-mt-2">Iniciar Sesión</h1>
            </div>
            <div className="c-mt-2">
                <div className="c-form-group text-center">
                    <div>
                        <small id="helpId" className="c-text-danger c-font-1">
                            {error && `${error}`}
                            {loading && 'Cargando...'}
                        </small> 
                        <input type="email" name="email" 
                                id="email" className="c-form-control c-font-2 c-mb-2" 
                                placeholder="Correo electronico"
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                        <input type="password" name="password" 
                                id="password" className="c-form-control c-font-2 c-mb-2" 
                                placeholder="Contraseña"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                />
                        <button type="button" className="button c-font-2" onClick={submit} >Entrar</button>
                    </div>
                </div>
                <div className="text-center c-font-2 c-mt-5">
                    <p>No tienes una cuenta?</p>
                    <Link to="/register" className="c-text-warning">Registrate</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
