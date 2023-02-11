import './Navbar.css'
import {Link, NavLink} from 'react-router-dom';

// 2 - Links com react Router


const Navbar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link> */}

        <NavLink 
            to="/"
            // className={({isActive}) => (isActive ? 'esta-ativo' : 'nao-esta-ativo')}        
        >   
            Home
        </NavLink>
        <NavLink to="/about">Sobre</NavLink>

    </nav>
  )
}

export default Navbar