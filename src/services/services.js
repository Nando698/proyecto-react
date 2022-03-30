import mock from '../mock'

export const  getProducts = ()=> {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(mock) },2000)
    })
    
  }