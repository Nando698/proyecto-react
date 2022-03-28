import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Carrito.css';
import { Button } from '@mui/material';


export default function Carrito() {
    return (
    <>
        <div className="PetFav">
            <ShoppingCartIcon fontSize='large' />
            <p>Carrito</p>
        </div>
        <div id="creditText">
            <p></p>
        </div>
    </>
    );
}