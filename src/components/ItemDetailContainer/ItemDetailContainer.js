import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useState, useEffect } from 'react';
import {getProducts} from '../../services/services';
import mock from '../../mock'

function ItemDetailContainer({iden}) {
  
  const [item, setItem] = useState([])

  const indice = (array, id) => {
    return (
    array.findIndex(prenda => prenda.id == id)
    )}


  useEffect(() => {
    
    getProducts().then((resu) => setItem(resu[indice(resu,iden)]))  
  }, [])

  
  
  console.log(item, 'desde item')
  
  
  
  return(

    <div className="item-detail-c"> 
    <ItemDetail product={item}/>
    </div>
  
  )}

export default ItemDetailContainer;
