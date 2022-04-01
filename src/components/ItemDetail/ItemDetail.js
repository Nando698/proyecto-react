import './ItemDetail.css'
import mock from '../../mock'
import { useParams } from 'react-router-dom'; 
import React, { useState, useEffect } from 'react';


function ItemDetail() {
    
    const {id, category} = useParams()
    
    const [product, setProduct] = useState({})
    
    const productFilter = () => {
        return mock.map( (elemento) => {
            if(elemento.id == id) {

                return setProduct(elemento)
            }})}
    
        useEffect(() => {
            productFilter()
        },[])
    
    
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
            </div>
        </div>

     );
}

export default ItemDetail;