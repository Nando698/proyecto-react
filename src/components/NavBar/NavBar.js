//Componentes y dependencias
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import BotonCarrito from '../BotonCarrito/BotonCarrito';

//Elementos
import logo from '../../img/logo/liebre.png';

//Estilos
import './NavBar.css';
import 'animate.css';


function NavBar() {
  return (
    <div className="navbar">
      <header className="main-header">
        <div className='img-logo'>
        <Link to={'/'}><img src={logo} alt="Mercado Liebre" className='img-logo animate__animated animate__backInRight' /></Link>
        <p>MercadoLiebre</p>
        </div>

        
        
        <ul className='menu active'>
          
          <li><Link to={'/'}><Button variant='contained'>Inicio</Button></Link></li>
          <li><Link to={'/contacto'}><Button variant='contained'>Contacto</Button></Link></li>
          <li><Link to={'/categorias/hombre'}><Button variant='contained'>Hombre</Button></Link></li>
          <li><Link to={'/categorias/mujer'}><Button variant='contained'>Mujer</Button></Link></li>
          <li><BotonCarrito /></li>
        </ul>
        
      </header>
    </div>

    


  );
}

export default NavBar;