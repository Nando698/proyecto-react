import './Card.css';
import ItemCount from '../ItemCount/ItemCount';


export default function Card(product) {
    console.log(product)

    let stock = 10
    return (

        <div className='Card'>
            
            <div id="imagen">
                <img src={product.product.thumbnail} alt=""></img>
            </div>
            <div id="datos">
                <h2 className="cardTitle">{product.product.title}</h2>
                <p className='priceText'>Precio: ${product.product.price}</p>
                {<p className='cityText'>Zona: {product.product.address.city_name}</p>}
            </div>   
            <ItemCount stock={stock} />
            
        </div>

    )
}