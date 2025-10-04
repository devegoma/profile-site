import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const loc = useLocation()
  return (
    <header className="site-header">
      <div className="container header-inner">
        <h1 className="brand"><Link to="/">My Profile</Link></h1>
        <nav>
          <ul className="nav">
            <li className={loc.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
            <li className={loc.pathname === '/releases' ? 'active' : ''}><Link to="/releases">Releases</Link></li>
            <li className={loc.pathname === '/links' ? 'active' : ''}><Link to="/links">Links</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
