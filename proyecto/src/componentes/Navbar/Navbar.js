import { Link } from 'react-router-dom';
import './navbar.css'

export default function Navbar () {

    return (
        <div className='containerr'>
            <nav>
                <div className='contenedor-links'>

                    <Link to='/'>
                        <span>inicio</span>
                    </Link>
                    <Link to='/cardrandom'>
                        <span>Personaje random</span>
                    </Link>
                    
                </div>
            </nav>
        </div>
    )
}