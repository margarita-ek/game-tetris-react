import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';


export const Header: React.FC = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const authPage = () => { navigate('/') }  
    
    const logoutHandler = (event: any) => { 
        event.preventDefault()
        auth.logout()
        authPage()
    }

    return (
        <>
            <header className='header'>
                <div className='header__container'>
                    <Link className='header__link-tetris' to='/tetris' title='tetris'>Tetris</Link>         
                    <Link className='header__link-user' to='/user' title='user'>{auth.userName}</Link>                               
                    <span className='header__link-logout' onClick={logoutHandler} title='log out' />                    
                </div>
            </header>
        </>
    )
}