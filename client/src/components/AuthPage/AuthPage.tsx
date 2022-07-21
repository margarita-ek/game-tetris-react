import React, { useContext, useEffect, useRef, useState } from 'react';

import { AuthContext } from '../../context/AuthContext';
import { useHttp } from '../../hooks/http.hook';

import { Loader } from '../Loader/Loader';

type Message = null | string

export const AuthPage: React.FC = () => { 
    const auth = useContext(AuthContext)

    const { loading, error, request, clearError } = useHttp()

    const messRef = useRef<any>()
    
    const [authNav, setAuthNav] = useState(false)
    const [message, setMessage] = useState<Message>('')
    const [status, setStatus] = useState<any>()
    const [data, setData] = useState<any>()
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })

    useEffect(() => { 
        setMessage(error)
    }, [error])

    useEffect(() => { 
        setTimeout(clearMessage, 3000)
    }, [message])

    useEffect(() => {
        if (data !== undefined) { 
            setStatus(data.status)
        }
    }, [data])

    const clearMessage = () => { 
        if (message) { 
            setMessage('')
            clearError()
        }
        if (messRef.current !== null && messRef.current.classList.contains('success')) {
            messRef.current.classList.remove('success')
        }
        setStatus('')
        return
    }

    const changeHandler = (event: any) => { 
        setForm({ ...form, [event.target.name] : event.target.value })
    }    

    const registerHandler = async () => { 
        try {
            const data = await request('/api/auth/registration', 'POST', { ...form })
            if (data.hasOwnProperty('status')) { 
                setData(data)
            }     
            setMessage(data.message)
        } catch (error) { }
    }

    const loginHandler = async () => { 
        try {
            const data = await request('/api/auth/login', 'POST', { ...form })
            auth.login(data.token, data.userId, data.userEmail, data.userName)
            setData(data)
            setMessage(data.message)
        } catch (error) { }
    }

    return (
        <div className='container-auth'> 
            <div className='auth'>
                {loading ? <Loader/> : null}
                <div className='auth__content'>
                    <div className='auth__nav'>
                        <span className={ `auth__nav-in ${authNav ? '': ' navActive'}`} onClick={() => setAuthNav(false)} title='sign in'>Sign In</span>
                        <span className={`auth__nav-up ${authNav ? ' navActive': ''}`} onClick={() => setAuthNav(true)} title='sign up'>Sign Up</span>
                    </div>
                    <div className='auth__card'>
                        <span className={`auth__message${status ? ' success' : ''}`} ref={messRef}>{message}</span>
                        {authNav ? <>
                            <div className='auth__name'>
                                <input
                                    className='auth__name-input'
                                    title='name'
                                    disabled={loading}
                                    placeholder='Name'
                                    id='username'
                                    type='text'
                                    name='username'
                                    value={form.username}
                                    onChange={changeHandler}                                 
                                />
                                <label htmlFor='username'>Name</label>
                            </div>

                            <div className='auth__email'>
                                <input
                                    className='auth__email-input'
                                    title='e-mail'
                                    disabled={loading}
                                    placeholder='E-mail'
                                    id='email'
                                    type='text'
                                    name='email'
                                    value={form.email}
                                    onChange={changeHandler}                                 
                                />
                                <label htmlFor='email'>E-mail</label>
                            </div>

                            <div className='auth__password'>
                                <input
                                    className='auth__password-input'
                                    title='password'
                                    disabled={loading}
                                    placeholder='Password'
                                    id='password'
                                    type='password'
                                    name='password'
                                    value={form.password}
                                    onChange={changeHandler}                                
                                />
                                <label htmlFor='password'>Password</label>
                            </div>
                            <button
                                className='auth__reg'
                                title='register'
                                onClick={registerHandler}
                                disabled={loading}
                            >
                                Register
                            </button>
                        </> : <>
                            <div className='auth__email'>
                                <input
                                    className='auth__email-input'
                                    title='e-mail'
                                    disabled={loading}
                                    placeholder='E-mail'
                                    id='email'
                                    type='text'
                                    name='email'
                                    value={form.email}
                                    onChange={changeHandler}                                         
                                />
                                <label htmlFor='email'>E-mail</label>
                            </div>

                            <div className='auth__password'>
                                <input
                                    className='auth__password-input'
                                    title='password'
                                    disabled={loading}
                                    placeholder='Password'
                                    id='password'
                                    type='password'
                                    name='password'
                                    value={form.password}
                                    onChange={changeHandler}
                                />
                                <label htmlFor='password'>Password</label>
                            </div>
                            <button
                                className='auth__enter'
                                title='log in'
                                style={{ marginRight: 10 }}
                                disabled={loading}
                                onClick={loginHandler}
                            >
                                Log In
                            </button>
                        </>}
                    </div>             
                </div>
            </div>
        </div>
    )
}