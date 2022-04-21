import './Card.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { Button } from '@mui/material';
import React, { useState, useContext } from 'react';


export default function Card(product) {
    
    const stock = 10
    
    const {cartProducts, addProd} = useContext(CartContext)
    
    const [contadorItems, setContadorItems] = useState(1)
    
    
    const add = (e) => {
        e.stopPropagation()
        addProd(product.product,contadorItems)
    }

    const sumaDeProductos = (contadorHijo) => {
        return setContadorItems(contadorHijo)

    }

    

    return (

        <div className='Card'>
            
            <div id="imagen">
                <Link to={`/productos/${product.product.id}`}><img src={`/ropa/${product.product.img}`} alt="" /></Link>
            </div>
            <div id="datos">
                <h2 className="cardTitle">{product.product.title}</h2>
                <p className='priceText'>Precio: ${product.product.price}</p>
                <p className='sizeText'>Talle: {product.product.size}</p>
                <ItemCount stock={10} action={sumaDeProductos}/>
                <Button onClick={add}>Agregar</Button>
            </div>   
            
            
        </div>

    )
}