import Button from '@mui/material/Button';
import logo from '../../img/logo/liebre.png';
import './NavBar.css';
import 'animate.css';

import Carrito from '../Carrito/Carrito';

function NavBar() {
  return (
    <div className="navbar">
      <header className="main-header">
        <div className='img-logo'>
        <img src={logo} alt="Mercado Liebre" className='img-logo animate__animated animate__backInRight' />
        <p>MercadoLiebre</p>
        </div>

        
        
        <ul className='menu active'>
          
          <li><Button variant='contained'>Inicio</Button></li>
          <li><Button variant='contained'>Contacto</Button></li>
          <li><Button variant='contained'>Encontrá</Button></li>
          <li><Carrito /></li>
        </ul>
        
      </header>
    </div>

    


  );
}

export default NavBar;