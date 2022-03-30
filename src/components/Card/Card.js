import './Card.css';
import ItemCount from '../ItemCount/ItemCount';



export default function Card(product) {
    
    const stock = 10
    return (

        <div className='Card'>
            
            <div id="imagen">
                <img src={`./ropa/${product.product.img}`} alt="" />
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