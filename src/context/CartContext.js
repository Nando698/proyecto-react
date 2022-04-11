import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([])

    const calcularTotal = () => {
        
        let total = 0
        
        cartProducts.map( (cartProduct) => {
            total = cartProduct.price + total
        })
        
        return total
        
    }


// Funcion para agregar al carrito
    const addProd = (item, qty) => {
        if(cartProducts.some(el => el.id === item.id)){
            
            let index = cartProducts.findIndex(el => el.id === item.id);
            let product = cartProducts[index];
            product.qty = product.qty + qty;

            const newCart = [...cartProducts];
            newCart.splice( index, 1, product );

            setCartProducts([ ...newCart ]);

        }else{
            let product = {...item, qty};
            setCartProducts([...cartProducts, product ]);
        }
    }

    const deleteProduct = (product) => {
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== product.id))
    }

//Defino todo lo que voy a pasar
    const data = {
        cartProducts,
        addProd,
        deleteProduct,
        calcularTotal
    }

    return (

        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export { CartProvider }

export default CartContext