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
 
// const getProducts = new Promise ((resolve, reject) => {
//    setTimeout(() => {
//     resolve(arreglo)
//    }, 2000)
    
//   })

const getProducts = fetch('https://fakestoreapi.com/products') 



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
  
  return (
    <div>
      {greeting}
      <ItemCount />
      <ItemList productos={products}/>


</div>
  )
}

export default ItemListContainer
