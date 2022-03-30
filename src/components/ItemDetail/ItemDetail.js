import './ItemDetail.css'


function ItemDetail(product) {
    return ( 

        <div className='itemDetail'>
            <div className="imgDetail">
                <img src={`./ropa/${product.product.img}`} />
            </div>
            <div className='detailColumn'>
                <h2>{product.product.title}</h2>
                <p>Precio: ${product.product.price}</p>
                <p>Talle: {product.product.size}</p>
                <p>Categoria: {product.product.category}</p>
            </div>
        </div>

     );
}

export default ItemDetail;