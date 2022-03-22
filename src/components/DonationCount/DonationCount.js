import './DonationCount.css';
import { Button } from '@mui/material';
import React, {useState} from 'react';



export default function DonationCount({creditos, nombre}) {
    
    const [contador, setContador] = useState(0)


    const sumar = function() {
        return (
        contador == creditos ? "" : setContador(contador+1)
        )
    }

    const restar = function() {
        return (
            contador == 0 ? "" : setContador(contador-1)
            )
    }

    const donar = () => alert("Usted donó "+ contador + " creditos para "+ nombre)

        
    return (
<div className='donation'>
    
    <div>
        <Button onClick={restar}>-</Button>
        <span>{contador}</span>
        <Button onClick={sumar}>+</Button>
    </div>
    <div>
        <Button onClick={donar}>DONAR COMIDA</Button>
    </div>
</div>
    )
}