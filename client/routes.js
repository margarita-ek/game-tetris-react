import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthPage } from './components/pages/AuthPage/AuthPage'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/tetris" element={<Tetris />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="*" element={<Tetris />} />
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