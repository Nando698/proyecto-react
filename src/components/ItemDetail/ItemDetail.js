import './ItemDetail.css'
import mock from '../../mock'
import { useParams } from 'react-router-dom'; 
import React, { useState, useEffect, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Button } from '@mui/material';
import CartContext from '../../context/CartContext';


function ItemDetail({product}) {
    
    
    
    const {cartProducts, addProd} = useContext(CartContext)
    
    const [contadorItems, setContadorItems] = useState(1)
    
    const [visible, setVisible] = useState(false)
    
    const sumaDeProductos = (contadorHijo) => {
        return setContadorItems(contadorHijo)

    }
    
    const mostrar = () => {
        return (
            setVisible(true),
            setTimeout(()=> {
                setVisible(false)}, 2000)
                
            
        )}
    
    const add = (e) => {
        e.stopPropagation()
        addProd(product,contadorItems)
        mostrar()
    }

    return ( 

        <div className='itemDetail'>
            <div className="imgDetail">
                <img src={`/ropa/${product.img}`} />
            </div>
            <div className='detailColumn'>
                <h2>{product.title}</h2>
                <p>Precio: ${product.price}</p>
                <p>Talle: {product.size}</p>
                <p>Categoria: {product.category}</p>
                <ItemCount stock={10} action={sumaDeProductos} mostrar={mostrar} dataProduct={product}/>
                <div id='cartelAgregado' className={visible == true ? 'visible' : 'invisible'}>
                    {`Usted agregó ${contadorItems} items`}
                </div>
                <Button onClick={add}>Agregar</Button>
            </div>
        </div>

    );
}

export default ItemDetail;