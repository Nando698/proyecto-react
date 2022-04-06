import './ItemDetail.css'
import mock from '../../mock'
import { useParams } from 'react-router-dom'; 
import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ItemDetail() {
    
    const {id, category} = useParams()
    
    const [product, setProduct] = useState({})
    const [contadorItems, setContadorItems] = useState(0)
    const [visible, setVisible] = useState(false)
    const productFilter = () => {
        return mock.map( (elemento) => {
            if(elemento.id == id) {

                return setProduct(elemento)
            }})}
    
        useEffect(() => {
            productFilter()
        },[])

    const sumaDeProductos = (contadorHijo) => {
            return setContadorItems(contadorHijo)
    }
    
    const mostrar = () => {
        return (
            setVisible(true),
            setTimeout(()=> {
                setVisible(false)}, 2000)
            
        )}


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
                <ItemCount stock={10} action={sumaDeProductos} mostrar={mostrar} />
                <div className={visible == true ? 'visible' : 'invisible'}>
                    {`Usted agregó ${contadorItems} items`}
                </div>
                
                <Link to={'/carrito'}><Button>Finalizar compra</Button></Link>
            </div>
        </div>

    );
}

export default ItemDetail;