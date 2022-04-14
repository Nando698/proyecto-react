import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useState, useEffect } from "react";
import mock from "../../mock";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { id, category } = useParams();

  const [product, setProduct] = useState({});

  /* const productFilter = () => {
    return mock.filter((elemento) => {
      if (elemento.id == id) {

        return setProduct(elemento)
      }
    })
  } */

  function getProduct(id, products) {
    const product = products.find((product) => product.id == id);
    return product;
  }

  useEffect(() => {
    const productoEncontrado = getProduct(id, mock);
    setProduct(productoEncontrado);
  }, []);

  return (
    <div className="item-detail-c">
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;
