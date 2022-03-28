import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './ListItem.css';



function ListItem() {
    
    const url = "https://api.mercadolibre.com/sites/MLA/search?category=MLA1430&limit=20"
    const [products, setProducts] = useState([])
    
    const getProducts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.results);
    } catch (error) {
        console.log("error en promesa");
    }
    };
    
    useEffect(() => {setTimeout(()=>{ getProducts()},2000) },[])    
    
    
    

    return (
      <div className="list-item">
        {products.map((prod) => {
          return (
            <div className="divItem" key={prod.id}>
              <Card product={prod} />
            </div>
          );
        })}
      </div>
    );
}

export default ListItem;

