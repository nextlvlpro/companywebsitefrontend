import Navbar from './Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'


export default function Layout() {
    return (
        <>
        <Navbar />
        <Outlet/>
        </>
    )
}
