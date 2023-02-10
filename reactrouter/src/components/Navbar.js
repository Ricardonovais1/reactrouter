import './Navbar.css'
import {Link} from 'react-router-dom';

// 2 - Links com react Router


const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
    </nav>
  )
}

export default Navbar