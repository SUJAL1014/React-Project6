import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Login from './Page/Login'
import Register from './Page/Register'
import Layout from './Page/Layout'
import NotFound from './Page/NotFound'

export default function App() {
  return (
    <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}></Route>
                <Route path='login' element={<Login/>}></Route>
                <Route path='register' element={<Register/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>

              </Route>
                
            </Routes>
    </BrowserRouter>
  )
}
