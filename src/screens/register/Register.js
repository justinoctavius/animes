import React, { useState, useEffect } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerAction } from '../../redux/actions/userActions'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPassword_confirmation] = useState('')
    const register = useSelector(state => state.register);
    const {loading, error, payload} = register
    console.log(payload)
    const dispatch = useDispatch();

    const submit = () => {
        dispatch(registerAction(name, 
                                email, 
                                password, 
                                password_confirmation
                ));
    }

    useEffect(() => {
    },[loading])

    return (
        <div>
            <div className="text-center c-font-5">
                <h1 className="c-font-5 c-text-light c-mt-2">Registrarse</h1>
            </div>
            <div className="c-mt-2">
                <div className="text-center">
                    <small id="helpId" className="c-text-danger c-font-1">
                        {error && `${error.split(':')[2] || error}`}
                        {loading && 'Cargando...'}
                    </small> 
                    <small id="helpId" className="c-text-success c-font-1">
                        {payload && `${payload}`}
                    </small> 
                </div>
                <div className="c-form-group text-center">
                    <div>
                        <input type="text" name="username" 
                                id="username" className="c-form-control c-font-2 c-mb-2" 
                                placeholder="Username"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                />
                        <input type="email" name="email" 
                                id="email" className="c-form-control c-font-2 c-mb-2" 
                                placeholder="Correo electronico"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                />
                        <input type="password" name="password" 
                                id="password" className="c-form-control c-font-2 c-mb-2" 
                                placeholder="Contraseña"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                />
                        <input type="password" name="rePassword" 
                                id="rePassword" className="c-form-control c-font-2 c-mb-2" 
                                placeholder="Confirmar contraseña"
                                value={password_confirmation}
                                onChange={e => setPassword_confirmation(e.target.value)}
                                />
                        <button type="button" className="button c-font-2" onClick={submit} >Guardar</button>
                    </div>
                </div>
                <div className="text-center c-font-2 c-mt-5">
                    <p>Ya tienes una cuenta?</p>
                    <Link to="/login" className="c-text-warning">Inicia Sesión</Link>
                </div>
            </div>
        </div>
    )
}

export default Register
