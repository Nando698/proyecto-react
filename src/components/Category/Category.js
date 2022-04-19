import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Category.css';
import { CircularProgress } from '@mui/material';
import mock from '../../mock'
import { getProducts } from "../../services/services";
import { useParams } from 'react-router-dom'; 


function Category() {

    const {category} = useParams()
    const [products, setProducts] = useState([])
    const [items, setItems] = useState([])

    async function filteredProducts () {
      const items = await getProducts()
      const filtered = items.filter((item)=> {
        return item.category == category})
      setProducts(filtered)
      console.log('items',items)
    }
    
    

    useEffect(() => {
      filteredProducts()
    },[category])


    

    return (
      
      <div className="list-item">
        
        
        {
        
        products.length ? (
        
        products?.map((prod) => {
          return (
            <div className="divItem" key={prod.id}>
              <Card product={prod} />
            </div>
          );
        }) )
        :
        <CircularProgress sx={{marginTop: "10vw"}}/>
      
      
      
      }
      </div>
    );
}

export default Category;