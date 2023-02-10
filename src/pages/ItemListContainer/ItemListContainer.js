import ItemCount from '../../components/ItemCount/ItemCount'
import { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList/ItemList'
 const arreglo = [
 {name:'producto 1', id: 'sj321' },
 {name:'producto 2', id: 'sj322' },
 {name:'producto 3', id: 'sj323' },
 {name:'producto 4', id: 'sj324' },
 {name:'producto 5', id: 'sj325' },
 {name:'producto 6', id: 'sj326' },
  
 ] 
const ItemListContainer = ({greeting}) => {
  const [ products, setProducts] = useState([])
  const [singleProduct, setSingleProduct] = useState ({});
  const [productoCreado, setProductoCreado] = useState({})
  const idProducto = '8'

const getProducts = fetch('https://fakestoreapi.com/products',{
  method: 'GET',
  headers:{'content-type':'json'}, 
}) ;
const getProduct = fetch(`https://fakestoreapi.com/products/${idProducto}`, {
  method: 'GET',
})

const addProduct = fetch('https://fakestoreapi.com/products', {
  method: 'POST',
  body: JSON.stringify(
    {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }
)
})



 useEffect (() =>{
    getProducts
    .then((res) => {
     return res.json()
    })
     .then((response) => {
      setProducts(response)
     })
    .catch(error => console.log(error))
  }, [])


  useEffect ( () => {
getProduct
.then((resp) => {
  return resp.json()
})
.then ((data) => {
  setSingleProduct (data)
  // console.log(data)
})
.catch((error) => {console.log(error)})
  }, [])
  
  
  return (
    <div>
      {greeting}
      <ItemCount />
      <ItemList productos={products}/>
      <h1>
        Este es un producto especifico
      </h1>
      
{/* 
      <div width="200" className='product'>
      <img alt={singleProduct.title} src={singleProduct.image} width="200"/>
     <h2> {singleProduct.title}</h2>
     <h3>{singleProduct.category}</h3>
     <h3>{singleProduct.description}</h3>

    </div> */}
      


</div>
  )
}

export default ItemListContainer
