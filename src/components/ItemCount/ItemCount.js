import './ItemCount.css';
import { Button } from '@mui/material';
import React, {useState, useContext} from 'react';


export default function ItemCount({stock, action}) {
   
    const [contador, setContador] = useState(1)


    const sumar = () => {
        return (
        contador == stock ? "" : setContador(contador+1),
        action(contador+1)
        )
    }

    const restar = () => {
        return (
            contador == 1 ? "" : setContador(contador-1),
            action(contador-1)
            
            )
    }

 

    
        
    return (
<div className='itemCount'>
    
    <div>
        <Button onClick={restar} disabled={contador == 1 ? true : null}>-</Button>
        <span>{contador}</span>
        <Button onClick={sumar} disabled={contador == stock ? true : null}>+</Button>
    </div>
    <div>
    </div>
</div>
    )
}