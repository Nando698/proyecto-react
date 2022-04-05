import './Card.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


export default function Card(product) {
    
    const stock = 10
    return (

        <div className='Card'>
            
            <div id="imagen">
                <Link to={`/productos/${product.product.id}`}><img src={`/ropa/${product.product.img}`} alt="" /></Link>
            </div>
            <div id="datos">
                <h2 className="cardTitle">{product.product.title}</h2>
                <p className='priceText'>Precio: ${product.product.price}</p>
                <p className='sizeText'>Talle: {product.product.size}</p>
            </div>   
            <ItemCount stock={stock} />
            
        </div>

    )
}