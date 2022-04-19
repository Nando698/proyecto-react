import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './ListItem.css';
import { CircularProgress } from '@mui/material';
import {getProducts} from '../../services/services'


function ListItem() {

  const [items, setItems] = useState([])



  useEffect( ()=> {
    getProducts().then(respuesta => setItems(respuesta))
    
  },[])


    return (
      <div className="list-item">
        
        
        {
        items.length ? (
        
        items.map((prod) => {
          return (
            <div className="divItem" key={prod.id}>
              <Card product={prod} />
            </div>
          );
        }) )
        :
        <CircularProgress />
      
      
      
      }
      </div>
    );
}

export default ListItem;

