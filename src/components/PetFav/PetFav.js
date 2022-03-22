import PetsIcon from '@mui/icons-material/Pets';
import './PetFav.css';
import { Button } from '@mui/material';


export default function PetFav() {
    return (
    <>
        <div className="PetFav">
            <PetsIcon fontSize='large' />
            <p>DONAR COMIDA</p>
        </div>
        <div id="creditText">
            <p>Creditos: 10</p>
        </div>
    </>
    );
}