import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([])

/*     const addProd = (prod) => {
        let exist = cartProducts.find(cartProduct => cartProduct.id === prod.id)
        !exist && setCartProducts(cartProducts => [...cartProducts, prod])
    }
 */

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


    const data = {
        cartProducts,
        addProd,
        deleteProduct
    }

    return (

        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}

export { CartProvider }

export default CartContext