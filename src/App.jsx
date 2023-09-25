import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';
import './App.css'

function App() {
  
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
