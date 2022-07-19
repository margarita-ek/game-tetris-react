import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthPage } from './components/AuthPage/AuthPage'

import Tetris from './components/Tetris/Tetris'
import UserPage from './components/UserPage/UserPage'


export const useAppRoutes = (isAuthenticated) => {
    console.log("isAuthenticated", isAuthenticated)
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/tetris" element={<Tetris />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="*" element={<UserPage />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="*" element={<AuthPage />} />
        </Routes>
    )
}