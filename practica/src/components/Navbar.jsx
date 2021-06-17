import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary border-bottom border-dark ">
                <div class="navbar-brand">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/componenteclase">Componente Clase</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/componentefuncional">Componente Funcional</Link>   
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
        
    )
}

export default Nav