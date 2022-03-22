import Button from '@mui/material/Button';
import logo from '../../img/logo/perrito.png';
import './NavBar.css';
import 'animate.css';

import PetFav from '../PetFav/PetFav';

function NavBar() {
  return (
    <div className="navbar">
      <header className="main-header">
        
        <img src={logo} alt="" className='img-logo animate__animated animate__backInRight' />
        

        
        
        <ul className='menu active'>
          
          <li><Button variant='contained'>Inicio</Button></li>
          <li><Button variant='contained'>Quienes somos</Button></li>
          <li><Button variant='contained'>Encontrá</Button></li>
          <li><Button variant='contained'>Publicá</Button></li>
          <li><PetFav /></li>
        </ul>
        
      </header>
    </div>

    


  );
}

export default NavBar;