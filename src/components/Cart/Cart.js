import "./Cart.css";
import { useState, useContext } from "react";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import CartContext from "../../context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import database from '../../services/firebase'
import { addDoc, collection } from 'firebase/firestore';

function Cart() {
  const { cartProducts, deleteProduct, calcularTotal } =
    useContext(CartContext);

    const [openM, setOpenM] = useState(false)
    
    const [successOrder, setSuccessOrder] = useState()
    
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        mail: "",
              })

    const [order, setOrder] = useState({
    buyer: formData,
    items: cartProducts,
    total: calcularTotal(),
  });
  
 
  const handleChange = (e) => {
      setFormData(
          { 
              ...formData,
              [e.target.name] : [e.target.value]
            
          }
      )

  }

  const pushOrder = async (prevOrder) => {
    const orderFirebase = collection(database, 'Orders')
    const orderDoc = await addDoc(orderFirebase, prevOrder)
    setSuccessOrder(orderDoc.id)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    let prevOrder = {...order,
        buyer: formData
    }
    setOrder({...order,
        buyer: formData})
    pushOrder(prevOrder)
}
  
  
  return (
    <Container className="container-general">
      <div className="cart-section">
        {cartProducts.length !== 0 ? (
          <div className="col-cart-tabla__cabecera">
            <h2>Producto</h2>
            <h2>Descripcion</h2>
            <h2>Precio Unitario</h2>
            <h2>Cantidad</h2>
            <h2>Sub Total</h2>
            <h2>Quitar</h2>
          </div>
        ) : (
          <p>No hay ningun producto en tu carrito</p>
        )}
        {cartProducts.map((cartProduct) => {
          const { price, img, title, size, id, qty } = cartProduct;

          return (
            <div className="cart-tabla" key={id}>
              <div className="cart-tabla-img">
                <img src={`/ropa/${img}`} />
              </div>
              <div className="cart-tabla-titulo">
                <p>{title}</p>
                <span>
                  Talle : <b>{size}</b>
                </span>
              </div>
              <div className="cart-tabla-price">
                <span>${price}</span>
              </div>
              <div className="cart-tabla-quantity">
                <p>{qty}</p>
              </div>
              <div className="cart-tabla-stotal">
                <p>${price * qty}</p>
              </div>
              <div className="cart-tabla-price">
                <button
                  className="btn-delete"
                  onClick={() => deleteProduct(cartProduct)}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          );
        })}

        <div className="cart-footer">
          <Link to={"/"}>
            <Button className="btn-custom">Continuar comprando</Button>
          </Link>
          <div className="cart-checkout-details">
            <div className="cart-checkout__subtotal">
              <p>Subtotal</p>
              <span>$ {calcularTotal()}</span>
            </div>
            <div className="cart-checkout__total">
              <p>Total</p>
              <span>$ {calcularTotal()}</span>
            </div>
            <Button sx={{ color: "white", backgroundColor: "black" }} onClick={()=> setOpenM(true)}>
              Completar Compra
            </Button>
          </div>
        </div>
      </div>

        <Modal handleClose={() => setOpenM(false)} open={openM}>

        {successOrder ? (
                    <div>
                        <h3>Orden generada correctamente</h3>
                        <p>Su numero de orden es: {successOrder}</p>
                    </div>
                ) : (
                  <form onSubmit={handleSubmit}>
              <h2>Complete sus datos</h2>
            <input required type='text' name='name' placeholder="Nombre" onChange={handleChange} value={formData.name} />
            <input required type='number' name='phone' placeholder="Telefono" onChange={handleChange} value={formData.phone}/>
            <input required type='mail' name='mail' placeholder="Correo electronico" onChange={handleChange} value={formData.mail}/>
            <Button type='submit'>Comprar</Button>
            
            </form>
                )}
        </Modal>


    </Container>
  );
}

export default Cart;
