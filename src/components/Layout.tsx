import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">
        {children}
      </main>
      <Footer />
    </div>
  )
}
