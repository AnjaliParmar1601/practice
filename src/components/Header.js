import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Header() {
  return (
    <header>
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
          
            <li>
                <NavLink to="/error">Error</NavLink>
            </li>

            
            
        </ul>
    </nav>
</header>
  )
}
