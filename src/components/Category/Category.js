import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Category.css';
import { CircularProgress } from '@mui/material';
import mock from '../../mock'
import { useParams } from 'react-router-dom'; 


function Category() {

    const {category} = useParams()
    const [products, setProducts] = useState([])


    useEffect(()=> {
        setProducts(mock.filter((item)=> {
            return item.category == category
        }))
    },[category])

   
   
    return (
      <div className="list-item">
        
        
        {
        
        products.length ? (
        
        products.map((prod) => {
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

export default Category;