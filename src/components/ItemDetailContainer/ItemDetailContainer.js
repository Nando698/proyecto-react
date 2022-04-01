import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useState, useEffect } from 'react';
import {getProducts} from '../../services/services';



function ItemDetailContainer() {
  

 /*  const [item, setItem] = useState([])

  const indice = (array, id) => {
    return (
    array.findIndex(prenda => prenda.id == id)
    )}


  useEffect(() => {
    
    getProducts().then((resu) => setItem(resu[indice(resu,iden)]))  
  }, [])

  
  
  console.log(item, 'desde item') */
  
  
  
  return(

    <div className="item-detail-c"> 
    <ItemDetail/>
    </div>
  
  )}

export default ItemDetailContainer;
