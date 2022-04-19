import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import database from "../../services/firebase";

function ItemDetailContainer() {
  const { id } = useParams();

  const [product, setProduct] = useState({});


  const getProduct = async () => {
    const docRef = doc(database, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      let product = docSnap.data();
      product.id = docSnap.id;
      setProduct(product);
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <div className="item-detail-c">
      {product ? <ItemDetail product={product} /> : ""}
    </div>
  );
}

export default ItemDetailContainer;
