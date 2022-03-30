import './ItemCount.css';
import { Button } from '@mui/material';
import React, {useState} from 'react';



export default function ItemCount({stock}) {
   
    const [contador, setContador] = useState(0)


    const sumar = function() {
        return (
        contador == stock ? "" : setContador(contador+1)
        )
    }

    const restar = function() {
        return (
            contador == 0 ? "" : setContador(contador-1)
            )
    }

    const comprar = () => {
        
        return (
            contador < 1 ? alert("Debe seleccionar al menos un producto") :   
                        alert("Usted agrego "+ contador + " productos al carrito ")
        )}
        
    return (
<div className='itemCount'>
    
    <div>
        <Button onClick={restar} disabled={contador == 0 ? true : null}>-</Button>
        <span>{contador}</span>
        <Button onClick={sumar} disabled={contador == stock ? true : null}>+</Button>
    </div>
    <div>
        <Button onClick={comprar}>AGREGAR AL CARRITO</Button>
    </div>
    <div>stock:{stock - contador}</div>
</div>
    )
}