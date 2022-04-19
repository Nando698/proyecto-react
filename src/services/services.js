import {collection, getDocs} from 'firebase/firestore'
import database from './firebase'


export const  getProducts = async ()=> {

    const iCollection = collection(database, 'products')
    const productsSnap = await getDocs(iCollection)
    const productList = productsSnap.docs.map((doc) => {
      let product = doc.data()
      product.id = doc.id

      return product
    })

    return productList

    
  }