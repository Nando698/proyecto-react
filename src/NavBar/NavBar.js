import Button from '@mui/material/Button';
import logo from '../img/logo/perrito.png';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <header className="main-header">
        
        <img src={logo} alt="" className='img-logo' />
        
        <ul className='menu active'>
          
          <li><Button variant='contained'>Inicio</Button></li>
          <li><Button>Quienes somos</Button></li>
          <li><Button>Encontra tu mascota</Button></li>
          <li><Button>Publica mascota encontrada</Button></li>

        </ul>
        
      </header>
    </div>
  );
}

export default NavBar;