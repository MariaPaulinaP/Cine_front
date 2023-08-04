import React, { useEffect, useState } from 'react'
import { dataAdmi } from './dataAdmi'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { saveSession } from '../../service/sessionService/sessionService'
import { useContext } from 'react'
import { AppContext } from '../../router/router'

function LoginAdmi() {

const [admim, setAdmim] = useState(false)
const arrayAdmi = dataAdmi
const {register, handleSubmit, formState:{ errors } } = useForm()

const navigate = useNavigate()

const {user: {userDispatch}} = useContext(AppContext)

const onSubmit = (data) => {

    const validarUsuario = (data.email === "mariapaulinap0531@gmail.com" && data.password === "maria123") || (data.email === "sebas123@gmail.com" && data.password === "sebas123") 

    if(validarUsuario){
        userDispatch({
            type: "login",
            payload: {
                isAutenticated: true,
                user: validarUsuario
            }
        })
        saveSession(validarUsuario)
        setAdmim(true)
        navigate('/administrador')

       }
    else{
        console.log('no eres administrador')
    }   
}


  return (
    <main className='d-flex justify-content-center align-items-center vw-100 vh-100'>
        <form className='card p-5 bg-info-subtle'onSubmit={handleSubmit(onSubmit)}
        >
        <div className="mb-3">
            <label  className="form-label"><span >Email</span>
            <input  name='email' type="email" className="form-control mt-2"  placeholder="Escriba su correo"
    
            {...register("email",{required:true})}
            />
            </label>
        </div>
        <div className="mb-3">
            <label  className="form-label"><span >Contraseña</span>
            <input name='password' type="password" className="form-control mt-2"  placeholder="Escriba su contraseña"
            {...register("password",{required: true} )}
            />
            </label>
        </div>
        <button type="submit" className='btn btn-success'>Ingresar</button>
        </form>
    </main>
  )
}

export default LoginAdmi