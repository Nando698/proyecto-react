import './ItemCount.css';
import { Button } from '@mui/material';
import React, {useState} from 'react';



export default function ItemCount({stock, action, mostrar}) {
   
    const [contador, setContador] = useState(0)


    const sumar = () => {
        return (
        contador == stock ? "" : setContador(contador+1),
        action(contador+1)
        )
    }

    const restar = () => {
        return (
            contador == 0 ? "" : setContador(contador-1),
            action(contador-1)
            
            )
    }

    const handleClick = () => {
        mostrar()
        setContador(0)
    }

    
        
    return (
<div className='itemCount'>
    
    <div>
        <Button onClick={restar} disabled={contador == 0 ? true : null}>-</Button>
        <span>{contador}</span>
        <Button onClick={sumar} disabled={contador == stock ? true : null}>+</Button>
    </div>
    <div>
        <Button onClick={handleClick}>AGREGAR AL CARRITO</Button>
    </div>
</div>
    )
}