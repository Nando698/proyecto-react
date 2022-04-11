import './Cart.css';
import {useState, useContext} from 'react'
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import CartContext from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';


function Cart() {

  
    const { cartProducts, deleteProduct, calcularTotal } = useContext(CartContext)

  return(

    <Container className='container-general'> 
            <div className='cart-section'>
                <div className='col-cart-table__head'>
                    <h2>Producto</h2>
                    <h2>Descripcion</h2>
                    <h2>Precio Unitario</h2>
                    <h2>Cantidad</h2>
                    <h2>Quitar</h2>
                </div>
                {cartProducts.map( (cartProduct) => {
                    const { price, img, title, size, id, qty } = cartProduct
                    return(
                        <div className='cart-table__content' key={id}>
                            <div className='cart-table__content-img'>
                                <img src={`/ropa/${img}`} />
                            </div>
                            <div className='cart-table__content-title'>
                                <p>{title}</p>
                                <span>Talle : <b>{size}</b></span>
                            </div>
                            <div className='cart-table__content-price'>
                                <p>$ {price}</p>
                            </div>
                            <div className='cart-table__content-quantity'>
                                <p>{qty}</p>
                            </div>
                            <div className='cart-table__content-price'>
                                <button className='btn-delete' onClick={() => deleteProduct(cartProduct)}>
                                    <DeleteIcon />
                                </button>
                            </div>
                        </div>
                    )
                })}
                
                <div className='cart-footer'>
                    <Button className='btn-custom'>Continuar comprando</Button>
                    <div className='cart-checkout-details'>
                        <div className='cart-checkout__subtotal'>
                            <p>Subtotal</p>
                            <span>$ {calcularTotal}</span>
                        </div>
                        <div className='cart-checkout__total'>
                            <p>Total</p>
                            <span>$ {calcularTotal}</span>
                        </div>
                        <Button className='btn-custom'>Completar Compra</Button>
                    </div>
                </div>
            </div>
        </Container>

  )
}


export default Cart;
