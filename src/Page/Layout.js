import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <header>haeder</header>
    <Outlet/>
    <footer>footer</footer>
  </>
  )
}
